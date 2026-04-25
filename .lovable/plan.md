# Página de ventas — Método A.C.T.I.V.A. (Pinceles de Palabras)

Una landing page de ventas de una sola página, en español, con todos los elementos del documento entregado, los assets gráficos subidos, y todos los botones de compra apuntando a:

`https://pay.hotmart.com/A103289549F?checkoutMode=10`

(se abre en una nueva pestaña con `target="_blank"` y `rel="noopener noreferrer"`)

## Estructura de la página (de arriba hacia abajo)

1. **Header / barra superior** — Logo "Pinceles de Palabras" centrado, fondo crema cálido.
2. **Hero**
   - Título: "Recupera la atención y la sonrisa de tu hijo"
   - Subtítulo: "El Método A.C.T.I.V.A.™ — El sistema probado para que suelte las pantallas y descubra el placer de jugar."
   - Texto de apoyo + mockup del ebook a la derecha (imagen `PORTADA_EBOOK_MOCKUP`).
   - **Botón CTA principal:** "¡Sí! Quiero recuperar su sonrisa y su atención" → Hotmart.
   - Microcopy debajo: "Pago seguro · Acceso inmediato · Garantía 7 días".
3. **El Manifiesto** — texto empático con bullets ("Lo llamas y ni siquiera levanta la vista", etc.) y la frase destacada "No te enfrentas a un berrinche; te enfrentas a una respuesta química."
4. **Presentación del método** — "Te presentamos: Desconecta y Actúa. El Método A.C.T.I.V.A.™" con descripción.
5. **Beneficios (grid de tarjetas)** — Conexión Real, Creatividad, Autonomía, Paz Mental, Habilidades.
6. **Cita destacada** — "No se trata de prohibir pantallas. Se trata de ofrecer algo tan irresistible que tu hijo elija soltar el celular por sí mismo."
7. **Sección de bonos** — "🎁 5 Herramientas BONUS incluidas" con tarjetas individuales para las 5 herramientas usando las imágenes `BONO_2`, `BONO_3`, `BONO_4`, `BONO_5` y la imagen combinada de los bonos.
8. **Oferta y precios**
   - Bloque "Valor total real $53 USD → Precio especial $12.99 USD" con badge de descuento.
   - Lista checklist de lo incluido.
   - **Tabla de planes (2 columnas):**
     - Básico — $7.99 USD (solo ebook) → botón "Quiero el básico" → Hotmart.
     - Pack Completo — $12.99 USD (ebook + 5 bonos), con etiqueta "⭐ MÁS POPULAR" → botón "⭐ Quiero el pack completo" → Hotmart.
9. **Tabla de equivalencias por país** — México, Colombia, Argentina, Chile, Perú, Costa Rica, Panamá, Puerto Rico, El Salvador, Paraguay, Uruguay, Estados Unidos, España. Nota al pie sobre tasa de cambio.
10. **Testimonios** — "Familias Felices": Familia Rodríguez, Abuela de 8 nietos, Tía Mary (3 tarjetas).
11. **Sobre la editorial** — "¿Quién está detrás de este Plan de Rescate?" con logo y copy de Pinceles de Palabras.
12. **Garantía y confianza** — Badges "Garantía 7 días" y "Pago Seguro Hotmart" (imágenes subidas) + texto "Tu inversión está protegida".
13. **CTA final** — "¡Es hora de actuar!" + recordatorio de la oferta + **botón** "¡Quiero que mi hijo deje el celular!" → Hotmart.
14. **FAQ (acordeón)** — 6 preguntas:
    - ¿Cómo puedo realizar la compra? (paso a paso)
    - ¿Para qué edades es recomendable el método?
    - ¿Tengo que pasarme todo el día jugando con ellos? (con respuesta del documento)
    - ¿Es un libro físico o digital?
    - ¿Qué pasa si mi hijo ya es "muy dependiente" al celular?
    - ¿Es seguro el pago?
    Para las preguntas sin respuesta en el documento, se redactarán respuestas alineadas al tono de la marca.
15. **P.D.** — Mensaje final empático del documento.
16. **Footer** — © 2026 Pinceles de Palabras + enlaces (Políticas de Privacidad, Términos y Condiciones, Contacto) hacia las URLs ya existentes en `elmetodoactiva.vercel.app` + disclaimer de Hotmart.

## Diseño visual

- **Paleta** inspirada en los assets subidos: crema cálido de fondo (#FBF8F1), verde salvia (#A8C0A8 / #88A88E), naranja terracota suave (#D4915A) como acento de CTA, azul petróleo profundo (#1F4E5F) para títulos, marrón cálido (#5C4A3A) para texto secundario.
- **Tipografía:** serif elegante (tipo Playfair Display) para títulos grandes, sans-serif limpia (Inter) para el cuerpo — coherente con el logo.
- **Estilo:** cálido, artesanal, profesional, con tarjetas redondeadas, sombras suaves, separadores ondulados sutiles entre secciones.
- **Botones CTA:** color terracota destacado, texto blanco, grandes y con hover animado, sombra cálida.
- **Animaciones suaves** al hacer scroll (fade-in) en las secciones principales.
- **Totalmente responsive** (mobile, tablet, desktop), con la cuadrícula de bonos y la tabla de precios reorganizándose en una columna en móvil.

## Detalles técnicos

- Single page React (`/`) — toda la landing en `src/pages/Index.tsx` dividida en componentes (`Hero`, `Manifesto`, `Method`, `Benefits`, `Bonuses`, `Pricing`, `CountryTable`, `Testimonials`, `About`, `Guarantee`, `FinalCta`, `Faq`, `Footer`).
- Imágenes subidas se copian a `src/assets/` e importan como módulos ES6 para optimización de Vite.
- Tokens de color y tipografías definidos en `src/index.css` (HSL) y `tailwind.config.ts` — sin colores hardcodeados en componentes.
- FAQ usa el componente `Accordion` de shadcn/ui.
- Tabla de equivalencias usa el componente `Table` de shadcn/ui.
- Todos los CTA son `<a href="https://pay.hotmart.com/A103289549F?checkoutMode=10" target="_blank" rel="noopener noreferrer">` envolviendo el botón.
- Meta tags SEO en `index.html`: título, descripción, OG image (mockup del ebook), idioma `es`.
- El enlace de pago se centraliza en una constante (`HOTMART_CHECKOUT_URL`) para facilitar futuros cambios.
