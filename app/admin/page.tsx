"use client";

import { useEffect, useState } from "react";
import AdminLayout from "./layout"; // Ensure you keep the layout we discussed
import { Users, RefreshCw, Search, Trash2, Mail, FileText, CheckCircle2, XCircle } from "lucide-react";
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

  // Function to fetch data (we can call this to refresh)
  async function fetchApplications() {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/applications");
      if (!res.ok) throw new Error("Unauthorized");
      const data = await res.json();
      setApps(data);
    } catch (err) {
      router.push("/admin/login"); // Redirect if not logged in
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
    app.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    app.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="p-8 max-w-7xl mx-auto space-y-8">
        
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

        {/* CONTROLS */}
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

        {/* CONTENT GRID */}
        {loading ? (
            <div className="text-center py-20">
                <div className="inline-block w-12 h-12 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mb-4"></div>
                <p className="text-cyan-500 font-mono animate-pulse">Decrypting incoming transmission...</p>
            </div>
        ) : filteredApps.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-white/10 rounded-2xl">
                <p className="text-white/30">No matching records found in the database.</p>
            </div>
        ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredApps.map((app) => (
                <div 
                  key={app._id} 
                  className="group relative bg-black/40 border border-white/10 p-6 rounded-xl overflow-hidden hover:border-cyan-500/50 transition duration-300"
                >
                  {/* Decorative Header Line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-cyan-500 transition duration-500"></div>

                  <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition">{app.name}</h3>
                        <p className="text-xs text-white/50 font-mono">{app.role}</p>
                    </div>
                    <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-white/40 font-mono">
                        {new Date(app.createdAt).toLocaleDateString()}
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
                    
                    {/* Placeholder for future actions (Delete/Approve) */}
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