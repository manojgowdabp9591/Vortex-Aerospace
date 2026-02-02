"use client";

import PageLayout from "@/app/components/PageLayout";
import { motion } from "framer-motion";
import { Rocket, Box, Wind, ArrowUp, Zap, Target, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function OrbitonPage() {
  const [activeStage, setActiveStage] = useState<"fairing" | "stage2" | "stage1">("stage1");

  return (
    <PageLayout
      title="Vehicle: ORBITON-1"
      subtitle="The next evolution of reusable orbital launch vehicles."
    >
      <div className="grid lg:grid-cols-12 gap-10 mt-10 items-start">
        
        {/* LEFT COLUMN: INTERACTIVE BLUEPRINT (5 Columns) */}
        <div className="lg:col-span-5 relative h-[600px] bg-blue-900/10 border border-blue-500/30 rounded-3xl overflow-hidden backdrop-blur-sm flex items-center justify-center group">
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            
            {/* Measurement Lines */}
            <div className="absolute top-10 left-4 bottom-10 border-l border-blue-500/30 border-dashed flex flex-col justify-between text-[10px] text-blue-400 font-mono py-2">
                <span>45m</span>
                <span>20m</span>
                <span>0m</span>
            </div>

            {/* THE ROCKET VISUAL (CSS Shapes) */}
            <div className="relative z-10 flex flex-col items-center gap-1">
                
                {/* 1. PAYLOAD FAIRING */}
                <motion.div 
                    onClick={() => setActiveStage("fairing")}
                    className={`w-24 h-24 bg-gradient-to-b from-white/20 to-white/5 border border-white/30 rounded-t-[100%] cursor-pointer transition duration-300 relative ${activeStage === "fairing" ? "ring-2 ring-cyan-400 bg-white/10" : "hover:bg-white/10"}`}
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="absolute -right-16 top-1/2 w-10 h-[1px] bg-cyan-500/50"></div>
                    <span className="absolute -right-32 top-1/2 -translate-y-1/2 text-[10px] text-cyan-400 font-mono">PAYLOAD</span>
                </motion.div>

                {/* 2. STAGE 2 (Upper Stage) */}
                <motion.div 
                    onClick={() => setActiveStage("stage2")}
                    className={`w-24 h-32 bg-gradient-to-b from-white/10 to-transparent border-x border-y border-white/30 cursor-pointer transition duration-300 relative flex items-center justify-center ${activeStage === "stage2" ? "ring-2 ring-cyan-400 bg-white/5" : "hover:bg-white/5"}`}
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="text-[10px] text-white/30 -rotate-90 tracking-widest">VACUUM</div>
                    <div className="absolute -right-16 top-1/2 w-10 h-[1px] bg-cyan-500/50"></div>
                    <span className="absolute -right-32 top-1/2 -translate-y-1/2 text-[10px] text-cyan-400 font-mono">STAGE 2</span>
                </motion.div>

                {/* 3. STAGE 1 (Lifting Body - Wider at bottom) */}
                <motion.div 
                    onClick={() => setActiveStage("stage1")}
                    className={`w-32 h-64 bg-gradient-to-b from-white/10 to-transparent border border-white/30 cursor-pointer transition duration-300 relative flex flex-col items-center justify-end pb-4 clip-path-lifting-body ${activeStage === "stage1" ? "ring-2 ring-cyan-400 bg-white/5" : "hover:bg-white/5"}`}
                    style={{ clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)" }} // WEDGE SHAPE
                    whileHover={{ scale: 1.02 }}
                >
                    {/* Grid Fins */}
                    <div className="absolute top-4 -left-4 w-4 h-8 border border-white/40 bg-black/50"></div>
                    <div className="absolute top-4 -right-4 w-4 h-8 border border-white/40 bg-black/50"></div>

                    {/* Landing Legs (Folded) */}
                    <div className="absolute bottom-2 left-2 w-2 h-16 bg-white/20 rounded-full"></div>
                    <div className="absolute bottom-2 right-2 w-2 h-16 bg-white/20 rounded-full"></div>

                    <div className="text-[10px] text-white/30 tracking-widest mb-8">LIFTING BODY</div>
                    
                    <div className="absolute -right-16 top-1/2 w-6 h-[1px] bg-cyan-500/50"></div>
                    <span className="absolute -right-36 top-1/2 -translate-y-1/2 text-[10px] text-cyan-400 font-mono">BOOSTER</span>
                </motion.div>

                {/* Engines */}
                <div className="flex gap-2">
                    <div className="w-4 h-6 bg-orange-500/20 rounded-b-lg border border-orange-500/50"></div>
                    <div className="w-4 h-6 bg-orange-500/20 rounded-b-lg border border-orange-500/50"></div>
                    <div className="w-4 h-6 bg-orange-500/20 rounded-b-lg border border-orange-500/50"></div>
                </div>

            </div>
        </div>

        {/* RIGHT COLUMN: SPECS & NARRATIVE (7 Columns) */}
        <div className="lg:col-span-7 space-y-8">
          
          <div>
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
               <Rocket className="text-cyan-400" />
               ORBITON-1
            </h2>
            <p className="text-white/70 text-lg leading-relaxed font-light">
              The Orbiton-1 is a two-stage-to-orbit launch vehicle designed for 
              <strong> radical reusability</strong>. Unlike traditional cylinders, the first stage 
              features a unique <strong>Lifting Body</strong> geometry, allowing it to generate lift 
              during reentry for a guided, low-stress return to the launch site.
            </p>
          </div>

          {/* DYNAMIC DETAILS PANEL (Changes based on click) */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl min-h-[250px] relative overflow-hidden">
             
             {/* Decorative Background Icon */}
             <div className="absolute -right-10 -bottom-10 opacity-10 text-white">
                {activeStage === "fairing" && <Box size={200} />}
                {activeStage === "stage2" && <Zap size={200} />}
                {activeStage === "stage1" && <Wind size={200} />}
             </div>

             {activeStage === "stage1" && (
                 <StageDetails 
                    title="Stage 1: The Lifting Body"
                    desc="Constructed from advanced carbon-composites, the booster utilizes its flattened fuselage to generate lift during atmospheric reentry, reducing thermal loads and propellant required for landing."
                    stats={[
                        { label: "Engines", value: "7x VORTEX-1 RDE" },
                        { label: "Thrust", value: "840 kN" },
                        { label: "Recovery", value: "RTLS (Return to Launch Site)" }
                    ]}
                 />
             )}

            {activeStage === "stage2" && (
                 <StageDetails 
                    title="Stage 2: Orbital Insertion"
                    desc="Powered by a single vacuum-optimized VORTEX-1 engine. Designed for precision orbital placement and eventual de-orbit burn capabilities."
                    stats={[
                        { label: "Engines", value: "1x VORTEX-1 Vac" },
                        { label: "Thrust", value: "135 kN" },
                        { label: "Fuel", value: "Methalox" }
                    ]}
                 />
             )}

            {activeStage === "fairing" && (
                 <StageDetails 
                    title="Payload Fairing"
                    desc="A lightweight composite shell protecting the satellite payload during ascent. Features a non-explosive pneumatic separation system to minimize debris."
                    stats={[
                        { label: "Diameter", value: "3.5 meters" },
                        { label: "Height", value: "8.0 meters" },
                        { label: "Volume", value: "45 m³" }
                    ]}
                 />
             )}
          </div>

          {/* OVERALL CAPABILITIES TABLE */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              <StatBox label="Height" value="45 m" />
              <StatBox label="Diameter" value="3.5 m" />
              <StatBox label="Payload to LEO" value="1,250 kg" />
              <StatBox label="Payload to SSO" value="900 kg" />
          </div>

        </div>

      </div>
    </PageLayout>
  );
}

// --- SUB-COMPONENTS ---

function StageDetails({ title, desc, stats }: any) {
    return (
        <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative z-10"
        >
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-white/60 mb-6 max-w-lg">{desc}</p>
            
            <div className="grid grid-cols-3 gap-6">
                {stats.map((s: any, i: number) => (
                    <div key={i}>
                        <p className="text-[10px] text-cyan-400 uppercase font-bold tracking-wider mb-1">{s.label}</p>
                        <p className="text-white font-mono font-bold text-lg">{s.value}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

function StatBox({ label, value }: { label: string, value: string }) {
    return (
        <div className="bg-black/30 border border-white/10 p-4 rounded-lg text-center">
            <p className="text-[10px] text-white/40 uppercase font-bold mb-1">{label}</p>
            <p className="text-xl font-bold text-white font-mono">{value}</p>
        </div>
    )
}