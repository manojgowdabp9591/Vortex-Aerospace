"use client";

import Apply from "@/app/components/Apply";
import PageLayout from "@/app/components/PageLayout";
import { Truck, Wrench, Settings, CheckCircle2, MapPin, Briefcase, Users, ArrowRight, Anchor, Droplets } from "lucide-react";

export default function GroundSupportEngineerPage() {
  return (
    <PageLayout
      title="Mission Briefing: GSE Engineer"
      subtitle="Build the backbone. Support the launch. Secure the pad."
    >
      <div className="grid md:grid-cols-3 gap-10 mt-10">
        
        {/* LEFT COLUMN: JOB DETAILS */}
        <div className="md:col-span-2 space-y-12">
          
          {/* ABOUT */}
          <section className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm relative overflow-hidden group">
             {/* Hazard Stripe Pattern */}
             <div className="absolute top-0 left-0 w-full h-2 bg-[repeating-linear-gradient(45deg,#EAB308,#EAB308_10px,transparent_10px,transparent_20px)] opacity-50"></div>
             
             {/* Glow Effect */}
             <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-yellow-500/10 rounded-full blur-[80px] group-hover:bg-yellow-500/20 transition duration-1000"></div>

             <h3 className="text-xl font-bold text-yellow-500 mb-4 flex items-center gap-2 relative z-10">
               <Truck className="animate-pulse" /> Mission Overview
             </h3>
             <p className="text-white/80 leading-relaxed text-lg font-light relative z-10">
               As a Ground Support Equipment (GSE) Engineer at <strong className="text-white font-medium">Vortex Aerospace</strong>, you will design, build, and maintain the 
               massive mechanical and fluid systems that support our launch vehicles on the pad. 
               You are the architect of the stage from which we leave the planet. Without your 
               strongbacks, transporters, and propellant farms, the rocket is just a statue.
             </p>
          </section>

          {/* RESPONSIBILITIES */}
          <section>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
                <ArrowRight className="text-cyan-500" /> Operational Objectives
              </h3>
              <ul className="space-y-4">
                 <ListItem text="Design and sustain critical GSE hardware (Transporter Erectors, Strongbacks, Hold-down clamps)." />
                 <ListItem text="Manage high-pressure cryogenic fluid distribution systems (LOX/Methane farms) and pneumatics." />
                 <ListItem text="Support vehicle integration, static fire, and launch operations at SDSC SHAR." />
                 <ListItem text="Troubleshoot heavy mechanical and hydraulic systems in a harsh field environment." />
                 <ListItem text="Develop automated GSE control systems to support rapid launch cadence." />
              </ul>
          </section>

          {/* QUALIFICATIONS */}
          <section>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
                <ArrowRight className="text-cyan-500" /> Mission Prerequisites
              </h3>
              <ul className="space-y-4">
                 <ListItem text="BS in Mechanical, Structural, or Systems Engineering." />
                 <ListItem text="Hands-on fabrication experience (Welding, Machining, Heavy Assembly)." />
                 <ListItem text="Experience with heavy machinery, hydraulics, and high-pressure fluid systems (ASME B31.3)." />
                 <ListItem text="Proficiency in CAD (SolidWorks/NX) for large assembly design." />
                 <ListItem text="Willingness to travel and work at remote launch sites." />
              </ul>
          </section>

          {/* WHAT WE OFFER */}
          <section>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
                <ArrowRight className="text-cyan-500" /> Mission Perks
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                 <PerkItem icon={MapPin} text="Work at the center of launch ops." />
                 <PerkItem icon={Anchor} text="Build the infrastructure of spaceflight." />
                 <PerkItem icon={Wrench} text="Direct hands-on hardware ownership." />
                 <PerkItem icon={Droplets} text="Master cryogenic fluid systems." />
              </ul>
          </section>

        </div>

        {/* RIGHT COLUMN: METADATA & APPLY */}
        <div className="space-y-8">
          
          {/* JOB META CARD */}
          <div className="bg-black/40 border border-white/20 p-6 rounded-xl relative overflow-hidden">
            {/* Decorative Glow */}
            <div className="absolute top-0 right-0 p-10 bg-yellow-500/10 blur-3xl rounded-full pointer-events-none"></div>
            
            <h4 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-6 border-b border-white/10 pb-4 flex items-center gap-2">
                <Briefcase size={14} /> Role Intel
            </h4>
            
            <div className="space-y-5">
              <MetaRow icon={Briefcase} label="Department" value="Launch Operations" />
              <MetaRow icon={MapPin} label="Location" value="Sriharikota, India" />
              <MetaRow icon={Users} label="Openings" value="2 Positions Available" />
              <MetaRow icon={Wrench} label="Domain" value="Mechanical Systems" />
              <MetaRow icon={Settings} label="Focus" value="Infrastructure" />
            </div>
          </div>

          {/* APPLY FORM */}
          <div className="sticky top-24">
             <Apply role="Ground Support Equipment Engineer" />
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