"use client";

import Apply from "@/app/components/Apply";
import PageLayout from "@/app/components/PageLayout";
import { Layers, Hexagon, CheckCircle2, MapPin, Briefcase, Users, ArrowRight, Zap, Hammer, ShieldCheck, Ruler } from "lucide-react";
import { motion } from "framer-motion";

export default function CompositeManufacturingEngineerPage() {
  return (
    <PageLayout
      title={
        <>
          Role: <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Composite Manufacturing Engineer</span>
        </>
      }
      subtitle="Weave the future. Build lighter. Build stronger. Define the structural backbone of next-gen launch vehicles."
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
            {/* Carbon Fiber Pattern Background */}
            <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400 border border-indigo-500/20">
                        <Layers size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-wide">
                        Mission Overview
                    </h3>
                </div>
                
                <p className="text-white/70 leading-relaxed text-lg font-light">
                    As a Composite Manufacturing Engineer at <strong className="text-white font-medium">Vortex Aerospace</strong>, you will design, fabricate, and qualify the lightweight composite structures that form the backbone of our reusable launch vehicles. 
                    <br/><br/>
                    In extreme environments where every gram counts, your ability to optimize <span className="text-indigo-400">strength-to-weight ratios</span> determines if we make it to orbit. You will own the process from ply-schedule design to autoclave curing.
                </p>
            </div>
          </motion.section>

          {/* 2. RESPONSIBILITIES */}
          <section className="space-y-8">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                 <div className="h-1 w-12 bg-indigo-500 rounded-full" />
                 <h3 className="text-2xl font-bold text-white tracking-tight">Operational Objectives</h3>
              </div>
              
              <div className="grid gap-4">
                 <ListItem text="Develop advanced composite layup schedules and manufacturing processes (AFP / Hand Layup) for cryogenic propellant tanks." delay={0.1} />
                 <ListItem text="Design high-tolerance Invar/Composite tooling and molds for curing large-scale carbon fiber structures." delay={0.2} />
                 <ListItem text="Execute and oversee autoclave curing cycles, vacuum bagging, and VARTM (Vacuum Assisted Resin Transfer Molding) processes." delay={0.3} />
                 <ListItem text="Inspect and qualify flight hardware using NDT (Non-Destructive Testing) methods like ultrasonic scanning and thermography." delay={0.4} />
                 <ListItem text="Collaborate with propulsion teams to integrate composite tanks with metallic feed systems and thermal protection." delay={0.5} />
              </div>
          </section>

          {/* 3. QUALIFICATIONS */}
          <section className="space-y-8">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                 <div className="h-1 w-12 bg-cyan-500 rounded-full" />
                 <h3 className="text-2xl font-bold text-white tracking-tight">Mission Prerequisites</h3>
              </div>

              <div className="grid gap-4">
                 <ListItem text="Bachelor’s or Master’s in Mechanical, Aerospace, or Materials Engineering." delay={0.1} />
                 <ListItem text="3+ years experience with carbon fiber reinforced polymers (CFRP) and epoxy resin systems." delay={0.2} />
                 <ListItem text="Hands-on manufacturing lab experience (Pre-preg handling, Ply cutting, Autoclave operations)." delay={0.3} />
                 <ListItem text="Proficiency in CAD (SolidWorks/NX/CATIA) and composite analysis tools (FiberSIM/Ansys ACP)." delay={0.4} />
                 <ListItem text="Understanding of geometric dimensioning and tolerancing (GD&T) for large assemblies." delay={0.5} />
              </div>
          </section>

          {/* 4. PERKS GRID */}
          <section>
              <h3 className="text-sm font-bold text-white/40 uppercase tracking-[0.2em] mb-8 text-center">
                 — Deployment Benefits —
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                 <PerkItem icon={Zap} title="Flight Hardware" text="Touch hardware that crosses the Kármán line." />
                 <PerkItem icon={Hammer} title="Advanced Labs" text="Access to state-of-the-art clean rooms & autoclaves." />
                 <PerkItem icon={Users} title="Elite Team" text="Fast-paced, high-ownership engineering culture." />
                 <PerkItem icon={Ruler} title="Design Authority" text="Define manufacturing standards for next-gen rockets." />
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
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-[60px] pointer-events-none" />
            
            <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Briefcase size={14} /> Position Intelligence
            </h4>
            
            <div className="space-y-6">
              <MetaRow icon={Layers} label="Department" value="Structures & Materials" />
              <MetaRow icon={MapPin} label="Location" value="Bengaluru, India" />
              <MetaRow icon={Users} label="Team Size" value="12 Engineers" />
              <MetaRow icon={Hexagon} label="Material Focus" value="Carbon / Epoxy" />
              <MetaRow icon={ShieldCheck} label="Clearance" value="Not Required" />
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                        Status: Actively Hiring
                    </span>
                </div>
            </div>
          </motion.div>

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
         <CheckCircle2 className="text-indigo-500/50 group-hover:text-indigo-400 transition-colors" size={20} />
      </div>
      <span className="text-white/80 leading-relaxed font-light text-sm md:text-base group-hover:text-white transition-colors">
        {text}
      </span>
    </motion.div>
  );
}

function PerkItem({ icon: Icon, title, text }: any) {
    return (
        <div className="flex items-start gap-4 bg-white/[0.03] p-4 rounded-xl border border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.06] transition-all group">
            <div className="p-2 bg-black rounded-lg text-white/60 group-hover:text-indigo-400 group-hover:scale-110 transition-all border border-white/10">
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
      <div className="p-2.5 bg-white/5 rounded-lg text-white/40 border border-white/5 group-hover:border-indigo-500/30 group-hover:text-indigo-400 group-hover:bg-indigo-500/10 transition duration-300">
        <Icon size={18} />
      </div>
      <div>
        <p className="text-[9px] text-white/30 uppercase font-bold tracking-wider mb-0.5">{label}</p>
        <p className="text-white font-mono text-sm tracking-tight">{value}</p>
      </div>
    </div>
  );
}
