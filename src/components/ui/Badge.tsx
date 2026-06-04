type Color = "blue"|"green"|"amber"|"red"|"gray";
const COLORS: Record<Color,{bg:string;text:string}> = {
  blue:  {bg:"var(--color-blue-light)",  text:"var(--color-blue-text)"},
  green: {bg:"var(--color-green-light)", text:"var(--color-green-text)"},
  amber: {bg:"var(--color-amber-light)", text:"var(--color-amber-text)"},
  red:   {bg:"var(--color-red-light)",   text:"var(--color-red-text)"},
  gray:  {bg:"#F1EFE8", text:"#444441"},
};
export default function Badge({ children, color="blue" }: { children: React.ReactNode; color?: Color }) {
  const c = COLORS[color];
  return <span style={{ background:c.bg, color:c.text, fontSize:11, fontWeight:500, padding:"3px 9px", borderRadius:20, display:"inline-block" }}>{children}</span>;
}
