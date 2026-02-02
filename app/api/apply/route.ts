import { NextResponse } from "next/server";
import { connectDB } from "../../lib/mongodb"; 
import Application from "../../models/Application"; 

export async function POST(req: Request) {
  try {
    // 1. Parse the incoming JSON
    const data = await req.json();

    // 2. Connect to Database
    await connectDB();

    // 3. Save to Database
    await Application.create({
      name: data.name,    
      email: data.email,  
      role: data.role,     
      message: data.message 
    });

    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}