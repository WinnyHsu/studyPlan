import { NextRequest, NextResponse } from "next/server";
import { getConfig, saveConfig } from "@/lib/notion";

export async function GET() {
  try {
    const config = await getConfig();
    return NextResponse.json(config || {});
  } catch { return NextResponse.json({}); }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    await saveConfig(body);
    return NextResponse.json({ ok:true });
  } catch(e:any) {
    return NextResponse.json({ error:e.message }, { status:500 });
  }
}
