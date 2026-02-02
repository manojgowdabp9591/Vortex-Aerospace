import { NextResponse } from "next/server";
import { connectDB } from "../../lib/mongodb";
import Application from "../../models/Application";

export async function POST(req: Request) {
  try {
    // FIX 1: Read JSON, not formData (because Apply.tsx sends JSON)
    const data = await req.json();

    await connectDB();

    // FIX 2: Include the 'message' field
    await Application.create({
      name: data.name,
      email: data.email,
      role: data.role,
      message: data.message, // Saving the mission statement
      // Mongoose handles 'createdAt' automatically if timestamps: true is in schema
    });

    console.log("Application saved to MongoDB");
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}