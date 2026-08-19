import { MessageCircle } from "lucide-react";
import type { WhatsappFabProps } from "./WhatsappFab.types";
import "./WhatsappFab.css";

export const WhatsappFab = ({
  phoneNumber,
  message,
  tooltip = "Escribinos por WhatsApp",
}: WhatsappFabProps) => {
  const digits = phoneNumber.replace(/\D/g, "");
  const href = `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;

  return (
    <a
      className="whatsapp-fab"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={tooltip}
    >
      <MessageCircle className="whatsapp-fab__icon" size={24} />
      <span className="whatsapp-fab__tooltip">{tooltip}</span>
    </a>
  );
};
