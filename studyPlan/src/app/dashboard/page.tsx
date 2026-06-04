"use client";
import { useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import ProgressBar from "@/components/ui/ProgressBar";
import { AppConfig, DailyProgress, StudyPlanDay } from "@/types";
import { getCurrentWeek, getDaysUntilExam, getStageForWeek, getTodayPlan, formatDate, DAY_NAMES_ZH } from "@/lib/utils";
import { format } from "date-fns";

const DEFAULT_CONFIG: AppConfig = {
  startDate: "2026-04-28", examDate: "2026-07-24",
  examName: "PPL 飛行員執照筆試", dailyGoalMinutes: 180, userName: "",
};

export default function DashboardPage() {
  const [config, setConfig]     = useState<AppConfig>(DEFAULT_CONFIG);
  const [progress, setProgress] = useState<DailyProgress | null>(null);
  const [plan, setPlan]         = useState<StudyPlanDay | null>(null);
  const [notes, setNotes]       = useState("");
  const [mood, setMood]         = useState<"great" | "ok" | "tired">("ok");
  const [saving, setSaving]     = useState(false);
  const today = format(new Date(), "yyyy-MM-dd");

  useEffect(() => {
    fetch("/api/config").then(r => r.json()).then(d => {
      if (d.startDate) { setConfig(d); setPlan(getTodayPlan(d.startDate)); }
    }).catch(() => { setPlan(getTodayPlan(DEFAULT_CONFIG.startDate)); });
    fetch(`/api/schedule?date=${today}`).then(r => r.json()).then(d => {
      if (d) { setProgress(d); setNotes(d.notes || ""); setMood(d.mood || "ok"); }
    }).catch(() => {});
  }, [today]);

  const week  = getCurrentWeek(config.startDate);
  const days  = getDaysUntilExam(config.examDate);
  const stage = getStageForWeek(week);

  const handleCheck = async (field: "mathDone" | "physicsDone" | "reviewDone") => {
    const updated: DailyProgress = {
      ...progress, date: today, weekNumber: week,
      mathDone: progress?.mathDone ?? false,
      physicsDone: progress?.physicsDone ?? false,
      reviewDone: progress?.reviewDone ?? false,
      studyMinutes: progress?.studyMinutes ?? 0, notes, mood,
    };
    (updated as any)[field] = !(updated as any)[field];
    setProgress(updated);
    await fetch("/api/schedule", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(updated) });
  };

  const handleSaveNotes = async () => {
    setSaving(true);
    const data: DailyProgress = {
      ...progress, date: today, weekNumber: week,
      mathDone: progress?.mathDone ?? false,
      physicsDone: progress?.physicsDone ?? false,
      reviewDone: progress?.reviewDone ?? false,
      studyMinutes: progress?.studyMinutes ?? 0, notes, mood,
    };
    await fetch("/api/schedule", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    setSaving(false);
  };

  const tasks = plan ? [
    { key: "mathDone",    label: plan.mathTopic,    sub: plan.mathDetail,    tag: "數學", tagColor: "blue" as const },
    { key: "physicsDone", label: plan.physicsTopic, sub: plan.physicsDetail, tag: "物理", tagColor: "green" as const },
    { key: "reviewDone",  label: "錯題檢討與航空英文單字複習", sub: "40 分鐘", tag: "複習", tagColor: "amber" as const },
  ] : [];
  const doneCount = tasks.filter(t => (progress as any)?.[t.key]).length;

  return (
    <div className="page-pad">
      {/* Header row — hidden on mobile (MobileHeader handles it) */}
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 14 }}>
        <div>
          <h1 className="page-title">今日概覽</h1>
          <p style={{ fontSize: 12, color: "var(--color-text-muted)" }}>
            {formatDate(today)} · 第 {week} 週 {plan ? DAY_NAMES_ZH[plan.dayOfWeek] : ""} · {stage.label}
          </p>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <Badge color="blue">第 {week} 週</Badge>
          <Badge color="amber">{stage.number === 1 ? "第一" : stage.number === 2 ? "第二" : "第三"}階段</Badge>
        </div>
      </div>

      {/* Metrics 2×2 on mobile, 4×1 on desktop */}
      <div className="grid-4" style={{ marginBottom: 14 }}>
        {[
          { label: "距離考試", value: `${days} 天`, sub: config.examName },
          { label: "目前週數",  value: `第 ${week} 週`, sub: "共 20 週" },
          { label: "今日進度",  value: `${doneCount}/3`, sub: "項任務完成" },
          { label: "每日目標",  value: `${config.dailyGoalMinutes}min`, sub: "今日讀書目標" },
        ].map(m => (
          <div key={m.label} style={{ background: "#F1EFE8", borderRadius: 8, padding: "11px 12px" }}>
            <div style={{ fontSize: 11, color: "var(--color-text-muted)", marginBottom: 3 }}>{m.label}</div>
            <div className="metric-value" style={{ fontSize: 20, fontWeight: 500 }}>{m.value}</div>
            <div className="metric-sub" style={{ fontSize: 11, color: "var(--color-text-faint)", marginTop: 1 }}>{m.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid-2" style={{ marginBottom: 12 }}>
        {/* Tasks */}
        <Card>
          <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 12 }}>📋 今日任務</div>
          {plan ? tasks.map(t => (
            <div key={t.key} style={{ display: "flex", gap: 10, padding: "9px 0", borderBottom: "1px solid var(--color-border)" }}>
              <div
                className="task-check-touch"
                onClick={() => handleCheck(t.key as any)}
                style={{
                  width: 20, height: 20, borderRadius: 5, flexShrink: 0, marginTop: 2, cursor: "pointer",
                  border: `1.5px solid ${(progress as any)?.[t.key] ? "var(--color-blue)" : "var(--color-border-strong)"}`,
                  background: (progress as any)?.[t.key] ? "var(--color-blue)" : "transparent",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "white",
                }}
              >{(progress as any)?.[t.key] ? "✓" : ""}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontSize: 12.5,
                  color: (progress as any)?.[t.key] ? "var(--color-text-faint)" : "var(--color-text)",
                  textDecoration: (progress as any)?.[t.key] ? "line-through" : "none",
                  whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                }}>{t.label}</div>
                <div style={{ fontSize: 11, color: "var(--color-text-faint)", marginTop: 2 }}>{t.sub.slice(0, 30)}</div>
              </div>
              <Badge color={t.tagColor}>{t.tag}</Badge>
            </div>
          )) : <p style={{ fontSize: 13, color: "var(--color-text-muted)" }}>假日，好好休息！</p>}
          {plan && (
            <div style={{ marginTop: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--color-text-muted)", marginBottom: 4 }}>
                <span>今日完成度</span><span>{doneCount}/3</span>
              </div>
              <ProgressBar value={doneCount} max={3} color="green" />
            </div>
          )}
        </Card>

        {/* Key Formulas */}
        <Card>
          <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 10 }}>📐 本日重點公式</div>
          {plan ? (
            <>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 10 }}>
                {plan.keyFormulas.slice(0, 4).map((f, i) => (
                  <span key={i} style={{ background: "#F1EFE8", color: "#444441", fontSize: 11, padding: "3px 8px", borderRadius: 20, fontFamily: "monospace" }}>{f}</span>
                ))}
              </div>
              <div style={{ fontSize: 12, lineHeight: 1.7 }}>
                <span style={{ color: "var(--color-blue-text)", fontWeight: 500 }}>數：</span>
                <span style={{ color: "var(--color-text-muted)" }}>{plan.mathTopic}</span><br />
                <span style={{ color: "var(--color-green-text)", fontWeight: 500 }}>物：</span>
                <span style={{ color: "var(--color-text-muted)" }}>{plan.physicsTopic}</span>
              </div>
            </>
          ) : <p style={{ fontSize: 13, color: "var(--color-text-muted)" }}>今天沒有新公式，複習舊的！</p>}
        </Card>
      </div>

      {/* Notes */}
      <Card>
        <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 10 }}>📝 今日 Notes</div>
        <textarea
          value={notes}
          onChange={e => setNotes(e.target.value)}
          placeholder="記錄今天的學習狀態、困難點..."
          style={{
            width: "100%", minHeight: 72, fontSize: 13,
            background: "#F1EFE8", border: "1px solid var(--color-border)",
            borderRadius: 8, padding: "10px 12px", resize: "vertical", outline: "none", lineHeight: 1.6,
          }}
        />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 10, flexWrap: "wrap", gap: 8 }}>
          <div style={{ display: "flex", gap: 6 }}>
            {(["great", "ok", "tired"] as const).map((m, i) => (
              <button key={m} onClick={() => setMood(m)} style={{
                padding: "6px 12px", borderRadius: 20, fontSize: 12, cursor: "pointer",
                border: `1px solid ${mood === m ? "var(--color-blue)" : "var(--color-border)"}`,
                background: mood === m ? "var(--color-blue-light)" : "var(--color-surface)",
                color: mood === m ? "var(--color-blue-text)" : "var(--color-text-muted)",
              }}>{["😊", "😐", "😩"][i]}{["良好", "普通", "很累"][i]}</button>
            ))}
          </div>
          <button onClick={handleSaveNotes} disabled={saving} style={{
            padding: "7px 18px", background: "var(--color-blue)", color: "white",
            border: "none", borderRadius: 8, fontSize: 13, cursor: "pointer",
          }}>{saving ? "儲存中..." : "儲存"}</button>
        </div>
      </Card>
    </div>
  );
}
