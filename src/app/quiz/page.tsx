"use client";
import { useEffect, useState } from "react";
import AppShell from "@/components/layout/AppShell";
import Card from "@/components/ui/Card";
import { QuizQuestion, AppConfig } from "@/types";
import { getCurrentWeek, getTodayPlan } from "@/lib/utils";

const DEFAULT_CONFIG: AppConfig = {
  startDate: "2025-04-28", examDate: "2025-07-24",
  examName: "PPL 飛行員執照筆試", dailyGoalMinutes: 180, userName: "",
};

export default function QuizPageWrapper() {
  return <AppShell><QuizPage /></AppShell>;
}

function QuizPage() {
  const [config, setConfig]       = useState<AppConfig>(DEFAULT_CONFIG);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [answers, setAnswers]     = useState<Record<number, number>>({});
  const [shown, setShown]         = useState<Record<number, boolean>>({});
  const [loading, setLoading]     = useState(false);
  const [topic, setTopic]         = useState("");
  const [count, setCount]         = useState(3);
  const [wrongSaved, setWrongSaved] = useState<Record<number, boolean>>({});

  useEffect(() => {
    fetch("/api/config").then(r => r.json()).then(d => {
      if (d.startDate) {
        setConfig(d);
        const p = getTodayPlan(d.startDate);
        setTopic(p ? `${p.mathTopic}、${p.physicsTopic}` : "向量與牛頓定律");
      }
    }).catch(() => { setTopic("向量與牛頓定律"); });
  }, []);

  const generate = async () => {
    setLoading(true); setQuestions([]); setAnswers({}); setShown({}); setWrongSaved({});
    try {
      const res = await fetch("/api/quiz", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, count, week: getCurrentWeek(config.startDate) }),
      });
      const data = await res.json();
      setQuestions(data.questions || []);
    } catch { alert("出題失敗，請稍後再試"); }
    setLoading(false);
  };

  const handleAnswer = (qi: number, oi: number) => {
    if (answers[qi] !== undefined) return;
    setAnswers(a => ({ ...a, [qi]: oi }));
    setShown(s => ({ ...s, [qi]: true }));
  };

  const saveWrong = async (qi: number, q: QuizQuestion) => {
    const ans = answers[qi];
    if (ans === undefined || ans === q.correctIndex) return;
    await fetch("/api/quiz/wrong", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        question: q.question, subject: q.subject,
        myAnswer: q.options[ans], correctAnswer: q.options[q.correctIndex],
        explanation: q.explanation, weekNumber: getCurrentWeek(config.startDate),
      }),
    });
    setWrongSaved(s => ({ ...s, [qi]: true }));
  };

  const score = questions.length
    ? questions.filter((_, i) => answers[i] === questions[i].correctIndex).length
    : 0;
  const allAnswered = questions.length > 0 && Object.keys(answers).length === questions.length;

  return (
    <div className="page-pad">
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 14 }}>
        <div>
          <h1 className="page-title">AI 練習題</h1>
          <p style={{ fontSize: 12, color: "var(--color-text-muted)" }}>Claude AI 出題 · 嚴禁計算機</p>
        </div>
        {allAnswered && (
          <div style={{ background: "var(--color-blue-light)", color: "var(--color-blue-text)", padding: "8px 14px", borderRadius: 8, textAlign: "center" }}>
            <div style={{ fontSize: 20, fontWeight: 500 }}>{score}/{questions.length}</div>
            <div style={{ fontSize: 11 }}>得分</div>
          </div>
        )}
      </div>

      {/* Controls */}
      <Card style={{ marginBottom: 14 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div>
            <label style={{ fontSize: 12, color: "var(--color-text-muted)", display: "block", marginBottom: 4 }}>出題主題</label>
            <input value={topic} onChange={e => setTopic(e.target.value)}
              style={{ width: "100%", padding: "9px 12px", borderRadius: 8, border: "1px solid var(--color-border)", fontSize: 13, background: "var(--color-surface)", color: "var(--color-text)", outline: "none" }}
              placeholder="例：向量內積、牛頓定律" />
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: 12, color: "var(--color-text-muted)", display: "block", marginBottom: 4 }}>題數</label>
              <select value={count} onChange={e => setCount(Number(e.target.value))}
                style={{ width: "100%", padding: "9px 12px", borderRadius: 8, border: "1px solid var(--color-border)", fontSize: 13, background: "var(--color-surface)", color: "var(--color-text)", outline: "none" }}>
                {[3, 5, 8, 10].map(n => <option key={n} value={n}>{n} 題</option>)}
              </select>
            </div>
            <button onClick={generate} disabled={loading || !topic} style={{
              flex: 2, padding: "9px 16px", background: "var(--color-blue)", color: "white",
              border: "none", borderRadius: 8, fontSize: 13, cursor: "pointer",
              opacity: loading || !topic ? 0.7 : 1, alignSelf: "flex-end",
            }}>
              {loading ? "出題中..." : "✨ AI 出題"}
            </button>
          </div>
        </div>
      </Card>

      <Card style={{ marginBottom: 14, background: "#FAEEDA", border: "1px solid #FAC775" }}>
        <div style={{ fontSize: 13, color: "var(--color-amber-text)", lineHeight: 1.7 }}>
          ⚠️ AI 出題功能目前未啟用。<br/>
          若要開啟，請在 Vercel 環境變數加入 <code>GEMINI_API_KEY</code>，並更新 <code>src/app/api/quiz/route.ts</code>。
        </div>
      </Card>

      {loading && (
        <Card style={{ textAlign: "center", padding: 40, color: "var(--color-text-muted)", fontSize: 13 }}>
          Claude 正在出題，請稍候...
        </Card>
      )}

      {questions.map((q, qi) => (
        <Card key={qi} style={{ marginBottom: 12 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <span style={{ fontSize: 11, color: "var(--color-text-faint)" }}>
              {qi + 1}/{questions.length} · {q.subject === "math" ? "數學" : "物理"}
            </span>
            {answers[qi] !== undefined && (
              <span style={{
                fontSize: 11, padding: "2px 8px", borderRadius: 20, fontWeight: 500,
                background: answers[qi] === q.correctIndex ? "#EAF3DE" : "#FCEBEB",
                color:      answers[qi] === q.correctIndex ? "#27500A"  : "#A32D2D",
              }}>{answers[qi] === q.correctIndex ? "✓ 答對" : "✗ 答錯"}</span>
            )}
          </div>
          <div style={{ fontSize: 13.5, fontWeight: 500, marginBottom: 12, lineHeight: 1.6 }}>{q.question}</div>

          {/* Options: 1 column on mobile, 2 on desktop */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 6 }}>
            {q.options.map((opt, oi) => {
              const selected  = answers[qi] === oi;
              const isCorrect = oi === q.correctIndex;
              const revealed  = shown[qi];
              let bg = "var(--color-surface)", border = "1px solid var(--color-border)", color = "var(--color-text)";
              if (revealed) {
                if (isCorrect)     { bg = "#EAF3DE"; border = "1px solid #97C459"; color = "#27500A"; }
                else if (selected) { bg = "#FCEBEB"; border = "1px solid #F09595"; color = "#791F1F"; }
              } else if (selected) { bg = "var(--color-blue-light)"; border = "1px solid var(--color-blue)"; color = "var(--color-blue-text)"; }
              return (
                <div key={oi} onClick={() => handleAnswer(qi, oi)}
                  style={{ padding: "10px 12px", borderRadius: 8, border, background: bg, color, fontSize: 13, cursor: answers[qi] === undefined ? "pointer" : "default" }}>
                  {String.fromCharCode(65 + oi)}. {opt}
                </div>
              );
            })}
          </div>

          {shown[qi] && (
            <div style={{
              marginTop: 10, borderRadius: 8, padding: "10px 12px", fontSize: 12.5, lineHeight: 1.6,
              background: answers[qi] === q.correctIndex ? "#EAF3DE" : "#FAEEDA",
              color:      answers[qi] === q.correctIndex ? "#27500A"  : "#633806",
            }}><b>解析：</b>{q.explanation}</div>
          )}
          {shown[qi] && answers[qi] !== q.correctIndex && !wrongSaved[qi] && (
            <button onClick={() => saveWrong(qi, q)} style={{
              marginTop: 8, padding: "6px 14px", background: "#FCEBEB", color: "#A32D2D",
              border: "1px solid #F09595", borderRadius: 8, fontSize: 12, cursor: "pointer",
            }}>📌 加入錯題本</button>
          )}
          {wrongSaved[qi] && <span style={{ fontSize: 12, color: "var(--color-text-muted)", marginTop: 6, display: "block" }}>✓ 已加入錯題本</span>}
        </Card>
      ))}
    </div>
  );
}
