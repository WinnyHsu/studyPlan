"use client";
import { useEffect, useState } from "react";
import AppShell from "@/components/layout/AppShell";
import Card from "@/components/ui/Card";
import LoadingScreen from "@/components/ui/LoadingScreen";
import { AppConfig } from "@/types";
import { buildCalendarDays, getPlanForDate, formatDate } from "@/lib/utils";

const DEFAULT_CONFIG: AppConfig = {
  startDate:"2026-04-28", examDate:"2026-07-24",
  examName:"PPL 飛行員執照筆試", dailyGoalMinutes:180, userName:"",
};
const WEEKDAYS=["日","一","二","三","四","五","六"];
const MONTHS=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];
const STATUS_STYLE: Record<string,React.CSSProperties> = {
  done:   {background:"#EAF3DE",color:"#27500A",fontWeight:500},
  partial:{background:"#FAEEDA",color:"#633806",fontWeight:500},
  none:   {background:"var(--color-blue)",color:"white",fontWeight:500},
  future: {background:"transparent",color:"var(--color-text-muted)"},
  exam:   {background:"#FCEBEB",color:"#A32D2D",fontWeight:500},
};

export default function CalendarPageWrapper() {
  return <AppShell><CalendarPage/></AppShell>;
}
function CalendarPage() {
  const now = new Date();
  const [year,setYear]   = useState(now.getFullYear());
  const [month,setMonth] = useState(now.getMonth()+1);
  const [config,setConfig] = useState<AppConfig>(DEFAULT_CONFIG);
  const [progressMap,setProgressMap] = useState<Record<string,any>>({});
  const [selected,setSelected] = useState<string|null>(null);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    fetch("/api/config").then(r=>r.json()).then(d=>{ if(d.startDate) setConfig(d); })
      .catch(()=>{}).finally(()=>setLoading(false));
  },[]);

  useEffect(()=>{
    fetch(`/api/stats?year=${year}&month=${month}`).then(r=>r.json()).then(data=>{
      const map:Record<string,any>={};
      (data||[]).forEach((d:any)=>{ map[d.date]=d; });
      setProgressMap(map);
    }).catch(()=>{});
  },[year,month]);

  const days = buildCalendarDays(year,month,config,progressMap);
  const selectedPlan = selected ? getPlanForDate(config.startDate,selected) : null;
  const prev=()=>{ if(month===1){setMonth(12);setYear(y=>y-1);}else setMonth(m=>m-1); };
  const next=()=>{ if(month===12){setMonth(1);setYear(y=>y+1);}else setMonth(m=>m+1); };

  if(loading) return <LoadingScreen message="載入月曆資料..."/>;

  return (
    <div className="page-pad">
      <h1 className="page-title" style={{marginBottom:12}}>讀書月曆</h1>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10}}>
        <div style={{display:"flex",gap:8,alignItems:"center"}}>
          <button onClick={prev} style={{padding:"6px 14px",borderRadius:8,border:"1px solid var(--color-border)",background:"var(--color-surface)",cursor:"pointer",fontSize:13}}>◀</button>
          <span style={{fontSize:15,fontWeight:500}}>{year} 年 {MONTHS[month-1]}</span>
          <button onClick={next} style={{padding:"6px 14px",borderRadius:8,border:"1px solid var(--color-border)",background:"var(--color-surface)",cursor:"pointer",fontSize:13}}>▶</button>
        </div>
        <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
          {[["#EAF3DE","#27500A","完成"],["#FAEEDA","#633806","部分"],["var(--color-blue)","white","今天"],["#FCEBEB","#A32D2D","考試"]].map(([bg,col,label])=>(
            <span key={label as string} style={{display:"inline-flex",alignItems:"center",gap:4,fontSize:11,color:"var(--color-text-muted)"}}>
              <span style={{width:10,height:10,background:bg as string,borderRadius:2,display:"inline-block",border:"1px solid rgba(0,0,0,0.06)"}}/>
              {label}
            </span>
          ))}
        </div>
      </div>
      <Card style={{marginBottom:12}}>
        <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(7, minmax(0, 60px))",
    gap: 2,
    justifyContent: "center",
  }}
  >
          {WEEKDAYS.map(d=><div
      key={d}
      style={{
        fontSize: 11,
        color: "var(--color-text-faint)",
        textAlign: "center",
        paddingBottom: 4,
        fontWeight: 500,
      }}
    >
      {d}
    </div>)}
          {days.map((d,i)=>(
            <div key={i} onClick={()=>d.date&&setSelected(d.date)}
              className="cal-cell"
              style={{
                ...(d.date&&d.isToday?STATUS_STYLE.none:d.date?STATUS_STYLE[d.status]||STATUS_STYLE.future:{}),
                outline:selected===d.date?"2px solid var(--color-blue)":"none",
                cursor:d.date?"pointer":"default",
              }}>
              {d.dayLabel}
            </div>
          ))}
        </div>
      </Card>
      <Card>
        {selected ? (
          <>
            <div style={{fontSize:13,fontWeight:500,marginBottom:10}}>{formatDate(selected)}</div>
            {selectedPlan ? (
              <>
                <div style={{display:"flex",gap:6,marginBottom:8,flexWrap:"wrap"}}>
                  <span style={{background:"var(--color-blue-light)",color:"var(--color-blue-text)",fontSize:11,padding:"2px 8px",borderRadius:20}}>第 {selectedPlan.week} 週</span>
                  <span style={{background:"var(--color-amber-light)",color:"var(--color-amber-text)",fontSize:11,padding:"2px 8px",borderRadius:20}}>
                    {selectedPlan.stage===1?"第一":selectedPlan.stage===2?"第二":"第三"}階段
                  </span>
                </div>
                <div style={{fontSize:13,marginBottom:4}}><b style={{color:"var(--color-blue-text)"}}>數學：</b>{selectedPlan.mathTopic}</div>
                <div style={{fontSize:12,color:"var(--color-text-muted)",marginBottom:10}}>{selectedPlan.mathDetail.split("\n").slice(1,3).join(" · ")}</div>
                <div style={{fontSize:13,marginBottom:4}}><b style={{color:"var(--color-green-text)"}}>物理：</b>{selectedPlan.physicsTopic}</div>
                <div style={{fontSize:12,color:"var(--color-text-muted)",marginBottom:10}}>{selectedPlan.physicsDetail.split("\n").slice(1,3).join(" · ")}</div>
                <div style={{display:"flex",flexWrap:"wrap",gap:4}}>
                  {selectedPlan.keyFormulas.map((f,i)=>(
                    <span key={i} style={{background:"#F1EFE8",color:"#444441",fontSize:11,padding:"3px 8px",borderRadius:20,fontFamily:"monospace"}}>{f}</span>
                  ))}
                </div>
              </>
            ):<p style={{fontSize:13,color:"var(--color-text-muted)"}}>{selected===config.examDate?"🎯 考試日！加油！":"假日或不在計畫範圍內"}</p>}
          </>
        ):<p style={{fontSize:13,color:"var(--color-text-muted)"}}>點選日期查看當天任務</p>}
      </Card>
    </div>
  );
}
