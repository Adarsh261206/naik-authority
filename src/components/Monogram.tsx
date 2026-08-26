export function Monogram({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center border border-gold/45 ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <span
        className="font-display leading-none text-gold"
        style={{ fontSize: size * 0.46, letterSpacing: "0.02em" }}
      >
        RN
      </span>
    </span>
  );
}
