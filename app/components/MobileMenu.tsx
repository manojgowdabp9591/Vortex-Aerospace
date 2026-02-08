"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, useTexture } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

function Earth({ isMobile }: { isMobile: boolean }) {
  const earthRef = useRef<THREE.Mesh>(null!);
  const cloudsRef = useRef<THREE.Mesh>(null!);

  // Load textures (ensure these exist in your public folder)
  const [colorMap, specularMap, cloudsMap] = useTexture([
    "/textures/8k_earth_daymap.jpg",
    "/textures/8k_earth_specular_map.jpg",
    "/textures/8k_earth_clouds.jpg",
  ]);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    // Rotate Earth
    earthRef.current.rotation.y = elapsedTime / 25;
    // Rotate Clouds slightly faster
    cloudsRef.current.rotation.y = elapsedTime / 20;
  });

  return (
    // Adjust position based on mobile prop
    <group position={[0, isMobile ? 1.8 : 0, 0]} scale={isMobile ? 1.8 : 2.5}>
      {/* Earth Sphere */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial
          map={colorMap}
          specularMap={specularMap}
          specular={new THREE.Color("grey")}
          shininess={5}
        />
      </mesh>

      {/* Clouds Sphere (Slightly larger) */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[1.02, 64, 64]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Atmosphere Glow */}
      <mesh scale={[1.1, 1.1, 1.1]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial
            color="#4fd1c5" // Cyan/Teal glow
            transparent
            opacity={0.1}
            side={THREE.BackSide}
            blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

export default function Galaxy() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 z-0 bg-black">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#4fd1c5" />

        {/* Background Stars */}
        <Stars 
            radius={300} 
            depth={60} 
            count={20000} 
            factor={7} 
            saturation={0} 
            fade 
            speed={1} 
        />

        {/* The Earth Model */}
        <Earth isMobile={isMobile} />
      </Canvas>
    </div>
  );
}