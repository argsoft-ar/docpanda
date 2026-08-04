import type { Brand, ServiceItem, Stat } from "./types";

export const services: ServiceItem[] = [
  { id: "service-photo", label: "Foto" },
  { id: "service-video", label: "Video" },
  { id: "service-editing", label: "Edición" },
  { id: "service-catalogs", label: "Catálogos" },
  { id: "service-ecommerce", label: "Ecommerce" },
  { id: "service-social", label: "Redes sociales" },
];

export const brands: Brand[] = [
  { id: "brand-mooving", name: "Mooving", logo: "/images/brands/mooving.svg" },
  {
    id: "brand-ibicraft",
    name: "Ibicraft",
    logo: "/images/brands/ibicraft.svg",
  },
  {
    id: "brand-vertice",
    name: "Editorial Vértice",
    logo: "/images/brands/editorial-vertice.svg",
  },
  {
    id: "brand-tupperware",
    name: "Tupperware",
    logo: "/images/brands/tupperware.svg",
  },
  { id: "brand-genka", name: "Genka", logo: "/images/brands/genka.svg" },
  { id: "brand-biglife", name: "BigLife", logo: "/images/brands/biglife.svg" },
  { id: "brand-metrica", name: "Métrica", logo: "/images/brands/metrica.svg" },
  { id: "brand-furlong", name: "Furlong", logo: "/images/brands/furlong.svg" },
  {
    id: "brand-limon-deco",
    name: "Limón Deco",
    logo: "/images/brands/limon-deco.svg",
  },
  {
    id: "brand-paper-design",
    name: "Paper Design",
    logo: "/images/brands/paper-design.svg",
  },
  {
    id: "brand-viajar-collection",
    name: "Viajar Collection",
    logo: "/images/brands/viajar-collection.svg",
  },
  { id: "brand-chuna", name: "Chuna", logo: "/images/brands/chuna.svg" },
];

export const stats: Stat[] = [
  { id: "stat-products", value: "+900", label: "productos fotografiados" },
  { id: "stat-brands", value: "+80", label: "marcas" },
  { id: "stat-years", value: "10", label: "Años de experiencia" },
  { id: "stat-content", value: "Miles", label: "de contenidos entregados" },
];
