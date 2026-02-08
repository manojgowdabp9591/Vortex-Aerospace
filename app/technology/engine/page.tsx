"use client";

import PageLayout from "@/app/components/PageLayout";
import { motion } from "framer-motion";
import { Zap, Wind, Flame, Timer, Activity } from "lucide-react";

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
            <div className="absolute top-6 left-6 z-10">
                <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-mono text-red-400 uppercase tracking-widest">Live Test Stand</span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tighter">VORTEX-1</h3>
                <p className="text-xs text-white/40 font-mono">RPM: 24,000 // CHAMBER: 95 BAR</p>
            </div>

            <div className="absolute bottom-6 right-6 text-right z-10">
                 <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Combustion Mode</p>
                 <p className="text-xl font-mono text-cyan-400 font-bold animate-pulse">CONTINUOUS DETONATION</p>
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
              Instead of a steady flame, supersonic shockwaves spin around the annular chamber at 2,000 m/s, 
              compressing the mixture before ignition to extract maximum energy.
            </p>
          </div>

          {/* KEY ADVANTAGES */}
          <div className="grid grid-cols-2 gap-4">
             <AdvantageCard 
                icon={Zap} 
                title="15-20% More Thrust" 
                desc="Pressure gain combustion extracts more energy from every gram of fuel compared to standard cycles." 
             />
             <AdvantageCard 
                icon={Wind} 
                title="Shockwave Exhaust" 
                desc="Exhaust isn't a steady flame; it's a pulsing diamond-shockwave ring optimized for altitude." 
             />
             <AdvantageCard 
                icon={Flame} 
                title="Methalox Fuel" 
                desc="Liquid Methane + Oxygen. Clean burning, non-coking, perfect for rapid reuse." 
             />
             <AdvantageCard 
                icon={Timer} 
                title="Rapid Response" 
                desc="Self-pressurizing detonation wave allows for instant startup and deep throttling capabilities." 
             />
          </div>

          {/* ENGINE SPECS TABLE */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
             <h4 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-4 border-b border-white/10 pb-2">
                Classified Spec Sheet
             </h4>
             <div className="space-y-4 font-mono text-sm">
                <SpecRow label="Cycle" value="Pressure-Gain Rotary Detonation" />
                <SpecRow label="Thrust (Sea Level)" value="850 kN" />
                <SpecRow label="Specific Impulse (ISP)" value="345 sec" />
                <SpecRow label="Propellant" value="LCH4 / LOX" />
                <SpecRow label="Chamber Pressure" value="95 bar" />
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
            <div className="absolute w-full h-full bg-orange-500/10 blur-[60px] rounded-full animate-pulse"></div>

            {/* OUTER CHAMBER (Static) */}
            <div className="absolute w-72 h-72 rounded-full border border-white/5 border-dashed opacity-50"></div>
            <div className="absolute w-60 h-60 rounded-full border border-white/10"></div>

            {/* DETONATION WAVES (Spinning) */}
            
            {/* Wave 1: Fast Shockwave */}
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 0.4, repeat: Infinity, ease: "linear" }}
                className="absolute w-48 h-48 rounded-full border-t-[6px] border-r-[2px] border-transparent border-t-cyan-400 border-r-blue-500 blur-[2px] shadow-[0_0_40px_rgba(34,211,238,0.5)]"
            />
            
            {/* Wave 2: Heat Signature */}
            <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
                className="absolute w-52 h-52 rounded-full border-b-[4px] border-l-[2px] border-transparent border-b-orange-500 border-l-red-500 opacity-60 blur-sm"
            />

            {/* Wave 3: Inner Core Compression */}
            <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 0.1, repeat: Infinity }}
                className="absolute w-24 h-24 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full blur-md flex items-center justify-center shadow-[0_0_60px_rgba(37,99,235,0.6)]"
            >
                <div className="w-12 h-12 bg-white rounded-full blur-xl opacity-90"></div>
            </motion.div>

            {/* NOZZLE CONE (Wireframe effect) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/20 rounded-full opacity-20"></div>
        </div>
    )
}

function AdvantageCard({ icon: Icon, title, desc }: any) {
    return (
        <div className="bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition group/card">
            <Icon className="text-cyan-400 mb-2 group-hover/card:scale-110 transition-transform" size={20} />
            <h4 className="text-white font-bold mb-1 text-sm">{title}</h4>
            <p className="text-white/60 text-[11px] leading-relaxed">{desc}</p>
        </div>
    )
}

function SpecRow({ label, value }: { label: string, value: string }) {
    return (
        <div className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 last:pb-0 group">
            <span className="text-white/40 uppercase text-xs group-hover:text-cyan-400/70 transition-colors">{label}</span>
            <span className="text-white font-bold text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]">{value}</span>
        </div>
    )
}