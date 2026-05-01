import { ShieldCheck } from "lucide-react";

export const AuditFloatingButton = () => (
  <a
    href="https://tally.so/r/QKxVJY"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 left-6 z-50 inline-flex items-center gap-3 max-w-[320px] md:max-w-none rounded-full bg-gold hover:brightness-105 text-terracotta-deep font-bold text-sm md:text-base px-6 py-4 md:px-7 md:py-5 shadow-cta hover:shadow-glow transition-bounce hover:scale-105 border-2 border-gold/60"
    aria-label="Auditoría gratuita para autores - MF Web Design & Compliance"
  >
    <ShieldCheck className="h-6 w-6 md:h-7 md:w-7 shrink-0" />
    <span className="leading-tight">
      ¿Eres autor? Crea tu web aquí.
      <span className="block text-xs md:text-sm font-semibold opacity-90">
        Auditoría Gratuita
      </span>
    </span>
  </a>
);

