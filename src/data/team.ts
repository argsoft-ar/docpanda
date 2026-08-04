import type { AboutContent } from "./types";

export const aboutContent: AboutContent = {
  heading: {
    titlePart1: "SOMOS",
    titlePart2: "DOC PANDA",
    accent: "primary",
  },
  description:
    "Unimos creatividad, técnica y organización para transformar productos en",
  descriptionAccent: "imágenes que conectan, venden y cuentan su historia",
  members: [
    {
      id: "team-1",
      name: "Macarena",
      role: "Dirección de fotografía",
      photo: "/images/team/member-1.jpg",
    },
    {
      id: "team-2",
      name: "Camila",
      role: "Dirección audiovisual",
      photo: "/images/team/member-2.jpg",
    },
    {
      id: "team-3",
      name: "Florencia",
      role: "Producción y dirección de arte",
      photo: "/images/team/member-3.jpg",
    },
  ],
};
