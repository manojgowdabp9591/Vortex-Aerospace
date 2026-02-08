"use client";

import Apply from "@/app/components/Apply";
import PageLayout from "@/app/components/PageLayout";
import { Radio, Target, CheckCircle2, MapPin, Briefcase, Users, ArrowRight, Zap, Shield, Globe, Clock } from "lucide-react";

export default function MissionManagerPage() {
  return (
    <PageLayout
      title="Mission Briefing: Mission Manager"
      subtitle="Orchestrate the countdown. Clear the range. Go for launch."
    >
      <div className="grid md:grid-cols-3 gap-10 mt-10">
        
        {/* LEFT COLUMN: JOB DETAILS */}
        <div className="md:col-span-2 space-y-12">
          
          {/* ABOUT */}
          <section className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm relative overflow-hidden group">
             {/* Radar Sweep Effect */}
             <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full border border-white/5 opacity-20 animate-spin-slow pointer-events-none group-hover:opacity-40 transition duration-1000"></div>
             <div className="absolute -right-20 -top-20 w-[320px] h-[320px] rounded-full border border-white/5 opacity-10 animate-spin-slower pointer-events-none"></div>

             {/* Glow Effect */}
             <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-green-500/10 rounded-full blur-[80px] group-hover:bg-green-500/20 transition duration-1000"></div>

             <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2 relative z-10">
               <Radio className="animate-pulse" /> Mission Overview
             </h3>
             <p className="text-white/80 leading-relaxed text-lg font-light relative z-10">
               As a Mission Manager at <strong className="text-white font-medium">Vortex Aerospace</strong>, you are the conductor of the symphony of fire. You will lead 
               mission planning and execution across all launch operations at Sriharikota. From 
               payload integration to the final terminal count, you hold the playbook that ensures 
               our vehicles reach orbit safely and on schedule. You are the voice of the vehicle.
             </p>
          </section>

          {/* RESPONSIBILITIES */}
          <section>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
                <ArrowRight className="text-cyan-500" /> Operational Objectives
              </h3>
              <ul className="space-y-4">
                 <ListItem text="Plan and execute end-to-end launch campaigns, from vehicle rollout to liftoff." />
                 <ListItem text="Coordinate cross-functional teams (Avionics, Propulsion, GNC) during critical countdown phases." />
                 <ListItem text="Serve as the primary point of contact for payload customers and range safety officers (RSO)." />
                 <ListItem text="Develop and enforce Launch Commit Criteria (LCC) for vehicle health and weather." />
                 <ListItem text="Exercise final Go/No-Go authority during the terminal count." />
              </ul>
          </section>

          {/* QUALIFICATIONS */}
          <section>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
                <ArrowRight className="text-cyan-500" /> Mission Prerequisites
              </h3>
              <ul className="space-y-4">
                 <ListItem text="5+ years of aerospace operations experience (Launch Control, Flight Directing, or Range Safety)." />
                 <ListItem text="Strong leadership skills with the ability to make split-second decisions under extreme pressure." />
                 <ListItem text="Deep understanding of launch vehicle systems, trajectory dynamics, and ground support equipment." />
                 <ListItem text="Excellent communication skills to manage technical communication across diverse teams." />
                 <ListItem text="Familiarity with ISRO/SDSC range protocols is a significant advantage." />
              </ul>
          </section>

          {/* WHAT WE OFFER */}
          <section>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
                <ArrowRight className="text-cyan-500" /> Mission Perks
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                 <PerkItem icon={Target} text="Mission-level ownership of the launch timeline." />
                 <PerkItem icon={Globe} text="Lead operational cadence for a new space power." />
                 <PerkItem icon={Shield} text="Direct authority over flight safety." />
                 <PerkItem icon={Zap} text="A front-row seat to history." />
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
              <MetaRow icon={Briefcase} label="Department" value="Launch Operations" />
              <MetaRow icon={MapPin} label="Location" value="Sriharikota, India" />
              <MetaRow icon={Users} label="Openings" value="1 Position Available" />
              <MetaRow icon={Target} label="Clearance" value="Mission Critical" />
              <MetaRow icon={Clock} label="Schedule" value="Campaign Basis" />
            </div>
          </div>

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