import { useRef } from "react";
import { useCountUp, useInView, useMediaQuery } from "../../hooks";
import { parseNumericValue } from "../../lib/numeric";
import "./CountUp.css";

export interface CountUpProps {
  /** Final text, e.g. "+900". Non-numeric values render as-is. */
  value: string;
  /** Animation length in ms. */
  duration?: number;
  className?: string;
}

/**
 * Counts up to `value` once it enters the viewport. The real text is always
 * rendered (SSR, SEO, a11y, width reservation); the animated number is painted
 * over it through a pseudo-element only while counting.
 */
export const CountUp = ({
  value,
  duration = 1600,
  className = "",
}: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const parsed = parseNumericValue(value);
  const isInView = useInView(ref, { threshold: 0.5 });
  const prefersReducedMotion = useMediaQuery(
    "(prefers-reduced-motion: reduce)",
  );
  const current = useCountUp(parsed?.value ?? 0, {
    duration,
    enabled: parsed !== null && isInView && prefersReducedMotion === false,
  });

  const isCounting = parsed !== null && current !== null;
  const classes = [
    "count-up",
    isCounting ? "count-up--counting" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      ref={ref}
      className={classes}
      data-display={
        isCounting ? `${parsed.prefix}${current}${parsed.suffix}` : undefined
      }
    >
      <span className="count-up__text">{value}</span>
    </span>
  );
};
