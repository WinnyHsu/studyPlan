import { NextRequest, NextResponse } from "next/server";
import { getMonthProgress } from "@/lib/notion";

export async function GET(req: NextRequest) {
  const year  = Number(req.nextUrl.searchParams.get("year")  || new Date().getFullYear());
  const month = Number(req.nextUrl.searchParams.get("month") || new Date().getMonth()+1);
  try {
    const data = await getMonthProgress(year, month);
    return NextResponse.json(data);
  } catch(e:any) {
    return NextResponse.json([], { status:500 });
  }
}
