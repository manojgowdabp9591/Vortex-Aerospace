"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { LucideIcon } from "lucide-react";

interface HolographicCardProps {
  title: string;
  text: string;
  icon: LucideIcon;
}

export default function HolographicCard({ title, text, icon: Icon }: HolographicCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="group relative border border-white/10 bg-black/60 px-8 py-10 rounded-xl overflow-hidden backdrop-blur-md transition-colors duration-500 hover:border-cyan-500/30"
      onMouseMove={handleMouseMove}
    >
      {/* 1. Moving Gradient Spotlight (The "Hologram" effect) */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(34, 211, 238, 0.10),
              transparent 80%
            )
          `,
        }}
      />

      {/* 2. Technical Grid Background (Added for depth) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
      
      {/* 3. Content */}
      <div className="relative z-10">
        <div className="mb-6 inline-flex p-3 rounded-lg bg-white/5 border border-white/10 text-cyan-400 group-hover:text-black group-hover:bg-cyan-500 group-hover:border-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.1)] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]">
          <Icon size={28} />
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 tracking-wide group-hover:text-cyan-100 transition-colors">
          {title}
        </h3>
        
        <p className="text-white/60 leading-relaxed font-light text-sm group-hover:text-white/80 transition-colors">
          {text}
        </p>
      </div>

      {/* 4. Decorative HUD Corner Borders (Reactive) */}
      <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white/10 rounded-tr-xl opacity-50 group-hover:border-cyan-500/50 group-hover:opacity-100 transition-all duration-500" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white/10 rounded-bl-xl opacity-50 group-hover:border-cyan-500/50 group-hover:opacity-100 transition-all duration-500" />
    </div>
  );
}