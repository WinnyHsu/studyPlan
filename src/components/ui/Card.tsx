import { ReactNode } from "react";
export default function Card({ children, style }: { children: ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ background:"var(--color-surface)", border:"1px solid var(--color-border)", borderRadius:12, padding:"14px 16px", ...style }}>
      {children}
    </div>
  );
}
