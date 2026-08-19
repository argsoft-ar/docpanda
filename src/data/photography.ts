import type { PhotographyCategory } from "./types";

export const photographyCategories: PhotographyCategory[] = [
  {
    id: "photo-ecommerce",
    label: "Ecommerce",
    items: [
      {
        id: "photo-ecommerce-1",
        label: "Ecommerce",
        image: "/images/photo/ecommerce.jpg",
        alt: "Fotografía de producto sobre fondo neutro para ecommerce",
      },
    ],
  },
  {
    id: "photo-lifestyle",
    label: "Lifestyle",
    items: [
      {
        id: "photo-lifestyle-1",
        label: "Lifestyle",
        image: "/images/photo/lifestyle.jpg",
        alt: "Producto en contexto real de uso cotidiano",
      },
    ],
  },
  {
    id: "photo-campaigns",
    label: "Campañas",
    items: [
      {
        id: "photo-campaigns-1",
        label: "Campañas",
        image: "/images/photo/campaigns.jpg",
        alt: "Producción creativa de campaña con dirección de arte",
      },
    ],
  },
  {
    id: "photo-social",
    label: "Redes sociales",
    items: [
      {
        id: "photo-social-1",
        label: "Redes sociales",
        image: "/images/photo/social.jpg",
        alt: "Contenido vertical de producto para redes sociales",
      },
    ],
  },
];
