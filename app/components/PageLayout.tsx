"use client";

import Galaxy from "./Galaxy";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

export default function PageLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-cyan-500/30 selection:text-cyan-100 overflow-x-hidden">
        
        {/* ================= BACKGROUND LAYER ================= */}
        <div className="fixed inset-0 z-0 pointer-events-none">
            <Galaxy />
            {/* Subtle Grid Overlay for Tech Feel */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] opacity-20"></div>
            {/* Bottom Fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>

        <Navbar />

        {/* ================= CONTENT LAYER ================= */}
        <main className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col min-h-screen">
            
            {/* Page Header */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-20 border-b border-white/10 pb-12"
            >
                <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                   {title.toUpperCase()}
                   <span className="text-cyan-500">.</span>
                </h1>
                
                {subtitle && (
                <div className="flex items-start gap-4">
                    <div className="w-1 h-full min-h-[50px] bg-gradient-to-b from-cyan-500 to-transparent rounded-full opacity-50"></div>
                    <p className="text-xl md:text-2xl text-white/60 max-w-3xl leading-relaxed font-light">
                        {subtitle}
                    </p>
                </div>
                )}
            </motion.div>

            {/* Page Content */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-white/80 flex-grow"
            >
                {children}
            </motion.div>

            {/* Footer / Copyright Micro-text */}
            <div className="mt-32 pt-8 border-t border-white/5 flex justify-between items-center text-[10px] text-white/20 uppercase tracking-widest font-mono">
                <span>VORTEX AEROSPACE SYSTEMS</span>
                <span>SECURE CONNECTION ESTABLISHED</span>
            </div>
        
        </main>
    </div>
  );
}