import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json({ error: "AI 出題功能尚未啟用", questions: [] }, { status: 503 });
  }

  try {
    const { topic, count = 3, week = 1 } = await req.json();

    const prompt = `你是一位專業的台灣培訓機師考試數學物理教師。
請針對以下主題出 ${count} 道四選一選擇題，題目要能手算（嚴禁使用計算機），適合備考 PPL 飛行員執照筆試的程度。

本週主題：${topic}（第 ${week} 週）

要求：
1. 每題都要有具體數字可以手算
2. 題目難度：中等（不要太簡單也不要需要計算機）
3. 解析要說明解題思路和公式應用
4. 如果是航空相關，要說明與飛行的關聯

請嚴格以 JSON 格式回應，不要有其他文字：
{
  "questions": [
    {
      "question": "題目文字",
      "options": ["A選項", "B選項", "C選項", "D選項"],
      "correctIndex": 0,
      "explanation": "詳細解析，包括公式和計算步驟",
      "subject": "math 或 physics",
      "topic": "具體主題名稱"
    }
  ]
}`;

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      response_format: { type: "json_object" },
      max_tokens: 2000,
    });

    const text = response.choices[0].message.content || "{}";
    const parsed = JSON.parse(text);
    return NextResponse.json(parsed);
  } catch (e: any) {
    return NextResponse.json({ error: e.message, questions: [] }, { status: 500 });
  }
}
