"use client";
export function CardSkeleton() {
  return (
    <div style={{
      background:"#fff", border:"1px solid #e5e3dd",
      borderRadius:12, padding:"14px 16px", marginBottom:10,
    }}>
      {[60,90,75,80].map((w,i) => (
        <div key={i} style={{
          height:12, borderRadius:6, marginBottom:8,
          width:`${w}%`,
          background:"linear-gradient(90deg,#e5e3dd 25%,#f8f7f4 50%,#e5e3dd 75%)",
          backgroundSize:"200% 100%",
          animation:"shimmer 1.4s infinite",
        }}/>
      ))}
      <style>{`@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}`}</style>
    </div>
  );
}
