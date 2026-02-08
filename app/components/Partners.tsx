"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Partners() {
  const partners = [
    { name: "ISRO", url: "https://www.isro.gov.in" },
    { name: "NASA", url: "https://www.nasa.gov" },
    { name: "ESA", url: "https://www.esa.int" },
    { name: "SPACEX", url: "https://www.spacex.com" },
    { name: "BOEING", url: "https://www.boeing.com" },
    { name: "AIRBUS", url: "https://www.airbus.com" },
    { name: "ROCKET LAB", url: "https://www.rocketlabusa.com" },
    { name: "BLUE ORIGIN", url: "https://www.blueorigin.com" }
  ];

  // Duplicate the list for seamless looping
  const marqueeList = [...partners, ...partners, ...partners];

  return (
    <section className="py-10 border-y border-white/5 bg-black relative z-20 overflow-hidden">
      
      {/* Background Gradient for Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-black to-black pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 mb-8">
        <p className="text-center text-[10px] font-bold tracking-[0.4em] text-cyan-500 uppercase opacity-80">
          Trusted By Industry Leaders
        </p>
      </div>
      
      {/* Marquee Container */}
      <div className="relative flex overflow-hidden mask-gradient-to-r">
        
        {/* Left Fade Mask */}
        <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
        
        {/* Right Fade Mask */}
        <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10"></div>

        <motion.div 
          className="flex gap-16 items-center whitespace-nowrap"
          animate={{ x: [0, -1000] }} // Adjust value based on width
          transition={{ 
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {marqueeList.map((partner, index) => (
            <Link 
              key={`${partner.name}-${index}`} 
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl md:text-4xl font-black text-white/20 hover:text-cyan-400 transition-colors duration-500 cursor-pointer select-none uppercase tracking-tighter"
            >
              {partner.name}
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}