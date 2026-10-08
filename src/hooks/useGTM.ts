import { useCallback } from "react";
import {
  trackLead,
  trackWhatsAppClick,
  trackNavigationClick,
  trackCategoryView,
  trackMediaView,
  pushToDataLayer,
} from "../lib/gtm";

/**
 * Custom hook to interact with Google Tag Manager dataLayer cleanly in components.
 */
export const useGTM = () => {
  const onLeadSubmitted = useCallback(
    (params: Parameters<typeof trackLead>[0]) => {
      trackLead(params);
    },
    [],
  );

  const onWhatsAppClick = useCallback(
    (params: Parameters<typeof trackWhatsAppClick>[0]) => {
      trackWhatsAppClick(params);
    },
    [],
  );

  const onNavigationClick = useCallback(
    (params: Parameters<typeof trackNavigationClick>[0]) => {
      trackNavigationClick(params);
    },
    [],
  );

  const onCategoryView = useCallback(
    (params: Parameters<typeof trackCategoryView>[0]) => {
      trackCategoryView(params);
    },
    [],
  );

  const onMediaView = useCallback(
    (params: Parameters<typeof trackMediaView>[0]) => {
      trackMediaView(params);
    },
    [],
  );

  return {
    trackLead: onLeadSubmitted,
    trackWhatsAppClick: onWhatsAppClick,
    trackNavigationClick: onNavigationClick,
    trackCategoryView: onCategoryView,
    trackMediaView: onMediaView,
    pushToDataLayer,
  };
};
