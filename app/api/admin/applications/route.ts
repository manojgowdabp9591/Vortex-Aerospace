export const runtime = "nodejs";

import { connectDB } from "@/app/lib/mongodb";
import Application from "@/app/models/Application";
import { cookies } from "next/headers";
import { verifyAdminToken } from "@/app/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // 1. Check Cookie
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      console.log("Auth Failed: No token found in cookies");
      return NextResponse.json({ error: "Unauthorized: No Token" }, { status: 401 });
    }

    // 2. Verify Token
    try {
      verifyAdminToken(token);
    } catch (e) {
      console.log("Auth Failed: Invalid Token");
      return NextResponse.json({ error: "Unauthorized: Invalid Token" }, { status: 401 });
    }

    // 3. Fetch Data
    await connectDB();
    const applications = await Application.find().sort({ createdAt: -1 }).lean();

    return NextResponse.json(applications);

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}