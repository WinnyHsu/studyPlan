"use client";
import { useEffect, useState } from "react";
import AppShell from "@/components/layout/AppShell";
import Card from "@/components/ui/Card";
import { AppConfig } from "@/types";

const DEFAULT: AppConfig = {
  startDate: "2026-04-28", examDate: "2026-07-24",
  examName: "PPL 飛行員執照筆試", dailyGoalMinutes: 180, userName: "",
};

export default function SettingsPageWrapper() { return <AppShell><SettingsPage /></AppShell>; }

function SettingsPage() {
  const [config, setConfig]   = useState<AppConfig>(DEFAULT);
  const [saving, setSaving]   = useState(false);
  const [saved, setSaved]     = useState(false);
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/config").then(r => r.json()).then(d => { if (d.startDate) setConfig(d); }).catch(() => {});
  }, []);

  const save = async () => {
    setSaving(true); setSaved(false);
    await fetch("/api/config", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(config) });
    setSaving(false); setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const testNotion = async () => {
    setTesting(true); setTestResult(null);
    try {
      const r = await fetch("/api/config/test");
      const d = await r.json();
      setTestResult(d.ok ? "✅ Notion 連線成功！" : `❌ ${d.error}`);
    } catch { setTestResult("❌ 連線失敗，請確認環境變數"); }
    setTesting(false);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "9px 12px", borderRadius: 8,
    border: "1px solid var(--color-border)", fontSize: 13,
    background: "var(--color-surface)", color: "var(--color-text)", outline: "none",
  };

  return (
    <div className="page-pad">
      <h1 className="page-title" style={{ marginBottom: 4 }}>個人設定</h1>
      <p style={{ fontSize: 12, color: "var(--color-text-muted)", marginBottom: 16 }}>設定讀書計畫與考試資訊</p>

      <Card style={{ marginBottom: 12 }}>
        <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 12 }}>📅 計畫設定</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div>
            <label style={{ fontSize: 12, color: "var(--color-text-muted)", display: "block", marginBottom: 4 }}>讀書計畫開始日</label>
            <input type="date" value={config.startDate} onChange={e => setConfig(c => ({ ...c, startDate: e.target.value }))} style={inputStyle} />
          </div>
          <div>
            <label style={{ fontSize: 12, color: "var(--color-text-muted)", display: "block", marginBottom: 4 }}>考試日期</label>
            <input type="date" value={config.examDate} onChange={e => setConfig(c => ({ ...c, examDate: e.target.value }))} style={inputStyle} />
          </div>
          <div>
            <label style={{ fontSize: 12, color: "var(--color-text-muted)", display: "block", marginBottom: 4 }}>考試名稱</label>
            <input type="text" value={config.examName} onChange={e => setConfig(c => ({ ...c, examName: e.target.value }))} style={inputStyle} placeholder="PPL 飛行員執照筆試" />
          </div>
          <div>
            <label style={{ fontSize: 12, color: "var(--color-text-muted)", display: "block", marginBottom: 4 }}>每日目標（分鐘）</label>
            <input type="number" value={config.dailyGoalMinutes} onChange={e => setConfig(c => ({ ...c, dailyGoalMinutes: Number(e.target.value) }))} style={inputStyle} />
          </div>
          <div>
            <label style={{ fontSize: 12, color: "var(--color-text-muted)", display: "block", marginBottom: 4 }}>你的名字（選填）</label>
            <input type="text" value={config.userName} onChange={e => setConfig(c => ({ ...c, userName: e.target.value }))} style={inputStyle} placeholder="選填" />
          </div>
        </div>
      </Card>

      <Card style={{ marginBottom: 12 }}>
        <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 10 }}>🗄️ Notion 連線</div>
        <button onClick={testNotion} disabled={testing} style={{
          width: "100%", padding: "9px", background: "var(--color-surface)",
          border: "1px solid var(--color-border)", borderRadius: 8, fontSize: 13, cursor: "pointer",
        }}>{testing ? "測試中..." : "🔌 測試 Notion 連線"}</button>
        {testResult && <div style={{ marginTop: 8, fontSize: 13 }}>{testResult}</div>}
      </Card>

      <button onClick={save} disabled={saving} style={{
        width: "100%", padding: "12px", background: "var(--color-blue)", color: "white",
        border: "none", borderRadius: 8, fontSize: 14, cursor: "pointer", fontWeight: 500,
      }}>{saved ? "✓ 已儲存" : saving ? "儲存中..." : "儲存設定"}</button>
    </div>
  );
}
