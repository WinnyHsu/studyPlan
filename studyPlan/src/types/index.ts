export interface AppConfig {
  startDate: string;       // ISO date string e.g. "2026-04-28"
  examDate: string;        // ISO date string e.g. "2026-07-24"
  examName: string;
  dailyGoalMinutes: number;
  userName: string;
}

export interface StudyPlanDay {
  id: string;
  week: number;
  dayOfWeek: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
  mathTopic: string;
  mathDetail: string;
  physicsTopic: string;
  physicsDetail: string;
  keyFormulas: string[];
  stage: 1 | 2 | 3;
}

export interface StudyPlanItem {
  week: number
  day: string
  mathTopic: string
  physicsTopic: string
  keyFormulas: string[]
  stage: 'phase1' | 'phase2' | 'phase3'
  stageName: string
  date?: string
}

export interface DailyProgress {
  id?: string;
  date: string;            // ISO date string
  weekNumber: number;
  mathDone: boolean;
  physicsDone: boolean;
  reviewDone: boolean;
  studyMinutes: number;
  notes: string;
  mood: "great" | "ok" | "tired";
}

export interface WrongQuestion {
  id?: string;
  date: string;
  subject: "math" | "physics" | "english";
  question: string;
  myAnswer: string;
  correctAnswer: string;
  explanation: string;
  reviewed: boolean;
  weekNumber: number;
}

export interface QuizQuestion {
  question: string;
  options: [string, string, string, string];
  correctIndex: number;
  explanation: string;
  subject: "math" | "physics";
  topic: string;
}

export type WeekDay = {
  date: string;
  weekNumber: number;
  dayLabel: string;
  isToday: boolean;
  isPast: boolean;
  status: "done" | "partial" | "none" | "future" | "exam";
};
