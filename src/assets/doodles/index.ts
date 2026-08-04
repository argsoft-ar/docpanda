/**
 * Registro central de doodles de marca.
 *
 * Los SVG son placeholders dibujados a mano alzada con stroke="currentColor":
 * heredan el color del texto del contenedor. Para reemplazarlos por los
 * definitivos del cliente basta con sobrescribir el archivo .svg manteniendo
 * el mismo nombre (y sin atributos width/height fijos en la raíz del SVG).
 */
import sparkle from "./sparkle.svg?raw";
import arrowCurl from "./arrow-curl.svg?raw";
import speechBubble from "./speech-bubble.svg?raw";
import stars from "./stars.svg?raw";
import paperPlane from "./paper-plane.svg?raw";
import heart from "./heart.svg?raw";

export type DoodleName =
  | "sparkle"
  | "arrow-curl"
  | "speech-bubble"
  | "stars"
  | "paper-plane"
  | "heart";

export const doodleRegistry: Record<DoodleName, string> = {
  sparkle,
  "arrow-curl": arrowCurl,
  "speech-bubble": speechBubble,
  stars,
  "paper-plane": paperPlane,
  heart,
};
