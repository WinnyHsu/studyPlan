"use client";
import { useEffect, useState } from "react";
import AppShell from "@/components/layout/AppShell";
import Card from "@/components/ui/Card";
import ProgressBar from "@/components/ui/ProgressBar";
import { AppConfig, DailyProgress, StudyPlanDay } from "@/types";
import { getCurrentWeek, getPlanForDate, formatDate, DAY_NAMES_ZH } from "@/lib/utils";
import { format, addDays, subDays, parseISO } from "date-fns";

const DEFAULT_CONFIG: AppConfig = {
  startDate: "2025-04-28", examDate: "2025-07-24",
  examName: "PPL 飛行員執照筆試", dailyGoalMinutes: 180, userName: "",
};

export default function DailyPageWrapper() {
  return <AppShell><DailyPage /></AppShell>;
}

function DailyPage() {
  const [config, setConfig]     = useState<AppConfig>(DEFAULT_CONFIG);
  const [date, setDate]         = useState(format(new Date(), "yyyy-MM-dd"));
  const [progress, setProgress] = useState<DailyProgress | null>(null);
  const [plan, setPlan]         = useState<StudyPlanDay | null>(null);
  const [notes, setNotes]       = useState("");
  const [mood, setMood]         = useState<"great" | "ok" | "tired">("ok");
  const [saving, setSaving]     = useState(false);

  useEffect(() => {
    fetch("/api/config").then(r => r.json()).then(d => { if (d.startDate) setConfig(d); }).catch(() => {});
  }, []);

  useEffect(() => {
    setPlan(getPlanForDate(config.startDate, date));
    fetch(`/api/schedule?date=${date}`).then(r => r.json()).then(d => {
      setProgress(d); setNotes(d?.notes || ""); setMood(d?.mood || "ok");
    }).catch(() => { setProgress(null); setNotes(""); });
  }, [date, config]);

  const week = getCurrentWeek(config.startDate);

  const handleCheck = async (field: "mathDone" | "physicsDone" | "reviewDone") => {
    const updated: DailyProgress = {
      ...progress, date, weekNumber: week,
      mathDone: progress?.mathDone ?? false,
      physicsDone: progress?.physicsDone ?? false,
      reviewDone: progress?.reviewDone ?? false,
      studyMinutes: progress?.studyMinutes ?? 0, notes, mood,
    };
    (updated as any)[field] = !(updated as any)[field];
    setProgress(updated);
    await fetch("/api/schedule", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(updated) });
  };

  const save = async () => {
    setSaving(true);
    const data: DailyProgress = {
      ...progress, date, weekNumber: week,
      mathDone: progress?.mathDone ?? false,
      physicsDone: progress?.physicsDone ?? false,
      reviewDone: progress?.reviewDone ?? false,
      studyMinutes: progress?.studyMinutes ?? 0, notes, mood,
    };
    await fetch("/api/schedule", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    setSaving(false);
  };

  const taskList = plan ? [
    { key: "mathDone",    emoji: "📐", label: plan.mathTopic,    detail: plan.mathDetail,    tag: "數學", tagBg: "#E6F1FB", tagCol: "#0C447C" },
    { key: "physicsDone", emoji: "⚛️", label: plan.physicsTopic, detail: plan.physicsDetail, tag: "物理", tagBg: "#EAF3DE", tagCol: "#27500A" },
    { key: "reviewDone",  emoji: "📖", label: "錯題檢討與航空英文單字複習", detail: "每日 40 分鐘 · Lift / Thrust / Altimeter", tag: "複習", tagBg: "#FAEEDA", tagCol: "#633806" },
  ] : [];
  const doneCount = taskList.filter(t => (progress as any)?.[t.key]).length;

  return (
    <div className="page-pad">
      {/* Date nav */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
        <button onClick={() => setDate(format(subDays(parseISO(date), 1), "yyyy-MM-dd"))}
          style={{ padding: "7px 12px", borderRadius: 8, border: "1px solid var(--color-border)", background: "var(--color-surface)", cursor: "pointer", fontSize: 13 }}>◀</button>
        <div style={{ flex: 1, textAlign: "center" }}>
          <div style={{ fontSize: 14, fontWeight: 500 }}>{formatDate(date)}</div>
          <div style={{ fontSize: 11, color: "var(--color-text-muted)", marginTop: 1 }}>第 {week} 週 {plan ? DAY_NAMES_ZH[plan.dayOfWeek] : "假日"}</div>
        </div>
        <button onClick={() => setDate(format(addDays(parseISO(date), 1), "yyyy-MM-dd"))}
          style={{ padding: "7px 12px", borderRadius: 8, border: "1px solid var(--color-border)", background: "var(--color-surface)", cursor: "pointer", fontSize: 13 }}>▶</button>
      </div>

      {/* Key formulas pills */}
      {plan && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 12 }}>
          {plan.keyFormulas.map((f, i) => (
            <span key={i} style={{ background: "#F1EFE8", color: "#444441", fontSize: 11, padding: "3px 8px", borderRadius: 20, fontFamily: "monospace" }}>{f}</span>
          ))}
        </div>
      )}

      {/* Task cards */}
      {taskList.map(t => (
        <Card key={t.key} style={{ marginBottom: 10 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <div style={{ fontSize: 13, fontWeight: 500 }}>{t.emoji} {t.tag}任務</div>
            <span style={{ background: t.tagBg, color: t.tagCol, fontSize: 11, padding: "2px 8px", borderRadius: 20, fontWeight: 500 }}>{t.tag}</span>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <div
              className="task-check-touch"
              onClick={() => handleCheck(t.key as any)}
              style={{
                width: 22, height: 22, borderRadius: 5, flexShrink: 0, marginTop: 2, cursor: "pointer",
                border: `1.5px solid ${(progress as any)?.[t.key] ? "var(--color-blue)" : "var(--color-border-strong)"}`,
                background: (progress as any)?.[t.key] ? "var(--color-blue)" : "transparent",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: "white",
              }}
            >{(progress as any)?.[t.key] ? "✓" : ""}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontSize: 13,
                color: (progress as any)?.[t.key] ? "var(--color-text-faint)" : "var(--color-text)",
                textDecoration: (progress as any)?.[t.key] ? "line-through" : "none",
              }}>{t.label}</div>
              <div style={{ fontSize: 11.5, color: "var(--color-text-muted)", marginTop: 3, lineHeight: 1.5 }}>{t.detail}</div>
            </div>
          </div>
        </Card>
      ))}

      {!plan && (
        <Card style={{ marginBottom: 12, textAlign: "center", padding: 30 }}>
          <p style={{ fontSize: 14, color: "var(--color-text-muted)" }}>😴 假日，好好休息！</p>
        </Card>
      )}

      {/* Progress bar */}
      {taskList.length > 0 && (
        <Card style={{ marginBottom: 12 }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--color-text-muted)", marginBottom: 6 }}>
            <span>今日完成度</span><span>{doneCount}/{taskList.length}</span>
          </div>
          <ProgressBar value={doneCount} max={taskList.length} color="green" />
        </Card>
      )}

      {/* Notes */}
      <Card>
        <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 8 }}>📝 今日 Notes</div>
        <textarea
          value={notes} onChange={e => setNotes(e.target.value)}
          placeholder="記錄今天的學習狀態、困難點..."
          style={{
            width: "100%", minHeight: 80, fontSize: 13,
            background: "#F1EFE8", border: "1px solid var(--color-border)",
            borderRadius: 8, padding: "10px 12px", resize: "vertical", outline: "none", lineHeight: 1.6,
          }}
        />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 10, flexWrap: "wrap", gap: 8 }}>
          <div style={{ display: "flex", gap: 6 }}>
            {(["great", "ok", "tired"] as const).map((m, i) => (
              <button key={m} onClick={() => setMood(m)} style={{
                padding: "6px 10px", borderRadius: 20, fontSize: 12, cursor: "pointer",
                border: `1px solid ${mood === m ? "var(--color-blue)" : "var(--color-border)"}`,
                background: mood === m ? "var(--color-blue-light)" : "var(--color-surface)",
                color: mood === m ? "var(--color-blue-text)" : "var(--color-text-muted)",
              }}>{["😊", "😐", "😩"][i]}</button>
            ))}
          </div>
          <button onClick={save} disabled={saving} style={{
            padding: "7px 20px", background: "var(--color-blue)", color: "white",
            border: "none", borderRadius: 8, fontSize: 13, cursor: "pointer",
          }}>{saving ? "儲存中..." : "儲存"}</button>
        </div>
      </Card>
    </div>
  );
}
