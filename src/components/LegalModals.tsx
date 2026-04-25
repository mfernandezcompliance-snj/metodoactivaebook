import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="space-y-2">
    <h3 className="font-serif text-lg text-primary">{title}</h3>
    <p className="text-sm text-foreground/80 leading-relaxed">{children}</p>
  </div>
);

export const PrivacyLink = ({ className }: { className?: string }) => (
  <Dialog>
    <DialogTrigger className={className}>Políticas de Privacidad</DialogTrigger>
    <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-card">
      <DialogHeader>
        <DialogTitle className="font-serif text-2xl text-primary">
          Política de Privacidad
        </DialogTitle>
      </DialogHeader>
      <p className="text-xs text-muted-foreground italic">Última actualización: Febrero 2026</p>
      <p className="text-sm text-foreground/85 leading-relaxed">
        En <strong>Pinceles de Palabras</strong>, la privacidad de su familia es nuestra prioridad.
      </p>
      <div className="space-y-5 mt-2">
        <Section title="Recolección de Datos">
          Recopilamos únicamente la información necesaria para procesar su compra y entregar el
          producto (nombre y correo electrónico) a través de nuestro procesador de pagos, Hotmart.
        </Section>
        <Section title="Uso de la Información">
          Sus datos se utilizarán para enviar el acceso al material adquirido, actualizaciones del
          método y comunicaciones relacionadas con su compra. Nunca vendemos ni compartimos sus
          datos con terceros.
        </Section>
        <Section title="Seguridad">
          El proceso de pago está cifrado y protegido por los estándares de seguridad de Hotmart.
          Nosotros no almacenamos ni tenemos acceso a los datos de su tarjeta de crédito o débito.
        </Section>
        <Section title="Derechos del Usuario">
          Usted puede solicitar en cualquier momento la baja de nuestra lista de correos o la
          eliminación de sus datos enviando un correo a{" "}
          <a
            href="mailto:pincelesdepalabras@gmail.com"
            className="text-terracotta-deep underline"
          >
            pincelesdepalabras@gmail.com
          </a>
          .
        </Section>
        <Section title="Cookies">
          Utilizamos cookies básicas para mejorar la experiencia de navegación en nuestra página de
          ventas y analizar el tráfico de forma anónima.
        </Section>
      </div>
    </DialogContent>
  </Dialog>
);

export const TermsLink = ({ className }: { className?: string }) => (
  <Dialog>
    <DialogTrigger className={className}>Términos y Condiciones</DialogTrigger>
    <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-card">
      <DialogHeader>
        <DialogTitle className="font-serif text-2xl text-primary">
          Términos y Condiciones de Uso
        </DialogTitle>
      </DialogHeader>
      <p className="text-xs text-muted-foreground italic">Última actualización: Febrero 2026</p>
      <p className="text-sm text-foreground/85 leading-relaxed">
        Bienvenido a <strong>Pinceles de Palabras</strong>. Al adquirir nuestro producto digital{" "}
        <em>"Desconecta y Actúa: El Método A.C.T.I.V.A."</em>, usted acepta los siguientes
        términos:
      </p>
      <div className="space-y-5 mt-2">
        <Section title="Naturaleza del Producto">
          El usuario adquiere un producto digital (Ebooks, guías y herramientas en formato PDF). No
          se enviará ningún material físico al domicilio del comprador.
        </Section>
        <Section title="Propiedad Intelectual">
          Todo el contenido de Pinceles de Palabras, incluyendo textos, ilustraciones (Sparky,
          Capibara, etc.) y metodologías, son propiedad exclusiva. Se otorga una licencia de uso
          personal y no comercial. Queda prohibida la reventa, redistribución o uso compartido del
          material en grupos o plataformas públicas.
        </Section>
        <Section title="Garantía de Satisfacción">
          Ofrecemos una garantía de 7 días a partir de la compra. Si el producto no cumple con sus
          expectativas, puede solicitar el reembolso total a través de la plataforma de pago
          (Hotmart).
        </Section>
        <Section title="Descargo de Responsabilidad">
          El Método A.C.T.I.V.A. es una herramienta educativa y recreativa. No sustituye el consejo
          de profesionales de la salud mental, pediatría o especialistas en conducta. Los
          resultados pueden variar según el contexto familiar.
        </Section>
      </div>
    </DialogContent>
  </Dialog>
);
