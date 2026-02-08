"use client";

import Apply from "@/app/components/Apply";
import PageLayout from "@/app/components/PageLayout";
import { Compass, Crosshair, Cpu, CheckCircle2, MapPin, Briefcase, Users, ArrowRight, Activity, Zap } from "lucide-react";

export default function GNCEngineerPage() {
  return (
    <PageLayout
      title="Mission Briefing: GNC Engineer"
      subtitle="Steer the vehicle. Thread the needle. Stick the landing."
    >
      <div className="grid md:grid-cols-3 gap-10 mt-10">
        
        {/* LEFT COLUMN: JOB DETAILS */}
        <div className="md:col-span-2 space-y-12">
          
          {/* ABOUT */}
          <section className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm relative overflow-hidden group">
             {/* Background Grid Animation */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10 pointer-events-none group-hover:opacity-20 transition duration-1000"></div>
             
             {/* Glow Effect */}
             <div className="absolute -left-10 -top-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] group-hover:bg-cyan-500/20 transition duration-1000"></div>
             
             <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2 relative z-10">
               <Compass className="animate-pulse" /> Mission Overview
             </h3>
             <p className="text-white/80 leading-relaxed text-lg font-light relative z-10">
               As a Guidance, Navigation, and Control (GNC) Engineer at <strong className="text-white font-medium">Vortex Aerospace</strong>, you will design the brain of the vehicle. 
               Your algorithms will pilot the rocket autonomously through the chaotic atmosphere, 
               managing the unique dynamics of our Lifting Body architecture and RDE propulsion. 
               You turn physics into code to ensure we reach orbit with precision and return home for a pinpoint landing.
             </p>
          </section>

          {/* RESPONSIBILITIES */}
          <section>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
                <ArrowRight className="text-cyan-500" /> Operational Objectives
              </h3>
              <ul className="space-y-4">
                 <ListItem text="Develop robust 6-DOF control laws (TVC & RCS) for ascent, reentry, and landing phases." />
                 <ListItem text="Design state estimators (Kalman Filters) to fuse IMU, GPS, and Star Tracker data." />
                 <ListItem text="Build high-fidelity simulations (Monte Carlo) to validate vehicle performance under dispersion." />
                 <ListItem text="Implement guidance algorithms for optimal trajectory shaping (energy management)." />
                 <ListItem text="Analyze post-flight data to refine aerodynamic coefficients and control models." />
              </ul>
          </section>

          {/* QUALIFICATIONS */}
          <section>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
                <ArrowRight className="text-cyan-500" /> Mission Prerequisites
              </h3>
              <ul className="space-y-4">
                 <ListItem text="MS/PhD in Aerospace, Electrical, or Mechanical Engineering (Control Theory focus)." />
                 <ListItem text="Deep understanding of classical (PID) and modern control (LQR, H-infinity, MPC)." />
                 <ListItem text="Proficiency in C++ for flight code and MATLAB/Simulink/Python for analysis." />
                 <ListItem text="Experience with orbital mechanics, rigid body dynamics, and quaternions." />
                 <ListItem text="Familiarity with real-time operating systems (RTOS) is a plus." />
              </ul>
          </section>

          {/* WHAT WE OFFER */}
          <section>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
                <ArrowRight className="text-cyan-500" /> Mission Perks
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                 <PerkItem icon={Zap} text="Work on fully autonomous flight systems." />
                 <PerkItem icon={Activity} text="See your math fly to space." />
                 <PerkItem icon={Cpu} text="Direct code ownership: No red tape." />
                 <PerkItem icon={Crosshair} text="Solve complex reentry guidance problems." />
              </ul>
          </section>

        </div>

        {/* RIGHT COLUMN: METADATA & APPLY */}
        <div className="space-y-8">
          
          {/* JOB META CARD */}
          <div className="bg-black/40 border border-white/20 p-6 rounded-xl relative overflow-hidden">
            {/* Decorative Glow */}
            <div className="absolute top-0 right-0 p-10 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none"></div>
            
            <h4 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-6 border-b border-white/10 pb-4 flex items-center gap-2">
                <Briefcase size={14} /> Role Intel
            </h4>
            
            <div className="space-y-5">
              <MetaRow icon={Briefcase} label="Department" value="Avionics & Software" />
              <MetaRow icon={MapPin} label="Location" value="Bengaluru, India" />
              <MetaRow icon={Users} label="Openings" value="1 Position Available" />
              <MetaRow icon={Crosshair} label="Domain" value="Control Theory" />
              <MetaRow icon={Activity} label="Focus" value="Trajectory Optimization" />
            </div>
          </div>

          {/* APPLY FORM */}
          <div className="sticky top-24">
             <Apply role="GNC Engineer" />
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