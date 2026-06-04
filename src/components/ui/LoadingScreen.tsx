"use client";

interface Props { message?: string; }

export default function LoadingScreen({ message = "載入中..." }: Props) {
  return (
    <div style={{
      position:"fixed", inset:0, zIndex:999,
      background:"var(--color-bg, #f8f7f4)",
      display:"flex", flexDirection:"column",
      alignItems:"center", justifyContent:"center", gap:20,
    }}>
      <div style={{ position:"relative", width:80, height:80 }}>
        {/* runway dots */}
        <div style={{ position:"absolute", bottom:12, left:"50%", transform:"translateX(-50%)", display:"flex", gap:6 }}>
          {[0,1,2,3,4].map(i => (
            <div key={i} style={{
              width:6, height:6, borderRadius:"50%",
              background:"#c8c5bc",
              animation:`rwDot 1.2s ease-in-out ${i*0.15}s infinite`,
            }}/>
          ))}
        </div>
        {/* plane */}
        <div style={{
          position:"absolute", top:8, left:"50%", transform:"translateX(-50%)",
          fontSize:36, lineHeight:1,
          animation:"planeBob 1.8s ease-in-out infinite",
        }}>✈️</div>
      </div>

      <div style={{ textAlign:"center" }}>
        <div style={{ fontSize:15, fontWeight:500, color:"#1a1917", marginBottom:4 }}>{message}</div>
        <div style={{ fontSize:12, color:"#6b6860" }}>PPL 讀書計畫</div>
      </div>

      <div style={{ width:180, height:3, background:"#e5e3dd", borderRadius:2, overflow:"hidden" }}>
        <div style={{
          height:"100%", borderRadius:2, background:"#185FA5",
          animation:"loadBar 1.6s ease-in-out infinite",
        }}/>
      </div>

      <style>{`
        @keyframes planeBob {
          0%,100% { transform:translateX(-50%) translateY(0) rotate(-5deg); }
          50%      { transform:translateX(-50%) translateY(-10px) rotate(5deg); }
        }
        @keyframes rwDot {
          0%,100% { opacity:.25; transform:scale(1); }
          50%     { opacity:1;   transform:scale(1.3); }
        }
        @keyframes loadBar {
          0%   { width:0%;   margin-left:0; }
          50%  { width:70%;  margin-left:0; }
          100% { width:0%;   margin-left:100%; }
        }
      `}</style>
    </div>
  );
}
