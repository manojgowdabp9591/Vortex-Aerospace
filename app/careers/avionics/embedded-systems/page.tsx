"use client";

import Apply from "@/app/components/Apply";
import PageLayout from "@/app/components/PageLayout";
import { Cpu, Code, CheckCircle2, MapPin, Briefcase, Users, ArrowRight, Zap, Shield, Binary } from "lucide-react";

export default function EmbeddedSystemsDeveloperPage() {
  return (
    <PageLayout
      title="Mission Briefing: Embedded Systems"
      subtitle="Program the metal. Read the sensors. Close the loop."
    >
      <div className="grid md:grid-cols-3 gap-10 mt-10">
        
        {/* LEFT COLUMN: JOB DETAILS */}
        <div className="md:col-span-2 space-y-12">
          
          {/* ABOUT */}
          <section className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm relative overflow-hidden group">
             {/* Binary Rain Background */}
             <div className="absolute inset-0 opacity-5 font-mono text-[10px] leading-3 overflow-hidden select-none pointer-events-none group-hover:opacity-10 transition duration-1000">
                {Array.from({ length: 40 }).map((_, i) => (
                    <div key={i} className="whitespace-nowrap animate-marquee">
                        0x{Math.random().toString(16).substr(2, 8).toUpperCase()} 0x{Math.random().toString(16).substr(2, 8).toUpperCase()}
                    </div>
                ))}
             </div>
             
             {/* Glow Effect */}
             <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] group-hover:bg-purple-500/20 transition duration-1000"></div>

             <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2 relative z-10">
               <Cpu className="animate-pulse" /> Mission Overview
             </h3>
             <p className="text-white/80 leading-relaxed text-lg font-light relative z-10">
               As an Embedded Systems Developer at <strong className="text-white font-medium">Vortex Aerospace</strong>, you will operate at the bare metal. You will 
               develop the low-level firmware that breathes life into our custom flight computers and 
               distributed avionics nodes. From high-speed sensor polling to millisecond-precise actuator control, 
               your code is the nervous system of the launch vehicle.
             </p>
          </section>

          {/* RESPONSIBILITIES */}
          <section>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
                <ArrowRight className="text-cyan-500" /> Operational Objectives
              </h3>
              <ul className="space-y-4">
                 <ListItem text="Develop highly efficient embedded firmware (C/C++) for ARM Cortex-M/R flight computers." />
                 <ListItem text="Write drivers to interface directly with sensors (IMUs, PTs, TCs) and actuators over SPI, I2C, and CAN FD." />
                 <ListItem text="Debug complex hardware-software interactions using oscilloscopes, logic analyzers, and JTAG." />
                 <ListItem text="Optimize interrupt service routines (ISRs) and DMA transfers for strict real-time constraints." />
                 <ListItem text="Implement bootloaders for reliable over-the-air (OTA) updates and redundancy management." />
              </ul>
          </section>

          {/* QUALIFICATIONS */}
          <section>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
                <ArrowRight className="text-cyan-500" /> Mission Prerequisites
              </h3>
              <ul className="space-y-4">
                 <ListItem text="Mastery of Embedded C and Modern C++ programming for resource-constrained environments." />
                 <ListItem text="Solid knowledge of RTOS principles (Task scheduling, Mutexes, Semaphores)." />
                 <ListItem text="Ability to read electrical schematics and datasheets to bring new boards up from scratch." />
                 <ListItem text="Experience with FPGA/SoC platforms (Zynq/Cyclone) is a major plus." />
                 <ListItem text="Familiarity with MISRA C guidelines and safety-critical coding standards." />
              </ul>
          </section>

          {/* WHAT WE OFFER */}
          <section>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
                <ArrowRight className="text-cyan-500" /> Mission Perks
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                 <PerkItem icon={Zap} text="Hands-on with custom avionics hardware." />
                 <PerkItem icon={Shield} text="Write flight-critical code." />
                 <PerkItem icon={Binary} text="Solve hard real-time problems." />
                 <PerkItem icon={Users} text="See your firmware ignite an engine." />
              </ul>
          </section>

        </div>

        {/* RIGHT COLUMN: METADATA & APPLY */}
        <div className="space-y-8">
          
          {/* JOB META CARD */}
          <div className="bg-black/40 border border-white/20 p-6 rounded-xl relative overflow-hidden">
            {/* Decorative Glow */}
            <div className="absolute top-0 right-0 p-10 bg-purple-500/10 blur-3xl rounded-full pointer-events-none"></div>
            
            <h4 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-6 border-b border-white/10 pb-4 flex items-center gap-2">
                <Briefcase size={14} /> Role Intel
            </h4>
            
            <div className="space-y-5">
              <MetaRow icon={Briefcase} label="Department" value="Avionics & Software" />
              <MetaRow icon={MapPin} label="Location" value="Hyderabad, India" />
              <MetaRow icon={Users} label="Openings" value="1 Position Available" />
              <MetaRow icon={Code} label="Stack" value="C / C++ / Assembly" />
              <MetaRow icon={Cpu} label="Target" value="ARM Cortex / RISC-V" />
            </div>
          </div>

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

function ListItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-white/70 hover:text-white transition-colors duration-300 group">
      <CheckCircle2 className="text-cyan-500 shrink-0 mt-1 group-hover:text-cyan-400 transition-colors" size={18} />
      <span className="leading-relaxed">{text}</span>
    </li>
  );
}

function PerkItem({ icon: Icon, text }: any) {
    return (
        <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5 hover:border-cyan-500/30 transition">
            <Icon size={18} className="text-cyan-400 shrink-0" />
            <span className="text-sm text-white/80">{text}</span>
        </li>
    )
}

function MetaRow({ icon: Icon, label, value }: any) {
  return (
    <div className="flex items-center gap-4 group">
      <div className="p-2 bg-white/5 rounded-lg text-cyan-500 border border-white/5 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition duration-300">
        <Icon size={20} />
      </div>
      <div>
        <p className="text-[10px] text-white/40 uppercase font-bold tracking-wider group-hover:text-cyan-500/70 transition">{label}</p>
        <p className="text-white font-mono text-sm">{value}</p>
      </div>
    </div>
  );
}