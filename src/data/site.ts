import type { SiteContent } from "./types";

export const siteContent: SiteContent = {
  logoText: "DocPanda",
  navCtaLabel: "¡Hablemos!",
  navCtaHref: "#contact",
  pandaImage: "/Panda/panda-mask.png",
  footerDescription:
    "Estudio de fotografía y video de producto. Contenido visual que vende.",
  socials: [
    {
      icon: "Instagram",
      href: "https://www.instagram.com/docpanda",
      label: "Instagram",
    },
    {
      icon: "Youtube",
      href: "https://www.youtube.com/@docpanda",
      label: "YouTube",
    },
    {
      icon: "Linkedin",
      href: "https://www.linkedin.com/company/docpanda",
      label: "LinkedIn",
    },
  ],
  copyright: `© ${new Date().getFullYear()} DocPanda. Todos los derechos reservados.`,
};
