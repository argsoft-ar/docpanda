import { useEffect, useState, useSyncExternalStore } from "react";
import type { RefObject } from "react";

const noopSubscribe = () => () => {};
const getHasObserver = () => typeof IntersectionObserver !== "undefined";
// Server assumes support so SSR markup matches the first client render.
const getServerHasObserver = () => true;

export interface UseInViewOptions {
  /** Fraction of the target visible before it's considered "in view". */
  threshold?: number;
  rootMargin?: string;
  /** Stop observing after the first reveal (default true). */
  triggerOnce?: boolean;
}

/**
 * Tracks whether the element attached to `ref` has entered the viewport.
 * Falls back to `true` in environments without IntersectionObserver support.
 */
export const useInView = <T extends Element>(
  ref: RefObject<T | null>,
  options: UseInViewOptions = {},
): boolean => {
  const { threshold = 0.15, rootMargin = "0px", triggerOnce = true } = options;
  const [isInView, setIsInView] = useState(false);
  const hasObserver = useSyncExternalStore(
    noopSubscribe,
    getHasObserver,
    getServerHasObserver,
  );

  useEffect(() => {
    if (!hasObserver) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) observer.unobserve(node);
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, threshold, rootMargin, triggerOnce, hasObserver]);

  return isInView || !hasObserver;
};
