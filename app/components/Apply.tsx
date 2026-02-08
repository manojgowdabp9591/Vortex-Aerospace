"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2, User, Mail, FileText, ShieldCheck } from "lucide-react";

export default function Apply({ role }: { role: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    // 1. Get data from the form
    const formData = new FormData(e.currentTarget);
    
    // 2. Convert to JSON object
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      role: role,
    };

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
      } 
      else {
        alert("Transmission interrupted. Uplink unstable. Please retry.");
      }
    } 
    catch (err) {
      alert("Secure connection failed. Check local network.");
    }
    
    setLoading(false);
  }

  if (submitted) {
    return (
      <div className="mt-16 p-10 border border-green-500/30 bg-green-900/10 rounded-2xl text-center backdrop-blur-xl relative overflow-hidden group">
        {/* Animated Background Scan */}
        <div className="absolute top-0 left-0 w-full h-1 bg-green-500/50 shadow-[0_0_15px_#22c55e] animate-[scan_2s_linear_infinite]"></div>
        
        <div className="inline-flex p-4 bg-green-500/10 rounded-full text-green-400 mb-6 ring-1 ring-green-500/30 shadow-[0_0_30px_rgba(74,222,128,0.2)]">
            <CheckCircle2 size={48} strokeWidth={1.5} />
        </div>
        
        <h3 className="text-2xl text-white font-bold mb-2 tracking-widest uppercase">Transmission Complete</h3>
        <p className="text-white/60 max-w-sm mx-auto font-light leading-relaxed">
            Your personnel dossier has been securely encrypted and uploaded to the Vortex Mainframe. 
            <br /><span className="text-green-500/80 font-mono text-xs mt-2 block">REF ID: VTX-{Math.floor(Math.random() * 99999)}</span>
        </p>
      </div>
    );
  }

  return (
    <div className="mt-16 bg-black/60 border border-white/10 p-8 md:p-10 rounded-2xl backdrop-blur-md relative overflow-hidden shadow-2xl">
      
      {/* Decorative Glow */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none"></div>

      <div className="mb-8 border-b border-white/10 pb-6">
        <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            <div className="p-2 bg-cyan-500/10 rounded border border-cyan-500/20 text-cyan-400">
                <ShieldCheck size={24} />
            </div>
            Secure Uplink
        </h2>
        <div className="flex items-center gap-2 mt-3 text-xs font-mono uppercase tracking-widest text-white/40">
            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
            Target Protocol: <span className="text-cyan-400 font-bold">{role}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        
        <div className="grid md:grid-cols-2 gap-6">
            {/* Name Input */}
            <div className="group">
                <label className="block text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2 flex items-center gap-2 group-focus-within:text-cyan-400 transition-colors">
                    <User size={12} /> Personnel ID (Name)
                </label>
                <input 
                    name="name" 
                    required 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 outline-none transition-all placeholder:text-white/10 font-mono text-sm"
                    placeholder="e.g. Cmdr. Shepard"
                />
            </div>
            
            {/* Email Input */}
            <div className="group">
                <label className="block text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2 flex items-center gap-2 group-focus-within:text-cyan-400 transition-colors">
                    <Mail size={12} /> Comm Frequency (Email)
                </label>
                <input 
                    name="email" 
                    required 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 outline-none transition-all placeholder:text-white/10 font-mono text-sm"
                    placeholder="officer@vortex.space"
                />
            </div>
        </div>

        {/* Message Input */}
        <div className="group">
          <label className="block text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2 flex items-center gap-2 group-focus-within:text-cyan-400 transition-colors">
            <FileText size={12} /> Mission Statement / Cover Letter
          </label>
          <textarea
            name="message"
            required
            rows={5}
            className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 outline-none transition-all resize-none placeholder:text-white/10 font-mono text-sm leading-relaxed"
            placeholder={`Detail your operational experience and qualifications for the ${role} position. Encryption enabled.`}
          />
        </div>

        {/* Submit Button */}
        <button 
          disabled={loading}
          type="submit" 
          className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-all duration-300 flex justify-center items-center gap-3 uppercase tracking-widest text-sm disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(8,145,178,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] active:scale-[0.99]"
        >
          {loading ? (
             <>
                <Loader2 className="animate-spin" size={16} />
                Encrypting Packet...
             </>
          ) : (
             <>
                <Send size={16} />
                Transmit Application
             </>
          )}
        </button>

      </form>
    </div>
  );
}