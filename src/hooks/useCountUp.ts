import { useEffect, useState } from "react";
import { easeOutCubic } from "../lib/numeric";

export interface UseCountUpOptions {
  /** Animation length in ms. */
  duration?: number;
  /** Starts the animation when it becomes true. */
  enabled: boolean;
}

/**
 * Animates from 0 to `target` with requestAnimationFrame.
 * Returns the in-progress value, or `null` when idle/finished (render the final value).
 */
export const useCountUp = (
  target: number,
  { duration = 1600, enabled }: UseCountUpOptions,
): number | null => {
  const [current, setCurrent] = useState<number | null>(null);

  useEffect(() => {
    if (!enabled) return;

    let frameId = 0;
    let startTime: number | null = null;

    const tick = (now: number) => {
      startTime ??= now;
      const progress = Math.min((now - startTime) / duration, 1);

      if (progress < 1) {
        setCurrent(Math.round(target * easeOutCubic(progress)));
        frameId = requestAnimationFrame(tick);
      } else {
        setCurrent(null);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [enabled, target, duration]);

  return enabled ? current : null;
};
