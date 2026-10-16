import { createElement } from "react";
import type { LucideProps } from "lucide-react";
import type { LucideIconName } from "../../data";
import { getIcon } from "../../lib/icons";

export interface IconProps extends LucideProps {
  name: LucideIconName;
}

export const Icon = ({ name, ...props }: IconProps) => {
  const IconComponent = getIcon(name);
  return IconComponent ? createElement(IconComponent, props) : null;
};
