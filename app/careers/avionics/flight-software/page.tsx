"use client";

import Apply from "@/app/components/Apply";
import PageLayout from "@/app/components/PageLayout";
import { Terminal, Code, Cpu, CheckCircle2, MapPin, Briefcase, Users, ArrowRight, Zap, Shield, Laptop, GitBranch, Server } from "lucide-react";
import { motion } from "framer-motion";

export default function FlightSoftwareEngineerPage() {
  return (
    <PageLayout
      title={
        <>
          Role: <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 font-mono">Flight Software Engineer</span>
        </>
      }
      subtitle="Code the brain. Control the descent. execute(launch). Where a segmentation fault isn't just an error—it's a mission failure."
    >
      <div className="grid lg:grid-cols-12 gap-10 mt-12">
        
        {/* --- LEFT COLUMN: MISSION DETAILS (Span 8) --- */}
        <div className="lg:col-span-8 space-y-16">
          
          {/* 1. MISSION OVERVIEW CARD */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-[#0d1117] border border-green-500/20 p-8 md:p-10 rounded-3xl overflow-hidden group shadow-2xl"
          >
             {/* Scrolling Hex Dump Background */}
             <div className="absolute inset-0 opacity-10 font-mono text-[10px] leading-3 overflow-hidden select-none pointer-events-none text-green-500">
                {Array.from({ length: 25 }).map((_, i) => (
                    <div key={i} className="whitespace-nowrap animate-[marquee_20s_linear_infinite]" style={{ animationDelay: `${Math.random() * -5}s` }}>
                        {Array.from({ length: 40 }).map(() => Math.random().toString(16).substr(2, 2).toUpperCase()).join(' ')}
                    </div>
                ))}
             </div>
             
             {/* Blinking Cursor Decoration */}
             <div className="absolute bottom-6 right-6 w-3 h-6 bg-green-500 animate-pulse pointer-events-none" />

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-green-500/10 rounded-lg text-green-400 border border-green-500/20">
                        <Terminal size={24} className="animate-pulse" />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-wide font-mono">
                        // Mission_Overview
                    </h3>
                </div>
                
                <p className="text-white/70 leading-relaxed text-lg font-light mb-6">
                    As a Flight Software Engineer at <strong className="text-white font-medium">Vortex Aerospace</strong>, you will write the code that keeps the rocket pointed at the stars—and brings it back safely. 
                    <br/><br/>
                    You will develop <span className="text-green-400 font-mono">real-time, safety-critical</span> software that runs on the metal, controlling everything from VORTEX-1 engine throttling to grid fin actuation.
                </p>

                
            </div>
          </motion.section>

          {/* 2. RESPONSIBILITIES */}
          <section className="space-y-8">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                 <div className="h-1 w-12 bg-green-500 rounded-full" />
                 <h3 className="text-2xl font-bold text-white tracking-tight">Operational Objectives</h3>
              </div>
              
              <div className="grid gap-4">
                 <ListItem text="Write high-performance flight software in Modern C++ (17/20) and Rust." delay={0.1} />
                 <ListItem text="Develop Hardware-in-the-Loop (HITL) simulation frameworks to validate logic on real avionics." delay={0.2} />
                 
                 <ListItem text="Design fault-tolerant state machines for autonomous launch, stage separation, and landing." delay={0.3} />
                 <ListItem text="Implement drivers for sensors (IMU, GPS) and actuators (TVC, Valves) over CAN/Ethernet." delay={0.4} />
                 <ListItem text="Support mission control operations and analyze real-time telemetry data." delay={0.5} />
              </div>
          </section>

          {/* 3. QUALIFICATIONS */}
          <section className="space-y-8">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                 <div className="h-1 w-12 bg-teal-500 rounded-full" />
                 <h3 className="text-2xl font-bold text-white tracking-tight">Mission Prerequisites</h3>
              </div>

              <div className="grid gap-4">
                 <ListItem text="Strong proficiency in C++ or Rust with a focus on memory safety and real-time constraints." delay={0.1} />
                 <ListItem text="Deep understanding of embedded systems, RTOS (FreeRTOS/RTEMS), and bare-metal programming." delay={0.2} />
                 <ListItem text="Experience with low-level communication protocols (CAN FD, Ethernet, SPI, UART)." delay={0.3} />
                 <ListItem text="Familiarity with continuous integration (CI/CD) pipelines for embedded targets." delay={0.4} />
                 <ListItem text="Ability to debug complex hardware/software interactions using JTAG and Logic Analyzers." delay={0.5} />
              </div>
          </section>

          {/* 4. PERKS GRID */}
          <section>
              <h3 className="text-sm font-bold text-white/40 uppercase tracking-[0.2em] mb-8 text-center">
                 — Deployment Benefits —
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                 <PerkItem icon={Zap} title="Direct Impact" text="Your logic controls the thrust." />
                 <PerkItem icon={Cpu} title="Custom Silicon" text="Run code on bespoke flight computers." />
                 <PerkItem icon={Shield} title="Mission Critical" text="Code that leaves the atmosphere." />
                 <PerkItem icon={GitBranch} title="Agile" text="No red tape. Ship fast. Fly often." />
              </div>
          </section>

        </div>

        {/* --- RIGHT COLUMN: METADATA & APPLY (Span 4) --- */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* JOB INTELLIGENCE CARD */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0f1115] border border-white/10 p-6 rounded-2xl relative overflow-hidden backdrop-blur-xl shadow-lg"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-[60px] pointer-events-none" />
            
            <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Server size={14} /> System Diagnostics
            </h4>
            
            <div className="space-y-6">
              <MetaRow icon={Briefcase} label="Department" value="Flight Software" />
              <MetaRow icon={MapPin} label="Location" value="Bengaluru, India" />
              <MetaRow icon={Code} label="Language" value="C++ / Rust" />
              <MetaRow icon={Laptop} label="Environment" value="Linux / RTOS" />
              <MetaRow icon={Cpu} label="Target" value="ARM Cortex-A/R" />
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-mono text-green-400 uppercase tracking-widest">
                        Build: Passing
                    </span>
                </div>
            </div>
          </motion.div>

          {/* APPLY FORM */}
          <div className="sticky top-24">
             <Apply role="Flight Software Engineer" />
          </div>
          
        </div>

      </div>
    </PageLayout>
  );
}

// --- SUB-COMPONENTS ---

function ListItem({ text, delay }: { text: string, delay: number }) {
  return (
    <motion.div 
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="flex items-start gap-4 group p-3 rounded-xl hover:bg-white/5 transition-colors border-l-2 border-transparent hover:border-green-500"
    >
      <div className="mt-1 min-w-[20px]">
         <CheckCircle2 className="text-green-500/50 group-hover:text-green-400 transition-colors" size={20} />
      </div>
      <span className="text-white/80 leading-relaxed font-light text-sm md:text-base group-hover:text-white transition-colors font-mono text-xs md:font-sans">
        {text}
      </span>
    </motion.div>
  );
}

function PerkItem({ icon: Icon, title, text }: any) {
    return (
        <div className="flex items-start gap-4 bg-white/[0.03] p-4 rounded-xl border border-white/5 hover:border-green-500/30 hover:bg-white/[0.06] transition-all group">
            <div className="p-2 bg-black rounded-lg text-white/60 group-hover:text-green-400 group-hover:scale-110 transition-all border border-white/10">
                <Icon size={18} />
            </div>
            <div>
                <h4 className="text-sm font-bold text-white mb-1">{title}</h4>
                <p className="text-xs text-white/50 leading-relaxed">{text}</p>
            </div>
        </div>
    )
}

function MetaRow({ icon: Icon, label, value }: any) {
  return (
    <div className="flex items-center gap-4 group">
      <div className="p-2.5 bg-white/5 rounded-lg text-white/40 border border-white/5 group-hover:border-green-500/30 group-hover:text-green-400 group-hover:bg-green-500/10 transition duration-300">
        <Icon size={18} />
      </div>
      <div>
        <p className="text-[9px] text-white/30 uppercase font-bold tracking-wider mb-0.5">{label}</p>
        <p className="text-white font-mono text-sm tracking-tight">{value}</p>
      </div>
    </div>
  );
}
