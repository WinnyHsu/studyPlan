"use client";
import { useEffect, useRef, useState } from "react";
import AppShell from "@/components/layout/AppShell";
import Card from "@/components/ui/Card";
import ProgressBar from "@/components/ui/ProgressBar";
import { AppConfig } from "@/types";
import { format } from "date-fns";

const DEFAULT_CONFIG: AppConfig = {
  startDate: "2026-04-28", examDate: "2026-07-24",
  examName: "PPL", dailyGoalMinutes: 180, userName: "",
};

export default function TimerPageWrapper() { return <AppShell><TimerPage /></AppShell>; }

function TimerPage() {
  const [config, setConfig]   = useState<AppConfig>(DEFAULT_CONFIG);
  const [secs, setSecs]       = useState(0);
  const [running, setRunning] = useState(false);
  const [saved, setSaved]     = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const today = format(new Date(), "yyyy-MM-dd");

  useEffect(() => {
    fetch("/api/config").then(r => r.json()).then(d => { if (d.startDate) setConfig(d); }).catch(() => {});
  }, []);

  const start = () => {
    if (running) return;
    setRunning(true); setSaved(false);
    intervalRef.current = setInterval(() => setSecs(s => s + 1), 1000);
  };
  const pause = () => {
    setRunning(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };
  const reset = () => { pause(); setSecs(0); setSaved(false); };

  const saveTime = async () => {
    const mins = Math.floor(secs / 60);
    if (mins < 1) return;
    await fetch("/api/schedule", {
      method: "PATCH", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ date: today, addMinutes: mins }),
    });
    setSaved(true);
  };

  const pad = (n: number) => String(n).padStart(2, "0");
  const h = Math.floor(secs / 3600), m = Math.floor((secs % 3600) / 60), s = secs % 60;
  const goalSecs = config.dailyGoalMinutes * 60;
  const pct = Math.min(100, Math.round(secs / goalSecs * 100));

  return (
    <div className="page-pad">
      <h1 className="page-title" style={{ marginBottom: 4 }}>學習計時器</h1>
      <p style={{ fontSize: 12, color: "var(--color-text-muted)", marginBottom: 16 }}>今日目標 {config.dailyGoalMinutes} 分鐘</p>

      <Card style={{ textAlign: "center", padding: "28px 16px", marginBottom: 14 }}>
        <div className="timer-display">{pad(h)}:{pad(m)}:{pad(s)}</div>
        <div style={{ fontSize: 13, color: "var(--color-text-muted)", marginTop: 6 }}>今日讀書時間</div>
        <div style={{ margin: "14px 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--color-text-muted)", marginBottom: 6 }}>
            <span>目標進度</span><span>{pct}% {pct >= 100 ? "🎉" : ""}</span>
          </div>
          <ProgressBar value={secs} max={goalSecs} color={pct >= 100 ? "green" : "blue"} />
        </div>
        {/* Buttons: wrap on mobile */}
        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={start} disabled={running} style={{
            padding: "10px 20px", background: "var(--color-blue)", color: "white",
            border: "none", borderRadius: 8, fontSize: 14, cursor: "pointer", opacity: running ? 0.5 : 1,
          }}>▶ 開始</button>
          <button onClick={pause} disabled={!running} style={{
            padding: "10px 20px", background: "var(--color-surface)", border: "1px solid var(--color-border)",
            borderRadius: 8, fontSize: 14, cursor: "pointer", opacity: !running ? 0.5 : 1,
          }}>⏸ 暫停</button>
          <button onClick={reset} style={{
            padding: "10px 20px", background: "var(--color-surface)", border: "1px solid var(--color-border)",
            borderRadius: 8, fontSize: 14, cursor: "pointer",
          }}>↺ 重置</button>
          {secs > 60 && !saved && (
            <button onClick={saveTime} style={{
              padding: "10px 20px", background: "#EAF3DE", color: "#27500A",
              border: "1px solid #97C459", borderRadius: 8, fontSize: 14, cursor: "pointer",
            }}>💾 儲存</button>
          )}
          {saved && <span style={{ padding: "10px 0", fontSize: 13, color: "#27500A" }}>✓ 已儲存</span>}
        </div>
      </Card>

      <Card>
        <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 8 }}>💡 提醒</div>
        <div style={{ fontSize: 12.5, color: "var(--color-text-muted)", lineHeight: 1.7 }}>
          每天讀書 3 小時目標分配：<br/>
          ・00:00–01:10 數學（含10分心算熱身）<br/>
          ・01:20–02:20 物理<br/>
          ・02:20–03:00 錯題複習 + 航空英文
        </div>
      </Card>
    </div>
  );
}
