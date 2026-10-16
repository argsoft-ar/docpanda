import type { LucideIconName } from "../../data";
import { Icon } from "../Icon";
import "./Button.css";

export interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: LucideIconName;
  iconPosition?: "left" | "right";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  disabled?: boolean;
}

export const Button = ({
  label,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  href,
  onClick,
  type = "button",
  fullWidth = false,
  disabled = false,
}: ButtonProps) => {
  const className = [
    "button",
    `button--${variant}`,
    `button--${size}`,
    fullWidth ? "button--full-width" : "",
    disabled ? "button--disabled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <Icon name={icon} className="button__icon" aria-hidden="true" />
      )}
      <span className="button__label">{label}</span>
      {icon && iconPosition === "right" && (
        <Icon name={icon} className="button__icon" aria-hidden="true" />
      )}
    </>
  );

  if (href) {
    return (
      <a
        className={className}
        href={href}
        onClick={onClick}
        aria-disabled={disabled || undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};
