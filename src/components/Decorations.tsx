/* Hand-drawn style sun used at hero corner and final CTA */
export const Sun = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 120 120"
    className={className}
    fill="none"
    aria-hidden="true"
  >
    <circle cx="60" cy="60" r="22" fill="hsl(var(--gold))" />
    {Array.from({ length: 12 }).map((_, i) => {
      const angle = (i * 30 * Math.PI) / 180;
      const x1 = 60 + Math.cos(angle) * 32;
      const y1 = 60 + Math.sin(angle) * 32;
      const x2 = 60 + Math.cos(angle) * 48;
      const y2 = 60 + Math.sin(angle) * 48;
      return (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="hsl(var(--gold))"
          strokeWidth="4"
          strokeLinecap="round"
        />
      );
    })}
  </svg>
);

/* Wavy divider between sections (organic transitions) */
type WaveProps = {
  fill?: "mint" | "peach" | "cream" | "card" | "creamDeep";
  flip?: boolean;
  className?: string;
};

const fillMap: Record<NonNullable<WaveProps["fill"]>, string> = {
  mint: "hsl(var(--sage))",
  peach: "hsl(var(--peach))",
  cream: "hsl(var(--cream))",
  creamDeep: "hsl(var(--cream-deep))",
  card: "hsl(var(--card))",
};

export const WaveDivider = ({
  fill = "mint",
  flip = false,
  className = "",
}: WaveProps) => (
  <div
    className={`w-full leading-[0] ${className}`}
    style={{ transform: flip ? "rotate(180deg)" : undefined }}
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 1440 110"
      preserveAspectRatio="none"
      className="block w-full h-[60px] md:h-[90px]"
    >
      <path
        d="M0,64 C240,128 480,0 720,40 C960,80 1200,120 1440,64 L1440,110 L0,110 Z"
        fill={fillMap[fill]}
      />
    </svg>
  </div>
);

/* Soft organic blob backdrop */
export const Blob = ({
  className = "",
  color = "hsl(var(--gold) / 0.25)",
}: {
  className?: string;
  color?: string;
}) => (
  <svg
    viewBox="0 0 200 200"
    className={className}
    aria-hidden="true"
  >
    <path
      fill={color}
      d="M44.6,-58.3C57.4,-49.1,67,-34.8,71.1,-19C75.2,-3.2,73.8,14,66.5,28.1C59.2,42.2,46,53.1,31.6,60.5C17.2,68,1.6,71.9,-13.7,69.7C-29,67.5,-44,59.1,-54.5,46.6C-65,34.1,-71,17.1,-71.5,-0.3C-72,-17.7,-67,-35.3,-56.3,-45.3C-45.5,-55.2,-29,-57.5,-13.6,-58.6C1.7,-59.6,15.9,-59.5,28.5,-66.6C41.1,-73.7,52,-74.7,44.6,-58.3Z"
      transform="translate(100 100)"
    />
  </svg>
);
