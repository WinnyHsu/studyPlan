import { Client } from "@notionhq/client";
import { DailyProgress, WrongQuestion, AppConfig } from "@/types";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

const DB = {
  daily:   process.env.NOTION_DB_DAILY_PROGRESS!,
  plan:    process.env.NOTION_DB_STUDY_PLAN!,
  wrong:   process.env.NOTION_DB_WRONG_QUESTIONS!,
  config:  process.env.NOTION_DB_CONFIG!,
};

// ── Config ────────────────────────────────────────────────
export async function getConfig(): Promise<AppConfig | null> {
  try {
    const res = await notion.databases.query({ database_id: DB.config, page_size: 1 });
    if (!res.results.length) return null;
    const p = res.results[0] as any;
    return {
      startDate:         p.properties.start_date?.date?.start ?? "",
      examDate:          p.properties.exam_date?.date?.start ?? "",
      examName:          p.properties.exam_name?.title?.[0]?.plain_text ?? "PPL 筆試",
      dailyGoalMinutes:  p.properties.daily_goal_mins?.number ?? 180,
      userName:          p.properties.user_name?.rich_text?.[0]?.plain_text ?? "",
    };
  } catch { return null; }
}

export async function saveConfig(config: AppConfig) {
  const existing = await notion.databases.query({ database_id: DB.config, page_size: 1 });
  const props = {
    start_date:       { date: { start: config.startDate } },
    exam_date:        { date: { start: config.examDate } },
    exam_name:        { title: [{ text: { content: config.examName } }] },
    daily_goal_mins:  { number: config.dailyGoalMinutes },
    user_name:        { rich_text: [{ text: { content: config.userName } }] },
  };
  if (existing.results.length) {
    await notion.pages.update({ page_id: existing.results[0].id, properties: props });
  } else {
    await notion.pages.create({ parent: { database_id: DB.config }, properties: props });
  }
}

// ── Daily Progress ────────────────────────────────────────
export async function getDailyProgress(date: string): Promise<DailyProgress | null> {
  try {
    const res = await notion.databases.query({
      database_id: DB.daily,
      filter: { property: "date", date: { equals: date } },
    });
    if (!res.results.length) return null;
    const p = res.results[0] as any;
    return {
      id:           p.id,
      date:         p.properties.date?.date?.start ?? date,
      weekNumber:   p.properties.week_number?.number ?? 0,
      mathDone:     p.properties.math_done?.checkbox ?? false,
      physicsDone:  p.properties.physics_done?.checkbox ?? false,
      reviewDone:   p.properties.review_done?.checkbox ?? false,
      studyMinutes: p.properties.study_minutes?.number ?? 0,
      notes:        p.properties.notes?.rich_text?.[0]?.plain_text ?? "",
      mood:         p.properties.mood?.select?.name ?? "ok",
    };
  } catch { return null; }
}

export async function upsertDailyProgress(data: DailyProgress) {
  const props: any = {
    date:          { date: { start: data.date } },
    week_number:   { number: data.weekNumber },
    math_done:     { checkbox: data.mathDone },
    physics_done:  { checkbox: data.physicsDone },
    review_done:   { checkbox: data.reviewDone },
    study_minutes: { number: data.studyMinutes },
    notes:         { rich_text: [{ text: { content: data.notes } }] },
    mood:          { select: { name: data.mood } },
  };
  if (data.id) {
    await notion.pages.update({ page_id: data.id, properties: props });
  } else {
    await notion.pages.create({ parent: { database_id: DB.daily }, properties: props });
  }
}

export async function getMonthProgress(year: number, month: number) {
  const start = `${year}-${String(month).padStart(2,"0")}-01`;
  const end   = `${year}-${String(month).padStart(2,"0")}-31`;
  const res = await notion.databases.query({
    database_id: DB.daily,
    filter: { and: [
      { property:"date", date:{ on_or_after: start } },
      { property:"date", date:{ on_or_before: end } },
    ]},
  });
  return res.results.map((r:any) => ({
    date:        r.properties.date?.date?.start,
    mathDone:    r.properties.math_done?.checkbox,
    physicsDone: r.properties.physics_done?.checkbox,
    reviewDone:  r.properties.review_done?.checkbox,
  }));
}

// ── Wrong Questions ───────────────────────────────────────
export async function addWrongQuestion(q: WrongQuestion) {
  await notion.pages.create({
    parent: { database_id: DB.wrong },
    properties: {
      question:       { title: [{ text: { content: q.question } }] },
      date:           { date: { start: q.date } },
      subject:        { select: { name: q.subject } },
      my_answer:      { rich_text: [{ text: { content: q.myAnswer } }] },
      correct_answer: { rich_text: [{ text: { content: q.correctAnswer } }] },
      explanation:    { rich_text: [{ text: { content: q.explanation } }] },
      reviewed:       { checkbox: false },
      week_number:    { number: q.weekNumber },
    },
  });
}

export async function getUnreviewedWrong(): Promise<WrongQuestion[]> {
  const res = await notion.databases.query({
    database_id: DB.wrong,
    filter: { property: "reviewed", checkbox: { equals: false } },
  });
  return res.results.map((r:any) => ({
    id:            r.id,
    date:          r.properties.date?.date?.start,
    subject:       r.properties.subject?.select?.name,
    question:      r.properties.question?.title?.[0]?.plain_text,
    myAnswer:      r.properties.my_answer?.rich_text?.[0]?.plain_text,
    correctAnswer: r.properties.correct_answer?.rich_text?.[0]?.plain_text,
    explanation:   r.properties.explanation?.rich_text?.[0]?.plain_text,
    reviewed:      false,
    weekNumber:    r.properties.week_number?.number,
  }));
}
