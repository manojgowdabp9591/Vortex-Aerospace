"use client";

import Apply from "@/app/components/Apply";
import PageLayout from "@/app/components/PageLayout";
import { Flame, Wrench, AlertTriangle, CheckCircle2, MapPin, Briefcase, Clock, ArrowRight, Zap, Volume2, Gauge, Siren, HardHat, Radio } from "lucide-react";
import { motion } from "framer-motion";

export default function TestStandOperatorPage() {
  return (
    <PageLayout
      title={
        <>
          Role: <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">Test Stand Operator</span>
        </>
      }
      subtitle="Command the firing line. Verify performance. Ensure safety. The final checkpoint before flight."
    >
      <div className="grid lg:grid-cols-12 gap-10 mt-12">
        
        {/* --- LEFT COLUMN: MISSION DETAILS (Span 8) --- */}
        <div className="lg:col-span-8 space-y-16">
          
          {/* 1. MISSION OVERVIEW CARD */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-black/40 border border-red-900/30 p-8 md:p-10 rounded-3xl backdrop-blur-md overflow-hidden group"
          >
            {/* Hazard Stripe Top Bar */}
            <div className="absolute top-0 left-0 w-full h-2 bg-[repeating-linear-gradient(45deg,#b91c1c,#b91c1c_10px,#000_10px,#000_20px)] opacity-50" />
            
            {/* Warning Light Effect */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-red-600/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-red-600/20 animate-pulse" />
            
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-red-500/10 rounded-lg text-red-500 border border-red-500/20">
                        <Siren size={24} className="animate-pulse" />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-wide">
                        Mission Overview
                    </h3>
                </div>
                
                <p className="text-white/70 leading-relaxed text-lg font-light">
                    As a Test Stand Operator at <strong className="text-white font-medium">Vortex Aerospace</strong>, you will operate and maintain the propulsion test stands used for hot-fire testing of our VORTEX-1 rocket engines. 
                    <br/><br/>
                    This is a <span className="text-red-400">hands-on, high-stakes role</span> where you are the final checkpoint between a static engine and flight hardware. You ensure that when we light the candle, it burns exactly as predicted.
                </p>
            </div>
          </motion.section>

          

          {/* 2. RESPONSIBILITIES */}
          <section className="space-y-8">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                 <div className="h-1 w-12 bg-red-500 rounded-full" />
                 <h3 className="text-2xl font-bold text-white tracking-tight">Operational Objectives</h3>
              </div>
              
              <div className="grid gap-4">
                 <ListItem text="Prepare and execute propulsion hot-fire test operations for RDE engines (Pre-test checkout, Countdown, Abort)." delay={0.1} />
                 <ListItem text="Monitor real-time telemetry (pressures, temps, vibrations) from the control bunker." delay={0.2} />
                 <ListItem text="Maintain and troubleshoot high-pressure fluid infrastructure (LOX/Methane/Nitrogen GSE) up to 6,000 PSI." delay={0.3} />
                 <ListItem text="Conduct post-test data review, hardware inspection, and refurbishment for rapid turnaround." delay={0.4} />
                 <ListItem text="Support the mechanical integration of engines onto the test stand." delay={0.5} />
              </div>
          </section>

          {/* 3. QUALIFICATIONS */}
          <section className="space-y-8">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                 <div className="h-1 w-12 bg-orange-500 rounded-full" />
                 <h3 className="text-2xl font-bold text-white tracking-tight">Mission Prerequisites</h3>
              </div>

              <div className="grid gap-4">
                 <ListItem text="Hands-on mechanical experience with pumps, valves, regulators, or heavy machinery." delay={0.1} />
                 <ListItem text="Uncompromising safety mindset in hazardous environments (High pressure, Cryogenics, High Voltage)." delay={0.2} />
                 <ListItem text="Ability to read P&ID schematics and strictly follow test procedures (checklists)." delay={0.3} />
                 <ListItem text="Willingness to work in shifts at the Mahendragiri propulsion complex." delay={0.4} />
                 <ListItem text="Experience with data acquisition systems (LabVIEW/Dewesoft) is a plus." delay={0.5} />
              </div>
          </section>

          {/* 4. PERKS GRID */}
          <section>
              <h3 className="text-sm font-bold text-white/40 uppercase tracking-[0.2em] mb-8 text-center">
                 — Deployment Benefits —
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                 <PerkItem icon={Flame} title="Ignition Authority" text="You push the button that lights the engine." />
                 <PerkItem icon={Volume2} title="Acoustics" text="Front row seat to rocket engine thunder." />
                 <PerkItem icon={Zap} title="Cutting Edge" text="Test the world's first commercial RDE." />
                 <PerkItem icon={HardHat} title="Hazard Pay" text="Additional allowance for hazardous duty." />
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
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.05]" />
            
            <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Briefcase size={14} /> Position Intelligence
            </h4>
            
            <div className="space-y-6">
              <MetaRow icon={Gauge} label="Department" value="Propulsion Operations" />
              <MetaRow icon={MapPin} label="Location" value="Mahendragiri, TN" />
              <MetaRow icon={Clock} label="Shift" value="Rotational / On-Site" />
              <MetaRow icon={Radio} label="Reporting" value="Test Director" />
              <MetaRow icon={AlertTriangle} label="Clearance" value="Level 2 Safety" />
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs font-mono text-red-400 uppercase tracking-widest">
                        Status: Active Hot Range
                    </span>
                </div>
            </div>
          </motion.div>

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

function ListItem({ text, delay }: { text: string, delay: number }) {
  return (
    <motion.div 
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="flex items-start gap-4 group p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-red-500/20"
    >
      <div className="mt-1 min-w-[20px]">
         <CheckCircle2 className="text-red-500/50 group-hover:text-red-400 transition-colors" size={20} />
      </div>
      <span className="text-white/80 leading-relaxed font-light text-sm md:text-base group-hover:text-white transition-colors">
        {text}
      </span>
    </motion.div>
  );
}

function PerkItem({ icon: Icon, title, text }: any) {
    return (
        <div className="flex items-start gap-4 bg-white/[0.03] p-4 rounded-xl border border-white/5 hover:border-red-500/30 hover:bg-white/[0.06] transition-all group">
            <div className="p-2 bg-black rounded-lg text-white/60 group-hover:text-red-400 group-hover:scale-110 transition-all border border-white/10">
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
      <div className="p-2.5 bg-white/5 rounded-lg text-white/40 border border-white/5 group-hover:border-red-500/30 group-hover:text-red-400 group-hover:bg-red-500/10 transition duration-300">
        <Icon size={18} />
      </div>
      <div>
        <p className="text-[9px] text-white/30 uppercase font-bold tracking-wider mb-0.5">{label}</p>
        <p className="text-white font-mono text-sm tracking-tight">{value}</p>
      </div>
    </div>
  );
}
