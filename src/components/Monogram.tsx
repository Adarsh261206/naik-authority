export function Monogram({
  size = 40,
  tone = "dark",
  className = "",
}: {
  size?: number;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-[3px] ${
        tone === "dark" ? "bg-espresso text-cream" : "bg-cream text-espresso"
      } ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <span className="font-display leading-none" style={{ fontSize: size * 0.44, letterSpacing: "0.02em" }}>
        RN
      </span>
    </span>
  );
}
