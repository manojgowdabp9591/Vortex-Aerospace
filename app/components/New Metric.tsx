"use client";

import { motion } from "framer-motion";
import { TrendingDown, Weight, CalendarClock, ArrowUpRight } from "lucide-react";

export default function Metrics() {
  const metrics = [
    {
      id: "01",
      label: "Cost Efficiency",
      value: "1/10",
      prefix: "≤",
      sub: "vs. Competitors",
      desc: "Target cost below $2,500 per kg to LEO via full reusability.",
      icon: TrendingDown,
    },
    {
      id: "02",
      label: "Payload Capacity",
      value: "850",
      suffix: "kg",
      sub: "Low Earth Orbit",
      desc: "Optimized for constellation deployment and rideshare missions.",
      icon: Weight,
    },
    {
      id: "03",
      label: "Launch Target",
      value: "2030",
      sub: "Orbiton-1 Demo",
      desc: "Technology demonstration flight scheduled for Q4 2027.",
      icon: CalendarClock,
    },
  ];

  return (
    <section className="py-32 relative z-10 border-y border-white/5 bg-black/40 backdrop-blur-sm">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Section Label */}
        <div className="flex justify-center mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase border border-white/10 px-4 py-1 rounded-full bg-black/50">
                Performance Targets
            </span>
        </div>

        {/* METRICS GRID */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 border border-white/10 rounded-3xl bg-white/[0.02] overflow-hidden"
        >
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} index={index} />
          ))}
        </motion.div>

        {/* Bottom Line */}
        <div className="flex justify-between items-center mt-4 text-[9px] text-white/20 font-mono uppercase tracking-widest px-4">
            <span>/// SYS_DIAGNOSTICS_ACTIVE</span>
            <span>VORTEX_AERO_INC</span>
        </div>

      </div>
    </section>
  );
}

function MetricCard({ id, label, value, prefix, suffix, sub, desc, icon: Icon, index }: any) {
  return (
    <div className="group relative p-10 hover:bg-white/[0.02] transition-colors duration-500">
      
      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Top Bar (ID & Icon) */}
      <div className="flex justify-between items-start mb-12">
        <div className="flex flex-col">
            <span className="text-[9px] font-mono text-white/30 mb-1">{id}</span>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400">
                <Icon size={14} />
                {label}
            </div>
        </div>
        <ArrowUpRight className="text-white/20 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" size={18} />
      </div>

      {/* The Big Number */}
      <div className="relative mb-4">
        <h3 className="text-6xl md:text-7xl font-black text-white tracking-tighter group-hover:scale-105 transition-transform duration-500 origin-left">
            <span className="text-3xl text-white/40 mr-1 align-top">{prefix}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 group-hover:to-cyan-200 transition-colors">
                {value}
            </span>
            <span className="text-xl text-white/40 ml-2 font-medium tracking-normal">{suffix}</span>
        </h3>
      </div>

      {/* Sub-label */}
      <div className="w-full h-px bg-white/10 mb-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyan-500 w-0 group-hover:w-full transition-all duration-700 ease-out" />
      </div>
      
      <p className="text-white/40 text-[10px] uppercase tracking-widest mb-2 font-bold">
        {sub}
      </p>

      {/* Description */}
      <p className="text-white/60 font-light text-sm leading-relaxed max-w-xs group-hover:text-white/80 transition-colors">
        {desc}
      </p>

    </div>
  );
}
