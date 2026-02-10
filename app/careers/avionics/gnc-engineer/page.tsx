"use client";

import Apply from "@/app/components/Apply";
import PageLayout from "@/app/components/PageLayout";
import { Compass, Crosshair, Cpu, CheckCircle2, MapPin, Briefcase, Users, ArrowRight, Activity, Zap, Navigation, Globe, Target } from "lucide-react";
import { motion } from "framer-motion";

export default function GNCEngineerPage() {
  return (
    <PageLayout
      title={
        <>
          Role: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">GNC Engineer</span>
        </>
      }
      subtitle="Steer the vehicle. Thread the needle. Stick the landing. Turn physics into code."
    >
      <div className="grid lg:grid-cols-12 gap-10 mt-12">
        
        {/* --- LEFT COLUMN: MISSION DETAILS (Span 8) --- */}
        <div className="lg:col-span-8 space-y-16">
          
          {/* 1. MISSION OVERVIEW CARD */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-white/[0.02] border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-md overflow-hidden group"
          >
            {/* Orbital Trajectory Background */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10 mix-blend-overlay" />
            <div className="absolute -right-20 -top-20 w-96 h-96 border border-cyan-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute -right-10 -top-10 w-64 h-64 border border-dashed border-cyan-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 border border-cyan-500/20">
                        <Compass size={24} className="animate-pulse" />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-wide">
                        Mission Overview
                    </h3>
                </div>
                
                <p className="text-white/70 leading-relaxed text-lg font-light mb-6">
                    As a Guidance, Navigation, and Control (GNC) Engineer at <strong className="text-white font-medium">Vortex Aerospace</strong>, you will design the brain of the vehicle. 
                    <br/><br/>
                    Your algorithms will pilot the rocket autonomously through the chaotic atmosphere, managing the unique dynamics of our <span className="text-cyan-400">Lifting Body architecture</span> and RDE propulsion. 
                    You turn physics into code to ensure we reach orbit with precision and return home for a pinpoint landing.
                </p>

                
            </div>
          </motion.section>

          {/* 2. RESPONSIBILITIES */}
          <section className="space-y-8">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                 <div className="h-1 w-12 bg-cyan-500 rounded-full" />
                 <h3 className="text-2xl font-bold text-white tracking-tight">Operational Objectives</h3>
              </div>
              
              <div className="grid gap-4">
                 <ListItem text="Develop robust 6-DOF control laws (TVC & RCS) for ascent, hypersonic reentry, and propulsive landing phases." delay={0.1} />
                 <ListItem text="Design state estimators (Kalman Filters / EKF) to fuse IMU, GPS, and Star Tracker data." delay={0.2} />
                 
                 <ListItem text="Build high-fidelity simulations (Monte Carlo) to validate vehicle performance under aerodynamic dispersion." delay={0.3} />
                 <ListItem text="Implement guidance algorithms (convex optimization) for optimal trajectory shaping and energy management." delay={0.4} />
                 <ListItem text="Analyze post-flight telemetry to refine aerodynamic coefficients and control models." delay={0.5} />
              </div>
          </section>

          {/* 3. QUALIFICATIONS */}
          <section className="space-y-8">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                 <div className="h-1 w-12 bg-blue-500 rounded-full" />
                 <h3 className="text-2xl font-bold text-white tracking-tight">Mission Prerequisites</h3>
              </div>

              <div className="grid gap-4">
                 <ListItem text="MS/PhD in Aerospace, Electrical, or Mechanical Engineering (Focus on Control Theory / Dynamics)." delay={0.1} />
                 <ListItem text="Deep understanding of classical (PID) and modern control (LQR, H-infinity, MPC)." delay={0.2} />
                 <ListItem text="Proficiency in C++ for flight code implementation and MATLAB/Simulink/Python for analysis." delay={0.3} />
                 <ListItem text="Experience with orbital mechanics, rigid body dynamics, and quaternions." delay={0.4} />
                 <ListItem text="Familiarity with real-time operating systems (RTOS) and flight software architecture is a plus." delay={0.5} />
              </div>
          </section>

          {/* 4. PERKS GRID */}
          <section>
              <h3 className="text-sm font-bold text-white/40 uppercase tracking-[0.2em] mb-8 text-center">
                 — Deployment Benefits —
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                 <PerkItem icon={Zap} title="Autonomy" text="Work on fully autonomous flight systems." />
                 <PerkItem icon={Activity} title="Validation" text="See your math fly to space." />
                 <PerkItem icon={Cpu} title="Ownership" text="Direct code ownership: No red tape." />
                 <PerkItem icon={Crosshair} title="Challenge" text="Solve complex hypersonic guidance problems." />
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
            className="bg-[#0b1120] border border-white/10 p-6 rounded-2xl relative overflow-hidden backdrop-blur-xl shadow-lg"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[60px] pointer-events-none" />
            
            <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Navigation size={14} /> Vector Data
            </h4>
            
            <div className="space-y-6">
              <MetaRow icon={Briefcase} label="Department" value="Avionics & Software" />
              <MetaRow icon={MapPin} label="Location" value="Bengaluru, India" />
              <MetaRow icon={Users} label="Openings" value="1 Position Available" />
              <MetaRow icon={Globe} label="Frame" value="ECEF / J2000" />
              <MetaRow icon={Target} label="Focus" value="Ascent & Reentry" />
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                        State: Nominal
                    </span>
                </div>
            </div>
          </motion.div>

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

function ListItem({ text, delay }: { text: string, delay: number }) {
  return (
    <motion.div 
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="flex items-start gap-4 group p-3 rounded-xl hover:bg-white/5 transition-colors border-l-2 border-transparent hover:border-cyan-500"
    >
      <div className="mt-1 min-w-[20px]">
         <CheckCircle2 className="text-cyan-500/50 group-hover:text-cyan-400 transition-colors" size={20} />
      </div>
      <span className="text-white/80 leading-relaxed font-light text-sm md:text-base group-hover:text-white transition-colors font-mono text-xs md:font-sans">
        {text}
      </span>
    </motion.div>
  );
}

function PerkItem({ icon: Icon, title, text }: any) {
    return (
        <div className="flex items-start gap-4 bg-white/[0.03] p-4 rounded-xl border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.06] transition-all group">
            <div className="p-2 bg-black rounded-lg text-white/60 group-hover:text-cyan-400 group-hover:scale-110 transition-all border border-white/10">
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
      <div className="p-2.5 bg-white/5 rounded-lg text-white/40 border border-white/5 group-hover:border-cyan-500/30 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition duration-300">
        <Icon size={18} />
      </div>
      <div>
        <p className="text-[9px] text-white/30 uppercase font-bold tracking-wider mb-0.5">{label}</p>
        <p className="text-white font-mono text-sm tracking-tight">{value}</p>
      </div>
    </div>
  );
}
