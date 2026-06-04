import { NextRequest, NextResponse } from "next/server";
import { addWrongQuestion } from "@/lib/notion";
import { format } from "date-fns";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    await addWrongQuestion({ ...body, date: format(new Date(),"yyyy-MM-dd"), reviewed:false });
    return NextResponse.json({ ok:true });
  } catch(e:any) {
    return NextResponse.json({ error:e.message }, { status:500 });
  }
}
