import type {
  GTMEventPayload,
  GenerateLeadPayload,
  WhatsAppClickPayload,
  NavigationClickPayload,
  ViewCategoryPayload,
  ViewMediaPayload,
} from "./types";

/**
 * Pushes a generic or custom payload to the dataLayer if running in browser.
 */
export const pushToDataLayer = (payload: GTMEventPayload | Record<string, unknown>): void => {
  if (typeof window === "undefined") return;

  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);
  } catch (error) {
    if (import.meta.env.DEV) {
      console.warn("[GTM] Error pushing to dataLayer:", error);
    }
  }
};

/**
 * Tracks a form submission event (lead generation).
 */
export const trackLead = ({
  formName,
  status,
  service,
}: {
  formName: string;
  status: "success" | "error";
  service?: string;
}): void => {
  const payload: GenerateLeadPayload = {
    event: "generate_lead",
    form_name: formName,
    status,
    service,
  };
  pushToDataLayer(payload);
};

/**
 * Tracks user clicks on WhatsApp call-to-actions.
 */
export const trackWhatsAppClick = ({
  location,
  phoneNumber,
}: {
  location: "floating_button" | "contact_section";
  phoneNumber?: string;
}): void => {
  const payload: WhatsAppClickPayload = {
    event: "whatsapp_click",
    location,
    phoneNumber,
  };
  pushToDataLayer(payload);
};

/**
 * Tracks navigation and CTA header clicks.
 */
export const trackNavigationClick = ({
  label,
  href,
}: {
  label: string;
  href: string;
}): void => {
  const payload: NavigationClickPayload = {
    event: "navigation_click",
    label,
    href,
  };
  pushToDataLayer(payload);
};

/**
 * Tracks category selection in photography and video showcases.
 */
export const trackCategoryView = ({
  section,
  categoryId,
  categoryLabel,
}: {
  section: "photography" | "video";
  categoryId: string;
  categoryLabel?: string;
}): void => {
  const payload: ViewCategoryPayload = {
    event: "view_category",
    section,
    categoryId,
    categoryLabel,
  };
  pushToDataLayer(payload);
};

/**
 * Tracks when a user opens an image or video modal/lightbox.
 */
export const trackMediaView = ({
  mediaType,
  title,
  mediaId,
}: {
  mediaType: "image" | "video";
  title?: string;
  mediaId?: string;
}): void => {
  const payload: ViewMediaPayload = {
    event: "view_media",
    mediaType,
    title,
    mediaId,
  };
  pushToDataLayer(payload);
};
