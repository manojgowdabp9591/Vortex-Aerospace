"use client";

import Apply from "@/app/components/Apply";
import PageLayout from "@/app/components/PageLayout";
import { Shield, Thermometer, Flame, CheckCircle2, MapPin, Briefcase, Users, Zap, ShieldAlert, Cpu, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ThermalProtectionPage() {
  return (
    <PageLayout
      title={
        <>
          Role: <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">TPS Lead Engineer</span>
        </>
      }
      subtitle="Shield the vehicle. Survive the inferno. Bring them home. Define the boundary between survival and destruction."
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
            {/* Hexagon Heat Shield Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')] opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
            
            {/* Heat Plasma Glow */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-orange-500/20 rounded-full blur-[100px] pointer-events-none group-hover:bg-orange-500/30 transition-all duration-1000" />
            
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-orange-500/10 rounded-lg text-orange-400 border border-orange-500/20">
                        <ShieldAlert size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-wide">
                        Mission Overview
                    </h3>
                </div>
                
                <p className="text-white/70 leading-relaxed text-lg font-light">
                    At <strong className="text-white font-medium">Vortex Aerospace</strong>, you will lead the design and qualification of the Thermal Protection Systems (TPS) 
                    that allow our vehicles to survive the searing heat of hypersonic reentry. 
                    <br/><br/>
                    You are the barrier between a fragile payload and the <span className="text-orange-400">destructive plasma</span> of the atmosphere. 
                    Your work ensures reusability isn't just a concept, but a flight-proven reality.
                </p>
            </div>
          </motion.section>

          {/* 2. RESPONSIBILITIES */}
          <section className="space-y-8">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                 <div className="h-1 w-12 bg-orange-500 rounded-full" />
                 <h3 className="text-2xl font-bold text-white tracking-tight">Operational Objectives</h3>
              </div>
              
              <div className="grid gap-4">
                 <ListItem text="Architect advanced TPS solutions (ablative & reusable tiles) for Orbiton-1 launch and reentry environments." delay={0.1} />
                 <ListItem text="Analyze aero-thermal loads and define thermal margins using CFD/Thermal solvers (ANSYS, Fluent, Star-CCM+)." delay={0.2} />
                 <ListItem text="Lead arc-jet testing campaigns and material qualification for flight certification." delay={0.3} />
                 <ListItem text="Collaborate with structural teams to integrate TPS with the primary carbon-composite airframe and metallic cryo-tanks." delay={0.4} />
                 <ListItem text="Develop rapid inspection and refurbishment protocols for 24-hour vehicle turnaround." delay={0.5} />
              </div>
          </section>

          {/* 3. QUALIFICATIONS */}
          <section className="space-y-8">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                 <div className="h-1 w-12 bg-red-500 rounded-full" />
                 <h3 className="text-2xl font-bold text-white tracking-tight">Mission Prerequisites</h3>
              </div>

              <div className="grid gap-4">
                 <ListItem text="5+ years of experience in aerospace thermal engineering or related R&D." delay={0.1} />
                 <ListItem text="Deep expertise in high-temperature composites (C-C, C-SiC), ceramics, and ablative materials." delay={0.2} />
                 <ListItem text="Strong background in heat transfer (conduction, convection, radiation), thermodynamics, and material science." delay={0.3} />
                 <ListItem text="Experience with reentry physics or hypersonic aerothermodynamics is highly valued." delay={0.4} />
                 <ListItem text="Proficiency in thermal analysis tools (Thermal Desktop, SINDA/FLUINT, or equivalent)." delay={0.5} />
              </div>
          </section>

          {/* 4. PERKS GRID */}
          <section>
              <h3 className="text-sm font-bold text-white/40 uppercase tracking-[0.2em] mb-8 text-center">
                 — Deployment Benefits —
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                 <PerkItem icon={Zap} title="Technical Authority" text="Full ownership of the vehicle's thermal shield." />
                 <PerkItem icon={Shield} title="Reusability Standards" text="Define next-gen orbital class vehicle protection." />
                 <PerkItem icon={Users} title="Leadership" text="Lead a dedicated team of materials engineers." />
                 <PerkItem icon={Flame} title="Testing Access" text="Direct access to high-enthalpy test facilities." />
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
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 blur-[60px] pointer-events-none" />
            
            <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Briefcase size={14} /> Position Intelligence
            </h4>
            
            <div className="space-y-6">
              <MetaRow icon={Shield} label="Department" value="Structures & Materials" />
              <MetaRow icon={MapPin} label="Location" value="Bengaluru, India" />
              <MetaRow icon={Users} label="Openings" value="1 Position Available" />
              <MetaRow icon={Thermometer} label="Domain" value="Thermodynamics" />
              <MetaRow icon={Flame} label="Environment" value="Hypersonic Reentry" />
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                    <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">
                        Priority: High
                    </span>
                </div>
            </div>
          </motion.div>

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
         <CheckCircle2 className="text-orange-500/50 group-hover:text-orange-400 transition-colors" size={20} />
      </div>
      <span className="text-white/80 leading-relaxed font-light text-sm md:text-base group-hover:text-white transition-colors">
        {text}
      </span>
    </motion.div>
  );
}

function PerkItem({ icon: Icon, title, text }: any) {
    return (
        <div className="flex items-start gap-4 bg-white/[0.03] p-4 rounded-xl border border-white/5 hover:border-orange-500/30 hover:bg-white/[0.06] transition-all group">
            <div className="p-2 bg-black rounded-lg text-white/60 group-hover:text-orange-400 group-hover:scale-110 transition-all border border-white/10">
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
      <div className="p-2.5 bg-white/5 rounded-lg text-white/40 border border-white/5 group-hover:border-orange-500/30 group-hover:text-orange-400 group-hover:bg-orange-500/10 transition duration-300">
        <Icon size={18} />
      </div>
      <div>
        <p className="text-[9px] text-white/30 uppercase font-bold tracking-wider mb-0.5">{label}</p>
        <p className="text-white font-mono text-sm tracking-tight">{value}</p>
      </div>
    </div>
  );
}
