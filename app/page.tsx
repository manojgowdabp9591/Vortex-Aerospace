"use client";

import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import TechSpec from "./components/TechSpec";
import LaunchNetwork from "./components/LaunchNetwork";
import Partners from "./components/Partners";
import HolographicCard from "./components/HolographicCard";
import Navbar from "./components/Navbar";
import { Zap, RefreshCw, ShieldCheck, Crosshair, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative z-10 inset-0 text-white overflow-x-hidden bg-transparent selection:bg-cyan-500/30 selection:text-cyan-100">
      {/* NAVIGATION */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* TRUST SIGNALS */}
      <Partners />

      {/* VEHICLE OVERVIEW */}
      <TechSpec />

      {/* KEY METRICS */}
      <Metrics />

      {/* HUMAN SPACEFLIGHT */}
      <section className="py-24 px-6 max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
              Human Spaceflight
              <br />
              <span className="text-cyan-500">
                Enabled by Orbital-Class Systems
              </span>
            </h2>
            <div className="w-16 h-1 bg-cyan-500 mb-8" />
          </div>

          <div>
            <p className="text-white/70 text-base md:text-lg leading-relaxed font-light mb-6">
              <strong className="text-white">Vortex Aerospace</strong> is developing
              human-rated suborbital flight capability as a direct extension of
              its reusable orbital launch systems. No parallel vehicles. No
              separate architectures.
            </p>

            <p className="text-white/70 text-base md:text-lg leading-relaxed font-light">
              Initial missions focus on controlled suborbital space tourism and
              research flights, progressing toward ultra-fast point-to-point
              Earth travel. Each phase advances only after safety, regulatory
              readiness, and operational maturity are proven in flight.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section
        id="mission"
        className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5 relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
              Expanding Access
              <br />
              Beyond <span className="text-cyan-500">Earth Orbit</span>
            </h2>
            <div className="w-20 h-1 bg-cyan-500 mb-8" />
          </div>

          <div>
            <h3 className="text-lg md:text-xl text-cyan-400 mb-6 font-semibold tracking-wide">
              Infrastructure for the next generation of space operations
            </h3>

            <p className="text-white/70 text-base md:text-lg leading-relaxed font-light mb-6">
              <strong className="text-white">Vortex Aerospace</strong> is an
              engineering-led launch company focused on lowering the cost,
              complexity, and response time of orbital access. Our reusable
              systems are designed to support frequent, reliable satellite
              deployment to low Earth orbit.
            </p>

            <p className="text-white/70 text-base md:text-lg leading-relaxed font-light mb-8">
              The same vehicle architecture enables human suborbital missions,
              forming the technical foundation for space tourism and future
              ultra-fast point-to-point Earth travel. These capabilities are
              developed deliberately as extensions of orbital-class systems,
              leveraging shared propulsion, guidance, recovery, and reuse.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-cyan-400 font-semibold uppercase tracking-widest hover:text-white transition-colors group"
            >
              Learn more about the team
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section
        id="tech"
        className="py-32 relative px-6 bg-transparent border-y border-white/5"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Reusability as a{" "}
              <span className="text-cyan-500">System</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-light">
              Designed from inception for rapid recovery, inspection, and
              repeatable flight operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <HolographicCard
              title="Precision Landing"
              icon={Crosshair}
              text="Autonomous guidance and control systems engineered for meter-level landing accuracy and rapid vehicle recovery."
            />
            <HolographicCard
              title="Rotary Detonation Propulsion"
              icon={Zap}
              text="Pressure-gain combustion architecture delivering higher efficiency, simplified engine design, and multiple restart capability."
            />
            <HolographicCard
              title="Lightweight Structures"
              icon={ShieldCheck}
              text="Advanced composite tankage and load-bearing structures optimized for mass efficiency across multiple reuse cycles."
            />
            <HolographicCard
              title="Rapid Turnaround"
              icon={RefreshCw}
              text="Vehicle systems designed for aircraft-like servicing and launch readiness within a 24-hour operational window."
            />
          </div>
        </div>
      </section>

      {/* LAUNCH NETWORK */}
      <LaunchNetwork />

      {/* ROADMAP */}
      <section id="roadmap" className="py-32 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
            Development Roadmap
          </h2>
          <p className="text-white/50">
            A disciplined progression toward reusable, operational launch
            capability
          </p>
        </div>

        <div className="space-y-12 border-l-2 border-white/10 pl-8 relative ml-4 md:ml-0">
          <RoadmapItem
            year="2027"
            title="VORTEX-1 Engine Static Fire"
            desc="Full-duration ground testing of a flight-weight rotary detonation propulsion system."
            status="complete"
          />
          <RoadmapItem
            year="2028"
            title="Suborbital VTVL Demonstration"
            desc="Vertical takeoff and landing flight tests validating guidance, navigation, control, and recovery systems."
            status="active"
          />
          <RoadmapItem
            year="2030"
            title="Orbiton-1 First Orbital Attempt"
            desc="Initial orbital launch demonstration delivering payloads to low Earth orbit."
            status="pending"
          />
          <RoadmapItem
            year="2032"
            title="Commercial Orbital Launch Operations"
            desc="Routine satellite launch services enabled by reusable vehicles and rapid turnaround operations."
            status="pending"
          />
          <RoadmapItem
            year="2035"
            title="Human Suborbital & Point-to-Point Demonstrations"
            desc="Human-rated suborbital missions validating space tourism operations and ultra-fast Earth point-to-point trajectories."
            status="pending"
          />
        </div>
      </section>
    </div>
  );
}

/* ================= ROADMAP ITEM ================= */

function RoadmapItem({
  year,
  title,
  desc,
  status,
}: {
  year: string;
  title: string;
  desc: string;
  status: "complete" | "active" | "pending";
}) {
  let dotColor = "bg-white/20";
  let glow = "";

  if (status === "complete") {
    dotColor = "bg-cyan-500";
    glow = "shadow-[0_0_15px_#22d3ee]";
  } else if (status === "active") {
    dotColor = "bg-white";
    glow = "shadow-[0_0_15px_rgba(255,255,255,0.5)] animate-pulse";
  }

  return (
    <div className="relative group">
      <div
        className={`absolute -left-[41px] top-1.5 w-5 h-5 rounded-full border-4 border-black ${dotColor} ${glow}`}
      />
      <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
        <h3 className="text-2xl md:text-3xl font-bold font-mono text-white/80">
          {year}
        </h3>
        <div>
          <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
            {title}
          </h4>
          <p className="text-white/60 text-sm mt-2 max-w-lg font-light leading-relaxed">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}
