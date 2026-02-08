"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("INITIALIZING");

  const bootSequence = [
    "INITIALIZING CORE...",
    "LOADING ASSETS...",
    "CALIBRATING SENSORS...",
    "PRESSURIZING...",
    "VORTEX ACTIVE"
  ];

  useEffect(() => {
    // 1. Cycle through boot text
    let step = 0;
    const textInterval = setInterval(() => {
        step++;
        if (step < bootSequence.length) {
            setStatus(bootSequence[step]);
        }
    }, 450); // Change text every 450ms

    // 2. Hide loader after total time
    const timer = setTimeout(() => {
        setLoading(false);
        clearInterval(textInterval);
    }, 2500);

    return () => {
        clearTimeout(timer);
        clearInterval(textInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background Grid Effect */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          {/* Central Logo Container */}
          <div className="relative z-10 flex flex-col items-center">
            
            {/* Spinning Ring (Vortex Effect) */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 -m-8 border border-t-cyan-500 border-r-transparent border-b-cyan-500/30 border-l-transparent rounded-full w-[300px] h-[300px] opacity-50"
            />
            
            {/* Pulsing Core */}
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5], scale: [0.98, 1.02, 0.98] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mb-8 text-center"
            >
              <h1 className="text-5xl font-black tracking-widest text-white mb-2">
                VORTEX
              </h1>
              <p className="text-xs text-cyan-400 tracking-[0.5em] font-mono uppercase">
                Aerospace
              </p>
            </motion.div>

            {/* Loading Bar */}
            <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mb-4 relative">
              <motion.div
                className="h-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
              />
            </div>

            {/* Dynamic Status Text */}
            <div className="font-mono text-[10px] text-cyan-500/80 flex items-center gap-2 h-4">
              <Loader2 size={10} className="animate-spin" />
              <span className="tracking-widest">{status}</span>
            </div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}