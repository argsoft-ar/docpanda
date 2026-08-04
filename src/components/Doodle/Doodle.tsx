import { doodleRegistry } from "../../assets/doodles";
import type { DoodleName } from "../../assets/doodles";
import "./Doodle.css";

export interface DoodleProps {
  name: DoodleName;
  className?: string;
}

/**
 * Doodle decorativo de marca. El SVG se inyecta inline (archivos propios
 * estáticos, no contenido de usuario) para que herede el color vía
 * currentColor. Siempre decorativo: aria-hidden.
 */
export const Doodle = ({ name, className = "" }: DoodleProps) => {
  return (
    <span
      className={`doodle ${className}`.trim()}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: doodleRegistry[name] }}
    />
  );
};
