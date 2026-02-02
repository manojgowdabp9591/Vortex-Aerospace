"use client";

import PageLayout from "@/app/components/PageLayout";
import { motion } from "framer-motion";
import { Rocket, Box, Wind, Zap, FileText } from "lucide-react";
import { useState } from "react";

export default function OrbitonPage() {
  const [activeStage, setActiveStage] = useState<"fairing" | "stage2" | "stage1">("stage1");

  return (
    <PageLayout
      title="Vehicle: ORBITON-1"
      subtitle="A rapid-response, reusable micro-launcher for the small satellite market."
    >
      <div className="grid lg:grid-cols-12 gap-10 mt-10 items-start">
        
        {/* LEFT COLUMN: INTERACTIVE BLUEPRINT */}
        <div className="lg:col-span-5 relative h-[600px] bg-blue-900/10 border border-blue-500/30 rounded-3xl overflow-hidden backdrop-blur-sm flex items-center justify-center group">
            
            {/* Blueprint Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            
            {/* UPDATED SCALE: 24 Meters */}
            <div className="absolute top-10 left-4 bottom-10 border-l border-blue-500/30 border-dashed flex flex-col justify-between text-[10px] text-blue-400 font-mono py-2">
                <span>24m</span>
                <span>12m</span>
                <span>0m</span>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-1">
                
                {/* 1. PAYLOAD FAIRING */}
                <motion.div 
                    onClick={() => setActiveStage("fairing")}
                    className={`w-20 h-20 bg-gradient-to-b from-white/20 to-white/5 border border-white/30 rounded-t-[100%] cursor-pointer transition duration-300 relative ${activeStage === "fairing" ? "ring-2 ring-cyan-400 bg-white/10" : "hover:bg-white/10"}`}
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="absolute -right-16 top-1/2 w-10 h-[1px] bg-cyan-500/50"></div>
                    <span className="absolute -right-32 top-1/2 -translate-y-1/2 text-[10px] text-cyan-400 font-mono">PAYLOAD</span>
                </motion.div>

                {/* 2. STAGE 2 */}
                <motion.div 
                    onClick={() => setActiveStage("stage2")}
                    className={`w-20 h-28 bg-gradient-to-b from-white/10 to-transparent border-x border-y border-white/30 cursor-pointer transition duration-300 relative flex items-center justify-center ${activeStage === "stage2" ? "ring-2 ring-cyan-400 bg-white/5" : "hover:bg-white/5"}`}
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="text-[10px] text-white/30 -rotate-90 tracking-widest">VACUUM</div>
                    <div className="absolute -right-16 top-1/2 w-10 h-[1px] bg-cyan-500/50"></div>
                    <span className="absolute -right-32 top-1/2 -translate-y-1/2 text-[10px] text-cyan-400 font-mono">STAGE 2</span>
                </motion.div>

                {/* 3. STAGE 1 (Lifting Body) */}
                <motion.div 
                    onClick={() => setActiveStage("stage1")}
                    className={`w-28 h-56 bg-gradient-to-b from-white/10 to-transparent border border-white/30 cursor-pointer transition duration-300 relative flex flex-col items-center justify-end pb-4 clip-path-lifting-body ${activeStage === "stage1" ? "ring-2 ring-cyan-400 bg-white/5" : "hover:bg-white/5"}`}
                    style={{ clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)" }} 
                    whileHover={{ scale: 1.02 }}
                >
                    {/* Lifting Body Fins */}
                    <div className="absolute top-4 -left-3 w-3 h-6 border border-white/40 bg-black/50"></div>
                    <div className="absolute top-4 -right-3 w-3 h-6 border border-white/40 bg-black/50"></div>
                    
                    <div className="text-[10px] text-white/30 tracking-widest mb-8">LIFTING BODY</div>
                    
                    <div className="absolute -right-16 top-1/2 w-6 h-[1px] bg-cyan-500/50"></div>
                    <span className="absolute -right-36 top-1/2 -translate-y-1/2 text-[10px] text-cyan-400 font-mono">BOOSTER</span>
                </motion.div>

                {/* Engine Cluster (5 Nozzles) */}
                <div className="flex gap-1">
                    <div className="w-3 h-5 bg-orange-500/20 rounded-b-lg border border-orange-500/50"></div>
                    <div className="w-3 h-5 bg-orange-500/20 rounded-b-lg border border-orange-500/50"></div>
                    <div className="w-3 h-5 bg-orange-500/20 rounded-b-lg border border-orange-500/50"></div>
                    <div className="w-3 h-5 bg-orange-500/20 rounded-b-lg border border-orange-500/50"></div>
                    <div className="w-3 h-5 bg-orange-500/20 rounded-b-lg border border-orange-500/50"></div>
                </div>

            </div>
        </div>

        {/* RIGHT COLUMN: SPECS */}
        <div className="lg:col-span-7 space-y-8">
          
          <div>
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
               <Rocket className="text-cyan-400" />
               ORBITON-1
            </h2>
            <p className="text-white/70 text-lg leading-relaxed font-light">
              The Orbiton-1 is a SmallSat Launch Vehicle (SSLV) designed to solve the "last mile" problem of orbit delivery. 
              By utilizing a <strong>Lifting Body</strong> first stage and <strong>Methalox</strong> propulsion, 
              we achieve reusability without the mass penalty of heavy landing propellant.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl min-h-[250px] relative overflow-hidden">
             
             <div className="absolute -right-10 -bottom-10 opacity-10 text-white">
                {activeStage === "fairing" && <Box size={200} />}
                {activeStage === "stage2" && <Zap size={200} />}
                {activeStage === "stage1" && <Wind size={200} />}
             </div>

             {activeStage === "stage1" && (
                 <StageDetails 
                    title="Stage 1: The Booster"
                    desc="A reusable lifting-body stage powered by 6x VORTEX-1 RDE engines. Designed for clean burning Methalox reusability."
                    stats={[
                        { label: "Engines", value: "6x VORTEX-1" },
                        { label: "Thrust", value: "210 kN each" },
                        { label: "Propellant", value: "LCH4 / LOX" } 
                    ]}
                 />
             )}

            {activeStage === "stage2" && (
                 <StageDetails 
                    title="Stage 2: Precision Insert"
                    desc="Expendable high-performance upper stage optimized for exact orbit insertion of CubeSats and NanoSats."
                    stats={[
                        { label: "Engine", value: "3x VORTEX-Vac" },
                        { label: "Thrust", value: "45 kN each" },
                        { label: "Recovery", value: "Expendable" }
                    ]}
                 />
             )}

            {activeStage === "fairing" && (
                 <StageDetails 
                    title="Payload Fairing"
                    desc="Standard clamshell fairing compatible with all major CubeSat dispensers and ESPA rings."
                    stats={[
                        { label: "Diameter", value: "2.2 meters" }, 
                        { label: "Material", value: "Carbon Composite" },
                        { label: "Separation", value: "Pneumatic" }
                    ]}
                 />
             )}
          </div>

          {/* REALISTIC SPECS TABLE */}
          <div className="bg-black/30 border border-white/10 rounded-xl overflow-hidden">
             <div className="grid grid-cols-2 md:grid-cols-2 divide-x divide-white/10 border-b border-white/10">
                <StatBox label="Height" value="24.0 m / 78.7 ft" /> 
                <StatBox label="Diameter" value="2.2 m / 7.2 ft" />
             </div>
             <div className="grid grid-cols-2 md:grid-cols-2 divide-x divide-white/10 border-b border-white/10">
                <StatBox label="Payload to LEO" value="450 kg / 992 lb" /> 
                <StatBox label="Payload to SSO" value="300 kg / 661 lb" />
             </div>
             <div className="grid grid-cols-2 md:grid-cols-2 divide-x divide-white/10">
                <StatBox label="Launch Cost" value="$4.5 Million" /> 
                <StatBox label="Gross Mass" value="38,000 kg" />
             </div>
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
        <div className="p-6 text-center hover:bg-white/5 transition">
            <p className="text-[10px] text-white/40 uppercase font-bold mb-2 tracking-widest">{label}</p>
            <p className="text-xl font-bold text-white font-mono text-cyan-400/90 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">{value}</p>
        </div>
    )
}