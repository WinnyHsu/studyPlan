import { NextRequest, NextResponse } from "next/server";
import { generateDailyWarmup } from "@/lib/geminiai";

export async function GET(req: NextRequest) {
  const week = Number(req.nextUrl.searchParams.get("week") || "1");

  if (!process.env.GEMINI_API_KEY) {
    // Return static fallback questions when no API key
    const fallback = [
      `Q1. 450 knots 換算為 km/h 約為多少？`,
      `Q2. 若 v₀=0，a=3 m/s²，經過 t=10s，求末速度 v。`,
      `Q3. 邊長 3, 4 的直角三角形，斜邊長為？`,
    ];
    return NextResponse.json({ questions: fallback, fallback: true });
  }

  try {
    const questions = await generateDailyWarmup(week);
    return NextResponse.json({ questions, fallback: false });
  } catch (e: any) {
    return NextResponse.json({ questions: [], error: e?.message }, { status: 500 });
  }
}
