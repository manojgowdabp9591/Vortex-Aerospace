"use client";
export const dynamic = "force-dynamic";

import { Eye, EyeOff, ShieldAlert, Lock, ScanLine, Loader2, KeyRound, Fingerprint } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [scanComplete, setScanComplete] = useState(false);

  // Intro Animation Simulation
  useEffect(() => {
    const timer = setTimeout(() => setScanComplete(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
        const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        });

        if (!res.ok) {
        throw new Error("Invalid Credentials");
        }

        router.push("/admin");
    } catch (err) {
        setError("Access Denied: Invalid Biometrics");
        setLoading(false);
    }
  }

  // --- LOADING STATE (BIOMETRIC SCAN) ---
  if (!scanComplete) {
      return (
          <div className="min-h-screen flex flex-col items-center justify-center text-cyan-500 relative z-50 bg-black selection:bg-cyan-500/30">
              <div className="relative">
                  <ScanLine size={80} className="animate-pulse text-cyan-400" />
                  <div className="absolute inset-0 bg-cyan-500/20 blur-xl animate-pulse"></div>
              </div>
              <p className="font-mono text-xs tracking-[0.3em] uppercase animate-pulse mt-8 text-cyan-400">
                  Initializing Secure Handshake...
              </p>
              <div className="w-48 h-1 bg-white/10 mt-4 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-500 animate-loading-bar"></div>
              </div>
          </div>
      )
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative z-50 pointer-events-auto p-4 bg-black selection:bg-red-500/30">
      
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-black to-black pointer-events-none"></div>

      {/* CARD CONTAINER */}
      <div className="relative w-full max-w-md bg-black/80 border border-white/10 p-10 rounded-3xl backdrop-blur-2xl shadow-2xl overflow-hidden group">
        
        {/* Red Glow for Security Vibe */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-70"></div>
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-red-600/10 blur-[80px] rounded-full pointer-events-none"></div>

        {/* HEADER */}
        <div className="text-center mb-10 relative">
            <div className="inline-flex p-4 bg-red-500/5 rounded-full text-red-500 mb-6 ring-1 ring-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.1)]">
                <ShieldAlert size={40} strokeWidth={1.5} />
            </div>
            <h1 className="text-3xl font-black text-white tracking-[0.2em] uppercase mb-2">
                Restricted
            </h1>
            <div className="flex items-center justify-center gap-2 text-[10px] text-red-400 font-mono tracking-widest uppercase opacity-80">
                <Lock size={10} />
                Vortex Command Console
            </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-6 relative z-10">
            
            {/* EMAIL */}
            <div className="group">
                <label className="block text-[10px] font-bold text-white/30 uppercase tracking-widest mb-3 flex items-center gap-2 group-focus-within:text-red-400 transition-colors">
                    <Fingerprint size={12} /> Command ID
                </label>
                <input
                    type="email"
                    placeholder="officer@vortex.space"
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 outline-none transition-all placeholder:text-white/10 font-mono text-sm tracking-wide"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            {/* PASSWORD */}
            <div className="group">
                 <label className="block text-[10px] font-bold text-white/30 uppercase tracking-widest mb-3 flex items-center gap-2 group-focus-within:text-red-400 transition-colors">
                    <KeyRound size={12} /> Access Token
                </label>
                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••••••"
                        className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 outline-none transition-all placeholder:text-white/10 font-mono text-sm pr-12 tracking-widest"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-colors"
                    >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                </div>
            </div>

            {/* ERROR MESSAGE */}
            {error && (
                <div className="flex items-center gap-3 p-4 bg-red-950/30 border border-red-500/30 rounded-xl animate-shake backdrop-blur-md">
                    <ShieldAlert className="text-red-500 shrink-0" size={18} />
                    <p className="text-red-400 text-xs font-bold uppercase tracking-wide">
                        {error}
                    </p>
                </div>
            )}

            {/* SUBMIT BUTTON */}
            <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl transition-all duration-300 flex justify-center items-center gap-3 uppercase tracking-[0.2em] text-xs disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_40px_rgba(220,38,38,0.5)] active:scale-[0.98]"
            >
                {loading ? (
                    <>
                        <Loader2 className="animate-spin" size={16} />
                        Verifying...
                    </>
                ) : (
                    <>
                        <Lock size={14} />
                        Authorize
                    </>
                )}
            </button>
        </form>
        
        {/* FOOTER DECORATION */}
        <div className="mt-10 pt-6 border-t border-white/5 text-center flex flex-col items-center gap-2">
            <p className="text-[10px] text-white/20 uppercase tracking-widest font-mono">
                System ID: VTX-SECURE-V9.2 // Encrypted
            </p>
            <div className="flex gap-1">
                <div className="w-1 h-1 bg-red-500/20 rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-red-500/20 rounded-full animate-pulse delay-75"></div>
                <div className="w-1 h-1 bg-red-500/20 rounded-full animate-pulse delay-150"></div>
            </div>
        </div>

      </div>
    </div>
  );
}