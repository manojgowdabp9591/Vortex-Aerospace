"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Float, Stars, Sparkles, Center } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function RocketModel() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Animate the engine glow
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
        // Subtle extra roll
        groupRef.current.rotation.z = Math.sin(t * 0.5) * 0.05;
    }
  });

  // MATERIALS
  const materialBody = new THREE.MeshStandardMaterial({
    color: "#ffffff",
    roughness: 0.3,
    metalness: 0.8,
  });

  const materialDark = new THREE.MeshStandardMaterial({
    color: "#1a1a1a",
    roughness: 0.7,
    metalness: 0.5,
  });

  const materialEngine = new THREE.MeshStandardMaterial({
    color: "#000000",
    emissive: "#22d3ee",
    emissiveIntensity: 3,
    toneMapped: false,
  });

  return (
    <group ref={groupRef} rotation={[0, 0, 0]}>
      
      {/* --- STAGE 1: BOOSTER --- */}
      {/* Main Body (Height 4, Top edge at +2.0) */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow material={materialBody}>
        <cylinderGeometry args={[0.6, 0.7, 4, 32]} />
      </mesh>

      {/* Grid Fin / Interstage Section (Black) */}
      <mesh position={[0, 2.1, 0]} castShadow receiveShadow material={materialDark}>
        <cylinderGeometry args={[0.58, 0.6, 0.4, 32]} />
      </mesh>

      {/* Engine Mount (Black) */}
      <mesh position={[0, -2.1, 0]} castShadow receiveShadow material={materialDark}>
        <cylinderGeometry args={[0.65, 0.5, 0.5, 32]} />
      </mesh>

      {/* --- STAGE 2: UPPER STAGE --- */}
      {/* Height 1.8. Sits on interstage. Center at 3.2. Top edge at 3.2 + 0.9 = 4.1 */}
      <mesh position={[0, 3.2, 0]} castShadow receiveShadow material={materialBody}>
        <cylinderGeometry args={[0.58, 0.58, 1.8, 32]} />
      </mesh>

      {/* Nose Cone (Height 1.5. Base at 4.1. Center at 4.85) */}
      <mesh position={[0, 4.85, 0]} castShadow receiveShadow material={materialBody}>
        <coneGeometry args={[0.58, 1.5, 32]} />
      </mesh>
      
      {/* Nose Tip Cap (Top of cone is 4.85 + 0.75 = 5.6) */}
      <mesh position={[0, 5.6, 0]} material={materialDark}>
         <sphereGeometry args={[0.05, 16, 16]} />
      </mesh>

      {/* --- AERODYNAMIC FINS --- */}
      {[0, 1, 2, 3].map((i) => (
        <group key={i} rotation={[0, (Math.PI / 2) * i, 0]}>
            <mesh position={[0.7, -1.8, 0]} rotation={[0, 0, -0.2]} castShadow receiveShadow material={materialDark}>
                <boxGeometry args={[0.8, 1.2, 0.05]} />
            </mesh>
        </group>
      ))}

      {/* --- ENGINES (9x Cluster Simulation) --- */}
      <group position={[0, -2.4, 0]}>
         {/* Center Engine */}
         <mesh material={materialEngine}>
            <cylinderGeometry args={[0.15, 0.1, 0.5, 16]} />
         </mesh>
         
         {/* Outer Ring Engines */}
         {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
             <mesh key={i} position={[Math.cos(i * Math.PI / 4) * 0.35, 0, Math.sin(i * Math.PI / 4) * 0.35]} material={materialEngine}>
                <cylinderGeometry args={[0.08, 0.05, 0.4, 16]} />
             </mesh>
         ))}

         {/* ENGINE GLOW LIGHT */}
         <pointLight color="#22d3ee" intensity={20} distance={5} decay={2} position={[0, -0.5, 0]} />
      </group>

    </group>
  );
}

export default function Rocket3D() {
  return (
    <div className="h-full w-full bg-transparent">
      <Canvas dpr={[1, 2]} shadows>
        <PerspectiveCamera makeDefault position={[7, 3, 11]} fov={45} />
        
        <ambientLight intensity={0.2} />
        <spotLight 
            position={[5, 5, 5]} 
            angle={0.5} 
            penumbra={1} 
            intensity={20} 
            color="#ffffff" 
            castShadow 
        />
        <pointLight position={[-5, -5, -5]} intensity={10} color="#3b82f6" />
        <spotLight position={[-5, 5, 0]} intensity={30} color="#22d3ee" angle={0.5} />

        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        <Sparkles count={50} scale={6} size={2} speed={0.4} opacity={0.5} color="#22d3ee" />

        <Float 
            speed={2} 
            rotationIntensity={0.5} 
            floatIntensity={0.5} 
        >
            <Center>
                <RocketModel />
            </Center>
        </Float>

        <OrbitControls 
            enableZoom={true} 
            enablePan={false}
            autoRotate 
            autoRotateSpeed={0.8}
            minPolarAngle={Math.PI / 3.5}
            maxPolarAngle={Math.PI / 1.5}
            minDistance={8} 
            maxDistance={16} 
        />
      </Canvas>
    </div>
  );
}
