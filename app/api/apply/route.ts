import { NextResponse } from "next/server";
import { connectDB } from "../../lib/mongodb"; // Adjust path if needed (e.g. "@/app/lib/mongodb")
import Application from "../../models/Application";

export async function POST(req: Request) {
  try {
    // 1. Parse JSON (Since frontend sends JSON)
    const data = await req.json();

    // DEBUG LOG: See what data is arriving in Vercel Logs
    console.log("Incoming Application Data:", data);

    // 2. Connect to Database
    await connectDB();
    
    // 3. Save to MongoDB
    await Application.create({
      name: data.name,
      email: data.email,
      role: data.role,
      message: data.message, 
    });

    console.log("Saved to MongoDB successfully");
    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error("Server Error:", error);
    // Return the actual error message to the frontend for debugging
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}