"use client";

import Apply from "@/app/components/Apply";
import PageLayout from "@/app/components/PageLayout";
import { Fan, Wind, CheckCircle2, MapPin, Briefcase, Users, ArrowRight, Zap, Settings, Activity } from "lucide-react";

export default function TurbomachinerySpecialistPage() {
  return (
    <PageLayout
      title="Mission Briefing: Turbomachinery Specialist"
      subtitle="Design the heart of the engine. Push fluids to the limit."
    >
      <div className="grid md:grid-cols-3 gap-10 mt-10">
        
        {/* LEFT COLUMN: JOB DETAILS */}
        <div className="md:col-span-2 space-y-12">
          
          {/* ABOUT */}
          <section className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm relative overflow-hidden group">
             {/* Spinning Fan Animation in Background */}
             <div className="absolute -right-20 -top-20 opacity-5 pointer-events-none group-hover:opacity-10 transition duration-1000">
                <Fan size={300} className="animate-spin-slow text-cyan-500" />
             </div>
             
             <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2 relative z-10">
               <Fan className="animate-spin-slow" /> Mission Overview
             </h3>
             <p className="text-white/80 leading-relaxed text-lg font-light relative z-10">
               At <strong className="text-white font-medium">Vortex Aerospace</strong>, you will design and validate the high-performance turbopumps and rotating machinery 
               that feed our VORTEX-1 engines. This role demands precision engineering to handle extreme pressures, 
               cryogenic temperatures, and cavitation margins. You are building the muscle that lifts us off the ground.
             </p>
          </section>

          {/* RESPONSIBILITIES */}
          <section>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
                <ArrowRight className="text-cyan-500" /> Operational Objectives
              </h3>
              <ul className="space-y-4">
                 <ListItem text="Design turbopumps and high-speed rotating assemblies (Impellers, Inducers, Turbines) for Methalox cycles." />
                 <ListItem text="Perform rotor dynamics analysis to ensure stability across the operating range (Campbell diagrams, critical speeds)." />
                 <ListItem text="Analyze vibration, fatigue, and thermal loads using FEA/CFD tools (ANSYS, CFX)." />
                 <ListItem text="Select materials for extreme environments (Inconel, Monel, Cryogenic Steels)." />
                 <ListItem text="Collaborate with combustion engineers to match pump performance with thrust chamber requirements." />
              </ul>
          </section>

          {/* QUALIFICATIONS */}
          <section>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
                <ArrowRight className="text-cyan-500" /> Mission Prerequisites
              </h3>
              <ul className="space-y-4">
                 <ListItem text="BS/MS in Mechanical or Aerospace Engineering with a focus on fluid dynamics." />
                 <ListItem text="3+ years of experience with turbomachinery, pumps, or gas turbines." />
                 <ListItem text="Proficiency in CAD (NX/SolidWorks) and simulation tools (ANSYS, NumPy/Matlab)." />
                 <ListItem text="Understanding of bearing systems, dynamic seals, and lubrication in cryogenic fluids." />
              </ul>
          </section>

          {/* WHAT WE OFFER */}
          <section>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
                <ArrowRight className="text-cyan-500" /> Mission Perks
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                 <PerkItem icon={Zap} text="Direct ownership of critical propulsion subsystems." />
                 <PerkItem icon={Settings} text="Full lifecycle exposure: Design → Build → Hot Fire." />
                 <PerkItem icon={Activity} text="Work on novel RDE pump cycles." />
                 <PerkItem icon={Users} text="Collaborative, high-pace engineering team." />
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
              <MetaRow icon={Briefcase} label="Department" value="Propulsion Engineering" />
              <MetaRow icon={MapPin} label="Location" value="Bengaluru, India" />
              <MetaRow icon={Users} label="Openings" value="1 Position Available" />
              <MetaRow icon={Wind} label="Domain" value="Fluid Dynamics" />
              <MetaRow icon={Settings} label="System" value="Turbopumps" />
            </div>
          </div>

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