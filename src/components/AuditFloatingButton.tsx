import { ShieldCheck } from "lucide-react";

export const AuditFloatingButton = () => (
  <a
    href="https://tally.so/r/QKxVJY"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-5 left-5 z-50 inline-flex items-center gap-2 max-w-[260px] md:max-w-none rounded-full bg-gold hover:brightness-105 text-petrol font-bold text-xs md:text-sm px-4 py-3 shadow-cta hover:shadow-glow transition-bounce hover:scale-105 border-2 border-gold/60"
    aria-label="Auditoría gratuita para autores - MF Web Design & Compliance"
  >
    <ShieldCheck className="h-5 w-5 shrink-0" />
    <span className="leading-tight">
      ¿Eres autor? Crea tu web aquí.
      <span className="block text-[10px] md:text-xs font-semibold opacity-90">
        Auditoría Gratuita
      </span>
    </span>
  </a>
);
