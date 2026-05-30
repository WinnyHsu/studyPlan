import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(req: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "AI 出題功能尚未啟用，請設定 GEMINI_API_KEY", questions: [] },
      { status: 503 }
    );
  }

  const ai = new GoogleGenAI({ apiKey });

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
5. correctIndex 必須是 0、1、2、3 其中之一

請嚴格以 JSON 格式回應，不要有 Markdown，不要有 code block，不要有其他文字：
請確保輸出是完整且可被 JSON.parse 解析的 JSON。
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

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        maxOutputTokens: 4096,
      },
    });

    const text = response.text ?? "{}";

let parsed;

try {
  parsed = JSON.parse(text);
} catch {
  const jsonMatch = text.match(/\{[\s\S]*\}/);

  if (!jsonMatch) {
    return NextResponse.json(
      {
        error: "AI 回傳格式不是 JSON",
        raw: text,
        questions: [],
      },
      { status: 500 }
    );
  }

  try {
    parsed = JSON.parse(jsonMatch[0]);
  } catch {
    return NextResponse.json(
      {
        error: "AI 回傳 JSON 格式不完整，請再試一次",
        raw: text,
        questions: [],
      },
      { status: 500 }
    );
  }
}

return NextResponse.json(parsed);
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || "AI 出題失敗", questions: [] },
      { status: 500 }
    );
  }
}