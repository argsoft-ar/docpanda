import type { SiteContent } from "./types";

export const siteContent: SiteContent = {
  logoText: "Doc Panda Producciones",
  navCtaLabel: "¡Hablemos!",
  navCtaHref: "#contact",
  pandaImage: "/Panda/panda-mask.png",
  footerDescription:
    "Estudio de fotografía y video. Contenido visual que vende.",
  socials: [
    {
      icon: "Instagram",
      href: "https://www.instagram.com/docpandaproducciones/?hl=es",
      label: "Instagram",
    },
    {
      icon: "Youtube",
      href: "https://www.youtube.com/@docpandaproducciones",
      label: "YouTube",
    },
    {
      icon: "Linkedin",
      href: "https://www.linkedin.com/company/doc-panda-producciones",
      label: "LinkedIn",
    },
  ],
  copyright: `© ${new Date().getFullYear()} Doc Panda Producciones. Todos los derechos reservados.`,
};
