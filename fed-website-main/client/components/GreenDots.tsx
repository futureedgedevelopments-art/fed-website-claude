/* ── Decorative green dots ──────────────────────────────── */
export default function GreenDots({ variant = "5" }: { variant?: "5" | "6" }) {
  if (variant === "6") {
    return (
      <div className="flex flex-col gap-[10px]">
        <div className="flex gap-[10px]">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-[10px] h-[10px]" style={{ background: "rgba(58,185,132,0.65)" }} />
          ))}
        </div>
        <div className="flex gap-[10px]">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-[10px] h-[10px]" style={{ background: "rgba(58,185,132,0.65)" }} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="relative w-[50px] h-[20px]">
      {[0, 20, 40].map((x) => (
        <div
          key={x}
          className="absolute bottom-0 w-[10px] h-[10px]"
          style={{ left: x, background: "rgba(58,185,132,0.65)" }}
        />
      ))}
      {[10, 30].map((x) => (
        <div
          key={x}
          className="absolute top-0 w-[10px] h-[10px]"
          style={{ left: x, background: "rgba(58,185,132,0.65)" }}
        />
      ))}
    </div>
  );
}
