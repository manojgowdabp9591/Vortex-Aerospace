"use client";

import Metrics from "./components/Metrics";
import Hero from "./components/Hero";
import TechSpec from "./components/TechSpec";
import LaunchNetwork from "./components/LaunchNetwork";
import Partners from "./components/Partners";
import HolographicCard from "./components/HolographicCard"; 
import { Zap, RefreshCw, ShieldCheck, Crosshair } from "lucide-react"; 

export default function Home() {
  return (
    <div className="relative z-10 inset-0 text-white overflow-x-hidden">

      {/* HERO */}
      <Hero />

      {/* TRUST SIGNALS */}
      <Partners />
      
      {/* 3D ROCKET VISUALIZATION */}
      <TechSpec />

      {/* METRICS */}
      <Metrics />

      {/* MISSION */}
      <section id="mission" className="py-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Democratizing the Cosmos
        </h2>
        <h3 className="text-xl md:text-2xl text-cyan-400 mb-6">
          We are building the bridge to the future of humanity in space.
        </h3>
        <p className="text-white/80 text-lg leading-relaxed max-w-4xl">
          At <span className="text-white font-bold">Vortex Aerospace</span>, we believe that space is not just a destination for governments,
          but a domain for human expansion. Our mission is to dismantle the cost barriers
          to orbit through fully reusable launch architectures powered by the VORTEX-1 engine.
        </p>
      </section>

      {/* TECHNOLOGY GRID */}
      <section id="tech" className="py-20 relative px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Reusability Is Evolution
            </h2>
            <p className="text-cyan-400 text-xl max-w-2xl mx-auto">
              Flight-proven hardware. Rapid turnaround. Unmatched reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <HolographicCard
              title="Pinpoint Landing"
              icon={Crosshair}
              text="Autonomous GNC algorithms enable landing precision within 2 meters, allowing for immediate recovery."
            />
            <HolographicCard
              title="VORTEX Propulsion"
              icon={Zap}
              text="High-efficiency Rotary Detonation Engines (RDE) designed for deep throttling and multiple restarts."
            />
            <HolographicCard
              title="Carbon Structure"
              icon={ShieldCheck}
              text="Advanced carbon-composite fuel tanks reduce dry mass by 40%, maximizing payload capacity to orbit."
            />
            <HolographicCard
              title="Rapid Turnaround"
              icon={RefreshCw}
              text="Designed for aircraft-like operations. Land, refuel, and re-launch within 24 hours."
            />
          </div>
        </div>
      </section>

      {/* LAUNCH NETWORK */}
      <LaunchNetwork />

      {/* ROADMAP */}
      <section id="roadmap" className="py-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-white">Roadmap</h2>
        <div className="space-y-2 border-l border-cyan-500/30 pl-8 relative">
            <Roadmap year="2028" text="VORTEX-1 Engine Static Fire" />
            <Roadmap year="2029" text="Suborbital Demonstration Vehicle" />
            <Roadmap year="2030" text="Commercial Orbital Launch Capability" />
        </div>
      </section>

    </div>
  );
}

/* ================== ROADMAP COMPONENT ================== */

function Roadmap({ year, text }: { year: string, text: string }) {
  return (
    <div className="mb-12 relative">
      {/* Glowing Dot */}
      <div className="absolute -left-[37px] top-2 w-2.5 h-2.5 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"></div>
      
      <h3 className="text-cyan-400 font-bold text-xl mb-1">{year}</h3>
      <p className="text-white/70 text-lg">{text}</p>
    </div>
  );
}