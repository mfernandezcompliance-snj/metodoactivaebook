import { useEffect, useState } from "react";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "ppdp-cookie-consent-v1";

export const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const decide = (value: "accepted" | "rejected") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed bottom-0 inset-x-0 z-50 px-4 pb-4 pointer-events-none"
    >
      <div className="pointer-events-auto mx-auto max-w-3xl bg-card border border-border rounded-2xl shadow-card p-5 md:p-6">
        <div className="flex items-start gap-3 mb-4">
          <Cookie className="h-6 w-6 text-terracotta-deep shrink-0 mt-0.5" />
          <div className="flex-1">
            <h3 className="font-serif text-lg text-primary mb-1">Aviso de Cookies</h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Para ofrecer las mejores experiencias, utilizamos tecnologías como las cookies.
            </p>
          </div>
          <button
            onClick={() => decide("rejected")}
            aria-label="Cerrar"
            className="text-muted-foreground hover:text-primary transition-smooth shrink-0"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-end">
          <button
            onClick={() => decide("rejected")}
            className="px-5 py-2.5 rounded-full text-sm font-semibold border-2 border-border text-foreground/80 hover:border-primary hover:text-primary transition-smooth"
          >
            Solo esenciales
          </button>
          <button
            onClick={() => decide("accepted")}
            className="px-5 py-2.5 rounded-full text-sm font-bold gradient-cta text-accent-foreground shadow-cta hover:shadow-glow transition-smooth"
          >
            Aceptar todas
          </button>
        </div>
      </div>
    </div>
  );
};
