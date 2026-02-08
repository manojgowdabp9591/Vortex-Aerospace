"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();

  // ✅ IMPORTANT FIX:
  // Do NOT render global 404 UI for admin routes
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden text-center px-6 selection:bg-cyan-500/30">
      
      {/* 1. Vortex Background Effect (CSS Gradient) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black z-0"></div>
      
      {/* 2. Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] z-0 pointer-events-none"></div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        {/* Giant 404 */}
        <h1 className="text-[10rem] md:text-[14rem] font-black text-white/5 select-none leading-none tracking-tighter">
          404
        </h1>
        
        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div 
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="bg-black/50 backdrop-blur-sm p-4 rounded-xl border border-white/5"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
              VORTEX ANOMALY
            </h2>
          </motion.div>
        </div>
      </motion.div>

      <p className="text-white/60 mt-8 max-w-md text-lg relative z-10 font-light">
        The coordinates you entered have drifted into a singularity. This page does not exist in our flight plan.
      </p>

      <Link 
        href="/"
        className="relative z-50 mt-10 group"
      >
        <div className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest rounded text-sm group-hover:bg-cyan-400 transition-all duration-300">
           Return to Mission Control
        </div>
        {/* Glow effect behind button */}
        <div className="absolute inset-0 bg-cyan-500 blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-500"></div>
      </Link>

      {/* Rotating Debris / Vortex Animation */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-100px] -right-20 w-[400px] h-[400px] opacity-10 pointer-events-none"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-500">
           <path d="M50 50 m -40 0 a 40 40 0 1 0 80 0 a 40 40 0 1 0 -80 0" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
           <path d="M50 50 m -30 0 a 30 30 0 1 0 60 0 a 30 30 0 1 0 -60 0" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="10 10" />
           <path d="M50 50 m -20 0 a 20 20 0 1 0 40 0 a 20 20 0 1 0 -40 0" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </motion.div>

    </div>
  );
}