import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

export async function GET() {
  try {
    const notion = new Client({ auth: process.env.NOTION_TOKEN });
    await notion.databases.retrieve({ database_id: process.env.NOTION_DB_CONFIG! });
    return NextResponse.json({ ok:true });
  } catch(e:any) {
    return NextResponse.json({ ok:false, error:e.message });
  }
}
