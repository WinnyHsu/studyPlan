import { NextRequest, NextResponse } from "next/server";
import { getDailyProgress, upsertDailyProgress } from "@/lib/notion";

export async function GET(req: NextRequest) {
  const date = req.nextUrl.searchParams.get("date");
  if(!date) return NextResponse.json({ error:"date required" }, { status:400 });
  try {
    const data = await getDailyProgress(date);
    return NextResponse.json(data);
  } catch(e:any) {
    return NextResponse.json({ error: e.message }, { status:500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    await upsertDailyProgress(body);
    return NextResponse.json({ ok:true });
  } catch(e:any) {
    return NextResponse.json({ error: e.message }, { status:500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const { date, addMinutes } = await req.json();
    const existing = await getDailyProgress(date);
    const updated = { ...(existing || { date, weekNumber:0, mathDone:false, physicsDone:false, reviewDone:false, notes:"", mood:"ok" as const }), studyMinutes: (existing?.studyMinutes||0) + addMinutes };
    await upsertDailyProgress(updated);
    return NextResponse.json({ ok:true });
  } catch(e:any) {
    return NextResponse.json({ error: e.message }, { status:500 });
  }
}
