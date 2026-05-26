"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NAV = [
  { href:"/",           icon:"🏠", label:"Dashboard" },
  { href:"/calendar",   icon:"📅", label:"月曆" },
  { href:"/daily",      icon:"✅", label:"每日任務" },
  { href:"/quiz",       icon:"🧠", label:"AI 練習題" },
  { href:"/timer",      icon:"⏱",  label:"計時器" },
  { href:"/settings",   icon:"⚙️",  label:"設定" },
];

interface Props { daysLeft: number; weekNumber: number; stage: string }

export default function Sidebar({ daysLeft, weekNumber, stage }: Props) {
  const path = usePathname();
  return (
    <aside style={{
      width:220, flexShrink:0,
      background:"var(--color-surface)",
      borderRight:"1px solid var(--color-border)",
      display:"flex", flexDirection:"column",
      height:"100vh", position:"sticky", top:0,
    }}>
      <div style={{ padding:"20px 16px 14px", borderBottom:"1px solid var(--color-border)" }}>
        <div style={{
          background:"var(--color-blue-light)", color:"var(--color-blue-text)",
          fontSize:11, fontWeight:500, padding:"3px 8px", borderRadius:4,
          display:"inline-block", marginBottom:8,
        }}>✈ PPL Prep</div>
        <div style={{ fontSize:15, fontWeight:500, lineHeight:1.4 }}>培訓機師<br/>讀書計畫</div>
        <div style={{ fontSize:12, color:"var(--color-text-muted)", marginTop:3 }}>20 週衝刺計畫</div>
      </div>

      <nav style={{ padding:"10px 8px", flex:1 }}>
        {NAV.map(n => (
          <Link key={n.href} href={n.href} style={{
            display:"flex", alignItems:"center", gap:9,
            padding:"8px 10px", borderRadius:8, marginBottom:2,
            fontSize:13, fontWeight: path===n.href ? 500 : 400,
            color: path===n.href ? "var(--color-blue-text)" : "var(--color-text-muted)",
            background: path===n.href ? "var(--color-blue-light)" : "transparent",
            textDecoration:"none", transition:"background 0.1s",
          }}>
            <span style={{ fontSize:16 }}>{n.icon}</span>
            {n.label}
          </Link>
        ))}
      </nav>

      <div style={{ padding:"12px", borderTop:"1px solid var(--color-border)" }}>
        <div style={{ marginBottom:8, display:"flex", gap:6 }}>
          <span style={{ background:"var(--color-blue-light)", color:"var(--color-blue-text)", fontSize:11, padding:"2px 8px", borderRadius:20, fontWeight:500 }}>第 {weekNumber} 週</span>
          <span style={{ background:"var(--color-amber-light)", color:"var(--color-amber-text)", fontSize:11, padding:"2px 8px", borderRadius:20, fontWeight:500 }}>
            {stage.includes("1") ? "第一階段" : stage.includes("2") ? "第二階段" : "第三階段"}
          </span>
        </div>
        <div style={{ background:"var(--color-red-light)", borderRadius:8, padding:"10px 12px", textAlign:"center" }}>
          <div style={{ fontSize:26, fontWeight:500, color:"var(--color-red)", fontVariantNumeric:"tabular-nums" }}>{daysLeft}</div>
          <div style={{ fontSize:11, color:"var(--color-red-text)", marginTop:2 }}>距離考試還有 <b>天</b></div>
        </div>
      </div>
    </aside>
  );
}
