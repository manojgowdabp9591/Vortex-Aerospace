"use client";

import Apply from "@/app/components/Apply";
import PageLayout from "@/app/components/PageLayout";
import { Layers, Hexagon, CheckCircle2, MapPin, Briefcase, Users, ArrowRight, Zap, Hammer } from "lucide-react";

export default function CompositeManufacturingEngineerPage() {
  return (
    <PageLayout
      title="Mission Briefing: Composite Engineer"
      subtitle="Weave the future. Build lighter. Build stronger."
    >
      <div className="grid md:grid-cols-3 gap-10 mt-10">
        
        {/* LEFT COLUMN: JOB DETAILS */}
        <div className="md:col-span-2 space-y-12">
          
          {/* ABOUT */}
          <section className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm relative overflow-hidden group">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
            
            {/* Glow Effect */}
            <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] group-hover:bg-indigo-500/20 transition duration-1000"></div>
            
            <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2 relative z-10">
              <Layers className="animate-pulse" /> Mission Overview
            </h3>
            <p className="text-white/80 leading-relaxed text-lg font-light relative z-10">
              As a Composite Manufacturing Engineer at <strong className="text-white font-medium">Vortex Aerospace</strong>, you will design, fabricate, and 
              qualify the lightweight composite structures that form the backbone of our reusable 
              launch vehicles. In extreme environments where every gram counts, your ability to 
              optimize strength-to-weight ratios determines if we make it to orbit.
            </p>
          </section>

          {/* RESPONSIBILITIES */}
          <section>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
                <ArrowRight className="text-cyan-500" /> Operational Objectives
              </h3>
              <ul className="space-y-4">
                 <ListItem text="Develop advanced composite layup schedules and manufacturing processes (AFP / Hand Layup) for propellant tanks." />
                 <ListItem text="Design high-tolerance tooling and molds for curing large-scale carbon fiber structures." />
                 <ListItem text="Execute and oversee autoclave curing cycles, vacuum bagging, and resin infusion processes." />
                 <ListItem text="Inspect and qualify flight hardware using NDT (Non-Destructive Testing) methods like ultrasonic scanning." />
                 <ListItem text="Collaborate with propulsion teams to integrate composite tanks with cryogenic feed systems." />
              </ul>
          </section>

          {/* QUALIFICATIONS */}
          <section>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
                <ArrowRight className="text-cyan-500" /> Mission Prerequisites
              </h3>
              <ul className="space-y-4">
                 <ListItem text="Bachelor’s or Master’s in Mechanical, Aerospace, or Materials Engineering." />
                 <ListItem text="Deep experience with carbon fiber reinforced polymers (CFRP) and epoxy resin systems." />
                 <ListItem text="Hands-on manufacturing lab experience (Pre-preg handling, Ply cutting, Curing)." />
                 <ListItem text="Familiarity with CAD software (SolidWorks/NX) for tooling design." />
              </ul>
          </section>

          {/* WHAT WE OFFER */}
          <section>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
                <ArrowRight className="text-cyan-500" /> Mission Perks
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                 <PerkItem icon={Zap} text="Work directly on flight hardware crossing the Kármán line." />
                 <PerkItem icon={Hammer} text="Access to state-of-the-art composite fabrication labs." />
                 <PerkItem icon={Users} text="Fast-paced, high-ownership engineering culture." />
                 <PerkItem icon={Hexagon} text="Define manufacturing standards for next-gen rockets." />
              </ul>
          </section>

        </div>

        {/* RIGHT COLUMN: METADATA & APPLY */}
        <div className="space-y-8">
          
          {/* JOB META CARD */}
          <div className="bg-black/40 border border-white/20 p-6 rounded-xl relative overflow-hidden">
            {/* Decorative Glow */}
            <div className="absolute top-0 right-0 p-10 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none"></div>
            
            <h4 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-6 border-b border-white/10 pb-4 flex items-center gap-2">
                <Briefcase size={14} /> Role Intel
            </h4>
            
            <div className="space-y-5">
              <MetaRow icon={Layers} label="Department" value="Structures & Materials" />
              <MetaRow icon={MapPin} label="Location" value="Bengaluru, India" />
              <MetaRow icon={Users} label="Openings" value="2 Positions Available" />
              <MetaRow icon={Hexagon} label="Focus" value="Carbon Composites" />
              <MetaRow icon={Hammer} label="Type" value="On-Site Manufacturing" />
            </div>
          </div>

          {/* APPLY FORM */}
          <div className="sticky top-24">
             <Apply role="Composite Manufacturing Engineer" />
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