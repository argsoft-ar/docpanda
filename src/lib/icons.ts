import { Mail, MessageCircle, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Named imports only: `icons` from lucide-react pulls the entire icon set into the bundle.
const iconRegistry: Partial<Record<string, LucideIcon>> = {
  Mail,
  MessageCircle,
  Star,
};

export const getIcon = (name: string): LucideIcon | undefined =>
  iconRegistry[name];
