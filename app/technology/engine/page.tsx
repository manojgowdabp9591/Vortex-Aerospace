"use client";

import PageLayout from "@/app/components/PageLayout";
import { motion } from "framer-motion";
import { Zap, Activity, Gauge, Flame, Wind, ArrowRight, MousePointer2 } from "lucide-react";
import { useState } from "react";

export default function EnginePage() {
  return (
    <PageLayout
      title="Technology: VORTEX-1"
      subtitle="The world's first reusable Rotary Detonation Engine (RDE)."
    >
      <div className="grid lg:grid-cols-2 gap-16 mt-10 items-center">
        
        {/* LEFT: HOLOGRAPHIC ENGINE SIMULATION */}
        <div className="relative h-[500px] flex items-center justify-center bg-black/40 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm group">
            
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            
            {/* INTERACTIVE ENGINE CORE */}
            <RDEVisualizer />

            {/* HUD Overlay */}
            <div className="absolute top-6 left-6">
                <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-mono text-red-400 uppercase tracking-widest">Live Simulation</span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tighter">VORTEX-1</h3>
                <p className="text-xs text-white/40 font-mono">STATUS: NOMINAL // 7500 RPM</p>
            </div>

            <div className="absolute bottom-6 right-6 text-right">
                 <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Combustion Mode</p>
                 <p className="text-xl font-mono text-cyan-400 font-bold">DETONATION</p>
            </div>
        </div>

        {/* RIGHT: TECH SPECS & NARRATIVE */}
        <div className="space-y-10">
          
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Stop Burning. <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Start Detonating.</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed font-light">
              Conventional rocket engines burn fuel at constant pressure (Deflagration). 
              The <strong>VORTEX-1</strong> utilizes <strong>Rotary Detonation (RDE)</strong> physics. 
              Instead of a steady flame, supersonic shockwaves spin around the annular chamber, 
              compressing the mixture before ignition.
            </p>
          </div>

          {/* KEY ADVANTAGES */}
          <div className="grid grid-cols-2 gap-4">
             <AdvantageCard 
                icon={Zap} 
                title="15% Higher ISP" 
                desc="Pressure gain combustion extracts more energy from every gram of fuel." 
             />
             <AdvantageCard 
                icon={Wind} 
                title="Compact Design" 
                desc="No heavy turbopumps required. The detonation wave drives its own pressure." 
             />
          </div>

          {/* ENGINE SPECS TABLE */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
             <h4 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-4 border-b border-white/10 pb-2">
                Technical Specifications
             </h4>
             <div className="space-y-4 font-mono text-sm">
                <SpecRow label="Thrust (Vacuum)" value="210 kN" />
                <SpecRow label="Specific Impulse" value="345 sec" />
                <SpecRow label="Chamber Pressure" value="85 bar" />
                <SpecRow label="Propellant" value="Methalox (LCH4 / LOX)" />
                <SpecRow label="Throttling" value="20% - 110%" />
             </div>
          </div>

        </div>

      </div>
    </PageLayout>
  );
}

// --- SUB-COMPONENTS ---

function RDEVisualizer() {
    return (
        <div className="relative w-64 h-64 flex items-center justify-center">
            
            {/* CORE GLOW */}
            <div className="absolute w-full h-full bg-orange-500/20 blur-[80px] rounded-full animate-pulse"></div>

            {/* OUTER CHAMBER (Static) */}
            <div className="absolute w-64 h-64 rounded-full border-2 border-white/10 border-dashed"></div>
            <div className="absolute w-56 h-56 rounded-full border border-white/5"></div>

            {/* DETONATION WAVES (Spinning) */}
            {/* We create multiple spinning rings to simulate the chaotic shockwaves */}
            
            {/* Wave 1: Fast & Bright */}
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
                className="absolute w-48 h-48 rounded-full border-t-4 border-l-4 border-transparent border-t-orange-500 border-l-red-500 blur-sm shadow-[0_0_30px_rgba(249,115,22,0.6)]"
            />
            
            {/* Wave 2: Slower & Wide */}
            <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                className="absolute w-52 h-52 rounded-full border-b-2 border-r-2 border-transparent border-b-blue-400 border-r-cyan-400 opacity-50 blur-md"
            />

            {/* Wave 3: Inner Core Compression */}
            <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.2, repeat: Infinity }}
                className="absolute w-20 h-20 bg-gradient-to-br from-red-600 to-orange-500 rounded-full blur-md flex items-center justify-center shadow-[0_0_50px_rgba(239,68,68,0.8)]"
            >
                <div className="w-10 h-10 bg-white rounded-full blur-xl opacity-80"></div>
            </motion.div>

            {/* NOZZLE CONE (Wireframe effect) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/10 rounded-full opacity-30"></div>
        </div>
    )
}

function AdvantageCard({ icon: Icon, title, desc }: any) {
    return (
        <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 transition">
            <Icon className="text-cyan-400 mb-3" size={24} />
            <h4 className="text-white font-bold mb-2">{title}</h4>
            <p className="text-white/60 text-xs leading-relaxed">{desc}</p>
        </div>
    )
}

function SpecRow({ label, value }: { label: string, value: string }) {
    return (
        <div className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 last:pb-0">
            <span className="text-white/40 uppercase">{label}</span>
            <span className="text-white font-bold">{value}</span>
        </div>
    )
}