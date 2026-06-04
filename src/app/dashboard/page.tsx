"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import ProgressBar from "@/components/ui/ProgressBar";
import LoadingScreen from "@/components/ui/LoadingScreen";
import { AppConfig, DailyProgress, StudyPlanDay } from "@/types";
import { getCurrentWeek, getDaysUntilExam, getStageForWeek, getTodayPlan, formatDate, DAY_NAMES_ZH } from "@/lib/utils";
import { format } from "date-fns";

const DEFAULT_CONFIG: AppConfig = {
  startDate:"2026-04-28", examDate:"2026-07-24",
  examName:"PPL 飛行員執照筆試", dailyGoalMinutes:180, userName:"",
};

export default function DashboardPage() {
  const router = useRouter();
  const [config, setConfig]         = useState<AppConfig>(DEFAULT_CONFIG);
  const [progress, setProgress]     = useState<DailyProgress|null>(null);
  const [plan, setPlan]             = useState<StudyPlanDay|null>(null);
  const [notes, setNotes]           = useState("");
  const [mood, setMood]             = useState<"great"|"ok"|"tired">("ok");
  const [saving, setSaving]         = useState(false);
  const [loading, setLoading]       = useState(true);
  const [warmup, setWarmup]         = useState<string[]>([]);
  const [warmupLoading, setWarmupLoading] = useState(false);
  const today = format(new Date(), "yyyy-MM-dd");

  useEffect(() => {
    let configDone = false, progressDone = false;
    const checkDone = () => { if (configDone && progressDone) setLoading(false); };

    fetch("/api/config").then(r => r.json()).then(d => {
      if (d.startDate) { setConfig(d); setPlan(getTodayPlan(d.startDate)); }
    }).catch(() => { setPlan(getTodayPlan(DEFAULT_CONFIG.startDate)); })
      .finally(() => { configDone = true; checkDone(); });

    fetch(`/api/schedule?date=${today}`).then(r => r.json()).then(d => {
      if (d) { setProgress(d); setNotes(d.notes || ""); setMood(d.mood || "ok"); }
    }).catch(() => {})
      .finally(() => { progressDone = true; checkDone(); });
  }, [today]);

  const week  = getCurrentWeek(config.startDate);
  const days  = getDaysUntilExam(config.examDate);
  const stage = getStageForWeek(week);

  const fetchWarmup = async () => {
    setWarmupLoading(true);
    try {
      const r = await fetch(`/api/warmup?week=${week}`);
      const d = await r.json();
      setWarmup(d.questions || []);
    } catch { setWarmup(["Q1. 無法載入題目，請稍後再試"]); }
    setWarmupLoading(false);
  };

  const handleCheck = async (field: "mathDone"|"physicsDone"|"reviewDone") => {
    const updated: DailyProgress = {
      ...progress, date:today, weekNumber:week,
      mathDone:progress?.mathDone??false,
      physicsDone:progress?.physicsDone??false,
      reviewDone:progress?.reviewDone??false,
      studyMinutes:progress?.studyMinutes??0, notes, mood,
    };
    (updated as any)[field] = !(updated as any)[field];
    setProgress(updated);
    await fetch("/api/schedule",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(updated)});
  };

  const handleSaveNotes = async () => {
    setSaving(true);
    const data: DailyProgress = {
      ...progress, date:today, weekNumber:week,
      mathDone:progress?.mathDone??false,
      physicsDone:progress?.physicsDone??false,
      reviewDone:progress?.reviewDone??false,
      studyMinutes:progress?.studyMinutes??0, notes, mood,
    };
    await fetch("/api/schedule",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});
    setSaving(false);
  };

  if (loading) return <LoadingScreen message="載入今日進度..." />;

  const tasks = plan ? [
    { key:"mathDone",    label:plan.mathTopic,    sub:plan.mathDetail.split("\n")[1]?.replace("• ",""),    tag:"數學", tagColor:"blue" as const,    subject:"math" as const },
    { key:"physicsDone", label:plan.physicsTopic, sub:plan.physicsDetail.split("\n")[1]?.replace("• ",""), tag:"物理", tagColor:"green" as const,   subject:"physics" as const },
    { key:"reviewDone",  label:"錯題檢討與航空英文複習", sub:"每日 40 分鐘", tag:"複習", tagColor:"amber" as const, subject:null },
  ] : [];
  const doneCount = tasks.filter(t => (progress as any)?.[t.key]).length;
  const isWeekend = plan?.dayOfWeek === "saturday" || plan?.dayOfWeek === "sunday";

  return (
    <div className="page-pad">
      {/* Header */}
      <div style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",marginBottom:14}}>
        <div>
          <h1 className="page-title">今日概覽</h1>
          <p style={{fontSize:12,color:"var(--color-text-muted)"}}>
            {formatDate(today)} · 第 {week} 週 {plan ? DAY_NAMES_ZH[plan.dayOfWeek] : ""} · {stage.label}
          </p>
        </div>
        <div style={{display:"flex",gap:6}}>
          <Badge color="blue">第 {week} 週</Badge>
          <Badge color={isWeekend ? "green" : "amber"}>{isWeekend ? "3小時" : "2小時"}</Badge>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid-4" style={{marginBottom:14}}>
        {[
          { label:"距離考試", value:`${days} 天`,           sub:config.examName },
          { label:"目前週數", value:`第 ${week} 週`,        sub:"共 20 週" },
          { label:"今日進度", value:`${doneCount}/3`,       sub:"項任務完成" },
          { label:"每日目標", value:`${isWeekend?"180":"120"}min`, sub:isWeekend?"週六日目標":"週一~五目標" },
        ].map(m => (
          <div key={m.label} style={{background:"#F1EFE8",borderRadius:8,padding:"11px 12px"}}>
            <div style={{fontSize:11,color:"var(--color-text-muted)",marginBottom:3}}>{m.label}</div>
            <div className="metric-value" style={{fontSize:20,fontWeight:500}}>{m.value}</div>
            <div className="metric-sub" style={{fontSize:11,color:"var(--color-text-faint)",marginTop:1}}>{m.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid-2" style={{marginBottom:12}}>
        {/* Today tasks */}
        <Card>
          <div style={{fontSize:13,fontWeight:500,marginBottom:12}}>📋 今日任務</div>
          {plan ? tasks.map(t => (
            <div key={t.key} style={{display:"flex",gap:10,padding:"9px 0",borderBottom:"1px solid var(--color-border)"}}>
              <div onClick={() => handleCheck(t.key as any)} style={{
                width:20,height:20,borderRadius:5,flexShrink:0,marginTop:2,cursor:"pointer",
                border:`1.5px solid ${(progress as any)?.[t.key]?"var(--color-blue)":"var(--color-border-strong)"}`,
                background:(progress as any)?.[t.key]?"var(--color-blue)":"transparent",
                display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,color:"white",minHeight:"unset",
              }}>{(progress as any)?.[t.key] ? "✓" : ""}</div>
              <div style={{flex:1,minWidth:0}}>
                <div style={{
                  fontSize:12.5,
                  color:(progress as any)?.[t.key]?"var(--color-text-faint)":"var(--color-text)",
                  textDecoration:(progress as any)?.[t.key]?"line-through":"none",
                  whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",
                }}>{t.label}</div>
                <div style={{fontSize:11,color:"var(--color-text-faint)",marginTop:2}}>{t.sub || ""}</div>
              </div>
              <Badge color={t.tagColor}>{t.tag}</Badge>
            </div>
          )) : <p style={{fontSize:13,color:"var(--color-text-muted)"}}>假日，好好休息！😴</p>}
          {plan && (
            <div style={{marginTop:10}}>
              <div style={{display:"flex",justifyContent:"space-between",fontSize:11,color:"var(--color-text-muted)",marginBottom:4}}>
                <span>今日完成度</span><span>{doneCount}/3</span>
              </div>
              <ProgressBar value={doneCount} max={3} color="green"/>
            </div>
          )}
          {plan && (
            <button onClick={() => router.push("/daily")}
              style={{marginTop:10,width:"100%",padding:"7px",borderRadius:8,border:"1px solid var(--color-border)",background:"var(--color-surface)",fontSize:12,cursor:"pointer",color:"var(--color-text-muted)"}}>
              查看詳細任務 →
            </button>
          )}
        </Card>

        {/* Key formulas + warmup */}
        <Card>
          <div style={{fontSize:13,fontWeight:500,marginBottom:10}}>⚡ 今日心算暖身（10分鐘）</div>
          {warmup.length === 0 ? (
            <div>
              <p style={{fontSize:12,color:"var(--color-text-muted)",marginBottom:10}}>每天開始前先做 3 題心算暖身，嚴禁計算機！</p>
              <button onClick={fetchWarmup} disabled={warmupLoading}
                style={{width:"100%",padding:"8px",borderRadius:8,border:"1px solid var(--color-border)",background:"var(--color-surface)",fontSize:12.5,cursor:"pointer",color:"var(--color-blue-text)"}}>
                {warmupLoading ? "載入中..." : "✨ 取得今日暖身題"}
              </button>
            </div>
          ) : (
            <div>
              <div style={{fontSize:12.5,lineHeight:1.9,color:"var(--color-text)",background:"#F1EFE8",borderRadius:8,padding:"10px 12px",marginBottom:10}}>
                {warmup.map((q,i) => <div key={i}>{q}</div>)}
              </div>
              <div style={{display:"flex",gap:8}}>
                <button onClick={fetchWarmup} disabled={warmupLoading}
                  style={{flex:1,padding:"6px",borderRadius:8,border:"1px solid var(--color-border)",background:"var(--color-surface)",fontSize:12,cursor:"pointer"}}>
                  {warmupLoading ? "載入中..." : "↺ 換一組"}
                </button>
                <button onClick={() => router.push(`/quiz?topic=${encodeURIComponent(plan?.mathTopic||"")}&subject=math&week=${week}`)}
                  style={{flex:1,padding:"6px",borderRadius:8,border:"1px solid #85B7EB",background:"var(--color-blue-light)",fontSize:12,cursor:"pointer",color:"var(--color-blue-text)"}}>
                  前往出題 →
                </button>
              </div>
            </div>
          )}
          {plan && (
            <div style={{marginTop:10,borderTop:"1px solid var(--color-border)",paddingTop:10}}>
              <div style={{fontSize:11,color:"var(--color-text-muted)",marginBottom:6}}>本日重點公式</div>
              <div style={{display:"flex",flexWrap:"wrap",gap:4}}>
                {plan.keyFormulas.slice(0,4).map((f,i) => (
                  <span key={i} style={{background:"#F1EFE8",color:"#444441",fontSize:11,padding:"3px 8px",borderRadius:20,fontFamily:"monospace"}}>{f}</span>
                ))}
              </div>
            </div>
          )}
        </Card>
      </div>

      {/* Notes */}
      <Card>
        <div style={{fontSize:13,fontWeight:500,marginBottom:10}}>📝 今日 Notes</div>
        <textarea value={notes} onChange={e => setNotes(e.target.value)}
          placeholder="記錄今天的學習狀態、困難點..."
          style={{
            width:"100%",minHeight:72,fontSize:13,
            background:"#F1EFE8",border:"1px solid var(--color-border)",
            borderRadius:8,padding:"10px 12px",resize:"vertical",outline:"none",lineHeight:1.6,
          }}/>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:10,flexWrap:"wrap",gap:8}}>
          <div style={{display:"flex",gap:6}}>
            {(["great","ok","tired"] as const).map((m,i) => (
              <button key={m} onClick={() => setMood(m)} style={{
                padding:"6px 10px",borderRadius:20,fontSize:12,cursor:"pointer",
                border:`1px solid ${mood===m?"var(--color-blue)":"var(--color-border)"}`,
                background:mood===m?"var(--color-blue-light)":"var(--color-surface)",
                color:mood===m?"var(--color-blue-text)":"var(--color-text-muted)",
              }}>{["😊 良好","😐 普通","😩 很累"][i]}</button>
            ))}
          </div>
          <button onClick={handleSaveNotes} disabled={saving} style={{
            padding:"7px 18px",background:"var(--color-blue)",color:"white",
            border:"none",borderRadius:8,fontSize:13,cursor:"pointer",
          }}>{saving ? "儲存中..." : "儲存"}</button>
        </div>
      </Card>
    </div>
  );
}
