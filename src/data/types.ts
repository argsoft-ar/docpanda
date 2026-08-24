/**
 * Modelos de datos de DocPanda.
 * Esta capa está diseñada para ser reemplazada por una API
 * sin modificar los componentes que la consumen.
 */

/** Nombre de ícono de lucide-react (ej. "Camera", "ClipboardList"). */
export type LucideIconName = string;

export interface NavLink {
  id: string;
  label: string;
  /** Anchor de la sección destino, ej. "#hero". */
  href: string;
}

export interface HeroContent {
  title: string;
  /** Primera parte del subtítulo, en peso normal. */
  subtitle: string;
  /** Parte final del subtítulo, en bold. */
  subtitleBold: string;
  videoMobile: string;
  videoDesktop: string;
}

export interface ProcessStep {
  id: string;
  description: string;
}

export interface PhotographyItem {
  id: string;
  label: string;
  image: string;
  alt: string;
}

export interface PhotographyCategory {
  id: string;
  label: string;
  items: PhotographyItem[];
}

export interface VideoItem {
  id: string;
  cloudinaryId: string;
  video?: string;
  thumbnail?: string;
  title: string;
}

export interface VideoCategory {
  id: string;
  label: string;
  items: VideoItem[];
}

export interface ServiceItem {
  id: string;
  label: string;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
}

export interface Review {
  id: string;
  author: string;
  company: string;
  text: string;
  /** Valoración de 1 a 5. */
  rating: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  /** Ruta pública de la foto, ej. "/images/team/member-1.jpg". */
  photo: string;
}

export interface AboutContent {
  heading: SectionHeading;
  /** Primera parte de la descripción, en color de texto normal. */
  description: string;
  /** Parte final de la descripción, en violeta bold. */
  descriptionAccent: string;
  members: TeamMember[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactChannel {
  id: string;
  icon: LucideIconName;
  label: string;
  href: string;
}

export interface FaqContactBlock {
  title: string;
  text: string;
  ctaLabel: string;
  ctaHref: string;
  channels: ContactChannel[];
}

export type ContactFieldType = "text" | "email" | "tel" | "textarea";

export interface ContactFormField {
  id: string;
  name: string;
  label: string;
  type: ContactFieldType;
  placeholder: string;
  required: boolean;
}

export interface ContactInfo {
  heading: SectionHeading;
  whatsappTitlePart1: string;
  /** Parte del título de WhatsApp en violeta. */
  whatsappTitlePart2: string;
  whatsappText: string;
  whatsappCtaLabel: string;
  whatsappNumber: string;
  whatsappMessage: string;
  fields: ContactFormField[];
  submitLabel: string;
}

/** Heading bicolor: parte 1 en color de texto, parte 2 en color de acento. */
export interface SectionHeading {
  titlePart1: string;
  titlePart2: string;
  accent?: "primary" | "secondary";
  subtitle?: string;
}

export interface SectionHeadings {
  process: SectionHeading;
  photography: SectionHeading;
  video: SectionHeading;
  brands: SectionHeading;
  faq: SectionHeading;
}

export interface SocialLink {
  icon: LucideIconName;
  href: string;
  label: string;
}

export interface SiteContent {
  logoText: string;
  navCtaLabel: string;
  navCtaHref: string;
  /** Ruta pública del personaje panda, ej. "/images/brand/panda-mask.png". */
  pandaImage: string;
  footerDescription: string;
  socials: SocialLink[];
  copyright: string;
}
