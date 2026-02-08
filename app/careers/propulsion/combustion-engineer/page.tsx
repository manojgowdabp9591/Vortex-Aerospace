"use client";

import Apply from "@/app/components/Apply";
import PageLayout from "@/app/components/PageLayout";
import { Flame, Crosshair, Zap, CheckCircle2, MapPin, Briefcase, Users, ArrowRight, Activity, Cpu } from "lucide-react";

export default function CombustionEngineerPage() {
  return (
    <PageLayout
      title="Mission Briefing: Combustion Devices Engineer"
      subtitle="Tame the fire. Design the thrust chamber. Ignite the future."
    >
      <div className="grid md:grid-cols-3 gap-10 mt-10">
        
        {/* LEFT COLUMN: JOB DETAILS */}
        <div className="md:col-span-2 space-y-12">
          
          {/* ABOUT */}
          <section className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm relative overflow-hidden group">
             {/* Heat Glow Effect */}
             <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-red-500/10 rounded-full blur-[80px] group-hover:bg-red-500/20 transition duration-1000"></div>
             
             <h3 className="text-xl font-bold text-orange-500 mb-4 flex items-center gap-2 relative z-10">
               <Flame className="animate-pulse" /> Mission Overview
             </h3>
             <p className="text-white/80 leading-relaxed text-lg font-light relative z-10">
               At <strong className="text-white font-medium">Vortex Aerospace</strong>, you will design, analyze, and test the combustion systems for our 
               VORTEX-1 Rotary Detonation Engines (RDE). This is not just deflagration; this is detonation. 
               You will be working at the bleeding edge of propulsion physics, designing annular chambers 
               where shockwaves travel at supersonic speeds to deliver unmatched efficiency.
             </p>
          </section>

          {/* RESPONSIBILITIES */}
          <section>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
                <ArrowRight className="text-cyan-500" /> Operational Objectives
              </h3>
              <ul className="space-y-4">
                 <ListItem text="Design injector patterns (pintle/coaxial) and annular combustion chamber geometries for RDE cycles." />
                 <ListItem text="Analyze high-frequency combustion instabilities (acoustic modes) and detonation wave propagation." />
                 <ListItem text="Model regenerative cooling circuits to survive high heat-flux environments." />
                 <ListItem text="Lead hot-fire testing campaigns, analyzing ISP, C*, and thrust coefficients." />
                 <ListItem text="Collaborate with turbomachinery teams to match injector pressure drops with pump discharge." />
              </ul>
          </section>

          {/* QUALIFICATIONS */}
          <section>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
                <ArrowRight className="text-cyan-500" /> Mission Prerequisites
              </h3>
              <ul className="space-y-4">
                 <ListItem text="BS/MS in Aerospace or Mechanical Engineering with a focus on propulsion." />
                 <ListItem text="Strong background in compressible flow, thermodynamics, and reacting flows." />
                 <ListItem text="Experience with CFD tools (ANSYS Fluent, OpenFOAM) for combustion modeling." />
                 <ListItem text="Familiarity with liquid bipropellant systems (Methalox preferred)." />
                 <ListItem text="Hands-on experience with high-pressure fluid systems is a major plus." />
              </ul>
          </section>

          {/* WHAT WE OFFER */}
          <section>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
                <ArrowRight className="text-cyan-500" /> Mission Perks
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                 <PerkItem icon={Zap} text="Work on the world's first commercial RDE." />
                 <PerkItem icon={Activity} text="Direct access to hot-fire test stands." />
                 <PerkItem icon={Cpu} text="High-performance computing for CFD." />
                 <PerkItem icon={Users} text="Collaborate with industry veterans." />
              </ul>
          </section>

        </div>

        {/* RIGHT COLUMN: METADATA & APPLY */}
        <div className="space-y-8">
          
          {/* JOB META CARD */}
          <div className="bg-black/40 border border-white/20 p-6 rounded-xl relative overflow-hidden">
            {/* Decorative Glow */}
            <div className="absolute top-0 right-0 p-10 bg-red-500/10 blur-3xl rounded-full pointer-events-none"></div>
            
            <h4 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-6 border-b border-white/10 pb-4 flex items-center gap-2">
                <Briefcase size={14} /> Role Intel
            </h4>
            
            <div className="space-y-5">
              <MetaRow icon={Briefcase} label="Department" value="Propulsion Engineering" />
              <MetaRow icon={MapPin} label="Location" value="Bengaluru, India" />
              <MetaRow icon={Users} label="Openings" value="1 Position Available" />
              <MetaRow icon={Flame} label="Focus" value="Detonation Physics" />
              <MetaRow icon={Crosshair} label="System" value="Thrust Chamber" />
            </div>
          </div>

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