"use client";

import Apply from "@/app/components/Apply";
import PageLayout from "@/app/components/PageLayout";
import { Terminal, Code, Cpu, CheckCircle2, MapPin, Briefcase, Users, ArrowRight, Zap, Shield } from "lucide-react";

export default function FlightSoftwareEngineerPage() {
  return (
    <PageLayout
      title="Mission Briefing: Flight Software"
      subtitle="Code the brain. Control the descent. execute(launch)."
    >
      <div className="grid md:grid-cols-3 gap-10 mt-10">
        
        {/* LEFT COLUMN: JOB DETAILS */}
        <div className="md:col-span-2 space-y-12">
          
          {/* ABOUT */}
          <section className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm relative overflow-hidden group">
             {/* Matrix-like Code Background */}
             <div className="absolute inset-0 opacity-5 font-mono text-xs leading-none overflow-hidden select-none pointer-events-none group-hover:opacity-10 transition duration-1000">
               {Array.from({ length: 50 }).map((_, i) => (
                 <div key={i} className="whitespace-nowrap animate-marquee">
                   01010101010011101010001010111101010100101010111010101
                 </div>
               ))}
             </div>

             {/* Glow Effect */}
             <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-green-500/10 rounded-full blur-[80px] group-hover:bg-green-500/20 transition duration-1000"></div>

             <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2 relative z-10">
               <Terminal className="animate-pulse" /> Mission Overview
             </h3>
             <p className="text-white/80 leading-relaxed text-lg font-light relative z-10">
               As a Flight Software Engineer at <strong className="text-white font-medium">Vortex Aerospace</strong>, you will write the code that keeps the rocket pointed 
               at the stars—and brings it back safely. You will develop real-time, safety-critical 
               software that runs on the metal, controlling everything from VORTEX-1 engine throttling to 
               grid fin actuation. In this role, a segmentation fault isn't just an error; it's a mission failure.
             </p>
          </section>

          {/* RESPONSIBILITIES */}
          <section>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
                <ArrowRight className="text-cyan-500" /> Operational Objectives
              </h3>
              <ul className="space-y-4">
                 <ListItem text="Write high-performance, safety-critical flight software in Modern C++ (17/20) and Rust." />
                 <ListItem text="Develop Hardware-in-the-Loop (HITL) simulation frameworks to validate logic on real avionics." />
                 <ListItem text="Design fault-tolerant state machines for autonomous launch, stage separation, and landing." />
                 <ListItem text="Implement drivers for sensors (IMU, GPS) and actuators (TVC, Valves) over CAN/Ethernet." />
                 <ListItem text="Support mission control operations and analyze real-time telemetry data." />
              </ul>
          </section>

          {/* QUALIFICATIONS */}
          <section>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
                <ArrowRight className="text-cyan-500" /> Mission Prerequisites
              </h3>
              <ul className="space-y-4">
                 <ListItem text="Strong proficiency in C++ or Rust with a focus on memory safety and real-time constraints." />
                 <ListItem text="Deep understanding of embedded systems, RTOS (FreeRTOS/RTEMS), and bare-metal programming." />
                 <ListItem text="Experience with low-level communication protocols (CAN FD, Ethernet, SPI, UART)." />
                 <ListItem text="Familiarity with continuous integration (CI/CD) for embedded targets." />
                 <ListItem text="Ability to debug complex hardware/software interactions." />
              </ul>
          </section>

          {/* WHAT WE OFFER */}
          <section>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
                <ArrowRight className="text-cyan-500" /> Mission Perks
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                 <PerkItem icon={Zap} text="Direct impact on flight logic." />
                 <PerkItem icon={Cpu} text="Work with custom avionics hardware." />
                 <PerkItem icon={Shield} text="Code that leaves the atmosphere." />
                 <PerkItem icon={Users} text="No red tape. Ship fast." />
              </ul>
          </section>

        </div>

        {/* RIGHT COLUMN: METADATA & APPLY */}
        <div className="space-y-8">
          
          {/* JOB META CARD */}
          <div className="bg-black/40 border border-white/20 p-6 rounded-xl relative overflow-hidden">
            {/* Decorative Glow */}
            <div className="absolute top-0 right-0 p-10 bg-green-500/10 blur-3xl rounded-full pointer-events-none"></div>
            
            <h4 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-6 border-b border-white/10 pb-4 flex items-center gap-2">
                <Briefcase size={14} /> Role Intel
            </h4>
            
            <div className="space-y-5">
              <MetaRow icon={Briefcase} label="Department" value="Avionics & Software" />
              <MetaRow icon={MapPin} label="Location" value="Bengaluru, India" />
              <MetaRow icon={Users} label="Openings" value="2 Positions Available" />
              <MetaRow icon={Code} label="Stack" value="C++ / Rust / RTOS" />
              <MetaRow icon={Cpu} label="Hardware" value="ARM Cortex / FPGA" />
            </div>
          </div>

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