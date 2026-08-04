import type { VideoCategory } from "./types";

export const videoCategories: VideoCategory[] = [
  {
    id: "reels",
    label: "Reels y redes",
    items: [
      {
        id: "reels-1",
        video: "/videos/reels-1.mp4",
        thumbnail: "/images/video/reels-1.jpg",
        title: "Reel de lanzamiento",
      },
      {
        id: "reels-2",
        video: "/videos/reels-2.mp4",
        thumbnail: "/images/video/reels-2.jpg",
        title: "Transiciones creativas",
      },
      {
        id: "reels-3",
        video: "/videos/reels-3.mp4",
        thumbnail: "/images/video/reels-3.jpg",
        title: "Antes y después",
      },
    ],
  },
  {
    id: "advertising",
    label: "Publicidad",
    items: [
      {
        id: "advertising-1",
        video: "/videos/advertising-1.mp4",
        thumbnail: "/images/video/advertising-1.jpg",
        title: "Spot de marca",
      },
      {
        id: "advertising-2",
        video: "/videos/advertising-2.mp4",
        thumbnail: "/images/video/advertising-2.jpg",
        title: "Anuncio para Meta Ads",
      },
      {
        id: "advertising-3",
        video: "/videos/advertising-3.mp4",
        thumbnail: "/images/video/advertising-3.jpg",
        title: "Video para YouTube Ads",
      },
    ],
  },
  {
    id: "stopmotion",
    label: "Stop motion",
    items: [
      {
        id: "stopmotion-1",
        video: "/videos/stopmotion-1.mp4",
        thumbnail: "/images/video/stopmotion-1.jpg",
        title: "Producto animado",
      },
      {
        id: "stopmotion-2",
        video: "/videos/stopmotion-2.mp4",
        thumbnail: "/images/video/stopmotion-2.jpg",
        title: "Armado mágico",
      },
      {
        id: "stopmotion-3",
        video: "/videos/stopmotion-3.mp4",
        thumbnail: "/images/video/stopmotion-3.jpg",
        title: "Loop para redes",
      },
    ],
  },
  {
    id: "unboxing",
    label: "Unboxing",
    items: [
      {
        id: "unboxing-1",
        video: "/videos/unboxing-1.mp4",
        thumbnail: "/images/video/unboxing-1.jpg",
        title: "Unboxing premium",
      },
      {
        id: "unboxing-2",
        video: "/videos/unboxing-2.mp4",
        thumbnail: "/images/video/unboxing-2.jpg",
        title: "Detalle de packaging",
      },
      {
        id: "unboxing-3",
        video: "/videos/unboxing-3.mp4",
        thumbnail: "/images/video/unboxing-3.jpg",
        title: "Primera impresión",
      },
    ],
  },
  {
    id: "ecommerce",
    label: "Ecommerce",
    items: [
      {
        id: "ecommerce-ads-1",
        video: "/videos/ecommerce-ads-1.mp4",
        thumbnail: "/images/video/ecommerce-ads-1.jpg",
        title: "Video de ficha de producto",
      },
      {
        id: "ecommerce-ads-2",
        video: "/videos/ecommerce-ads-2.mp4",
        thumbnail: "/images/video/ecommerce-ads-2.jpg",
        title: "Giro 360°",
      },
      {
        id: "ecommerce-ads-3",
        video: "/videos/ecommerce-ads-3.mp4",
        thumbnail: "/images/video/ecommerce-ads-3.jpg",
        title: "Demo de uso",
      },
    ],
  },
];
