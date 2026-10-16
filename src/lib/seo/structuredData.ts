import { aboutContent, faqItems, siteContent } from "../../data";

type JsonLdValue = string | number | boolean | JsonLdNode | JsonLdValue[];

export interface JsonLdNode {
  [key: string]: JsonLdValue;
}

const SITE_URL = "https://docpandaproducciones.com.ar/";
const BUSINESS_ID = `${SITE_URL}#business`;
const WEBSITE_ID = `${SITE_URL}#website`;
const WEBPAGE_ID = `${SITE_URL}#webpage`;
const FAQ_ID = `${SITE_URL}#faq`;
const LOGO_URL = `${SITE_URL}logo.png`;
const IMAGE_URL = `${SITE_URL}og-image.jpg`;
const DESCRIPTION =
  "Estudio de fotografía y video de producto en Buenos Aires, Argentina. Producimos fotos para ecommerce, campañas, lifestyle y videos para redes sociales que conectan, venden y cuentan la historia de tu marca.";

const offeredServices: { name: string; description: string }[] = [
  {
    name: "Fotografía de producto",
    description:
      "Imágenes que transforman tu producto, cuentan su historia y transmiten valor a tu marca.",
  },
  {
    name: "Fotografía para ecommerce",
    description:
      "Fotos de producto optimizadas para tiendas online, marketplaces y catálogos.",
  },
  {
    name: "Fotografía lifestyle y de campaña",
    description:
      "Producciones fotográficas lifestyle y campañas publicitarias para marcas.",
  },
  {
    name: "Video de producto",
    description:
      "Videos que muestran, emocionan y convierten: publicidad, stop motion y unboxing.",
  },
  {
    name: "Contenido para redes sociales",
    description:
      "Fotos, reels y videos verticales pensados para cada plataforma y objetivo.",
  },
];

const buildBusiness = (): JsonLdNode => ({
  "@type": "ProfessionalService",
  "@id": BUSINESS_ID,
  name: siteContent.logoText,
  alternateName: "DocPanda",
  description: DESCRIPTION,
  url: SITE_URL,
  logo: LOGO_URL,
  image: IMAGE_URL,
  email: "docpandaproducciones@gmail.com",
  telephone: "+5491173691927",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buenos Aires",
    addressRegion: "Ciudad Autónoma de Buenos Aires",
    addressCountry: "AR",
  },
  areaServed: [
    { "@type": "City", name: "Buenos Aires" },
    { "@type": "AdministrativeArea", name: "Gran Buenos Aires" },
    { "@type": "Country", name: "Argentina" },
  ],
  knowsAbout: [
    "Fotografía de producto",
    "Video de producto",
    "Fotografía para ecommerce",
    "Fotografía lifestyle",
    "Fotografía publicitaria",
    "Contenido para redes sociales",
    "Reels",
    "Stop motion",
    "Unboxing",
    "Postproducción y edición",
    "Catálogos de producto",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de foto y video de producto",
    itemListElement: offeredServices.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: { "@id": BUSINESS_ID },
        areaServed: { "@type": "City", name: "Buenos Aires" },
      },
    })),
  },
  founder: aboutContent.members.map((member) => ({
    "@type": "Person",
    name: member.name,
    image: member.photo,
    worksFor: { "@id": BUSINESS_ID },
  })),
  sameAs: siteContent.socials.map((social) => social.href),
});

const buildWebSite = (): JsonLdNode => ({
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: siteContent.logoText,
  alternateName: "DocPanda",
  inLanguage: "es-AR",
  publisher: { "@id": BUSINESS_ID },
});

const buildWebPage = (): JsonLdNode => ({
  "@type": "WebPage",
  "@id": WEBPAGE_ID,
  url: SITE_URL,
  name: "DocPanda — Fotografía y Video de Producto en Buenos Aires",
  description: DESCRIPTION,
  inLanguage: "es-AR",
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": BUSINESS_ID },
  primaryImageOfPage: { "@type": "ImageObject", url: IMAGE_URL },
});

const buildFaqPage = (): JsonLdNode => ({
  "@type": "FAQPage",
  "@id": FAQ_ID,
  inLanguage: "es-AR",
  isPartOf: { "@id": WEBPAGE_ID },
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
});

export const buildStructuredData = (): JsonLdNode => ({
  "@context": "https://schema.org",
  "@graph": [buildBusiness(), buildWebSite(), buildWebPage(), buildFaqPage()],
});

/** Serialized for safe embedding inside a <script type="application/ld+json">. */
export const serializeStructuredData = (): string =>
  JSON.stringify(buildStructuredData()).replace(/</g, "\\u003c");
