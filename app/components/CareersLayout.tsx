"use client";

import { motion } from "framer-motion";

export function PageWrapper({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative z-10 text-white min-h-screen px-6 pt-32 pb-20 max-w-4xl mx-auto">
      
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16 border-b border-white/10 pb-8"
      >
        <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter text-white">
          {title}<span className="text-cyan-500">.</span>
        </h1>

        <p className="text-xl text-white/60 leading-relaxed font-light max-w-2xl">
          {intro}
        </p>
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="space-y-12"
      >
        {children}
      </motion.div>
    </div>
  );
}

export function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="group">
      <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
        <span className="w-1.5 h-6 bg-cyan-500 rounded-sm shadow-[0_0_10px_#22d3ee]"></span>
        {title}
      </h2>

      {/* Styled List */}
      <ul className="space-y-4 text-white/70 leading-relaxed font-light pl-2">
        {/* We map over children to ensure they get the correct styling if they are <li> elements */}
        {children}
      </ul>
    </section>
  );
}