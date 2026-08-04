import type { LucideIcon } from "lucide-react";
import { icons } from "lucide-react";
import type { LucideIconName, NavLink } from "../../data";
import "./Footer.css";

export interface FooterSocial {
  icon: LucideIconName;
  href: string;
  label: string;
}

export interface FooterProps {
  logoText: string;
  description?: string;
  links: NavLink[];
  socials?: FooterSocial[];
  copyright: string;
}

const iconMap = icons as Record<string, LucideIcon | undefined>;

export const Footer = ({
  logoText,
  description,
  links,
  socials,
  copyright,
}: FooterProps) => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">{logoText}</span>
          {description && <p className="footer__description">{description}</p>}
        </div>

        <nav className="footer__nav" aria-label="Enlaces del pie de página">
          <ul className="footer__list">
            {links.map((link) => (
              <li key={link.id}>
                <a className="footer__link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {socials && socials.length > 0 && (
          <ul className="footer__socials">
            {socials.map((social) => {
              const IconComponent = iconMap[social.icon];
              return (
                <li key={social.label}>
                  <a
                    className="footer__social-link"
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {IconComponent && (
                      <IconComponent
                        className="footer__social-icon"
                        aria-hidden="true"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">{copyright}</p>
      </div>
    </footer>
  );
};
