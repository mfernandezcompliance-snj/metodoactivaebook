import { Info } from "lucide-react";

export const PortfolioBanner = () => (
  <div className="w-full bg-petrol text-primary-foreground text-xs md:text-sm py-2 px-4">
    <div className="container flex items-center justify-center gap-2 text-center">
      <Info className="h-4 w-4 shrink-0 text-gold" />
      <p className="leading-snug">
        <strong className="text-gold">DEMOSTRACIÓN DE DISEÑO:</strong> Este es un modelo conceptual
        creado por <strong>MF Web Design &amp; Compliance</strong>. El producto es real y propiedad
        de Pinceles de Palabras.
      </p>
    </div>
  </div>
);
