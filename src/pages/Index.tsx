import { CtaButton } from "@/components/CtaButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Check,
  X,
  Lock,
  Clock,
  Mail,
  Shield,
  Sparkles,
  Heart,
  Brain,
  Smile,
  Users,
  Palette,
  Star,
  Quote,
  Gift,
  Rocket,
  AlertTriangle,
} from "lucide-react";
import { PortfolioBanner } from "@/components/PortfolioBanner";
import { AuditFloatingButton } from "@/components/AuditFloatingButton";
import { CookieBanner } from "@/components/CookieBanner";
import { PrivacyLink, TermsLink, CookiesLink } from "@/components/LegalModals";
import { Sun, WaveDivider, Blob } from "@/components/Decorations";
import logo from "@/assets/logo.png";
import ebookMockup from "@/assets/ebook-mockup.png";
import bonosPack from "@/assets/bonos-pack.png";
import bono1 from "@/assets/bono-1.png";
import bono2 from "@/assets/bono-2.png";
import bono3 from "@/assets/bono-3.png";
import bono4 from "@/assets/bono-4.png";
import bono5 from "@/assets/bono-5.png";
import badgeGarantia from "@/assets/badge-garantia.png";
import badgePagoSeguro from "@/assets/badge-pago-seguro.png";
import ninosCorriendo from "@/assets/ninos-corriendo.jpg";
import familiaJugando from "@/assets/familia-jugando.png";

/* ---------- HERO ---------- */
const Hero = () => (
  <section className="relative overflow-hidden gradient-warm pt-12 pb-20 md:pt-20 md:pb-28">
    <Sun className="absolute top-6 right-6 md:top-10 md:right-12 w-20 md:w-28 opacity-90 animate-float" />
    <div className="absolute inset-0 opacity-40 pointer-events-none">
      <Blob className="absolute -top-10 -left-20 w-[420px]" color="hsl(var(--sage) / 0.45)" />
      <Blob className="absolute bottom-0 -right-24 w-[460px]" color="hsl(var(--peach) / 0.55)" />
    </div>

    <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
      <div className="animate-fade-up text-center lg:text-left">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage/30 text-petrol text-sm font-semibold mb-6">
          <Sparkles className="h-4 w-4" /> Método A.C.T.I.V.A.™
        </span>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
          Recupera la <span className="text-terracotta-deep">atención</span> y la{" "}
          <span className="text-terracotta-deep">sonrisa</span> de tu hijo
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 mb-4 leading-relaxed">
          El sistema probado para que <strong>suelte las pantallas</strong> y descubra el placer de jugar.
        </p>
        <p className="text-base md:text-lg text-muted-foreground mb-8">
          Sin berrinches. Sin perder la paciencia. Actividades respaldadas por la ciencia para reconectar en familia.
        </p>

        <CtaButton size="xl" className="w-full sm:w-auto">
          ¡Sí! Quiero recuperar su sonrisa
        </CtaButton>

        <p className="text-xs md:text-sm text-muted-foreground mt-4 max-w-md mx-auto lg:mx-0">
          Al hacer clic, serás redirigido a nuestra plataforma de pago segura.
          Por favor, espera unos segundos a que cargue el formulario.
        </p>

        <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start mt-6 text-sm text-foreground/70">
          <span className="inline-flex items-center gap-2"><Lock className="h-4 w-4 text-sage-deep" /> Pago seguro</span>
          <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4 text-sage-deep" /> Acceso inmediato</span>
          <span className="inline-flex items-center gap-2"><Shield className="h-4 w-4 text-sage-deep" /> Garantía 7 días</span>
        </div>
      </div>

      <div className="flex justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
        <div className="relative">
          <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-gold/20 to-terracotta/20 blur-3xl" />
          <img
            src={ebookMockup}
            alt="Ebook El Método A.C.T.I.V.A. - La guía que convierte el berrinche digital en juego real"
            className="relative w-full max-w-md animate-float drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  </section>
);

/* ---------- MANIFIESTO ---------- */
const Manifesto = () => (
  <section className="py-20 md:py-28 bg-card">
    <div className="container max-w-6xl grid lg:grid-cols-[1fr_minmax(0,420px)] gap-12 items-start">
      <div className="max-w-3xl">
      <div className="text-center mb-12">
        <span className="inline-block text-sm tracking-[0.3em] text-terracotta-deep font-semibold mb-3">
          EL MANIFIESTO
        </span>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary">
          No eres un mal padre.<br />
          <span className="italic text-terracotta-deep">Eres un héroe agotado.</span>
        </h2>
      </div>

      <div className="space-y-6 text-lg leading-relaxed text-foreground/85">
        <p>
          Sabemos que amas a tus hijos. Sabemos que esa tablet no llegó a sus manos por descuido.
          Llegó porque necesitabas terminar de cocinar, atender una llamada de trabajo o,
          simplemente, porque tras un día agotador, necesitabas cinco minutos de respiro.
        </p>
        <p>
          <strong className="text-primary">No eres un "mal padre".</strong>{" "}
          Eres un ser humano criando en la era más difícil de la historia.
        </p>
        <p>Pero hoy sientes que algo se te ha salido de las manos:</p>

        <ul className="space-y-3 pl-2">
          {[
            "Lo llamas y ni siquiera levanta la vista.",
            "Ya no quiere jugar como antes.",
            "Se vuelve irritable cuando intentas poner límites.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-terracotta shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <blockquote className="my-10 border-l-4 border-terracotta pl-6 py-4 bg-cream-deep rounded-r-2xl">
          <p className="font-serif italic text-xl md:text-2xl text-primary">
            No te enfrentas a un berrinche; te enfrentas a una respuesta química.
          </p>
        </blockquote>

        <p>
          En <strong className="text-primary">Pinceles de Palabras</strong> entendemos que no buscas juzgar,
          buscas soluciones. Porque del otro lado de esa pantalla hay miles de ingenieros de Silicon Valley
          diseñando algoritmos para retener la atención de tu hijo.
        </p>
      </div>
      </div>
      <div className="lg:sticky lg:top-8">
        <img
          src={ninosCorriendo}
          alt="Niños felices corriendo y jugando al aire libre en un parque"
          className="w-full rounded-3xl shadow-card"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

/* ---------- MÉTODO ---------- */
const Method = () => (
  <section className="py-20 md:py-28 gradient-sage relative overflow-hidden">
    <div className="absolute inset-0 bg-cream/40" />
    <div className="container relative max-w-4xl text-center">
      <span className="inline-block text-sm tracking-[0.3em] text-terracotta-deep font-semibold mb-3">
        TE PRESENTAMOS
      </span>
      <h2 className="font-serif text-3xl md:text-5xl text-primary mb-4">
        Desconecta y Actúa
      </h2>
      <p className="font-serif text-2xl md:text-3xl italic text-terracotta-deep mb-8">
        El Método A.C.T.I.V.A.™
      </p>

      <div className="space-y-5 text-lg text-foreground/85 leading-relaxed text-left md:text-center max-w-3xl mx-auto">
        <p>
          Olvida los PDFs de "500 actividades" que solo te dan más trabajo a ti.
          Ante demasiadas opciones, el cerebro infantil se paraliza y vuelve a lo fácil:
          el scroll infinito.
        </p>
        <p>
          Nuestro sistema es una <strong className="text-primary">Selección Maestra Curada</strong>.
          No te damos "ideas", te damos el <em>Mecanismo de Salida</em> para que tu hijo pase de
          la pasividad digital a la acción creativa por voluntad propia.
        </p>
        <p>
          Usa el Método A.C.T.I.V.A. para que tu hijo elija soltar la pantalla{" "}
          <strong className="text-terracotta-deep">voluntariamente</strong>, eliminando las discusiones,
          castigos y sin sentirte culpable.
        </p>
      </div>

      <div className="mt-14 max-w-2xl mx-auto">
        <img
          src={familiaJugando}
          alt="Familia jugando junta en el suelo con bloques, libros y juegos de mesa"
          className="w-full rounded-3xl shadow-card"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

const benefits = [
  { icon: Heart, title: "Conexión Real", desc: "Actividades que crean vínculos profundos entre padres e hijos." },
  { icon: Palette, title: "Creatividad", desc: "Juegos que despiertan la imaginación sin necesidad de tecnología." },
  { icon: Sparkles, title: "Autonomía", desc: "Tu hijo aprenderá a entretenerse solo, sin depender de una pantalla." },
  { icon: Smile, title: "Paz Mental", desc: "Adiós a los berrinches por quitar el celular." },
  { icon: Brain, title: "Habilidades", desc: "Desarrolla atención, paciencia y habilidades sociales." },
];

const Benefits = () => (
  <section className="py-20 md:py-28 bg-cream-deep">
    <div className="container">
      <div className="text-center mb-14 max-w-2xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
          Lo que tu familia <span className="text-terracotta-deep">recuperará</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Cinco transformaciones reales que verás desde la primera semana.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map(({ icon: Icon, title, desc }, i) => (
          <div
            key={title}
            className="group bg-card rounded-3xl p-8 shadow-soft hover:shadow-card transition-smooth hover:-translate-y-1"
          >
            <div className="inline-flex p-4 rounded-2xl gradient-sage mb-5 group-hover:scale-110 transition-bounce">
              <Icon className="h-7 w-7 text-petrol" strokeWidth={2.2} />
            </div>
            <h3 className="font-serif text-2xl text-primary mb-2">{title}</h3>
            <p className="text-foreground/75 leading-relaxed">{desc}</p>
          </div>
        ))}

        <div className="rounded-3xl p-8 gradient-petrol text-primary-foreground shadow-card flex flex-col justify-center">
          <Quote className="h-8 w-8 text-gold mb-3" />
          <p className="font-serif italic text-xl leading-snug">
            "No se trata de prohibir pantallas. Se trata de ofrecer algo{" "}
            <span className="text-gold not-italic font-semibold">tan irresistible</span>{" "}
            que tu hijo elija soltar el celular por sí mismo."
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- BONOS ---------- */
const bonuses = [
  {
    n: "1",
    img: bono1,
    title: 'El Menú de Vida Real',
    sub: 'Pack "Manos a la Obra"',
    desc: 'La respuesta definitiva al "¡Estoy aburrido!". Desafíos estratégicos que activan la dopamina real mientras tú cocinas o descansas.',
  },
  {
    n: "2",
    img: bono2,
    title: 'El Interruptor de Berrinches',
    sub: "Tarjetas de Canje",
    desc: 'La pieza clave. Deja de quitar el móvil a la fuerza. Usa este sistema de "moneda de cambio" para que tu hijo aprenda a entregar el dispositivo voluntariamente.',
  },
  {
    n: "3",
    img: bono3,
    title: "El Pacto Familiar",
    sub: "Transformando reglas en alianza",
    desc: "Un acuerdo familiar que transforma las reglas en un compromiso compartido. El orden fluye de forma natural y tú dejas de dar órdenes.",
  },
  {
    n: "4",
    img: bono4,
    title: "El Inventario del Ingenio",
    sub: "Craft Supplies en casa",
    desc: "Convierte lo que ya tienes en casa en una fábrica de juegos sin gastar un centavo extra.",
  },
  {
    n: "5",
    img: bono5,
    title: 'Manual "Paz en la Mesa"',
    sub: "Soluciones para cenar en armonía",
    desc: "Dinámicas tácticas para sobrevivir a un restaurante o viaje largo sin entregar el celular (¡Sin ruidos ni desorden!).",
  },
];

const Bonuses = () => (
  <section className="py-20 md:py-28 bg-card">
    <div className="container">
      <div className="text-center mb-14 max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-terracotta/15 text-terracotta-deep text-sm font-bold mb-4">
          <Gift className="h-4 w-4" /> 5 HERRAMIENTAS BONUS INCLUIDAS
        </span>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
          Además del ebook,<br className="hidden md:block" /> recibes herramientas para{" "}
          <span className="text-terracotta-deep">aplicar desde el día uno</span>.
        </h2>
      </div>

      <div className="mb-12 flex justify-center">
        <img
          src={bonosPack}
          alt="Ebook Método ACTIVA + 5 bonos exclusivos"
          className="w-full max-w-3xl"
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bonuses.map(({ n, img, title, sub, desc }) => (
          <div
            key={n}
            className="bg-cream-deep rounded-3xl p-6 shadow-soft hover:shadow-card transition-smooth hover:-translate-y-1 flex flex-col"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="shrink-0 w-14 h-14 rounded-2xl gradient-cta flex items-center justify-center text-accent-foreground font-serif text-2xl font-bold shadow-cta">
                {n}
              </div>
              <div>
                <p className="text-xs font-bold tracking-wider text-terracotta-deep">BONO #{n}</p>
                <h3 className="font-serif text-xl text-primary leading-tight">{title}</h3>
                <p className="text-sm text-muted-foreground italic">{sub}</p>
              </div>
            </div>

            {img && (
              <div className="my-4 flex justify-center">
                <img src={img} alt={`Bono ${n}: ${title}`} className="h-44 w-auto object-contain" />
              </div>
            )}

            <p className="text-foreground/80 leading-relaxed text-sm mt-auto">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- PRICING ---------- */
const Pricing = () => {
  const includes = [
    'Ebook "Desconecta y Actúa"',
    'BONO 1: Pack "Manos a la Obra"',
    "BONO 2: Tarjetas de Canje",
    "BONO 3: Pacto Familiar Digital",
    "BONO 4: Inventario del Ingenio",
    'BONO 5: Manual "Paz en la Mesa"',
  ];

  return (
    <section id="oferta" className="py-20 md:py-28 gradient-warm">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <span className="inline-block text-sm tracking-[0.3em] text-terracotta-deep font-semibold mb-3">
            UNA INVERSIÓN MÍNIMA POR TU PAZ MENTAL
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
            Cuesta menos que <span className="italic">una salida al cine</span>.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pero los beneficios durarán toda la vida.
          </p>
        </div>

        <div className="bg-card rounded-3xl shadow-card p-6 md:p-10 mb-12 max-w-2xl mx-auto">
          <ul className="space-y-3 mb-8">
            {includes.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <Check className="h-5 w-5 text-sage-deep shrink-0" strokeWidth={3} />
                <span className="text-foreground/85">{item}</span>
              </li>
            ))}
          </ul>

          <div className="text-center border-t border-border pt-6">
            <p className="text-sm text-muted-foreground mb-1">VALOR TOTAL REAL</p>
            <p className="text-2xl line-through text-muted-foreground/60 mb-3">$53.00 USD</p>
            <p className="text-sm font-semibold text-terracotta-deep mb-2">
              PRECIO ESPECIAL DE LANZAMIENTO
            </p>
            <p className="font-serif text-6xl md:text-7xl font-bold text-primary mb-2">
              $12.99 <span className="text-2xl text-muted-foreground">USD</span>
            </p>
            <p className="text-sm text-terracotta-deep font-semibold inline-flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Ahorras más del 75% solo por las próximas 24 horas
            </p>
          </div>
        </div>

        {/* Plans */}
        <h3 className="text-center font-serif text-2xl md:text-3xl text-primary mb-8">Elige tu plan</h3>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Básico */}
          <div className="bg-card rounded-3xl p-8 shadow-soft border border-border flex flex-col">
            <h4 className="font-serif text-2xl text-primary mb-1">Básico</h4>
            <p className="text-sm text-muted-foreground mb-4">Solo el ebook esencial</p>
            <p className="font-serif text-5xl font-bold text-primary mb-6">
              $7.99 <span className="text-lg text-muted-foreground">USD</span>
            </p>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-sage-deep shrink-0" strokeWidth={3} />
                <span>Ebook principal Método ACTIVA</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <X className="h-5 w-5 text-destructive/70 shrink-0" />
                <span>Los 5 bonos tácticos</span>
              </li>
            </ul>
            <CtaButton href="https://pay.hotmart.com/S104739377Y?checkoutMode=10" variant="outline" size="lg" className="w-full" showArrow={false}>
              Quiero el básico
            </CtaButton>
          </div>

          {/* Pack Completo */}
          <div className="relative bg-card rounded-3xl p-8 shadow-cta border-2 border-terracotta flex flex-col">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full gradient-cta text-accent-foreground text-xs font-bold tracking-wider whitespace-nowrap shadow-cta">
              ⭐ MÁS POPULAR
            </span>
            <h4 className="font-serif text-2xl text-primary mb-1">Pack Completo</h4>
            <p className="text-sm text-terracotta-deep font-semibold mb-4">Ebook + los 5 bonos</p>
            <p className="font-serif text-5xl font-bold text-primary mb-6">
              $12.99 <span className="text-lg text-muted-foreground">USD</span>
            </p>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-sage-deep shrink-0" strokeWidth={3} />
                <span>Ebook principal Método ACTIVA</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-sage-deep shrink-0" strokeWidth={3} />
                <span><strong>Los 5 bonos tácticos</strong></span>
              </li>
            </ul>
            <CtaButton size="lg" className="w-full">
              ⭐ Quiero el pack completo
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- COUNTRY EQUIVALENCE ---------- */
const countries = [
  ["🇲🇽 México", "$260 MXN"],
  ["🇨🇴 Colombia", "$54,000 COP"],
  ["🇦🇷 Argentina", "$13,500 ARS"],
  ["🇨🇱 Chile", "$12,500 CLP"],
  ["🇵🇪 Perú", "$49 PEN"],
  ["🇨🇷 Costa Rica", "$6,700 CRC"],
  ["🇵🇦 Panamá", "$12.99 USD"],
  ["🇵🇷 Puerto Rico", "$12.99 USD"],
  ["🇸🇻 El Salvador", "$12.99 USD"],
  ["🇵🇾 Paraguay", "$100,000 GS"],
  ["🇺🇾 Uruguay", "$550 UYU"],
  ["🇺🇸 Estados Unidos", "$12.99 USD"],
  ["🇪🇸 España", "€12.00 EUR"],
];

const CountryTable = () => (
  <section className="py-20 bg-card">
    <div className="container max-w-3xl">
      <h2 className="text-center font-serif text-2xl md:text-3xl text-primary mb-8">
        ¿Cuánto es <span className="text-terracotta-deep">$12.99 USD</span> en tu país?
      </h2>

      <div className="rounded-3xl overflow-hidden shadow-soft border border-border bg-cream-deep">
        <Table>
          <TableHeader>
            <TableRow className="bg-petrol hover:bg-petrol">
              <TableHead className="text-primary-foreground font-bold">País</TableHead>
              <TableHead className="text-primary-foreground font-bold text-right">
                Equivalencia aproximada
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {countries.map(([country, price]) => (
              <TableRow key={country}>
                <TableCell className="font-medium">{country}</TableCell>
                <TableCell className="text-right font-bold text-primary">{price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <p className="text-xs text-center text-muted-foreground mt-4 italic">
        Valores aproximados. El cobro se realiza en USD. Verifica la tasa de cambio de tu banco el día de la compra.
      </p>
    </div>
  </section>
);

/* ---------- TESTIMONIALS ---------- */
const testimonials = [
  {
    name: "Familia Rodríguez",
    text: "Este método ha funcionado de maravilla en casa. Los niños sienten que tienen el control al decidir qué actividad creativa quieren hacer para divertirse. Realmente sí existen alternativas emocionantes para realizar dentro y fuera de casa sin depender del celular. Los primeros días fueron difíciles, pero es cuestión de acostumbrarse. Ahora los incluyo al cocinar, salimos a pasear temprano y las tarjetas de canje ya son parte de nuestra rutina familiar.",
  },
  {
    name: "Abuela de 8 nietos",
    text: "Es imposible que se aburran actuando sus cuentos favoritos. Ahora presentan obras de teatro en casa todo el tiempo e incluyen hasta al abuelo. Siento que su creatividad se ha desarrollado aún más. Este ebook no solo logra que dejen el celular, sino que logra que nos divirtamos en familia.",
  },
  {
    name: "Tía Mary",
    text: "A mis sobrinos les encantan los juegos de este ebook, especialmente el de 'irse de viaje'. Imaginarse que están en un safari en África, conocer a los animales y simular el viaje en avión les emociona muchísimo, y a mí me divierte jugar con ellos. Por fin me quité esa preocupación de no saber qué ponerlos a hacer para que dejen el celular.",
  },
];

const Testimonials = () => (
  <section className="py-20 md:py-28 bg-cream-deep">
    <div className="container">
      <div className="text-center mb-14">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 text-petrol text-sm font-bold mb-4">
          <Star className="h-4 w-4 fill-gold text-gold" /> FAMILIAS FELICES
        </span>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary">
          Lo que dicen las familias que <span className="text-terracotta-deep">ya reconectaron</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map(({ name, text }) => (
          <div
            key={name}
            className="bg-card rounded-3xl p-7 shadow-soft hover:shadow-card transition-smooth flex flex-col"
          >
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </div>
            <Quote className="h-8 w-8 text-terracotta/40 mb-3" />
            <p className="text-foreground/80 leading-relaxed mb-5 italic flex-1 text-sm">"{text}"</p>
            <p className="font-serif text-lg text-primary font-semibold">— {name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- ABOUT ---------- */
const About = () => (
  <section className="py-20 md:py-28 bg-card">
    <div className="container max-w-4xl">
      <div className="text-center mb-12">
        <img src={logo} alt="Pinceles de Palabras" className="h-24 w-auto mx-auto mb-4" />
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary">
          ¿Quién está detrás de este{" "}
          <span className="text-terracotta-deep italic">Plan de Rescate</span>?
        </h2>
      </div>

      <div className="space-y-6 text-lg leading-relaxed text-foreground/85">
        <p>
          En <strong className="text-primary">Pinceles de Palabras</strong>, no solo creamos libros;
          diseñamos puentes.
        </p>
        <p>
          Somos una editorial dedicada a devolverle a la infancia el espacio sagrado que la tecnología
          le ha arrebatado. Nuestra filosofía se resume en tres palabras:
        </p>
        <p className="text-center font-serif text-2xl md:text-3xl italic text-terracotta-deep">
          "Creer es Crear."
        </p>
        <p>
          Rechazamos el contenido de "relleno" o los simples PDFs de dibujos vacíos. Cada una de
          nuestras herramientas está basada en principios de neuro-educación y psicología de la
          atención, diseñadas para que dejes de ser el "policía del Wi-Fi" y vuelvas a ser el guía
          de tus hijos.
        </p>
        <p>
          <strong className="text-primary">Nuestra misión es simple:</strong> Ayudarte a recuperar la
          mirada de tus hijos. Queremos que el arte y el ingenio sean la ruta de aterrizaje para que
          cada niño descubra que el mundo real es mucho más fascinante que cualquier pantalla.
        </p>
      </div>
    </div>
  </section>
);

/* ---------- GUARANTEE ---------- */
const Guarantee = () => (
  <section className="py-16 md:py-20 gradient-sage relative overflow-hidden">
    <div className="absolute inset-0 bg-cream/30" />
    <div className="container relative max-w-4xl">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <img
            src={badgeGarantia}
            alt="Garantía de satisfacción 7 días - Método A.C.T.I.V.A. 100% comprobado"
            className="w-64 md:w-72 drop-shadow-xl"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">
            Tu inversión está <span className="text-terracotta-deep">protegida</span>
          </h2>
          <p className="text-lg text-foreground/85 mb-4">
            <strong>7 días de Garantía.</strong> Te devolvemos el{" "}
            <strong className="text-terracotta-deep">100% de tu dinero</strong> sin preguntas.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4 mt-6">
            <img src={badgePagoSeguro} alt="Pago seguro Hotmart - Compra protegida" className="h-24" />
            <p className="text-sm text-foreground/75 max-w-[200px]">
              <strong>Pago seguro</strong> a través de Hotmart.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- FINAL CTA ---------- */
const FinalCta = () => (
  <section className="py-20 md:py-28 gradient-petrol text-primary-foreground relative overflow-hidden">
    <div className="absolute inset-0 opacity-20 pointer-events-none">
      <div className="absolute top-10 left-1/4 w-72 h-72 rounded-full bg-gold/40 blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-terracotta/30 blur-3xl" />
    </div>

    <div className="container relative max-w-3xl text-center">
      <Rocket className="h-12 w-12 text-gold mx-auto mb-4 animate-float" />
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
        ¡Es hora de <span className="text-gold italic">actuar</span>!
      </h2>
      <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
        No permitas que un algoritmo decida cómo termina la tarde en tu sala de estar.
        Haz clic abajo y recupera la atención y la sonrisa de tu hijo hoy mismo.
      </p>

      <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-3xl p-6 md:p-8 mb-8">
        <p className="text-base md:text-lg leading-relaxed">
          Recuerda: te llevas el método completo + los <strong className="text-gold">5 bonos</strong>{" "}
          (valorados en <span className="line-through opacity-70">$53 USD</span>) por solo{" "}
          <strong className="text-gold text-2xl">$12.99 USD</strong>.
        </p>
        <p className="text-sm text-primary-foreground/70 mt-3 inline-flex items-center gap-2 justify-center">
          <Clock className="h-4 w-4" /> Por las próximas 24 horas.
        </p>
      </div>

      <CtaButton size="xl" className="w-full sm:w-auto">
        ¡Quiero que mi hijo deje el celular!
      </CtaButton>

      <p className="text-xs md:text-sm text-primary-foreground/70 mt-5 max-w-md mx-auto">
        Al hacer clic, serás redirigido a nuestra plataforma de pago segura.
        Por favor, espera unos segundos a que cargue el formulario.
      </p>

      <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center mt-6 text-sm text-primary-foreground/80">
        <span className="inline-flex items-center gap-2"><Lock className="h-4 w-4" /> Pago seguro Hotmart</span>
        <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> Acceso inmediato</span>
        <span className="inline-flex items-center gap-2"><Shield className="h-4 w-4" /> Garantía 7 días</span>
      </div>
    </div>
  </section>
);

/* ---------- FAQ ---------- */
const faqs = [
  {
    q: "¿Cómo puedo realizar la compra? (Paso a paso)",
    a: 'Es muy sencillo: 1) Haz clic en cualquier botón "Quiero el pack completo". 2) Serás redirigido a la plataforma segura de Hotmart. 3) Llena tus datos y elige tu método de pago (tarjeta, PayPal, transferencia local según tu país). 4) En cuanto se confirme el pago, recibirás un correo con tus accesos y enlaces de descarga del ebook + los 5 bonos.',
  },
  {
    q: "¿Para qué edades es recomendable el método?",
    a: "El Método A.C.T.I.V.A. está diseñado para familias con niños entre 3 y 12 años. Las actividades, tarjetas de canje y dinámicas se adaptan al nivel de desarrollo de cada niño, y muchas funcionan incluso con varios hermanos de edades distintas.",
  },
  {
    q: "¿Tengo que pasarme todo el día jugando con ellos?",
    a: '¡Al contrario! El objetivo del Método A.C.T.I.V.A. es fomentar la autonomía. Queremos que tu hijo aprenda a gestionar su propio aburrimiento. Tú pones la semilla con los desafíos del pack "Manos a la Obra" y ellos desarrollan el juego mientras tú recuperas tu tiempo para cocinar, trabajar o descansar.',
  },
  {
    q: "¿Es un libro físico o digital?",
    a: "Es 100% digital. Recibirás el ebook y los 5 bonos en formato PDF, optimizados para leerse desde cualquier dispositivo (celular, tablet, computadora) e imprimibles si prefieres tener las tarjetas y el pacto familiar en papel. Acceso inmediato tras la compra.",
  },
  {
    q: '¿Qué pasa si mi hijo ya es "muy dependiente" al celular?',
    a: 'Justamente para eso fue diseñado el método. No te pedimos quitarle el celular de golpe; te damos el "Interruptor de Berrinches" (Bono 2) y el Pacto Familiar (Bono 3) para que la transición sea progresiva, sin pelea, y para que sea tu hijo quien aprenda a entregar el dispositivo voluntariamente.',
  },
  {
    q: "¿Es seguro el pago?",
    a: "Totalmente. Toda la transacción se procesa a través de Hotmart, una de las plataformas más grandes y confiables del mundo para productos digitales. Tus datos están encriptados y nunca pasan por nuestros servidores. Además, cuentas con 7 días de garantía: si no te convence, te devolvemos el 100% de tu dinero sin preguntas.",
  },
];

const Faq = () => (
  <section className="py-20 md:py-28 bg-cream-deep">
    <div className="container max-w-3xl">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary">
          Preguntas <span className="text-terracotta-deep">Frecuentes</span>
        </h2>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="bg-card rounded-2xl border border-border shadow-soft px-6 data-[state=open]:shadow-card transition-smooth"
          >
            <AccordionTrigger className="text-left font-serif text-lg md:text-xl text-primary hover:text-terracotta-deep hover:no-underline py-5">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5 text-base">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-12 bg-card rounded-3xl p-6 md:p-8 border-l-4 border-terracotta shadow-soft">
        <p className="text-lg italic text-foreground/85 leading-relaxed">
          <strong className="text-primary not-italic">P.D.</strong> Recuerda que no solo compras
          un libro, compras la <strong className="text-terracotta-deep">paz de tu próxima
          salida a cenar</strong> y la mirada de tus hijos conectando contigo otra vez.
          Tienes 7 días para probarlo sin riesgo. ¡Nos vemos dentro!
        </p>
      </div>

      <div className="mt-10 text-center">
        <CtaButton size="xl">¡Quiero mi acceso ahora!</CtaButton>
      </div>
    </div>
  </section>
);

/* ---------- FOOTER ---------- */
const Footer = () => (
  <footer className="bg-petrol text-primary-foreground py-12">
    <div className="container max-w-4xl text-center">
      <div className="inline-flex items-center justify-center bg-cream rounded-3xl p-4 mb-5 shadow-soft">
        <img src={logo} alt="Pinceles de Palabras" className="h-20 w-auto" />
      </div>
      <p className="text-sm text-primary-foreground/70 mb-4">
        © 2026 Pinceles de Palabras. Todos los derechos reservados.
      </p>
      <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-sm mb-6">
        <PrivacyLink className="text-primary-foreground/80 hover:text-gold transition-smooth underline-offset-4 hover:underline cursor-pointer" />
        <TermsLink className="text-primary-foreground/80 hover:text-gold transition-smooth underline-offset-4 hover:underline cursor-pointer" />
        <CookiesLink className="text-primary-foreground/80 hover:text-gold transition-smooth underline-offset-4 hover:underline cursor-pointer" />
        <a
          href="mailto:pincelesdepalabras@gmail.com"
          className="text-primary-foreground/80 hover:text-gold transition-smooth"
        >
          Contacto
        </a>
      </div>
      <p className="text-xs text-primary-foreground/60 leading-relaxed max-w-3xl mx-auto mb-6">
        Este producto es comercializado con el apoyo de Hotmart. La plataforma no realiza control
        editorial previo de los productos aquí comercializados, ni evalúa el tecnicismo o la
        experiencia de quienes los elaboran. La existencia de un producto y su adquisición no pueden
        ser consideradas como garantía de calidad de contenido y resultado, en ningún caso.
      </p>
      <div className="border-t border-primary-foreground/10 pt-5 mt-2">
        <p className="text-xs text-primary-foreground/60">
          Diseño conceptual de portafolio por{" "}
          <strong className="text-gold">MF Web Design &amp; Compliance</strong>. Producto real y
          propiedad de Pinceles de Palabras.
        </p>
      </div>
    </div>
  </footer>
);

/* ---------- INDEX ---------- */
const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <PortfolioBanner />
      {/* Header sticky removido */}
      <Hero />
      <Manifesto />
      <Method />
      <Benefits />
      <Bonuses />
      <Pricing />
      <CountryTable />
      <Testimonials />
      <About />
      <Guarantee />
      <FinalCta />
      <Faq />
      <Footer />
      <AuditFloatingButton />
      <CookieBanner />
    </main>
  );
};

export default Index;
