"use client";
import { motion } from "framer-motion";
import { ChevronRight, Play } from "lucide-react";
import Link from "next/link"; // Import Link correctly

const TAGLINES = [
  "VORTEX: SHATTERING THE COST BARRIER.",
  "DETONATION IS THE FUTURE.",
  "ORBIT ON DEMAND.",
  "HYPERSONIC REUSABILITY."
];

function ScrollingTaglines() {
  // Duplicate the array to ensure seamless looping
  const duplicatedTaglines = [...TAGLINES, ...TAGLINES, ...TAGLINES];

  return (
    <div className="relative overflow-hidden mt-8 h-12 w-full max-w-2xl mx-auto mask-gradient-to-r">
      <motion.div
        className="flex whitespace-nowrap text-sm font-mono font-bold text-cyan-500/70 tracking-widest uppercase items-center"
        animate={{ x: ["0%", "-50%"] }} // Move halfway (because we duplicated content)
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20, // Adjust speed
        }}
      >
        {duplicatedTaglines.map((tagline, index) => (
          <span key={index} className="mx-8 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse"></span>
            {tagline}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center relative overflow-hidden pt-20">
      
      {/* BACKGROUND VIDEO LAYER */}
      <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover opacity-40 scale-105"
            poster="/hero-poster.jpg" // Add a fallback image
          >
            {/* Use a high-quality abstract space/tech video */}
            <source src="https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4" type="video/mp4" />
          </video>
          
          {/* Gradients to fade video into black */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)]"></div>
          
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-6xl px-4 w-full flex flex-col items-center"
      >
        {/* BADGE */}
        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-cyan-300 uppercase">
                System Online
            </span>
        </div>

        {/* MAIN HEADLINE */}
        <h1 className="text-5xl md:text-8xl font-black leading-none tracking-tighter text-white mb-4 drop-shadow-2xl">
          THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 animate-gradient-x">VORTEX</span> <br />
          HAS AWAKENED.
        </h1>

        {/* SUBHEAD */}
        <h2 className="text-lg md:text-2xl font-light text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
          We are <strong className="text-white">Vortex Aerospace</strong>. We don't just launch rockets; we redefine physics. 
          Pioneering <span className="text-cyan-400">Rotary Detonation Engines</span> for the next era of orbital transport.
        </h2>
        
        {/* SCROLLING TICKER */}
        <ScrollingTaglines />

        {/* CTA BUTTONS */}
        <div className="flex flex-col md:flex-row gap-5 justify-center mt-12 w-full max-w-md md:max-w-none">
            <Link href="/vehicles/orbiton" className="w-full md:w-auto">
                <button className="group w-full md:w-auto px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm rounded hover:bg-cyan-400 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] flex items-center justify-center gap-2">
                    Explore Orbiton-1
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </Link>
            
            <Link href="/technology" className="w-full md:w-auto">
                <button className="group w-full md:w-auto px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-sm text-white font-bold uppercase tracking-widest text-sm rounded hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2">
                    <Play size={16} className="fill-white" />
                    Our Technology
                </button>
            </Link>
        </div>
      </motion.div>
    </section>
  );
}