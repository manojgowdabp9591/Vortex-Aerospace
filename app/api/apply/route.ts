import { NextResponse } from "next/server";
import { connectDB } from "../../lib/mongodb"; // Adjust path if needed (e.g. "@/app/lib/mongodb")
import Application from "../../models/Application"; // Adjust path if needed

export async function POST(req: Request) {
  try {
    // ---------------------------------------------------------
    // FIX 1: Use req.json() because frontend sends JSON
    // ---------------------------------------------------------
    const data = await req.json();

    // 1. Connect to MongoDB
    await connectDB();

    // 2. Save to Database
    await Application.create({
      name: data.name,
      email: data.email,
      role: data.role,
      message: data.message, // FIX 2: Added missing message field
      // Note: 'createdAt' is automatically handled if your model has { timestamps: true }
      // If not, you can keep: time: new Date().toISOString()
    });

    console.log("Application saved successfully");
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}