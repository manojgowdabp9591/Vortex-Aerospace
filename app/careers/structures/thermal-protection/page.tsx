"use client";

import Apply from "@/app/components/Apply";
import PageLayout from "@/app/components/PageLayout";
import { Shield, Thermometer, Flame, CheckCircle2, MapPin, Briefcase, Users, ArrowRight, Zap } from "lucide-react";

export default function ThermalProtectionPage() {
  return (
    <PageLayout
      title="Mission Briefing: TPS Lead"
      subtitle="Shield the vehicle. Survive the inferno. Bring them home."
    >
      <div className="grid md:grid-cols-3 gap-10 mt-10">
        
        {/* LEFT COLUMN: JOB DETAILS */}
        <div className="md:col-span-2 space-y-12">
          
          {/* ABOUT */}
          <section className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm relative overflow-hidden group">
            {/* Heat Glow Effect */}
            <div className="absolute -right-10 -top-10 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] group-hover:bg-orange-500/20 transition duration-1000"></div>
            
            <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2 relative z-10">
              <Shield className="animate-pulse" /> Mission Overview
            </h3>
            <p className="text-white/80 leading-relaxed text-lg font-light relative z-10">
              At <strong className="text-white font-medium">Vortex Aerospace</strong>, you will lead the design and qualification of the Thermal Protection Systems (TPS) 
              that allow our vehicles to survive the searing heat of hypersonic reentry. 
              You are the barrier between a fragile payload and the destructive plasma of the atmosphere. 
              Your work ensures reusability isn't just a concept, but a flight-proven reality.
            </p>
          </section>

          {/* RESPONSIBILITIES */}
          <section>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
                <ArrowRight className="text-cyan-500" /> Operational Objectives
              </h3>
              <ul className="space-y-4">
                 <ListItem text="Architect advanced TPS solutions (ablative & reusable tiles) for Orbiton-1 launch and reentry environments." />
                 <ListItem text="Analyze aero-thermal loads and define thermal margins using CFD/Thermal solvers (ANSYS, Fluent)." />
                 <ListItem text="Lead arc-jet testing campaigns and material qualification for flight certification." />
                 <ListItem text="Collaborate with structural teams to integrate TPS with the primary carbon-composite airframe." />
                 <ListItem text="Develop rapid inspection and refurbishment protocols for 24-hour vehicle turnaround." />
              </ul>
          </section>

          {/* QUALIFICATIONS */}
          <section>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
                <ArrowRight className="text-cyan-500" /> Mission Prerequisites
              </h3>
              <ul className="space-y-4">
                 <ListItem text="Deep expertise in high-temperature composites (C-C, C-SiC), ceramics, and ablative materials." />
                 <ListItem text="Strong background in heat transfer, thermodynamics, and material science." />
                 <ListItem text="Experience with reentry physics or hypersonic aerothermodynamics is highly valued." />
                 <ListItem text="5+ years of experience in aerospace thermal engineering or related R&D." />
              </ul>
          </section>

          {/* WHAT WE OFFER */}
          <section>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
                <ArrowRight className="text-cyan-500" /> Mission Perks
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                 <PerkItem icon={Zap} text="Full technical authority over the vehicle's thermal shield." />
                 <PerkItem icon={Shield} text="Define reusability standards for next-gen orbital class vehicles." />
                 <PerkItem icon={Users} text="Lead a dedicated team of materials engineers." />
                 <PerkItem icon={Flame} text="Direct access to high-enthalpy test facilities." />
              </ul>
          </section>

        </div>

        {/* RIGHT COLUMN: METADATA & APPLY */}
        <div className="space-y-8">
          
          {/* JOB META CARD */}
          <div className="bg-black/40 border border-white/20 p-6 rounded-xl relative overflow-hidden">
            {/* Decorative Glow */}
            <div className="absolute top-0 right-0 p-10 bg-orange-500/10 blur-3xl rounded-full pointer-events-none"></div>
            
            <h4 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-6 border-b border-white/10 pb-4 flex items-center gap-2">
                <Briefcase size={14} /> Role Intel
            </h4>
            
            <div className="space-y-5">
              <MetaRow icon={Shield} label="Department" value="Structures & Materials" />
              <MetaRow icon={MapPin} label="Location" value="Bengaluru, India" />
              <MetaRow icon={Users} label="Openings" value="1 Position Available" />
              <MetaRow icon={Thermometer} label="Domain" value="Thermodynamics" />
              <MetaRow icon={Flame} label="Environment" value="Hypersonic / Reentry" />
            </div>
          </div>

          {/* APPLY FORM */}
          <div className="sticky top-24">
             <Apply role="Thermal Protection Systems Lead" />
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