import { MessageCircle } from "lucide-react";
import type { WhatsappFabProps } from "./WhatsappFab.types";
import { useGTM } from "../../hooks";
import "./WhatsappFab.css";

export const WhatsappFab = ({
  phoneNumber,
  message,
  tooltip = "Escribinos por WhatsApp",
  onClick,
}: WhatsappFabProps) => {
  const { trackWhatsAppClick } = useGTM();
  const digits = phoneNumber.replace(/\D/g, "");
  const href = `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    trackWhatsAppClick({
      location: "floating_button",
      phoneNumber,
    });
    onClick?.();
  };

  return (
    <a
      className="whatsapp-fab"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={tooltip}
      onClick={handleClick}
    >
      <MessageCircle className="whatsapp-fab__icon" size={24} />
      <span className="whatsapp-fab__tooltip">{tooltip}</span>
    </a>
  );
};

