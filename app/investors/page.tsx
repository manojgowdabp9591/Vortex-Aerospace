"use client";

import PageLayout from "../components/PageLayout";
import { motion } from "framer-motion";
import {
  Activity,
  TrendingUp,
  PieChart,
  Globe,
  Download,
  ArrowUpRight,
  Lock,
  FileText
} from "lucide-react";

export default function InvestorsPage() {
  return (
    <PageLayout
      title="Investor Relations"
      subtitle="Building the physical infrastructure required for the next era of space operations."
    >
      {/* 1. TOP STATS GRID */}
      <div className="grid md:grid-cols-4 gap-6 mb-16">
        <StatCard label="Funding Stage" value="Series B" sub="Growth Phase" icon={Activity} />
        <StatCard
          label="Implied Valuation"
          value="Confidential"
          sub="Non-Disclosure"
          icon={Lock}
        />
        <StatCard
          label="Capital Deployed"
          value="$145M+"
          sub="R&D / Infra"
          icon={PieChart}
        />
        <StatCard label="Operating Sites" value="4" sub="Global Footprint" icon={Globe} />
      </div>

      <div className="grid md:grid-cols-3 gap-10 items-start">
        
        {/* 2. LEFT COLUMN: REPORTS */}
        <div className="md:col-span-2 space-y-8">
          <div className="flex items-center gap-3 mb-6">
             <div className="w-1.5 h-8 bg-cyan-500 rounded-full shadow-[0_0_10px_#22d3ee]" />
             <h2 className="text-2xl font-bold text-white tracking-tight">
               Updates & Technical Briefings
             </h2>
          </div>

          <div className="space-y-4">
            <ReportCard
                title="VORTEX-1 Ground Test Summary"
                date="FEB 2026"
                tag="TECHNICAL"
                desc="Initial rotary detonation engine testing demonstrates stable wave propagation and nominal chamber pressures across the planned throttle envelope."
            />
            <ReportCard
                title="Q4 Engineering & Financial Update"
                date="JAN 2026"
                tag="FINANCIAL"
                desc="Summary of Orbiton-1 vehicle progress, manufacturing readiness, and forward operating expense outlook."
            />
            <ReportCard
                title="Growth Capital Deployment Memo"
                date="OCT 2025"
                tag="STRATEGY"
                desc="Capital allocation strategy supporting propulsion maturation, vehicle integration, and composite manufacturing scale-up."
            />
          </div>
        </div>

        {/* 3. RIGHT COLUMN: MARKET VISUAL (CONCEPTUAL) */}
        <div className="bg-black/40 border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden group backdrop-blur-md">
          
          {/* Header */}
          <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-6">
            <div>
              <h3 className="text-xl font-extrabold text-white tracking-wider group-hover:text-cyan-400 transition duration-500 flex items-center gap-2">
                VORTEX <span className="text-white/30 text-xs font-normal border border-white/20 px-1.5 rounded">VTX</span>
              </h3>
              <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">
                Private Equity · Internal Index
              </p>
            </div>
            <div className="text-right">
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
              >
                <p className="text-2xl font-mono font-bold text-emerald-400 flex items-center justify-end gap-1">
                  ▲ 14.2%
                </p>
              </motion.div>
              <p className="text-[10px] text-white/50 font-medium uppercase tracking-wider">
                YTD Growth
              </p>
            </div>
          </div>

          {/* CHART CONTAINER */}
          <div className="relative h-64 w-full bg-white/[0.02] rounded-xl border border-white/5 overflow-hidden">
            
            {/* Grid Lines */}
            <div className="absolute inset-0 grid grid-rows-4 grid-cols-4 pointer-events-none">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="border-t border-white/5 w-full h-full" />
                ))}
            </div>
            <div className="absolute inset-0 grid grid-cols-4 pointer-events-none">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="border-r border-white/5 w-full h-full" />
                ))}
            </div>

            {/* SVG CHART */}
            <svg className="absolute inset-0 w-full h-full overflow-visible p-4" viewBox="0 0 200 100" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="stockGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#4ade80" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
                    </linearGradient>
                </defs>

                <motion.path 
                    d="M0,60 L20,65 L30,55 L40,90 L50,95 L60,85 L70,90 L90,70 L110,75 L130,50 L150,55 L160,50 L170,55 L180,40 L185,45 L190,5 L200,5 L200,100 L0,100 Z" 
                    fill="url(#stockGradient)"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />

                <motion.path
                    d="M0,60 L20,65 L30,55 L40,90 L50,95 L60,85 L70,90 L90,70 L110,75 L130,50 L150,55 L160,50 L170,55 L180,40 L185,45 L190,5 L200,5"
                    fill="none"
                    stroke="#4ade80"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "linear" }}
                />

                {/* "Launch Success" Text Label */}
                <motion.foreignObject x="120" y="0" width="80" height="30"
                   initial={{ opacity: 0, y: 10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: 1.5 }}
                >
                   <div className="bg-green-500/20 border border-green-500 text-green-400 text-[8px] px-1 py-0.5 rounded text-center font-bold uppercase backdrop-blur-sm">
                      Launch Success
                   </div>
                </motion.foreignObject>

                {/* Crash Zone Indicator */}
                <motion.path
                    d="M30,55 L40,90 L50,95"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                />

                {/* Live Pulsing Dot */}
                <motion.circle 
                    cx="200" cy="5" r="3" fill="#fff"
                    animate={{ r: [3, 8, 3], opacity: [1, 0.5, 1] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                />
            </svg>

            {/* High Volume Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-10 flex items-end justify-between px-2 opacity-30 gap-1">
                {[40, 30, 60, 80, 50, 20, 30, 90, 100, 70, 60, 80, 50, 40].map((h, i) => (
                    <div key={i} className={`w-full ${i === 3 ? 'bg-red-500' : 'bg-green-500'}`} style={{ height: `${h}%` }} />
                ))}
            </div>
          </div>
          
          <div className="flex justify-between text-[10px] text-white/20 mt-4 font-mono uppercase tracking-widest">
            <span>Q1 2025</span>
            <span>Q2</span>
            <span>Q3</span>
            <span>Q4</span>
            <span className="text-emerald-400">Now</span>
          </div>

          <button className="mt-8 w-full py-4 bg-white text-black font-bold text-xs tracking-[0.15em] hover:bg-cyan-400 hover:scale-[1.02] transition-all duration-300 uppercase rounded-xl flex items-center justify-center gap-2 group/btn shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Investor Portal <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </PageLayout>
  );
}

/* ---------- SUB-COMPONENTS ---------- */

function StatCard({ label, value, sub, icon: Icon, secure }: any) {
  return (
    <div className="group relative p-6 bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.06] hover:border-cyan-500/30 transition-all duration-500">
      <div className={`absolute top-4 right-4 p-2 rounded-lg bg-white/5 ${secure ? 'text-white/20' : 'text-cyan-500/80'} group-hover:scale-110 transition-transform duration-500`}>
        <Icon size={20} />
      </div>
      
      <div className="mt-2">
        <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-3">
            {label}
        </p>
        <p className={`text-2xl font-mono font-bold ${secure ? 'text-white/30 blur-sm select-none' : 'text-white group-hover:text-cyan-400'} transition-colors`}>
            {value}
        </p>
        {sub && <p className="text-[10px] text-white/30 mt-2 font-mono border-t border-white/5 pt-2 inline-block">
            {sub}
        </p>}
      </div>
    </div>
  );
}

function ReportCard({ title, date, desc, tag }: any) {
  return (
    <div className="group p-6 border border-white/10 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] hover:border-cyan-500/30 transition-all duration-300 cursor-pointer relative overflow-hidden">
      
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
            <div className="p-2 bg-white/5 rounded-lg text-cyan-400">
                <FileText size={18} />
            </div>
            <div>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                {title}
                </h3>
                <span className="text-[9px] text-white/30 uppercase tracking-widest font-mono">
                    {tag} // {date}
                </span>
            </div>
        </div>
      </div>
      
      <p className="text-white/60 mb-6 text-sm leading-relaxed font-light pl-11 border-l border-white/5 ml-4">
        {desc}
      </p>

      <div className="flex items-center gap-2 text-[10px] font-bold text-white/30 group-hover:text-cyan-400 transition-colors uppercase tracking-widest ml-14">
        <Download size={12} />
        <span>Download PDF</span>
      </div>
    </div>
  );
}
