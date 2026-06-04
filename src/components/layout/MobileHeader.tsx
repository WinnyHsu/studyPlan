"use client";
import { usePathname } from "next/navigation";
const PAGE_TITLES: Record<string,string> = { "/":"今日概覽", "/calendar":"讀書月曆", "/daily":"每日任務", "/quiz":"AI 練習題", "/timer":"計時器", "/settings":"設定" };
interface Props { daysLeft:number; weekNumber:number }
export default function MobileHeader({ daysLeft, weekNumber }: Props) {
  const path = usePathname();
  return (
    <header style={{ position:"sticky", top:0, zIndex:50, background:"var(--color-surface)", borderBottom:"1px solid var(--color-border)", padding:"0 16px", height:56, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
      <div style={{ display:"flex", alignItems:"center", gap:8 }}>
        <span style={{ fontSize:18 }}>✈️</span>
        <span style={{ fontSize:15, fontWeight:500 }}>{PAGE_TITLES[path]??"PPL 讀書計畫"}</span>
      </div>
      <div style={{ display:"flex", gap:6 }}>
        <span style={{ background:"var(--color-blue-light)", color:"var(--color-blue-text)", fontSize:11, fontWeight:500, padding:"3px 8px", borderRadius:20 }}>W{weekNumber}</span>
        <span style={{ background:"var(--color-red-light)", color:"var(--color-red-text)", fontSize:11, fontWeight:500, padding:"3px 8px", borderRadius:20 }}>{daysLeft}天</span>
      </div>
    </header>
  );
}
