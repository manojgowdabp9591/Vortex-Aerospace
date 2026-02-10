"use client";

import Apply from "@/app/components/Apply";
import PageLayout from "@/app/components/PageLayout";
import { Flame, Crosshair, Zap, CheckCircle2, MapPin, Briefcase, Users, ArrowRight, Activity, Cpu, Thermometer, Waves } from "lucide-react";
import { motion } from "framer-motion";

export default function CombustionEngineerPage() {
  return (
    <PageLayout
      title={
        <>
          Role: <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-amber-500">Combustion Devices Engineer</span>
        </>
      }
      subtitle="Tame the fire. Design the thrust chamber. Ignite the future. Engineering at the edge of detonation physics."
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
            {/* Animated Heat Haze Background */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10 mix-blend-overlay" />
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-red-600/20 rounded-full blur-[100px] pointer-events-none group-hover:bg-red-500/30 transition-all duration-1000" />
            
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-red-500/10 rounded-lg text-red-500 border border-red-500/20">
                        <Flame size={24} className="animate-pulse" />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-wide">
                        Mission Overview
                    </h3>
                </div>
                
                <p className="text-white/70 leading-relaxed text-lg font-light mb-6">
                    At <strong className="text-white font-medium">Vortex Aerospace</strong>, you will design, analyze, and test the combustion systems for our 
                    VORTEX-1 Rotary Detonation Engines (RDE). This is not just deflagration; this is <span className="text-orange-400 font-medium">detonation</span>.
                    <br /><br />
                    You will be working at the bleeding edge of propulsion physics, designing annular chambers 
                    where shockwaves travel at supersonic speeds to deliver unmatched efficiency.
                </p>

                
            </div>
          </motion.section>

          {/* 2. RESPONSIBILITIES */}
          <section className="space-y-8">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                 <div className="h-1 w-12 bg-orange-500 rounded-full" />
                 <h3 className="text-2xl font-bold text-white tracking-tight">Operational Objectives</h3>
              </div>
              
              <div className="grid gap-4">
                 <ListItem text="Design injector patterns (pintle/coaxial) and annular combustion chamber geometries for RDE cycles." delay={0.1} />
                 <ListItem text="Analyze high-frequency combustion instabilities (acoustic modes) and detonation wave propagation." delay={0.2} />
                 <ListItem text="Model regenerative cooling circuits to survive high heat-flux environments (>100 MW/m²)." delay={0.3} />
                 <ListItem text="Lead hot-fire testing campaigns, analyzing ISP, C*, and thrust coefficients." delay={0.4} />
                 <ListItem text="Collaborate with turbomachinery teams to match injector pressure drops with pump discharge." delay={0.5} />
              </div>
          </section>

          {/* 3. QUALIFICATIONS */}
          <section className="space-y-8">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                 <div className="h-1 w-12 bg-red-600 rounded-full" />
                 <h3 className="text-2xl font-bold text-white tracking-tight">Mission Prerequisites</h3>
              </div>

              <div className="grid gap-4">
                 <ListItem text="BS/MS in Aerospace or Mechanical Engineering with a focus on propulsion/thermodynamics." delay={0.1} />
                 <ListItem text="Strong background in compressible flow, shock physics, and reacting flows." delay={0.2} />
                 <ListItem text="Experience with CFD tools (ANSYS Fluent, OpenFOAM, RPA) for combustion modeling." delay={0.3} />
                 <ListItem text="Familiarity with liquid bipropellant systems (Methalox architecture preferred)." delay={0.4} />
                 <ListItem text="Hands-on experience with high-pressure fluid systems (P&ID) is a major plus." delay={0.5} />
              </div>
          </section>

          {/* 4. PERKS GRID */}
          <section>
              <h3 className="text-sm font-bold text-white/40 uppercase tracking-[0.2em] mb-8 text-center">
                 — Deployment Benefits —
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                 <PerkItem icon={Zap} title="Pioneering Tech" text="Work on the world's first commercial RDE." />
                 <PerkItem icon={Activity} title="Test Campaigns" text="Direct access to hot-fire test stands." />
                 <PerkItem icon={Cpu} title="Compute Power" text="High-performance computing clusters for CFD." />
                 <PerkItem icon={Users} title="Mentorship" text="Collaborate with industry veterans." />
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
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 blur-[60px] pointer-events-none" />
            
            <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Briefcase size={14} /> Position Intelligence
            </h4>
            
            <div className="space-y-6">
              <MetaRow icon={Flame} label="Department" value="Propulsion Engineering" />
              <MetaRow icon={MapPin} label="Location" value="Bengaluru, India" />
              <MetaRow icon={Users} label="Openings" value="1 Position Available" />
              <MetaRow icon={Waves} label="Physics" value="Detonation Wave" />
              <MetaRow icon={Crosshair} label="Component" value="Thrust Chamber" />
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs font-mono text-red-400 uppercase tracking-widest">
                        Clearance: Proprietary
                    </span>
                </div>
            </div>
          </motion.div>

          {/* APPLY FORM */}
          <div className="sticky top-24">
             <Apply role="Combustion Devices Engineer" />
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
         <CheckCircle2 className="text-orange-500/50 group-hover:text-orange-400 transition-colors" size={20} />
      </div>
      <span className="text-white/80 leading-relaxed font-light text-sm md:text-base group-hover:text-white transition-colors">
        {text}
      </span>
    </motion.div>
  );
}

function PerkItem({ icon: Icon, title, text }: any) {
    return (
        <div className="flex items-start gap-4 bg-white/[0.03] p-4 rounded-xl border border-white/5 hover:border-orange-500/30 hover:bg-white/[0.06] transition-all group">
            <div className="p-2 bg-black rounded-lg text-white/60 group-hover:text-orange-400 group-hover:scale-110 transition-all border border-white/10">
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
      <div className="p-2.5 bg-white/5 rounded-lg text-white/40 border border-white/5 group-hover:border-orange-500/30 group-hover:text-orange-400 group-hover:bg-orange-500/10 transition duration-300">
        <Icon size={18} />
      </div>
      <div>
        <p className="text-[9px] text-white/30 uppercase font-bold tracking-wider mb-0.5">{label}</p>
        <p className="text-white font-mono text-sm tracking-tight">{value}</p>
      </div>
    </div>
  );
}
