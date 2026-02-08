"use client";

import { useState, useEffect } from "react";
import PageLayout from "../components/PageLayout";
import { motion } from "framer-motion";
import { Activity, Radio, Database, Server } from "lucide-react";

export default function Dashboard() {
  // State for simulated "Live" data
  const [telemetry, setTelemetry] = useState({
    velocity: 24500,
    altitude: 408,
    lox: 98,
    methane: 98,
    pressure: 14.7,
  });

  // Effect to jitter numbers to make them feel "alive"
  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry((prev) => ({
        velocity: prev.velocity + (Math.random() * 20 - 10), // Fluctuates
        altitude: prev.altitude + (Math.random() * 0.05 - 0.02), // Fluctuates slightly
        lox: Math.max(0, prev.lox - 0.02), // Slowly drains
        methane: Math.max(0, prev.methane - 0.02), // Slowly drains
        pressure: 14.7 + (Math.random() * 0.1 - 0.05), // Micro-fluctuations
      }));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <PageLayout
      title="Mission Control"
      subtitle="Live telemetry from VTX-1 Orbital Vehicle."
    >
      {/* TOP BAR: STATUS INDICATORS */}
      <div className="flex flex-wrap gap-4 mb-8 border-b border-white/10 pb-6">
         <StatusBadge icon={Radio} label="Signal Strength" value="98%" color="text-green-400" />
         <StatusBadge icon={Database} label="Data Rate" value="4.2 GB/s" color="text-cyan-400" />
         <StatusBadge icon={Server} label="Uplink Latency" value="12ms" color="text-white" />
         <div className="ml-auto flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            <span className="text-red-500 font-mono font-bold text-sm tracking-widest uppercase">Live Feed</span>
         </div>
      </div>

      {/* TOP ROW: KEY METRICS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <LiveCard label="Orbital Velocity" value={telemetry.velocity.toFixed(0)} unit="km/h" />
        <LiveCard label="Altitude (Apogee)" value={telemetry.altitude.toFixed(2)} unit="km" />
        
        {/* MISSION TIMER */}
        <div className="p-6 bg-black/40 border border-white/10 rounded-xl flex flex-col justify-center items-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/10 transition duration-500"></div>
            <span className="text-cyan-500 text-xs uppercase tracking-[0.2em] mb-2 font-bold relative z-10 flex items-center gap-2">
                <Activity size={12} className="animate-spin-slow" />
                Mission Clock
            </span>
            <span className="text-4xl font-mono text-white font-bold relative z-10 tabular-nums tracking-widest text-shadow-glow">
                T+ 00:04:21
            </span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN: SYSTEM HEALTH */}
        <div className="bg-white/5 border border-white/10 p-6 rounded-xl h-fit backdrop-blur-sm">
          <h3 className="text-sm font-bold mb-6 flex items-center gap-2 text-white/60 uppercase tracking-widest border-b border-white/10 pb-4">
            Subsystem Status
          </h3>
          <div className="space-y-4">
            <StatusRow label="GNC Computer" status="NOMINAL" />
            <StatusRow label="VORTEX-1 Engines" status="RUNNING" />
            <StatusRow label="RCS Thrusters" status="STANDBY" />
            <StatusRow label="Thermal Control" status="NOMINAL" />
            <StatusRow label="Payload Bay" status="LOCKED" />
          </div>
        </div>

        {/* CENTER COLUMN: PROPELLANT LEVELS */}
        <div className="bg-white/5 border border-white/10 p-6 rounded-xl md:col-span-2 backdrop-blur-sm">
          <h3 className="text-sm font-bold mb-6 text-white/60 uppercase tracking-widest border-b border-white/10 pb-4">
            Propellant Mass Fraction
          </h3>
          
          <div className="space-y-8">
            <FuelGauge label="Liquid Oxygen (LOX) - Main Tank" value={telemetry.lox} color="bg-blue-500" />
            <FuelGauge label="Liquid Methane (CH4) - Main Tank" value={telemetry.methane} color="bg-purple-500" />
          </div>
          
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <DataBox label="Cabin Press." value={`${telemetry.pressure.toFixed(1)} psi`} />
            <DataBox label="Ext. Temp" value="-120°C" />
            <DataBox label="Battery" value="96.4%" />
            <DataBox label="Radiation" value="0.4 mSv" />
          </div>
        </div>

      </div>

      {/* BOTTOM ROW: MISSION LOG */}
      <div className="mt-8 p-0 bg-black border border-white/20 rounded-xl font-mono text-sm h-64 overflow-hidden shadow-2xl relative flex flex-col">
        <div className="bg-white/5 backdrop-blur px-4 py-2 border-b border-white/10 flex justify-between items-center">
             <span className="text-cyan-400 font-bold tracking-widest text-xs">/// VORTEX_FLIGHT_LOG</span>
             <div className="flex gap-2">
                <div className="w-2 h-2 bg-white/20 rounded-full"></div>
                <div className="w-2 h-2 bg-white/20 rounded-full"></div>
             </div>
        </div>
        
        <div className="p-4 overflow-y-auto space-y-2 text-green-400/80 leading-relaxed font-light scrollbar-hide">
            <LogEntry time="14:04:22" msg="Telemetry packet #4920 verified. Checksum valid." />
            <LogEntry time="14:04:20" msg="Downlink bandwidth nominal. Signal strength 98%." />
            <LogEntry time="14:03:55" msg="STAGE 1 SEPARATION CONFIRMED." highlight />
            <LogEntry time="14:03:50" msg="Pneumatic pushers activated." />
            <LogEntry time="14:03:45" msg="MECO (Main Engine Cut Off) confirmed. VORTEX-1 shutdown." />
            <LogEntry time="14:03:30" msg="GNC switching to coast phase guidance." />
            <LogEntry time="14:03:10" msg="MAX-Q (Maximum Dynamic Pressure) passed." highlight />
            <LogEntry time="14:02:45" msg="Supersonic transition. Mach 1.0 achieved." />
            <LogEntry time="14:00:00" msg="LIFTOFF. Tower cleared." highlight />
            <p className="text-white/30 mt-4 opacity-50 border-t border-white/10 pt-2">--- PRE-FLIGHT CHECKS ARCHIVED ---</p>
        </div>
      </div>

    </PageLayout>
  );
}

// --- SUB-COMPONENTS ---

function LiveCard({ label, value, unit }: { label: string, value: string, unit: string }) {
  return (
    <div className="group p-6 bg-black/40 border border-white/10 rounded-xl hover:border-cyan-500/50 transition duration-500 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition">
        <div className="w-32 h-32 bg-cyan-400 blur-[60px] rounded-full -mr-10 -mt-10"></div>
      </div>
      
      <p className="text-white/50 text-xs uppercase tracking-[0.2em] font-bold mb-2">{label}</p>
      <div className="flex items-baseline gap-2 mt-1">
        <h2 className="text-4xl font-mono font-bold text-white min-w-[120px] tabular-nums group-hover:text-cyan-400 transition duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            {value}
        </h2>
        <span className="text-cyan-500/70 text-sm font-bold uppercase">{unit}</span>
      </div>
    </div>
  );
}

function StatusRow({ label, status }: { label: string, status: string }) {
  const isNominal = status === "NOMINAL" || status === "CONNECTED" || status === "RUNNING";
  const isCaution = status === "STANDBY" || status === "LOCKED";
  
  return (
    <div className="flex justify-between items-center border-b border-white/5 pb-3 last:border-0 last:pb-0 group hover:bg-white/5 px-2 -mx-2 rounded transition">
      <span className="text-white/70 font-mono text-xs uppercase tracking-tight group-hover:text-white transition">{label}</span>
      <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded border ${
        isNominal 
        ? "bg-green-500/10 text-green-400 border-green-500/20 shadow-[0_0_5px_rgba(74,222,128,0.2)]" 
        : isCaution
        ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
        : "bg-red-500/10 text-red-400 border-red-500/20"
      }`}>
        {status}
      </span>
    </div>
  );
}

function FuelGauge({ label, value, color }: { label: string, value: number, color: string }) {
  return (
    <div>
      <div className="flex justify-between mb-2 font-mono text-xs">
        <span className="text-white/60 uppercase tracking-wider">{label}</span>
        <span className="text-white font-bold">{value.toFixed(1)}%</span>
      </div>
      {/* Striped Background for Technical Look */}
      <div className="w-full bg-white/5 h-3 rounded-full overflow-hidden relative border border-white/10">
        <div className="absolute inset-0 w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,rgba(0,0,0,0.5)_2px,rgba(0,0,0,0.5)_4px)] opacity-30 z-10 pointer-events-none"></div>
        <motion.div 
            className={`h-full ${color} shadow-[0_0_15px_currentColor] relative`}
            initial={{ width: "100%" }}
            animate={{ width: `${value}%` }}
            transition={{ ease: "linear", duration: 0.5 }}
        >
            <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-white/50"></div>
        </motion.div>
      </div>
    </div>
  );
}

function DataBox({ label, value }: { label: string, value: string }) {
    return (
        <div className="p-4 bg-black/40 rounded border border-white/10 hover:border-cyan-500/30 transition group">
            <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1 group-hover:text-cyan-500/70 transition">{label}</p>
            <p className="text-lg font-mono text-white font-bold">{value}</p>
        </div>
    );
}

function StatusBadge({ icon: Icon, label, value, color }: any) {
    return (
        <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10">
            <Icon size={14} className={color} />
            <div className="flex flex-col leading-none">
                <span className="text-[9px] text-white/40 uppercase font-bold tracking-wider">{label}</span>
                <span className={`text-xs font-mono font-bold ${color}`}>{value}</span>
            </div>
        </div>
    )
}

function LogEntry({ time, msg, highlight = false }: { time: string, msg: string, highlight?: boolean }) {
    return (
        <div className={`flex gap-3 text-xs font-mono ${highlight ? 'text-white font-bold bg-white/5 -mx-2 px-2 py-1 rounded' : 'text-green-400/70'}`}>
            <span className="opacity-50">[{time}]</span>
            <span>{msg}</span>
        </div>
    )
}