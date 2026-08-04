import type { ContactInfo } from "./types";

export const contactInfo: ContactInfo = {
  heading: {
    titlePart1: "Hablemos de",
    titlePart2: "tu proximo proyecto",
    accent: "primary",
    subtitle: "Dejanos tus datos y te respondemos a la brevedad",
  },
  whatsappTitlePart1: "¿Preferis escribirnos",
  whatsappTitlePart2: "por whatsapp?",
  whatsappText: "Hablamos más rápido y más fácil",
  whatsappCtaLabel: "Escribinos por Whatsapp",
  whatsappNumber: "+5491100000000",
  whatsappMessage: "Hola DocPanda, quiero cotizar contenido para mi marca.",
  fields: [
    {
      id: "contact-name",
      name: "name",
      label: "Nombre",
      type: "text",
      placeholder: "Tu nombre",
      required: true,
    },
    {
      id: "contact-brand",
      name: "brand",
      label: "Marca",
      type: "text",
      placeholder: "Nombre de tu marca",
      required: true,
    },
    {
      id: "contact-email",
      name: "email",
      label: "Mail",
      type: "email",
      placeholder: "tu@email.com",
      required: true,
    },
    {
      id: "contact-message",
      name: "message",
      label: "¿Que necesitas?",
      type: "textarea",
      placeholder: "Contanos qué productos tenés y qué contenido necesitás…",
      required: true,
    },
  ],
  submitLabel: "ENVIAR CONSULTA",
};
