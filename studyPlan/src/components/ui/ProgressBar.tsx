export default function ProgressBar({ value, max=100, color="blue" }: { value:number; max?:number; color?:"blue"|"green" }) {
  const pct = Math.min(100, Math.round((value/max)*100));
  const bg  = color === "green" ? "#639922" : "var(--color-blue)";
  return (
    <div style={{ background:"#F1EFE8", borderRadius:4, height:6, overflow:"hidden" }}>
      <div style={{ width:`${pct}%`, height:"100%", background:bg, borderRadius:4, transition:"width 0.3s" }} />
    </div>
  );
}
