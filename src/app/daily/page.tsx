"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AppShell from "@/components/layout/AppShell";
import Card from "@/components/ui/Card";
import ProgressBar from "@/components/ui/ProgressBar";
import LoadingScreen from "@/components/ui/LoadingScreen";
import { CardSkeleton } from "@/components/ui/PageLoader";
import { AppConfig, DailyProgress, StudyPlanDay } from "@/types";
import { getCurrentWeek, getPlanForDate, formatDate, DAY_NAMES_ZH } from "@/lib/utils";
import { format, addDays, subDays, parseISO } from "date-fns";

const DEFAULT_CONFIG: AppConfig = {
  startDate:"2026-04-28", examDate:"2026-07-24",
  examName:"PPL 飛行員執照筆試", dailyGoalMinutes:180, userName:"",
};

// 渲染懶人包，把 \n 換成帶樣式的行
function LazyNote({ text }: { text: string }) {
  return (
    <div style={{ fontSize:12.5, lineHeight:1.85, marginTop:6 }}>
      {text.split("\n").map((line, i) => {
        const isTitle  = line.startsWith("📌");
        const isBullet = line.startsWith("•");
        const isWarn   = line.includes("⚠️");
        return (
          <div key={i} style={{
            paddingLeft: isBullet ? 10 : 0,
            fontWeight: isTitle ? 600 : 400,
            color: isTitle ? "#1a1917" : isWarn ? "#A32D2D" : "#6b6860",
            marginBottom: isTitle ? 4 : 1,
          }}>{line}</div>
        );
      })}
    </div>
  );
}

export default function DailyPageWrapper() {
  return <AppShell><DailyPage /></AppShell>;
}

function DailyPage() {
  const router = useRouter();
  const [config, setConfig]     = useState<AppConfig>(DEFAULT_CONFIG);
  const [date, setDate]         = useState(format(new Date(), "yyyy-MM-dd"));
  const [progress, setProgress] = useState<DailyProgress | null>(null);
  const [plan, setPlan]         = useState<StudyPlanDay | null>(null);
  const [notes, setNotes]       = useState("");
  const [mood, setMood]         = useState<"great"|"ok"|"tired">("ok");
  const [saving, setSaving]     = useState(false);
  const [loading, setLoading]   = useState(true);
  const [configLoading, setConfigLoading] = useState(true);
  const [expanded, setExpanded] = useState<Record<string,boolean>>({math:true,physics:true,review:false});

  useEffect(() => {
    fetch("/api/config").then(r=>r.json()).then(d=>{
      if(d.startDate) setConfig(d);
    }).catch(()=>{}).finally(()=>setConfigLoading(false));
  },[]);

  useEffect(() => {
    if(configLoading) return;
    setLoading(true);
    setPlan(getPlanForDate(config.startDate, date));
    fetch(`/api/schedule?date=${date}`).then(r=>r.json()).then(d=>{
      setProgress(d); setNotes(d?.notes||""); setMood(d?.mood||"ok");
    }).catch(()=>{ setProgress(null); setNotes(""); })
      .finally(()=>setLoading(false));
  },[date, config, configLoading]);

  const week = getCurrentWeek(config.startDate);

  const handleCheck = async (field:"mathDone"|"physicsDone"|"reviewDone") => {
    const updated: DailyProgress = {
      ...progress, date, weekNumber:week,
      mathDone:progress?.mathDone??false,
      physicsDone:progress?.physicsDone??false,
      reviewDone:progress?.reviewDone??false,
      studyMinutes:progress?.studyMinutes??0, notes, mood,
    };
    (updated as any)[field] = !(updated as any)[field];
    setProgress(updated);
    await fetch("/api/schedule",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(updated)});
  };

  const save = async () => {
    setSaving(true);
    const data: DailyProgress = {
      ...progress, date, weekNumber:week,
      mathDone:progress?.mathDone??false,
      physicsDone:progress?.physicsDone??false,
      reviewDone:progress?.reviewDone??false,
      studyMinutes:progress?.studyMinutes??0, notes, mood,
    };
    await fetch("/api/schedule",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});
    setSaving(false);
  };

  const goToQuiz = (subject:"math"|"physics") => {
    if(!plan) return;
    const topic = subject==="math" ? plan.mathTopic : plan.physicsTopic;
    router.push(`/quiz?topic=${encodeURIComponent(topic)}&subject=${subject}&week=${week}`);
  };

  const taskList = plan ? [
    { key:"mathDone",    id:"math",    emoji:"📐", label:plan.mathTopic,
      detail:plan.mathDetail, tag:"數學", tagBg:"#E6F1FB", tagCol:"#0C447C",
      subject:"math" as const },
    { key:"physicsDone", id:"physics", emoji:"⚛️", label:plan.physicsTopic,
      detail:plan.physicsDetail, tag:"物理", tagBg:"#EAF3DE", tagCol:"#27500A",
      subject:"physics" as const },
    { key:"reviewDone",  id:"review",  emoji:"📖", label:"錯題檢討與航空英文單字複習",
      detail:"📌 懶人包\n• 翻出錯題本，重新計算上次錯誤的題目\n• 每天背 5 個航空英文術語\n• Lift 升力｜Thrust 推力｜Drag 阻力｜Weight 重力\n• Altimeter 高度計｜Airspeed 空速｜Heading 航向\n• Density Altitude 密度高度（High/Hot/Humid → 性能差）",
      tag:"複習", tagBg:"#FAEEDA", tagCol:"#633806",
      subject:null },
  ] : [];

  const doneCount = taskList.filter(t=>(progress as any)?.[t.key]).length;
  const isWeekend = plan?.dayOfWeek === "saturday" || plan?.dayOfWeek === "sunday";
  const studyLabel = isWeekend ? "今日目標 3 小時（週六日）" : "今日目標 2 小時（週一~五）";

  if(configLoading) return <LoadingScreen message="載入設定中..." />;

  return (
    <div className="page-pad">
      {/* Date nav */}
      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:12}}>
        <button onClick={()=>setDate(format(subDays(parseISO(date),1),"yyyy-MM-dd"))}
          style={{padding:"7px 12px",borderRadius:8,border:"1px solid var(--color-border)",background:"var(--color-surface)",cursor:"pointer",fontSize:13}}>◀</button>
        <div style={{flex:1,textAlign:"center"}}>
          <div style={{fontSize:14,fontWeight:500}}>{formatDate(date)}</div>
          <div style={{fontSize:11,color:"var(--color-text-muted)",marginTop:1}}>
            第 {week} 週 {plan ? DAY_NAMES_ZH[plan.dayOfWeek] : "假日"} &nbsp;·&nbsp; {studyLabel}
          </div>
        </div>
        <button onClick={()=>setDate(format(addDays(parseISO(date),1),"yyyy-MM-dd"))}
          style={{padding:"7px 12px",borderRadius:8,border:"1px solid var(--color-border)",background:"var(--color-surface)",cursor:"pointer",fontSize:13}}>▶</button>
      </div>

      {/* Key formulas */}
      {plan && !loading && (
        <div style={{display:"flex",flexWrap:"wrap",gap:4,marginBottom:12}}>
          {plan.keyFormulas.map((f,i)=>(
            <span key={i} style={{background:"#F1EFE8",color:"#444441",fontSize:11,padding:"3px 8px",borderRadius:20,fontFamily:"monospace"}}>{f}</span>
          ))}
        </div>
      )}

      {/* Loading skeleton */}
      {loading && <><CardSkeleton/><CardSkeleton/><CardSkeleton/></>}

      {/* Task cards */}
      {!loading && taskList.map(t => {
        const isDone = (progress as any)?.[t.key];
        const isOpen = expanded[t.id] !== false;
        return (
          <Card key={t.key} style={{marginBottom:10}}>
            {/* Header */}
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom: isOpen ? 8 : 0}}>
              <div onClick={()=>handleCheck(t.key as any)} style={{
                width:22,height:22,borderRadius:5,flexShrink:0,cursor:"pointer",
                border:`1.5px solid ${isDone?"var(--color-blue)":"var(--color-border-strong)"}`,
                background:isDone?"var(--color-blue)":"transparent",
                display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,color:"white",
                minHeight:"unset",
              }}>{isDone?"✓":""}</div>

              <div style={{flex:1,minWidth:0}}>
                <div style={{
                  fontSize:13,fontWeight:500,
                  color:isDone?"var(--color-text-faint)":"var(--color-text)",
                  textDecoration:isDone?"line-through":"none",
                  whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",
                }}>{t.emoji} {t.label}</div>
              </div>

              <span style={{background:t.tagBg,color:t.tagCol,fontSize:11,padding:"2px 8px",borderRadius:20,fontWeight:500,flexShrink:0}}>{t.tag}</span>

              <button onClick={()=>setExpanded(e=>({...e,[t.id]:!isOpen}))}
                style={{background:"none",border:"none",cursor:"pointer",fontSize:13,color:"var(--color-text-faint)",padding:"0 2px",minHeight:"unset"}}>
                {isOpen?"▲":"▼"}
              </button>
            </div>

            {/* Lazy note */}
            {isOpen && <LazyNote text={t.detail}/>}

            {/* AI 出題按鈕（只有數學和物理） */}
            {isOpen && t.subject && (
              <button onClick={()=>goToQuiz(t.subject!)}
                style={{
                  marginTop:12,width:"100%",padding:"9px",borderRadius:8,
                  border:`1px solid ${t.subject==="math"?"#85B7EB":"#97C459"}`,
                  background:t.tagBg,color:t.tagCol,
                  fontSize:12.5,cursor:"pointer",fontWeight:500,
                  display:"flex",alignItems:"center",justifyContent:"center",gap:6,
                }}>
                ✨ AI 出 {t.tag} 練習題 →
              </button>
            )}
          </Card>
        );
      })}

      {!loading && !plan && (
        <Card style={{marginBottom:12,textAlign:"center",padding:30}}>
          <p style={{fontSize:14,color:"var(--color-text-muted)"}}>😴 今天不在讀書計畫範圍內，好好休息！</p>
        </Card>
      )}

      {/* Progress */}
      {!loading && taskList.length>0 && (
        <Card style={{marginBottom:10}}>
          <div style={{display:"flex",justifyContent:"space-between",fontSize:12,color:"var(--color-text-muted)",marginBottom:6}}>
            <span>今日完成度</span><span>{doneCount}/{taskList.length}</span>
          </div>
          <ProgressBar value={doneCount} max={taskList.length} color="green"/>
        </Card>
      )}

      {/* Notes */}
      {!loading && (
        <Card>
          <div style={{fontSize:13,fontWeight:500,marginBottom:8}}>📝 今日 Notes</div>
          <textarea value={notes} onChange={e=>setNotes(e.target.value)}
            placeholder="記錄今天的學習狀態、困難點、突破的觀念..."
            style={{
              width:"100%",minHeight:80,fontSize:13,
              background:"#F1EFE8",border:"1px solid var(--color-border)",
              borderRadius:8,padding:"10px 12px",resize:"vertical",outline:"none",lineHeight:1.6,
            }}/>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:10,flexWrap:"wrap",gap:8}}>
            <div style={{display:"flex",gap:6}}>
              {(["great","ok","tired"] as const).map((m,i)=>(
                <button key={m} onClick={()=>setMood(m)} style={{
                  padding:"6px 10px",borderRadius:20,fontSize:12,cursor:"pointer",
                  border:`1px solid ${mood===m?"var(--color-blue)":"var(--color-border)"}`,
                  background:mood===m?"var(--color-blue-light)":"var(--color-surface)",
                  color:mood===m?"var(--color-blue-text)":"var(--color-text-muted)",
                }}>{["😊","😐","😩"][i]}</button>
              ))}
            </div>
            <button onClick={save} disabled={saving} style={{
              padding:"7px 20px",background:"var(--color-blue)",color:"white",
              border:"none",borderRadius:8,fontSize:13,cursor:"pointer",
            }}>{saving?"儲存中...":"儲存"}</button>
          </div>
        </Card>
      )}
    </div>
  );
}
