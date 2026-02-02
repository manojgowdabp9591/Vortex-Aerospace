"use client";

import { useEffect, useState } from "react";
import AdminLayout from "./layout"; 
import { RefreshCw, Search, Trash2, Mail, FileText, Lock, Inbox, WifiOff, Activity } from "lucide-react"; 
import { useRouter } from "next/navigation";

// Define the shape of our data
type Application = {
  _id: string;
  name: string;
  email: string;
  role: string;
  message: string;
  createdAt: string;
};

export default function AdminPage() {
  const router = useRouter();
  const [apps, setApps] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMsg, setErrorMsg] = useState(""); 

  // Function to fetch data
  async function fetchApplications() {
    setLoading(true);
    setErrorMsg(""); 

    try {
      const res = await fetch("/api/admin/applications", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include", 
      });

      if (res.status === 401) {
        throw new Error("Unauthorized: Login Session Expired");
      }
      
      if (!res.ok) {
        throw new Error(`Server Error: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      setApps(data);
    } catch (err: any) {
      console.error("Fetch Error:", err);
      setErrorMsg(err.message || "Failed to load data");
    } finally {
      setLoading(false);
    }
  }

  // Initial Load
  useEffect(() => {
    fetchApplications();
  }, []);

  // Filter logic
  const filteredApps = apps.filter(app => 
    (app.name?.toLowerCase() || "").includes(searchTerm.toLowerCase()) || 
    (app.role?.toLowerCase() || "").includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="p-25 max-w-7xl mx-auto space-y-8">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-6">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
              <span className="w-3 h-8 bg-cyan-500 rounded-full shadow-[0_0_15px_#06b6d4]"></span>
              Mission Control
            </h1>
            <p className="text-white/40 font-mono text-sm tracking-widest uppercase">
              Recruitment Database // Clearance Level 5
            </p>
          </div>

          <div className="flex gap-4">
            <div className="bg-black/40 border border-white/10 px-6 py-2 rounded-lg flex flex-col items-center justify-center backdrop-blur-md">
              <span className="text-xs text-white/40 uppercase font-bold">Total Applicants</span>
              <span className="text-2xl font-bold text-cyan-400 font-mono">{apps.length}</span>
            </div>
            
            <button 
              onClick={fetchApplications}
              className="p-4 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-cyan-500 hover:text-black transition-all group"
              title="Refresh Uplink"
            >
              <RefreshCw size={20} className={`group-hover:rotate-180 transition duration-700 ${loading ? "animate-spin" : ""}`} />
            </button>
          </div>
        </div>

        {/* --- NEW ERROR DISPLAY (DIAGNOSTIC TERMINAL STYLE) --- */}
        {errorMsg && (
          <div className="relative overflow-hidden bg-black/60 border border-red-500/30 rounded-2xl p-12 text-center backdrop-blur-xl group">
             
             {/* Background Pulse Effect */}
             <div className="absolute inset-0 bg-red-500/5 animate-pulse pointer-events-none"></div>
             
             {/* Icon */}
             <div className="inline-flex p-6 bg-red-500/10 rounded-full mb-6 ring-1 ring-red-500/30 shadow-[0_0_40px_rgba(220,38,38,0.2)]">
                <WifiOff size={48} className="text-red-500" />
             </div>

             <h2 className="text-2xl font-bold text-white mb-2 uppercase tracking-widest">
                Data Link Severed
             </h2>
             
             <div className="max-w-md mx-auto mb-8">
                <p className="text-white/60 mb-4">
                   Unable to retrieve dossier packets from the secure mainframe.
                </p>
                <div className="bg-black/40 border border-red-500/20 p-3 rounded text-left font-mono text-xs text-red-400">
                   <span className="text-red-500/50 mr-2">{">"}</span> 
                   ERROR_CODE: {errorMsg}
                </div>
             </div>

             <div className="flex justify-center gap-4">
                <button 
                   onClick={fetchApplications}
                   className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold rounded uppercase tracking-widest transition flex items-center gap-2"
                >
                   <Activity size={16} /> Retry Connection
                </button>

                <button 
                   onClick={() => router.push("/admin/login")}
                   className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded uppercase tracking-widest transition shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] flex items-center gap-2"
                >
                   <Lock size={16} /> Re-Authenticate
                </button>
             </div>
          </div>
        )}

        {/* CONTROLS */}
        {!errorMsg && (
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
            <Search className="text-white/40" size={20} />
            <input 
                type="text"
                placeholder="Search Dossiers by Name or Role..."
                className="bg-transparent border-none focus:ring-0 text-white w-full placeholder:text-white/20 font-mono text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            </div>
        )}

        {/* CONTENT GRID */}
        {loading ? (
            <div className="text-center py-20">
                <div className="inline-block w-12 h-12 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mb-4"></div>
                <p className="text-cyan-500 font-mono animate-pulse">Decrypting incoming transmission...</p>
            </div>
        ) : !errorMsg && filteredApps.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 border border-dashed border-white/10 rounded-2xl bg-white/5">
                <div className="p-6 bg-white/5 rounded-full mb-6 text-white/20 ring-1 ring-white/10">
                    <Inbox size={64} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">No Transmissions Received</h3>
                <p className="text-white/40 max-w-md text-center leading-relaxed">
                    The recruitment channel is silent. No applicant dossiers have been uploaded to the mainframe yet.
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-mono text-cyan-500/50 uppercase tracking-widest">
                    <span className="w-2 h-2 bg-cyan-500/50 rounded-full animate-pulse"></span>
                    System Standing By
                </div>
            </div>
        ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredApps.map((app) => (
                <div 
                  key={app._id} 
                  className="group relative bg-black/40 border border-white/10 p-6 rounded-xl overflow-hidden hover:border-cyan-500/50 transition duration-300"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-cyan-500 transition duration-500"></div>

                  <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition">{app.name}</h3>
                        <p className="text-xs text-white/50 font-mono">{app.role}</p>
                    </div>
                    <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-white/40 font-mono">
                        {app.createdAt ? new Date(app.createdAt).toLocaleDateString() : "N/A"}
                    </span>
                  </div>

                  <div className="bg-white/5 p-4 rounded-lg mb-4 border border-white/5">
                    <div className="flex items-center gap-2 mb-2 text-white/30 text-[10px] uppercase font-bold tracking-wider">
                        <FileText size={10} /> Mission Statement
                    </div>
                    <p className="text-sm text-white/80 line-clamp-3 italic">"{app.message}"</p>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                    <a href={`mailto:${app.email}`} className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 transition">
                        <Mail size={12} /> {app.email}
                    </a>
                    
                    <div className="flex gap-2">
                        <button className="text-red-500/50 hover:text-red-500 transition"><Trash2 size={16} /></button>
                    </div>
                  </div>
                  
                </div>
              ))}
            </div>
        )}

      </div>
    </AdminLayout>
  );
}