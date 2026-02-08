"use client";

import Apply from "@/app/components/Apply";
import PageLayout from "@/app/components/PageLayout";
import { Flame, Wrench, AlertTriangle, CheckCircle2, MapPin, Briefcase, Clock, ArrowRight, Zap, Volume2 } from "lucide-react";

export default function TestStandOperatorPage() {
  return (
    <PageLayout
      title="Mission Briefing: Test Stand Operator"
      subtitle="Command the firing line. Verify performance. Ensure safety."
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
               As a Test Stand Operator at <strong className="text-white font-medium">Vortex Aerospace</strong>, you will operate and maintain the propulsion test stands used for hot-fire 
               testing of our VORTEX-1 rocket engines. This is a hands-on, high-stakes role 
               where you are the final checkpoint between a static engine and flight hardware. 
               You ensure that when we light the candle, it burns exactly as predicted.
             </p>
          </section>

          {/* RESPONSIBILITIES */}
          <section>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
                <ArrowRight className="text-cyan-500" /> Operational Objectives
              </h3>
              <ul className="space-y-4">
                 <ListItem text="Prepare and execute propulsion hot-fire test operations for RDE engines." />
                 <ListItem text="Monitor real-time telemetry (pressures, temps, vibrations) and manage safety abort systems." />
                 <ListItem text="Maintain and troubleshoot high-pressure fluid infrastructure (LOX/Methane/Nitrogen GSE)." />
                 <ListItem text="Conduct post-test data review, hardware inspection, and refurbishment." />
                 <ListItem text="Support the installation and integration of engines onto the test stand." />
              </ul>
          </section>

          {/* QUALIFICATIONS */}
          <section>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
                <ArrowRight className="text-cyan-500" /> Mission Prerequisites
              </h3>
              <ul className="space-y-4">
                 <ListItem text="Hands-on mechanical experience with pumps, valves, or heavy machinery." />
                 <ListItem text="Uncompromising safety mindset in hazardous environments (High pressure, Cryogenics)." />
                 <ListItem text="Ability to read P&ID schematics and strictly follow test procedures." />
                 <ListItem text="Willingness to work in shifts at the Mahendragiri propulsion complex." />
                 <ListItem text="Experience with data acquisition systems (LabVIEW) is a plus." />
              </ul>
          </section>

          {/* WHAT WE OFFER */}
          <section>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
                <ArrowRight className="text-cyan-500" /> Mission Perks
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                 <PerkItem icon={Flame} text="Direct involvement in engine ignition." />
                 <PerkItem icon={Volume2} text="Front row seat to rocket acoustics." />
                 <PerkItem icon={Zap} text="Work on cutting-edge detonation tech." />
                 <PerkItem icon={AlertTriangle} text="Hazardous duty allowance provided." />
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
              <MetaRow icon={Briefcase} label="Department" value="Propulsion Ops" />
              <MetaRow icon={MapPin} label="Location" value="Mahendragiri, TN" />
              <MetaRow icon={Clock} label="Type" value="On-Site / Full-Time" />
              <MetaRow icon={AlertTriangle} label="Clearance" value="Level 2 Safety" />
              <MetaRow icon={Wrench} label="Domain" value="Test Operations" />
            </div>
          </div>

          {/* APPLY FORM */}
          <div className="sticky top-24">
             <Apply role="Test Stand Operator" />
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