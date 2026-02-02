"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2, AlertTriangle, User, Mail, FileText } from "lucide-react";

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
        alert("Transmission failed. Please try again.");
      }
    } 
    catch (err) {
      alert("Error connecting to server.");
    }
    
    setLoading(false);
  }

  if (submitted) {
    return (
      <div className="mt-16 p-10 border border-green-500/30 bg-green-500/10 rounded-xl text-center backdrop-blur-md relative overflow-hidden group">
        <div className="absolute inset-0 bg-green-500/5 group-hover:bg-green-500/10 transition duration-500"></div>
        <div className="inline-flex p-4 bg-green-500/20 rounded-full text-green-400 mb-6 ring-1 ring-green-500/50 shadow-[0_0_20px_rgba(74,222,128,0.2)]">
            <CheckCircle2 size={48} />
        </div>
        <h3 className="text-2xl text-white font-bold mb-2 tracking-wide">Transmission Received</h3>
        <p className="text-white/60 max-w-sm mx-auto">
            Your dossier has been securely uploaded to Mission Control. Stand by for encrypted communication coordinates.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-16 bg-black/40 border border-white/20 p-8 rounded-xl backdrop-blur-sm relative overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 p-20 bg-cyan-500/5 blur-3xl rounded-full pointer-events-none"></div>

      <div className="mb-8 border-b border-white/10 pb-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="w-2 h-8 bg-cyan-500 rounded-full"></span>
            Initialize Application
        </h2>
        <p className="text-white/50 text-sm mt-2 font-mono">
            TARGET_ROLE: <span className="text-cyan-400">{role}</span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        
        {/* Name Input */}
        <div>
          <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2 flex items-center gap-2">
            <User size={14} /> Full Name
          </label>
          <input 
            name="name" 
            required 
            type="text" 
            className="w-full bg-black/40 border border-white/10 p-4 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition placeholder:text-white/20"
            placeholder="e.g. Cmdr. Shepard"
          />
        </div>
        
        {/* Email Input */}
        <div>
          <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2 flex items-center gap-2">
            <Mail size={14} /> Email Coordinates
          </label>
          <input 
            name="email" 
            required 
            type="email" 
            className="w-full bg-black/40 border border-white/10 p-4 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition placeholder:text-white/20"
            placeholder="name@spacegen.com"
          />
        </div>

        {/* Message Input */}
        <div>
          <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2 flex items-center gap-2">
            <FileText size={14} /> Mission Statement
          </label>
          <textarea
            name="message"
            required
            rows={5}
            className="w-full bg-black/40 border border-white/10 p-4 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition resize-none placeholder:text-white/20"
            placeholder={`State your qualifications for the ${role} position...`}
          />
        </div>

        {/* Submit Button */}
        <button 
          disabled={loading}
          type="submit" 
          className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-300 flex justify-center items-center gap-2 uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
        >
          {loading ? (
             <>
                <Loader2 className="animate-spin" size={18} />
                Encrypting & Transmitting...
             </>
          ) : (
             <>
                <Send size={18} />
                Transmit Application
             </>
          )}
        </button>

      </form>
    </div>
  );
}