import type { FaqContactBlock, FaqItem } from "./types";

export const faqItems: FaqItem[] = [
  {
    id: "faq-1",
    question: "¿Cómo es el proceso del trabajo?",
    answer:
      "Arrancamos con una reunión para definir la idea, la estética, los formatos y los tiempos de entrega. Después coordinamos la fecha de producción, realizamos la sesión, postproducimos el material y te lo entregamos listo para publicar.",
  },
  {
    id: "faq-2",
    question: "¿Con cuanta anticipación debo comenzar?",
    answer:
      "Lo ideal es contactarnos con al menos dos semanas de anticipación para poder coordinar agenda, definir la propuesta y llegar cómodos a la fecha en la que necesitás el material.",
  },
  {
    id: "faq-3",
    question: "¿Qué necesito enviarles para arrancar?",
    answer:
      "Tus productos, referencias visuales de lo que te gusta y la identidad de tu marca (logo, paleta de colores). Con eso armamos la propuesta estética y arrancamos la producción.",
  },
  {
    id: "faq-4",
    question: "¿Cuántas fotos o videos recibire?",
    answer:
      "Depende del paquete que elijas: lo definimos juntos en la primera reunión según la cantidad de productos y los canales donde vas a publicar el contenido.",
  },
  {
    id: "faq-5",
    question: "¿Qué información necesitan para armar un presupuesto?",
    answer:
      "Cantidad de productos, tipo de contenido que necesitás (foto, video o ambos), estilos de referencia y fecha estimada de entrega. Con esa información te enviamos un presupuesto a medida.",
  },
  {
    id: "faq-6",
    question: "¿En que formato entregan el material?",
    answer:
      "Entregamos el material vía descarga web en el formato acordado: alta resolución para impresión, formatos web para ecommerce y versiones verticales o cuadradas para redes sociales.",
  },
];

export const faqContactBlock: FaqContactBlock = {
  title: "¿No encontras la respuesta?",
  text: "¡Escribinos y te ayudamos con lo que necesites!",
  ctaLabel: "¡Hablemos!",
  ctaHref: "#contact",
  channels: [
    {
      id: "channel-mail",
      icon: "Mail",
      label: "docpandaproducciones@gmail.com",
      href: "mailto:docpandaproducciones@gmail.com",
    },
    {
      id: "channel-instagram",
      icon: "Instagram",
      label: "@docpanda",
      href: "https://www.instagram.com/docpanda",
    },
    {
      id: "channel-whatsapp",
      icon: "MessageCircle",
      label: "Escribinos por Whatsapp",
      href: "https://wa.me/5491100000000",
    },
  ],
};
