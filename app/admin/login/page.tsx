"use client";
export const dynamic = "force-dynamic";

import { Eye, EyeOff, ShieldAlert, Lock, ScanLine, Loader2, KeyRound } from "lucide-react";
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
    const timer = setTimeout(() => setScanComplete(true), 1500);
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
        setError("Access Denied: Invalid Clearance");
        setLoading(false);
    }
  }

  // --- LOADING STATE (BIOMETRIC SCAN) ---
  if (!scanComplete) {
      return (
          <div className="min-h-screen flex flex-col items-center justify-center text-cyan-500 relative z-50">
              <ScanLine size={64} className="animate-pulse mb-4" />
              <p className="font-mono text-sm tracking-widest uppercase animate-pulse">Scanning Retinal ID...</p>
          </div>
      )
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative z-50 pointer-events-auto p-4">
      
      {/* CARD CONTAINER */}
      <div className="relative w-full max-w-md bg-black/60 border border-white/10 p-8 rounded-2xl backdrop-blur-xl shadow-2xl overflow-hidden group">
        
        {/* Red Glow for Security Vibe */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-red-500/10 blur-[60px] rounded-full pointer-events-none"></div>

        {/* HEADER */}
        <div className="text-center mb-8">
            <div className="inline-flex p-3 bg-red-500/10 rounded-full text-red-500 mb-4 ring-1 ring-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                <ShieldAlert size={32} />
            </div>
            <h1 className="text-2xl font-bold text-white tracking-widest uppercase">
                Restricted Access
            </h1>
            <p className="text-xs text-white/40 mt-2 font-mono">
                CLEARANCE LEVEL 5 REQUIRED
            </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6 relative z-10">
            
            {/* EMAIL */}
            <div className="group">
                <label className="block text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2 flex items-center gap-2 group-focus-within:text-cyan-400 transition-colors">
                    <KeyRound size={12} /> Officer ID / Email
                </label>
                <input
                    type="email"
                    placeholder="admin@spacegen.com"
                    className="w-full bg-black/40 border border-white/10 p-4 rounded-lg text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition placeholder:text-white/20 font-mono text-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            {/* PASSWORD */}
            <div className="group">
                 <label className="block text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2 flex items-center gap-2 group-focus-within:text-cyan-400 transition-colors">
                    <Lock size={12} /> Security Key
                </label>
                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••••••"
                        className="w-full bg-black/40 border border-white/10 p-4 rounded-lg text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition placeholder:text-white/20 font-mono text-sm pr-12"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors"
                    >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                </div>
            </div>

            {/* ERROR MESSAGE */}
            {error && (
                <div className="flex items-center gap-3 p-3 bg-red-500/10 border border-red-500/20 rounded-lg animate-shake">
                    <ShieldAlert className="text-red-500 shrink-0" size={16} />
                    <p className="text-red-400 text-xs font-bold uppercase tracking-wide">
                        {error}
                    </p>
                </div>
            )}

            {/* SUBMIT BUTTON */}
            <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg transition-all duration-300 flex justify-center items-center gap-2 uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]"
            >
                {loading ? (
                    <>
                        <Loader2 className="animate-spin" size={18} />
                        Verifying Credentials...
                    </>
                ) : (
                    <>
                        <Lock size={18} />
                        Authenticate
                    </>
                )}
            </button>
        </form>
        
        {/* FOOTER DECORATION */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="text-[10px] text-white/20 uppercase tracking-widest">
                System ID: SG-SECURE-V9.2 // Encrypted Connection
            </p>
        </div>

      </div>
    </div>
  );
}