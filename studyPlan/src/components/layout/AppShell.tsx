"use client";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import BottomNav from "./BottomNav";
import MobileHeader from "./MobileHeader";
import { AppConfig } from "@/types";
import { getCurrentWeek, getDaysUntilExam, getStageForWeek } from "@/lib/utils";

const DEFAULT_CONFIG: AppConfig = {
  startDate: "2026-04-28",
  examDate:  "2026-07-24",
  examName:  "PPL 飛行員執照筆試",
  dailyGoalMinutes: 180,
  userName: "",
};

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [config, setConfig]   = useState<AppConfig>(DEFAULT_CONFIG);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    fetch("/api/config")
      .then(r => r.json())
      .then(d => { if (d.startDate) setConfig(d); })
      .catch(() => {});

    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const week  = getCurrentWeek(config.startDate);
  const days  = getDaysUntilExam(config.examDate);
  const stage = getStageForWeek(week);

  // Avoid hydration mismatch — render desktop until mounted
  if (!mounted) {
    return (
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <Sidebar daysLeft={days} weekNumber={week} stage={stage.label} />
        <main style={{ flex: 1, overflow: "auto" }}>{children}</main>
      </div>
    );
  }

  if (isMobile) {
    return (
      <div style={{ minHeight: "100dvh", display: "flex", flexDirection: "column", background: "var(--color-bg)" }}>
        <MobileHeader daysLeft={days} weekNumber={week} />
        <main className="mobile-content-pad scroll-hide" style={{ flex: 1, overflow: "auto" }}>
          {children}
        </main>
        <BottomNav />
      </div>
    );
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar daysLeft={days} weekNumber={week} stage={stage.label} />
      <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "auto" }}>
        {children}
      </main>
    </div>
  );
}
