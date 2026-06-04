import { format, differenceInDays, parseISO, isToday, isPast } from "date-fns";
import { AppConfig, WeekDay } from "@/types";
import { STUDY_PLAN } from "./study-plan-data";

export function getCurrentWeek(startDate: string): number {
  const start = parseISO(startDate);
  const today = new Date();
  const diff  = differenceInDays(today, start);
  return Math.min(20, Math.max(1, Math.floor(diff / 7) + 1));
}

export function getDaysUntilExam(examDate: string): number {
  return Math.max(0, differenceInDays(parseISO(examDate), new Date()));
}

export function getStageForWeek(week: number): { number: 1|2|3; label: string } {
  if (week <= 12) return { number: 1, label: "第一階段：觀念地基" };
  if (week <= 16) return { number: 2, label: "第二階段：題海戰術" };
  return { number: 3, label: "第三階段：模擬考場" };
}

export function getTodayPlan(startDate: string) {
  const week = getCurrentWeek(startDate);
  const dayNames = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
  const todayName = dayNames[new Date().getDay()] as any;
  return STUDY_PLAN.find(d => d.week === week && d.dayOfWeek === todayName) ?? null;
}

export function getPlanForDate(startDate: string, date: string) {
  const start = parseISO(startDate);
  const target = parseISO(date);
  const diff = differenceInDays(target, start);
  if (diff < 0) return null;
  const week = Math.floor(diff / 7) + 1;
  if (week > 20) return null;
  const dayNames = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
  const dayName = dayNames[parseISO(date).getDay()] as any;
  return STUDY_PLAN.find(d => d.week === week && d.dayOfWeek === dayName) ?? null;
}

export function buildCalendarDays(
  year: number, month: number,
  config: AppConfig,
  progressMap: Record<string, { mathDone:boolean; physicsDone:boolean }>
): WeekDay[] {
  const days: WeekDay[] = [];
  const firstDay = new Date(year, month - 1, 1);
  const lastDay  = new Date(year, month, 0);
  const startOffset = firstDay.getDay();

  for (let i = 0; i < startOffset; i++)
    days.push({ date:"", weekNumber:0, dayLabel:"", isToday:false, isPast:false, status:"future" });

  for (let d = 1; d <= lastDay.getDate(); d++) {
    const dateStr = `${year}-${String(month).padStart(2,"0")}-${String(d).padStart(2,"0")}`;
    const dateObj = new Date(year, month-1, d);
    const prog    = progressMap[dateStr];
    const todayFlag = isToday(dateObj);
    const pastFlag  = isPast(dateObj) && !todayFlag;
    const isExam    = dateStr === config.examDate;

    let status: WeekDay["status"] = "future";
    if (isExam) status = "exam";
    else if (prog?.mathDone && prog?.physicsDone) status = "done";
    else if (prog?.mathDone || prog?.physicsDone) status = "partial";
    else if (todayFlag) status = "none";
    else if (!pastFlag) status = "future";

    days.push({ date: dateStr, weekNumber: 0, dayLabel: String(d), isToday: todayFlag, isPast: pastFlag, status });
  }
  return days;
}

export function formatDate(date: string): string {
  try { return format(parseISO(date), "yyyy年M月d日"); }
  catch { return date; }
}

export const DAY_NAMES_ZH: Record<string, string> = {
  monday:"週一", tuesday:"週二", wednesday:"週三", thursday:"週四", friday:"週五",
  saturday:"週六", sunday:"週日",
};
