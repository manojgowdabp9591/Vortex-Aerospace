"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link"; // Fixed import path

// Lazy load the 3D model to prevent page freeze
const Rocket3D = dynamic(() => import("./Rocket3D"), { 
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center text-cyan-400 font-mono text-xs animate-pulse">Initializing 3D Render...</div>
});

export default function TechSpec() {
  // Updated specs to match Orbiton-1 Page
  const specs = [
    { label: "Height", value: "24.0 m / 78.7 ft" },
    { label: "Diameter", value: "2.8 m / 9.2 ft" },
    { label: "Stages", value: "2 (Lifting Body)" },
    { label: "Payload to LEO", value: "850 kg / 1873 lb" },
    { label: "Payload to SSO", value: "600 kg / 1322 lb" },
    { label: "Thrust (Sea Level)", value: "2400 kN" },
    { label: "Propellant", value: "LCH4 / LOX (Methalox)" }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 relative z-10 overflow-hidden bg-black/20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* COLUMN 1: 3D ROCKET (Visible on All Devices) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative h-[500px] w-full flex items-center justify-center"
          >
            {/* Visual Backglow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
            
            {/* Interactive 3D Model */}
            <div className="w-full h-full cursor-grab active:cursor-grabbing relative z-10">
                <Rocket3D />
                
                {/* 3D Interaction Hint */}
                <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
                    <p className="text-[10px] text-cyan-400/60 uppercase tracking-widest font-mono bg-black/40 inline-block px-3 py-1 rounded-full border border-cyan-500/20 backdrop-blur-sm">
                       Drag to Inspect Hardware
                    </p>
                </div>
            </div>
          </motion.div>

          {/* COLUMN 2: SPECS */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-center md:text-left text-white">
              VEHICLE <span className="text-cyan-400">OVERVIEW</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg mb-10 text-center md:text-left leading-relaxed font-light">
              The <strong className="text-white">Orbiton-1</strong> is a reusable micro-launcher engineered by Vortex Aerospace. 
              By utilizing a lifting body architecture and methalox propulsion, we minimize the cost of access to orbit.
            </p>

            <div className="border-t border-white/20">
              {specs.map((spec, index) => (
                <div 
                  key={index}
                  // Responsive Layout: Stack on mobile, Row on desktop
                  className="flex flex-col md:flex-row md:justify-between md:items-center py-4 border-b border-white/10 hover:bg-white/5 transition px-4 gap-1 text-center md:text-left group cursor-default"
                >
                  <span className="text-xs md:text-sm font-bold uppercase text-white/50 tracking-widest group-hover:text-cyan-400 transition-colors">
                    {spec.label}
                  </span>
                  <span className="text-lg md:text-xl font-mono text-white font-bold group-hover:text-cyan-300 transition-colors shadow-cyan-500/50 drop-shadow-sm">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center md:justify-start">
                <Link href="/vehicles/orbiton" className="w-full md:w-auto">
                    <button className="w-full md:w-auto px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm rounded hover:bg-cyan-400 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]">
                        View Full Datasheet
                    </button>
                </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}