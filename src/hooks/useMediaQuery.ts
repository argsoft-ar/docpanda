import { useCallback, useSyncExternalStore } from "react";

/** Returns `null` on the server and during hydration so the first client render matches the prerendered HTML. */
export const useMediaQuery = (query: string): boolean | null => {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    [query],
  );

  return useSyncExternalStore<boolean | null>(
    subscribe,
    () => window.matchMedia(query).matches,
    () => null,
  );
};
