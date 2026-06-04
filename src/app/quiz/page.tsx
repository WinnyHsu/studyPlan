"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import AppShell from "@/components/layout/AppShell";
import Card from "@/components/ui/Card";
import { CardSkeleton } from "@/components/ui/PageLoader";
import { AppConfig, QuizQuestion } from "@/types";
import { getCurrentWeek, getTodayPlan } from "@/lib/utils";

const DEFAULT_CONFIG: AppConfig = {
  startDate:"2026-04-28", examDate:"2026-07-24",
  examName:"PPL 飛行員執照筆試", dailyGoalMinutes:180, userName:"",
};

export default function QuizPageWrapper() {
  return (
    <AppShell>
      <Suspense fallback={<div className="page-pad"><CardSkeleton/></div>}>
        <QuizPage/>
      </Suspense>
    </AppShell>
  );
}

function QuizPage() {
  const params = useSearchParams();
  const [config, setConfig]         = useState<AppConfig>(DEFAULT_CONFIG);
  const [questions, setQuestions]   = useState<QuizQuestion[]>([]);
  const [answers, setAnswers]       = useState<Record<number,number>>({});
  const [shown, setShown]           = useState<Record<number,boolean>>({});
  const [loading, setLoading]       = useState(false);
  const [topic, setTopic]           = useState("");
  const [subject, setSubject]       = useState<"all"|"math"|"physics">("all");
  const [mode, setMode]             = useState<"practice"|"exam">("practice");
  const [count, setCount]           = useState(3);
  const [wrongSaved, setWrongSaved] = useState<Record<number,boolean>>({});
  const [apiEnabled, setApiEnabled] = useState(true);

  useEffect(() => {
    const urlTopic   = params.get("topic");
    const urlSubject = params.get("subject") as "math"|"physics"|null;
    if (urlTopic) setTopic(decodeURIComponent(urlTopic));
    if (urlSubject) setSubject(urlSubject);

    fetch("/api/config").then(r => r.json()).then(d => {
      if (d.startDate) {
        setConfig(d);
        if (!urlTopic) {
          const p = getTodayPlan(d.startDate);
          setTopic(p ? `${p.mathTopic}、${p.physicsTopic}` : "向量與牛頓定律");
        }
      }
    }).catch(() => { if (!urlTopic) setTopic("向量與牛頓定律"); });

    fetch("/api/quiz/check").then(r => r.json()).then(d => setApiEnabled(d.ok)).catch(() => setApiEnabled(false));
  }, []);

  const generate = async () => {
    if (!topic.trim()) return;
    setLoading(true); setQuestions([]); setAnswers({}); setShown({}); setWrongSaved({});
    try {
      const res = await fetch("/api/quiz", {
        method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({ topic, count, week:getCurrentWeek(config.startDate), subject, mode }),
      });
      const data = await res.json();
      if (data.error && !data.questions?.length) alert(data.error);
      else setQuestions(data.questions || []);
    } catch { alert("出題失敗，請稍後再試"); }
    setLoading(false);
  };

  const handleAnswer = (qi:number, oi:number) => {
    if (answers[qi] !== undefined) return;
    setAnswers(a => ({...a,[qi]:oi}));
    setShown(s => ({...s,[qi]:true}));
  };

  const saveWrong = async (qi:number, q:QuizQuestion) => {
    const ans = answers[qi];
    if (ans === undefined || ans === q.correctIndex) return;
    await fetch("/api/quiz/wrong", {
      method:"POST", headers:{"Content-Type":"application/json"},
      body: JSON.stringify({
        question:q.question, subject:q.subject,
        myAnswer:q.options[ans], correctAnswer:q.options[q.correctIndex],
        explanation:q.explanation, weekNumber:getCurrentWeek(config.startDate),
      }),
    });
    setWrongSaved(s => ({...s,[qi]:true}));
  };

  const score = questions.length
    ? questions.filter((_,i) => answers[i] === questions[i].correctIndex).length : 0;
  const allAnswered = questions.length > 0 && Object.keys(answers).length === questions.length;

  return (
    <div className="page-pad">
      <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:14}}>
        <div>
          <h1 className="page-title">AI 練習題</h1>
          <p style={{fontSize:12,color:"var(--color-text-muted)"}}>Gemini AI 出題 · 嚴禁計算機 · 全部手算</p>
        </div>
        {allAnswered && (
          <div style={{background:"var(--color-blue-light)",color:"var(--color-blue-text)",padding:"8px 14px",borderRadius:8,textAlign:"center",flexShrink:0}}>
            <div style={{fontSize:20,fontWeight:500}}>{score}/{questions.length}</div>
            <div style={{fontSize:11}}>本次得分</div>
          </div>
        )}
      </div>

      {/* API key notice */}
      {!apiEnabled && (
        <Card style={{marginBottom:14,background:"#FAEEDA",border:"1px solid #FAC775"}}>
          <p style={{fontSize:13,color:"var(--color-amber-text)",lineHeight:1.7}}>
            ⚠️ AI 出題功能未啟用。<br/>請在 Vercel 環境變數中加入 <code style={{background:"rgba(0,0,0,0.06)",padding:"1px 5px",borderRadius:4}}>GEMINI_API_KEY</code>。
          </p>
        </Card>
      )}

      {/* Controls */}
      <Card style={{marginBottom:14}}>
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          <div>
            <label style={{fontSize:12,color:"var(--color-text-muted)",display:"block",marginBottom:4}}>出題主題</label>
            <input value={topic} onChange={e => setTopic(e.target.value)}
              style={{width:"100%",padding:"9px 12px",borderRadius:8,border:"1px solid var(--color-border)",fontSize:13,outline:"none",background:"var(--color-surface)",color:"var(--color-text)"}}
              placeholder="例：向量內積、牛頓定律、白努利定律"/>
          </div>

          {/* Subject filter */}
          <div>
            <label style={{fontSize:12,color:"var(--color-text-muted)",display:"block",marginBottom:4}}>科目</label>
            <div style={{display:"flex",gap:6}}>
              {([["all","全部混合"],["math","數學"],["physics","物理"]] as const).map(([val,label]) => (
                <button key={val} onClick={() => setSubject(val)} style={{
                  flex:1,padding:"8px 4px",borderRadius:8,fontSize:12,cursor:"pointer",
                  border:`1px solid ${subject===val?"var(--color-blue)":"var(--color-border)"}`,
                  background:subject===val?"var(--color-blue-light)":"var(--color-surface)",
                  color:subject===val?"var(--color-blue-text)":"var(--color-text-muted)",
                  fontWeight:subject===val?600:400,
                }}>{label}</button>
              ))}
            </div>
          </div>

          {/* Mode */}
          <div>
            <label style={{fontSize:12,color:"var(--color-text-muted)",display:"block",marginBottom:4}}>模式</label>
            <div style={{display:"flex",gap:6}}>
              {([["practice","練習模式（有解析）"],["exam","模擬考場（限時感）"]] as const).map(([val,label]) => (
                <button key={val} onClick={() => setMode(val)} style={{
                  flex:1,padding:"8px 4px",borderRadius:8,fontSize:12,cursor:"pointer",
                  border:`1px solid ${mode===val?"var(--color-blue)":"var(--color-border)"}`,
                  background:mode===val?"var(--color-blue-light)":"var(--color-surface)",
                  color:mode===val?"var(--color-blue-text)":"var(--color-text-muted)",
                  fontWeight:mode===val?600:400,
                }}>{label}</button>
              ))}
            </div>
          </div>

          <div style={{display:"flex",gap:8}}>
            <div style={{flex:1}}>
              <label style={{fontSize:12,color:"var(--color-text-muted)",display:"block",marginBottom:4}}>題數</label>
              <select value={count} onChange={e => setCount(Number(e.target.value))}
                style={{width:"100%",padding:"9px 12px",borderRadius:8,border:"1px solid var(--color-border)",fontSize:13,outline:"none",background:"var(--color-surface)",color:"var(--color-text)"}}>
                {[3,5,8,10].map(n => <option key={n} value={n}>{n} 題</option>)}
              </select>
            </div>
            <button onClick={generate} disabled={loading||!topic.trim()||!apiEnabled}
              style={{
                flex:2,padding:"9px 16px",background:"var(--color-blue)",color:"white",
                border:"none",borderRadius:8,fontSize:13,cursor:"pointer",alignSelf:"flex-end",
                opacity:loading||!topic.trim()||!apiEnabled?0.6:1,
              }}>
              {loading ? "出題中..." : "✨ AI 出題"}
            </button>
          </div>
        </div>
      </Card>

      {/* Loading skeletons */}
      {loading && <><CardSkeleton/><CardSkeleton/><CardSkeleton/></>}

      {/* Questions */}
      {questions.map((q, qi) => (
        <Card key={qi} style={{marginBottom:12}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
            <span style={{fontSize:11,color:"var(--color-text-faint)"}}>
              {qi+1}/{questions.length} · {q.subject==="math"?"數學":"物理"} · {q.topic}
              {q.difficulty && <span style={{
                marginLeft:6,
                background:q.difficulty==="easy"?"#EAF3DE":q.difficulty==="hard"?"#FCEBEB":"#FAEEDA",
                color:q.difficulty==="easy"?"#27500A":q.difficulty==="hard"?"#A32D2D":"#633806",
                fontSize:10,padding:"1px 5px",borderRadius:10,
              }}>{q.difficulty==="easy"?"簡單":q.difficulty==="hard"?"困難":"中等"}</span>}
            </span>
            {answers[qi] !== undefined && (
              <span style={{
                fontSize:11,padding:"2px 8px",borderRadius:20,fontWeight:500,
                background:answers[qi]===q.correctIndex?"#EAF3DE":"#FCEBEB",
                color:answers[qi]===q.correctIndex?"#27500A":"#A32D2D",
              }}>{answers[qi]===q.correctIndex ? "✓ 答對" : "✗ 答錯"}</span>
            )}
          </div>

          <div style={{fontSize:13.5,fontWeight:500,marginBottom:12,lineHeight:1.6}}>{q.question}</div>

          <div style={{display:"flex",flexDirection:"column",gap:6}}>
            {q.options.map((opt, oi) => {
              const sel = answers[qi]===oi;
              const isCorrect = oi===q.correctIndex;
              const rev = shown[qi];
              let bg="var(--color-surface)", border="1px solid var(--color-border)", col="var(--color-text)";
              if (rev) {
                if (isCorrect)   { bg="#EAF3DE"; border="1px solid #97C459"; col="#27500A"; }
                else if (sel)    { bg="#FCEBEB"; border="1px solid #F09595"; col="#791F1F"; }
              } else if (sel)    { bg="var(--color-blue-light)"; border="1px solid var(--color-blue)"; col="var(--color-blue-text)"; }
              return (
                <div key={oi} onClick={() => handleAnswer(qi,oi)}
                  style={{padding:"10px 12px",borderRadius:8,border,background:bg,color:col,fontSize:13,cursor:answers[qi]===undefined?"pointer":"default",transition:"all 0.1s"}}>
                  {String.fromCharCode(65+oi)}. {opt}
                </div>
              );
            })}
          </div>

          {/* Explanation */}
          {shown[qi] && (
            <div style={{
              marginTop:10,borderRadius:8,padding:"10px 12px",fontSize:12.5,lineHeight:1.6,
              background:answers[qi]===q.correctIndex?"#EAF3DE":"#FAEEDA",
              color:answers[qi]===q.correctIndex?"#27500A":"#633806",
            }}>
              <b>解析：</b>{q.explanation}
            </div>
          )}

          {/* Save to wrong question book */}
          {shown[qi] && answers[qi] !== q.correctIndex && !wrongSaved[qi] && (
            <button onClick={() => saveWrong(qi,q)} style={{
              marginTop:8,padding:"6px 14px",background:"#FCEBEB",color:"#A32D2D",
              border:"1px solid #F09595",borderRadius:8,fontSize:12,cursor:"pointer",
            }}>📌 加入錯題本</button>
          )}
          {wrongSaved[qi] && (
            <span style={{fontSize:12,color:"var(--color-text-muted)",marginTop:6,display:"block"}}>✓ 已加入錯題本</span>
          )}
        </Card>
      ))}

      {/* Score summary */}
      {allAnswered && questions.length > 0 && (
        <Card style={{textAlign:"center",padding:"20px"}}>
          <div style={{fontSize:14,fontWeight:500,marginBottom:6}}>
            本次得分：{score}/{questions.length}（{Math.round(score/questions.length*100)}%）
          </div>
          <div style={{fontSize:12,color:"var(--color-text-muted)",marginBottom:12}}>
            {score===questions.length?"🎉 全對！太強了！":score>=questions.length*0.8?"👍 答得不錯，繼續加油！":score>=questions.length*0.6?"📖 還有進步空間，複習錯題吧！":"💪 多複習幾次，你可以的！"}
          </div>
          <button onClick={generate}
            style={{padding:"8px 20px",background:"var(--color-blue)",color:"white",border:"none",borderRadius:8,fontSize:13,cursor:"pointer"}}>
            再出一組
          </button>
        </Card>
      )}
    </div>
  );
}
