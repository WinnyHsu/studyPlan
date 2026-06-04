import { NextRequest, NextResponse } from "next/server";
import { generateQuizQuestions } from "@/lib/geminiai";
import { StudyPlanItem } from "@/types";

export async function POST(req: NextRequest) {
  if (!process.env.GEMINI_API_KEY) {
    return NextResponse.json(
      { error: "AI 出題功能尚未啟用，請設定 GEMINI_API_KEY", questions: [] },
      { status: 503 }
    );
  }

  try {
    const { topic, count = 3, week = 1, subject = "all", mode = "practice" } = await req.json();

    // Build a StudyPlanItem shape for the geminiai lib
    const planItem: StudyPlanItem = {
      week,
      day: "今日",
      mathTopic: subject === "physics" ? "" : topic,
      physicsTopic: subject === "math" ? "" : topic,
      keyFormulas: [],
      stage: week <= 12 ? "phase1" : week <= 16 ? "phase2" : "phase3",
      stageName: week <= 12 ? "第一階段" : week <= 16 ? "第二階段" : "第三階段",
    };

    // Override prompt direction based on subject
    const adjustedCount = count;
    const questions = await generateQuizQuestions(planItem, adjustedCount, mode as "practice" | "exam");

    // If subject filter is set, post-filter results
    const filtered = subject === "all"
      ? questions
      : questions.filter(q => q.subject === subject);

    // If filtering removed too many, return what we have
    return NextResponse.json({ questions: filtered.length > 0 ? filtered : questions });
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || "AI 出題失敗", questions: [] },
      { status: 500 }
    );
  }
}
