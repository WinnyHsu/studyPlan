"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NAV = [
  { href:"/",          icon:"🏠", label:"首頁" },
  { href:"/calendar",  icon:"📅", label:"月曆" },
  { href:"/daily",     icon:"✅", label:"任務" },
  { href:"/quiz",      icon:"🧠", label:"練習" },
  { href:"/timer",     icon:"⏱",  label:"計時" },
  { href:"/settings",  icon:"⚙️",  label:"設定" },
];
export default function BottomNav() {
  const path = usePathname();
  return (
    <nav data-bottom-nav style={{ position:"sticky", bottom:0, zIndex:50, background:"var(--color-surface)", borderTop:"1px solid var(--color-border)", display:"flex", paddingBottom:"env(safe-area-inset-bottom,0px)" }}>
      {NAV.map(n => {
        const active = path===n.href;
        return (
          <Link key={n.href} href={n.href} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"8px 4px 6px", textDecoration:"none", color:active?"var(--color-blue)":"var(--color-text-faint)", fontSize:10, fontWeight:active?600:400, gap:2 }}>
            <span style={{ fontSize:20, lineHeight:1 }}>{n.icon}</span>
            <span>{n.label}</span>
            {active && <span style={{ width:4, height:4, borderRadius:"50%", background:"var(--color-blue)", marginTop:1 }} />}
          </Link>
        );
      })}
    </nav>
  );
}
