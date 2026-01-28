import connectDB from "../lib/db";
import Application from "../models/Application";

// Force dynamic rendering so you see new applicants instantly
export const dynamic = "force-dynamic";

export default async function AdminPage() {
  // 1. Connect
  await connectDB();
  
  // 2. Fetch all applications (sorted by newest first)
  // .lean() converts Mongoose objects to plain JSON, which Next.js likes better
  const applications = await Application.find({}).sort({ _id: -1 }).lean();

  return (
    <div className="bg-black text-white min-h-screen px-6 py-32 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-cyan-400">Mission Control</h1>

      {applications.length === 0 && (
        <p className="text-white/60">No applications received yet.</p>
      )}

      <div className="grid gap-4">
        {/* We use 'any' here to bypass strict type checking for the .lean() result */}
        {applications.map((app: any) => (
          <div key={app._id} className="border border-white/10 p-6 rounded bg-white/5 hover:border-cyan-500/50 transition">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-xl font-bold text-white">{app.name}</h3>
                    <p className="text-cyan-400 font-mono text-sm">{app.role}</p>
                </div>
                <span className="text-xs text-white/30">{app.time}</span>
            </div>
            <p className="mt-2 text-white/60">{app.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}