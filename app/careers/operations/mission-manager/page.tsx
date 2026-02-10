"use client";

import Apply from "@/app/components/Apply";
import PageLayout from "@/app/components/PageLayout";
import { Radio, Target, CheckCircle2, MapPin, Briefcase, Users, ArrowRight, Zap, Shield, Globe, Clock, Calendar, Siren, LayoutDashboard } from "lucide-react";
import { motion } from "framer-motion";

export default function MissionManagerPage() {
  return (
    <PageLayout
      title={
        <>
          Role: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-500 to-teal-400">Mission Manager</span>
        </>
      }
      subtitle="Orchestrate the countdown. Clear the range. The voice of the vehicle. The final authority on 'Go/No-Go'."
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
            {/* Radar Sweep Effect */}
            <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full border border-emerald-500/10 opacity-30 animate-[spin_10s_linear_infinite] pointer-events-none group-hover:opacity-50 transition duration-1000">
                <div className="absolute top-1/2 left-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent to-emerald-500/50 origin-left -translate-y-1/2" />
            </div>
            
            {/* Concentric Circles (Targeting) */}
            <div className="absolute -right-20 -top-20 w-[400px] h-[400px] rounded-full border border-dashed border-white/5 pointer-events-none" />
            <div className="absolute -right-10 -top-10 w-[300px] h-[300px] rounded-full border border-white/5 pointer-events-none" />

            {/* Glow Effect */}
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] group-hover:bg-emerald-500/20 transition duration-1000" />

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 border border-emerald-500/20">
                        <Radio size={24} className="animate-pulse" />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-wide">
                        Mission Overview
                    </h3>
                </div>
                
                <p className="text-white/70 leading-relaxed text-lg font-light mb-6">
                    As a Mission Manager at <strong className="text-white font-medium">Vortex Aerospace</strong>, you are the conductor of the symphony of fire. 
                    <br/><br/>
                    You will lead mission planning and execution across all launch operations at Sriharikota. From payload integration to the final terminal count, 
                    you hold the playbook that ensures our vehicles reach orbit safely and on schedule.
                </p>

                
            </div>
          </motion.section>

          {/* 2. RESPONSIBILITIES */}
          <section className="space-y-8">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                 <div className="h-1 w-12 bg-emerald-500 rounded-full" />
                 <h3 className="text-2xl font-bold text-white tracking-tight">Operational Objectives</h3>
              </div>
              
              <div className="grid gap-4">
                 <ListItem text="Plan and execute end-to-end launch campaigns, from vehicle rollout to liftoff." delay={0.1} />
                 
                 <ListItem text="Coordinate cross-functional teams (Avionics, Propulsion, GNC) during critical countdown phases." delay={0.2} />
                 <ListItem text="Serve as the primary point of contact for payload customers and ISRO Range Safety Officers (RSO)." delay={0.3} />
                 <ListItem text="Develop and enforce Launch Commit Criteria (LCC) for vehicle health and weather (Wind/Lightning)." delay={0.4} />
                 <ListItem text="Exercise final 'Go/No-Go' authority during the terminal count poll." delay={0.5} />
              </div>
          </section>

          {/* 3. QUALIFICATIONS */}
          <section className="space-y-8">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                 <div className="h-1 w-12 bg-teal-500 rounded-full" />
                 <h3 className="text-2xl font-bold text-white tracking-tight">Mission Prerequisites</h3>
              </div>

              <div className="grid gap-4">
                 <ListItem text="5+ years of aerospace operations experience (Launch Control, Flight Directing, or Range Safety)." delay={0.1} />
                 <ListItem text="Strong leadership skills with the ability to make split-second decisions under extreme pressure." delay={0.2} />
                 <ListItem text="Deep understanding of launch vehicle systems, trajectory dynamics, and ground support equipment." delay={0.3} />
                 <ListItem text="Excellent communication skills to manage technical communication across diverse teams." delay={0.4} />
                 <ListItem text="Familiarity with ISRO/SDSC range protocols is a significant advantage." delay={0.5} />
              </div>
          </section>

          {/* 4. PERKS GRID */}
          <section>
              <h3 className="text-sm font-bold text-white/40 uppercase tracking-[0.2em] mb-8 text-center">
                 — Deployment Benefits —
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                 <PerkItem icon={Target} title="Authority" text="Mission-level ownership of the launch timeline." />
                 <PerkItem icon={Globe} title="Impact" text="Lead operational cadence for a new space power." />
                 <PerkItem icon={Shield} title="Safety" text="Direct authority over flight safety protocols." />
                 <PerkItem icon={Zap} title="History" text="A front-row seat to every liftoff." />
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
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-[60px] pointer-events-none" />
            
            <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-6 flex items-center gap-2">
                <LayoutDashboard size={14} /> Flight Data
            </h4>
            
            <div className="space-y-6">
              <MetaRow icon={Briefcase} label="Department" value="Mission Operations" />
              <MetaRow icon={MapPin} label="Base" value="Sriharikota, India" />
              <MetaRow icon={Users} label="Openings" value="1 Position Available" />
              <MetaRow icon={Siren} label="Responsibility" value="Range Clearance" />
              <MetaRow icon={Clock} label="Tempo" value="Campaign Basis" />
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3 justify-center bg-emerald-950/30 border border-emerald-500/20 py-3 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-[ping_2s_infinite]" />
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">
                        Status: Flight Ready
                    </span>
                </div>
            </div>
          </motion.div>

          {/* APPLY FORM */}
          <div className="sticky top-24">
             <Apply role="Mission Manager" />
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
         <CheckCircle2 className="text-emerald-500/50 group-hover:text-emerald-400 transition-colors" size={20} />
      </div>
      <span className="text-white/80 leading-relaxed font-light text-sm md:text-base group-hover:text-white transition-colors">
        {text}
      </span>
    </motion.div>
  );
}

function PerkItem({ icon: Icon, title, text }: any) {
    return (
        <div className="flex items-start gap-4 bg-white/[0.03] p-4 rounded-xl border border-white/5 hover:border-emerald-500/30 hover:bg-white/[0.06] transition-all group">
            <div className="p-2 bg-black rounded-lg text-white/60 group-hover:text-emerald-400 group-hover:scale-110 transition-all border border-white/10">
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
      <div className="p-2.5 bg-white/5 rounded-lg text-white/40 border border-white/5 group-hover:border-emerald-500/30 group-hover:text-emerald-400 group-hover:bg-emerald-500/10 transition duration-300">
        <Icon size={18} />
      </div>
      <div>
        <p className="text-[9px] text-white/30 uppercase font-bold tracking-wider mb-0.5">{label}</p>
        <p className="text-white font-mono text-sm tracking-tight">{value}</p>
      </div>
    </div>
  );
}
