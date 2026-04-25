import { ArrowRight } from "lucide-react";
import { HOTMART_CHECKOUT_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface CtaButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "lg" | "xl";
  variant?: "primary" | "outline";
  showArrow?: boolean;
}

const sizes = {
  default: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
  xl: "px-10 py-5 text-xl md:text-2xl",
};

export const CtaButton = ({
  children,
  className,
  size = "lg",
  variant = "primary",
  showArrow = true,
}: CtaButtonProps) => {
  const base =
    "inline-flex items-center justify-center gap-3 font-semibold rounded-full transition-bounce hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/40 text-center";
  const variants = {
    primary:
      "gradient-cta text-accent-foreground shadow-cta hover:shadow-glow animate-pulse-soft",
    outline:
      "bg-card text-primary border-2 border-primary/20 hover:border-accent hover:text-accent",
  };

  return (
    <a
      href={HOTMART_CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, sizes[size], variants[variant], className)}
    >
      <span>{children}</span>
      {showArrow && <ArrowRight className="h-5 w-5 shrink-0" />}
    </a>
  );
};
