import { useRef } from "react";
import type { ReactNode } from "react";
import { useInView } from "../../hooks";
import "./DrawnUnderline.css";

export interface DrawnUnderlineProps {
  children: ReactNode;
  color?: "text" | "primary" | "secondary";
  className?: string;
}

/** Brush underline that draws itself left→right when it enters the viewport. */
export const DrawnUnderline = ({
  children,
  color = "text",
  className = "",
}: DrawnUnderlineProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { threshold: 0.6 });

  const classes = [
    "drawn-underline",
    `drawn-underline--${color}`,
    isInView ? "drawn-underline--drawn" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span ref={ref} className={classes}>
      {children}
      <span className="drawn-underline__stroke" aria-hidden="true" />
    </span>
  );
};
