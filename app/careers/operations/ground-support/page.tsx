"use client";

import Apply from "@/app/components/Apply";
import PageLayout from "@/app/components/PageLayout";
import { Truck, Wrench, Settings, CheckCircle2, MapPin, Briefcase, Users, ArrowRight, Anchor, Droplets, HardHat, Construction, Fuel, Gauge } from "lucide-react";
import { motion } from "framer-motion";

export default function GroundSupportEngineerPage() {
  return (
    <PageLayout
      title={
        <>
          Role: <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600">GSE Engineer</span>
        </>
      }
      subtitle="Build the backbone. Support the launch. Secure the pad. Without the ground, there is no sky."
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
            {/* Hazard Stripe Pattern */}
            <div className="absolute top-0 left-0 w-full h-3 bg-[repeating-linear-gradient(45deg,#EAB308,#EAB308_20px,transparent_20px,transparent_40px)] opacity-80" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500/30" />
            
            {/* Ambient Glow */}
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-yellow-500/20 transition duration-1000" />

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-500 border border-yellow-500/20">
                        <Truck size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-wide">
                        Mission Overview
                    </h3>
                </div>
                
                <p className="text-white/70 leading-relaxed text-lg font-light mb-6">
                    As a Ground Support Equipment (GSE) Engineer at <strong className="text-white font-medium">Vortex Aerospace</strong>, you will design, build, and maintain the 
                    massive mechanical and fluid systems that support our launch vehicles on the pad. 
                    <br/><br/>
                    You are the <span className="text-yellow-500">architect of the stage</span> from which we leave the planet. Without your 
                    strongbacks, transporters, and propellant farms, the rocket is just a statue.
                </p>

                
            </div>
          </motion.section>

          {/* 2. RESPONSIBILITIES */}
          <section className="space-y-8">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                 <div className="h-1 w-12 bg-yellow-500 rounded-full" />
                 <h3 className="text-2xl font-bold text-white tracking-tight">Operational Objectives</h3>
              </div>
              
              <div className="grid gap-4">
                 <ListItem text="Design and sustain critical GSE hardware (Transporter Erectors, Strongbacks, Hold-down clamps)." delay={0.1} />
                 <ListItem text="Manage high-pressure cryogenic fluid distribution systems (LOX/Methane farms) and pneumatics." delay={0.2} />
                 
                 <ListItem text="Support vehicle integration, static fire, and launch operations at SDSC SHAR." delay={0.3} />
                 <ListItem text="Troubleshoot heavy mechanical and hydraulic systems in a harsh field environment." delay={0.4} />
                 <ListItem text="Develop automated GSE control systems (PLC/SCADA) to support rapid launch cadence." delay={0.5} />
              </div>
          </section>

          {/* 3. QUALIFICATIONS */}
          <section className="space-y-8">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                 <div className="h-1 w-12 bg-orange-500 rounded-full" />
                 <h3 className="text-2xl font-bold text-white tracking-tight">Mission Prerequisites</h3>
              </div>

              <div className="grid gap-4">
                 <ListItem text="BS in Mechanical, Structural, or Systems Engineering." delay={0.1} />
                 <ListItem text="Hands-on fabrication experience (Welding, Machining, Heavy Assembly)." delay={0.2} />
                 <ListItem text="Experience with heavy machinery, hydraulics, and high-pressure fluid systems (ASME B31.3)." delay={0.3} />
                 <ListItem text="Proficiency in CAD (SolidWorks/NX) for large assembly design and FEA." delay={0.4} />
                 <ListItem text="Willingness to travel and work at remote launch sites (Field Engineering)." delay={0.5} />
              </div>
          </section>

          {/* 4. PERKS GRID */}
          <section>
              <h3 className="text-sm font-bold text-white/40 uppercase tracking-[0.2em] mb-8 text-center">
                 — Deployment Benefits —
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                 <PerkItem icon={MapPin} title="Launch Site" text="Work directly at the center of launch ops." />
                 <PerkItem icon={Anchor} title="Infrastructure" text="Build the skyscrapers of spaceflight." />
                 <PerkItem icon={Wrench} title="Hardware" text="Direct hands-on ownership of heavy metal." />
                 <PerkItem icon={Droplets} title="Fluids" text="Master large-scale cryogenic systems." />
              </div>
          </section>

        </div>

        {/* --- RIGHT COLUMN: METADATA & APPLY (Span 4) --- */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* JOB INTELLIGENCE CARD (Ruggedized Style) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#111] border-2 border-white/10 p-1 rounded-2xl relative overflow-hidden shadow-2xl"
          >
             <div className="bg-white/5 border border-white/5 p-5 rounded-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 blur-[60px] pointer-events-none" />
                
                <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-6 flex items-center gap-2">
                    <Briefcase size={14} /> Field Data
                </h4>
                
                <div className="space-y-6">
                <MetaRow icon={Construction} label="Department" value="Launch Infrastructure" />
                <MetaRow icon={MapPin} label="Base" value="Sriharikota, India" />
                <MetaRow icon={Users} label="Squad" value="GSE Alpha Team" />
                <MetaRow icon={Fuel} label="Systems" value="Cryo & Pneumatics" />
                <MetaRow icon={Gauge} label="Pressure" value="High (6000 PSI)" />
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                        <span className="text-xs font-mono text-yellow-500 uppercase tracking-widest">
                            Site Status: Active
                        </span>
                    </div>
                </div>
            </div>
            
            {/* Rugged Corners */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/20 rounded-tl" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/20 rounded-tr" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white/20 rounded-bl" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/20 rounded-br" />

          </motion.div>

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

function ListItem({ text, delay }: { text: string, delay: number }) {
  return (
    <motion.div 
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="flex items-start gap-4 group p-3 rounded-xl hover:bg-white/5 transition-colors border-l-2 border-transparent hover:border-yellow-500"
    >
      <div className="mt-1 min-w-[20px]">
         <CheckCircle2 className="text-yellow-600/50 group-hover:text-yellow-500 transition-colors" size={20} />
      </div>
      <span className="text-white/80 leading-relaxed font-light text-sm md:text-base group-hover:text-white transition-colors">
        {text}
      </span>
    </motion.div>
  );
}

function PerkItem({ icon: Icon, title, text }: any) {
    return (
        <div className="flex items-start gap-4 bg-white/[0.03] p-4 rounded-xl border border-white/5 hover:border-yellow-500/30 hover:bg-white/[0.06] transition-all group">
            <div className="p-2 bg-black rounded-lg text-white/60 group-hover:text-yellow-400 group-hover:scale-110 transition-all border border-white/10">
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
      <div className="p-2.5 bg-white/5 rounded-lg text-white/40 border border-white/5 group-hover:border-yellow-500/30 group-hover:text-yellow-400 group-hover:bg-yellow-500/10 transition duration-300">
        <Icon size={18} />
      </div>
      <div>
        <p className="text-[9px] text-white/30 uppercase font-bold tracking-wider mb-0.5">{label}</p>
        <p className="text-white font-mono text-sm tracking-tight">{value}</p>
      </div>
    </div>
  );
}
