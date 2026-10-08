export type GTMEventName =
  | "generate_lead"
  | "whatsapp_click"
  | "navigation_click"
  | "view_category"
  | "view_media";

export interface GenerateLeadPayload {
  event: "generate_lead";
  form_name: string;
  status: "success" | "error";
  service?: string;
  [key: string]: unknown;
}

export interface WhatsAppClickPayload {
  event: "whatsapp_click";
  location: "floating_button" | "contact_section";
  phoneNumber?: string;
  [key: string]: unknown;
}

export interface NavigationClickPayload {
  event: "navigation_click";
  label: string;
  href: string;
  [key: string]: unknown;
}

export interface ViewCategoryPayload {
  event: "view_category";
  section: "photography" | "video";
  categoryId: string;
  categoryLabel?: string;
  [key: string]: unknown;
}

export interface ViewMediaPayload {
  event: "view_media";
  mediaType: "image" | "video";
  title?: string;
  mediaId?: string;
  [key: string]: unknown;
}

export type GTMEventPayload =
  | GenerateLeadPayload
  | WhatsAppClickPayload
  | NavigationClickPayload
  | ViewCategoryPayload
  | ViewMediaPayload;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}
