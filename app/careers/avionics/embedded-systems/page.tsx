"use client";

import Apply from "@/app/components/Apply";
import PageLayout from "@/app/components/PageLayout";
import { Cpu, Code, CheckCircle2, MapPin, Briefcase, Users, ArrowRight, Zap, Shield, Binary, Terminal, Server } from "lucide-react";
import { motion } from "framer-motion";

export default function EmbeddedSystemsDeveloperPage() {
  return (
    <PageLayout
      title={
        <>
          Role: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500">Embedded Systems Dev</span>
        </>
      }
      subtitle="Program the metal. Read the sensors. Close the loop. The nervous system of the launch vehicle starts with your code."
    >
      <div className="grid lg:grid-cols-12 gap-10 mt-12">
        
        {/* --- LEFT COLUMN: MISSION DETAILS (Span 8) --- */}
        <div className="lg:col-span-8 space-y-16">
          
          {/* 1. MISSION OVERVIEW CARD */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-[#0a0a12] border border-purple-500/20 p-8 md:p-10 rounded-3xl overflow-hidden group shadow-2xl"
          >
             {/* Binary Rain Background */}
             <div className="absolute inset-0 opacity-10 font-mono text-[10px] leading-3 overflow-hidden select-none pointer-events-none text-purple-500">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="whitespace-nowrap animate-[marquee_20s_linear_infinite]" style={{ animationDelay: `${Math.random() * -5}s`, opacity: Math.random() }}>
                        {Array.from({ length: 40 }).map(() => Math.random() > 0.5 ? '1' : '0').join(' ')}
                    </div>
                ))}
             </div>
             
             {/* PCB Trace Decoration */}
             <div className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-purple-500/20 rounded-br-3xl pointer-events-none" />
             <div className="absolute bottom-4 right-4 w-2 h-2 bg-purple-500 rounded-full animate-ping" />

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400 border border-purple-500/20">
                        <Cpu size={24} className="animate-pulse" />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-wide font-mono">
                        ./Mission_Overview.md
                    </h3>
                </div>
                
                <p className="text-white/70 leading-relaxed text-lg font-light mb-6">
                    As an Embedded Systems Developer at <strong className="text-white font-medium">Vortex Aerospace</strong>, you will operate at the bare metal. 
                    <br/><br/>
                    You will develop the <span className="text-purple-400 font-mono">low-level firmware</span> that breathes life into our custom flight computers and distributed avionics nodes. 
                    From high-speed sensor polling to millisecond-precise actuator control, your code is the nervous system of the launch vehicle.
                </p>

                
            </div>
          </motion.section>

          {/* 2. RESPONSIBILITIES */}
          <section className="space-y-8">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                 <div className="h-1 w-12 bg-purple-500 rounded-full" />
                 <h3 className="text-2xl font-bold text-white tracking-tight">Operational Objectives</h3>
              </div>
              
              <div className="grid gap-4">
                 <ListItem text="Develop highly efficient embedded firmware (C/C++) for ARM Cortex-M/R flight computers." delay={0.1} />
                 <ListItem text="Write drivers to interface directly with sensors (IMUs, PTs, TCs) and actuators over SPI, I2C, and CAN FD." delay={0.2} />
                 
                 <ListItem text="Debug complex hardware-software interactions using oscilloscopes, logic analyzers, and JTAG probes." delay={0.3} />
                 <ListItem text="Optimize interrupt service routines (ISRs) and DMA transfers for strict real-time constraints." delay={0.4} />
                 <ListItem text="Implement bootloaders for reliable over-the-air (OTA) updates and redundancy management." delay={0.5} />
              </div>
          </section>

          {/* 3. QUALIFICATIONS */}
          <section className="space-y-8">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                 <div className="h-1 w-12 bg-fuchsia-500 rounded-full" />
                 <h3 className="text-2xl font-bold text-white tracking-tight">Mission Prerequisites</h3>
              </div>

              <div className="grid gap-4">
                 <ListItem text="Mastery of Embedded C and Modern C++ (C++14/17) for resource-constrained environments." delay={0.1} />
                 <ListItem text="Solid knowledge of RTOS principles (FreeRTOS/Zephyr: Task scheduling, Mutexes, Semaphores)." delay={0.2} />
                 <ListItem text="Ability to read electrical schematics and datasheets to bring new boards up from scratch." delay={0.3} />
                 <ListItem text="Experience with FPGA/SoC platforms (Zynq/Cyclone/SmartFusion) is a major plus." delay={0.4} />
                 <ListItem text="Familiarity with MISRA C guidelines and safety-critical coding standards." delay={0.5} />
              </div>
          </section>

          {/* 4. PERKS GRID */}
          <section>
              <h3 className="text-sm font-bold text-white/40 uppercase tracking-[0.2em] mb-8 text-center">
                 — Deployment Benefits —
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                 <PerkItem icon={Zap} title="Custom Hardware" text="Hands-on with bespoke avionics boards." />
                 <PerkItem icon={Shield} title="Criticality" text="Write code that cannot fail." />
                 <PerkItem icon={Binary} title="Real-Time" text="Solve hard millisecond-level timing problems." />
                 <PerkItem icon={Users} title="Impact" text="See your firmware ignite the engines." />
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
            className="bg-[#0f0f16] border border-white/10 p-6 rounded-2xl relative overflow-hidden backdrop-blur-xl shadow-lg"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[60px] pointer-events-none" />
            
            <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Terminal size={14} /> Stack Intel
            </h4>
            
            <div className="space-y-6">
              <MetaRow icon={Briefcase} label="Department" value="Avionics & Software" />
              <MetaRow icon={MapPin} label="Location" value="Hyderabad, India" />
              <MetaRow icon={Code} label="Languages" value="C / C++ / Assembly" />
              <MetaRow icon={Cpu} label="Architecture" value="ARM Cortex-M / R" />
              <MetaRow icon={Server} label="RTOS" value="FreeRTOS / Bare Metal" />
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                    <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">
                        Core Dump: Clean
                    </span>
                </div>
            </div>
          </motion.div>

          {/* APPLY FORM */}
          <div className="sticky top-24">
             <Apply role="Embedded Systems Developer" />
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
        className="flex items-start gap-4 group p-3 rounded-xl hover:bg-white/5 transition-colors border-l-2 border-transparent hover:border-purple-500"
    >
      <div className="mt-1 min-w-[20px]">
         <CheckCircle2 className="text-purple-500/50 group-hover:text-purple-400 transition-colors" size={20} />
      </div>
      <span className="text-white/80 leading-relaxed font-light text-sm md:text-base group-hover:text-white transition-colors font-mono text-xs md:font-sans">
        {text}
      </span>
    </motion.div>
  );
}

function PerkItem({ icon: Icon, title, text }: any) {
    return (
        <div className="flex items-start gap-4 bg-white/[0.03] p-4 rounded-xl border border-white/5 hover:border-purple-500/30 hover:bg-white/[0.06] transition-all group">
            <div className="p-2 bg-black rounded-lg text-white/60 group-hover:text-purple-400 group-hover:scale-110 transition-all border border-white/10">
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
      <div className="p-2.5 bg-white/5 rounded-lg text-white/40 border border-white/5 group-hover:border-purple-500/30 group-hover:text-purple-400 group-hover:bg-purple-500/10 transition duration-300">
        <Icon size={18} />
      </div>
      <div>
        <p className="text-[9px] text-white/30 uppercase font-bold tracking-wider mb-0.5">{label}</p>
        <p className="text-white font-mono text-sm tracking-tight">{value}</p>
      </div>
    </div>
  );
}
