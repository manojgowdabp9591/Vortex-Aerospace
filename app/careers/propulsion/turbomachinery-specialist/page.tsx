"use client";

import Apply from "@/app/components/Apply";
import PageLayout from "@/app/components/PageLayout";
import { Fan, Wind, CheckCircle2, MapPin, Briefcase, Users, ArrowRight, Zap, Settings, Activity, Gauge, RotateCw } from "lucide-react";
import { motion } from "framer-motion";

export default function TurbomachinerySpecialistPage() {
  return (
    <PageLayout
      title={
        <>
          Role: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500">Turbomachinery Specialist</span>
        </>
      }
      subtitle="Design the heart of the engine. Push fluids to the limit. Manage the extreme pressures that power flight."
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
            {/* Rotating Turbine Background Effect */}
            <div className="absolute -right-24 -top-24 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-1000">
               <Fan size={400} className="animate-[spin_10s_linear_infinite] text-white" />
            </div>
            
            {/* Radial Gradient (Pressure/Flow) */}
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-cyan-500/5 to-transparent pointer-events-none" />

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 border border-cyan-500/20">
                        <RotateCw size={24} className="animate-spin-slow" />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-wide">
                        Mission Overview
                    </h3>
                </div>
                
                <p className="text-white/70 leading-relaxed text-lg font-light">
                    At <strong className="text-white font-medium">Vortex Aerospace</strong>, you will design and validate the high-performance turbopumps and rotating machinery 
                    that feed our VORTEX-1 engines. 
                    <br/><br/>
                    This role demands precision engineering to handle <span className="text-cyan-400">extreme pressures</span>, 
                    cryogenic temperatures, and cavitation margins. You are building the muscle that lifts us off the ground.
                </p>
            </div>
          </motion.section>

          

          {/* 2. RESPONSIBILITIES */}
          <section className="space-y-8">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                 <div className="h-1 w-12 bg-blue-500 rounded-full" />
                 <h3 className="text-2xl font-bold text-white tracking-tight">Operational Objectives</h3>
              </div>
              
              <div className="grid gap-4">
                 <ListItem text="Design turbopumps and high-speed rotating assemblies (Impellers, Inducers, Turbines) for Methalox cycles." delay={0.1} />
                 <ListItem text="Perform rotor dynamics analysis to ensure stability across the operating range (Campbell diagrams, critical speeds)." delay={0.2} />
                 <ListItem text="Analyze vibration, fatigue, and thermal loads using FEA/CFD tools (ANSYS, CFX, Star-CCM+)." delay={0.3} />
                 <ListItem text="Select materials for extreme environments (Inconel, Monel, Cryogenic Steels)." delay={0.4} />
                 <ListItem text="Collaborate with combustion engineers to match pump performance with thrust chamber requirements." delay={0.5} />
              </div>
          </section>

          {/* 3. QUALIFICATIONS */}
          <section className="space-y-8">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                 <div className="h-1 w-12 bg-indigo-500 rounded-full" />
                 <h3 className="text-2xl font-bold text-white tracking-tight">Mission Prerequisites</h3>
              </div>

              <div className="grid gap-4">
                 <ListItem text="BS/MS in Mechanical or Aerospace Engineering with a focus on fluid dynamics or turbomachinery." delay={0.1} />
                 <ListItem text="3+ years of experience with turbomachinery, pumps, gas turbines, or automotive superchargers." delay={0.2} />
                 <ListItem text="Proficiency in CAD (NX/SolidWorks) and simulation tools (ANSYS, NumPy/Matlab)." delay={0.3} />
                 <ListItem text="Understanding of bearing systems (ball/hydrostatic), dynamic seals, and lubrication in cryogenic fluids." delay={0.4} />
              </div>
          </section>

          {/* 4. PERKS GRID */}
          <section>
              <h3 className="text-sm font-bold text-white/40 uppercase tracking-[0.2em] mb-8 text-center">
                 — Deployment Benefits —
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                 <PerkItem icon={Zap} title="System Ownership" text="Direct responsibility for critical propulsion subsystems." />
                 <PerkItem icon={Activity} title="Full Lifecycle" text="Own it from CAD Design → Manufacturing → Hot Fire." />
                 <PerkItem icon={Settings} title="Innovation" text="Work on novel RDE pump cycles and geometries." />
                 <PerkItem icon={Users} title="Collaboration" text="Tight-knit, high-pace engineering team." />
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
            className="bg-black/40 border border-white/10 p-6 rounded-2xl relative overflow-hidden backdrop-blur-xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 blur-[60px] pointer-events-none" />
            
            <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Briefcase size={14} /> Position Intelligence
            </h4>
            
            <div className="space-y-6">
              <MetaRow icon={Settings} label="Department" value="Propulsion Engineering" />
              <MetaRow icon={MapPin} label="Location" value="Bengaluru, India" />
              <MetaRow icon={Users} label="Openings" value="1 Position Available" />
              <MetaRow icon={Wind} label="Domain" value="Fluid Dynamics" />
              <MetaRow icon={Gauge} label="System" value="Turbopumps" />
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">
                        Status: Critical Hire
                    </span>
                </div>
            </div>
          </motion.div>

          {/* APPLY FORM */}
          <div className="sticky top-24">
             <Apply role="Turbomachinery Specialist" />
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
        className="flex items-start gap-4 group p-3 rounded-xl hover:bg-white/5 transition-colors"
    >
      <div className="mt-1 min-w-[20px]">
         <CheckCircle2 className="text-cyan-500/50 group-hover:text-cyan-400 transition-colors" size={20} />
      </div>
      <span className="text-white/80 leading-relaxed font-light text-sm md:text-base group-hover:text-white transition-colors">
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
