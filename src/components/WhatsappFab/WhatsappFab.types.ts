export interface WhatsappFabProps {
  /** WhatsApp phone number (e.g. "+5491100000000") */
  phoneNumber: string;
  /** Pre-filled message sent via wa.me link */
  message: string;
  /** Tooltip text shown on hover */
  tooltip?: string;
}
