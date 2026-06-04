import { GoogleGenAI } from '@google/genai'
import { QuizQuestion, StudyPlanItem } from '@/types'

// ============================================================
// AI 出題 — 根據當週讀書計畫自動產生練習題
// ============================================================

function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY

  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is missing')
  }

  return new GoogleGenAI({ apiKey })
}

export async function generateQuizQuestions(
  plan: StudyPlanItem,
  count: number = 5,
  mode: 'practice' | 'exam' = 'practice'
): Promise<QuizQuestion[]> {
  const prompt = mode === 'exam'
    ? buildExamPrompt(plan, count)
    : buildPracticePrompt(plan, count)

  const ai = getGeminiClient()

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
    config: {
      responseMimeType: 'application/json',
      maxOutputTokens: 4096,
    },
  })

  const text = response.text ?? '[]'
  return parseQuizResponse(text)
}

export async function generateDailyWarmup(week: number): Promise<string[]> {
  const prompt = `你是一位準備PPL飛行員執照的數學物理補習老師。
請針對第${week}週的學習範圍，出3道適合10分鐘心算暖身的題目。
要求：
1. 嚴禁使用計算機，全部要能心算
2. 難度適中，大約高中程度
3. 每題一行，格式：Q1. [題目]
4. 不要給答案，只出題目
5. 直接輸出3題，不要額外說明`

  const ai = getGeminiClient()

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
    config: {
      maxOutputTokens: 500,
    },
  })

  const text = response.text ?? ''
  return text.split('\n').filter(line => line.match(/^Q\d\./)).slice(0, 3)
}

function buildPracticePrompt(plan: StudyPlanItem, count: number): string {
  return `你是一位準備PPL飛行員執照的數學物理補習老師。

學生目前在學：
- 週次：第${plan.week}週，${plan.day}
- 數學主題：${plan.mathTopic}
- 物理主題：${plan.physicsTopic}
- 重點公式：${plan.keyFormulas.join('、') || '無'}

請出${count}道練習題，要求：
1. 數學和物理各出幾道，比例約 1:1
2. 嚴禁使用計算機，全部要能手算
3. 難度由易到難
4. 每題都要有詳細解析
5. 適當結合航空應用情境（如飛機速度換算、升力計算等）

請嚴格用以下 JSON 格式輸出，不要有 Markdown，不要有 code block，不要有任何其他文字：
[
  {
    "id": "q1",
    "question": "題目內容",
    "options": ["A. 選項一", "B. 選項二", "C. 選項三", "D. 選項四"],
    "correctIndex": 0,
    "explanation": "詳細解析，包含計算步驟",
    "subject": "math",
    "topic": "主題名稱",
    "difficulty": "easy"
  }
]`
}

function buildExamPrompt(plan: StudyPlanItem, count: number): string {
  return `你是一位PPL飛行員執照考試出題老師。

請模擬真實考場出${count}道全範圍綜合題，要求：
1. 嚴格 1 分鐘可以解答 1 題的難度
2. 嚴禁使用計算機
3. 涵蓋：力學、幾何、向量、三角、熱學、流體、電學
4. 部分題目用英文（Lift, Thrust, Drag, Bernoulli 等航空術語）
5. 每題都要有詳細解析

嚴格用以下 JSON 格式輸出，不要有 Markdown，不要有 code block，不要有任何其他文字：
[
  {
    "id": "q1",
    "question": "題目內容",
    "options": ["A. 選項一", "B. 選項二", "C. 選項三", "D. 選項四"],
    "correctIndex": 0,
    "explanation": "詳細解析",
    "subject": "physics",
    "topic": "主題",
    "difficulty": "medium"
  }
]`
}

function parseQuizResponse(text: string): QuizQuestion[] {
  try {
    const jsonMatch = text.match(/\[[\s\S]*\]/)
    if (!jsonMatch) return []

    const parsed = JSON.parse(jsonMatch[0])
    if (!Array.isArray(parsed)) return []

    return parsed.map((q, i) => ({
      id: q.id ?? `q${i + 1}`,
      question: q.question ?? '',
      options: Array.isArray(q.options) ? q.options : [],
      correctIndex: typeof q.correctIndex === 'number' ? q.correctIndex : 0,
      explanation: q.explanation ?? '',
      subject: q.subject === 'physics' ? 'physics' : 'math',
      topic: q.topic ?? '',
      difficulty: ['easy', 'medium', 'hard'].includes(q.difficulty) ? q.difficulty : 'medium',
    }))
  } catch {
    return []
  }
}