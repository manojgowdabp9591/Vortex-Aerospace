import { NextResponse } from "next/server";
import connectDB from "../../lib/db";
import Application from "../../models/Application";

export async function POST(req: Request) {
  try {
    const data = await req.formData();
    
    // 1. Connect to Database
    await connectDB();

    // 2. Create new Application document
    await Application.create({
      name: data.get("name"),
      email: data.get("email"),
      role: data.get("role"),
      time: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("MongoDB Error:", error);
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}