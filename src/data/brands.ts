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
  { id: "brand-metrica", name: "Métrica", logo: "/images/brands/metrica.svg" },
  { id: "brand-furlong", name: "Furlong", logo: "/images/brands/furlong.svg" },
  {
    id: "brand-limon-deco",
    name: "Limón Deco",
    logo: "/images/brands/limon-deco.svg",
  },
  {
    id: "brand-Anker",
    name: "Anker",
    logo: "/images/brands/anker.svg",
  },
  {
    id: "brand-microbottles",
    name: "Microbottles",
    logo: "/images/brands/microbottles.svg",
  },
  {
    id: "brand-multipaper",
    name: "Multipaper",
    logo: "/images/brands/multipaper.svg",
  },
  {
    id: "brand-eurostil",
    name: "Eurostil",
    logo: "/images/brands/eurostil.svg",
  },
  {
    id: "brand-drechsler",
    name: "Drechsler",
    logo: "/images/brands/drechsler.svg",
  },
];

export const stats: Stat[] = [
  { id: "stat-products", value: "+900", label: "productos fotografiados" },
  { id: "stat-brands", value: "+80", label: "marcas" },
  { id: "stat-years", value: "+10", label: "años de experiencia" },
  { id: "stat-content", value: "Miles", label: "de contenidos entregados" },
];
