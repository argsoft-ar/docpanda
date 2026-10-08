import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import type { NavLink } from "../../data";
import { useGTM } from "../../hooks";
import logoImage from "../../../public/Logos panda/logo_white.png";
import "./Navbar.css";

export interface NavbarProps {
  logoText: string;
  links: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
}

export const Navbar = ({ logoText, links, ctaLabel, ctaHref }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { trackNavigationClick } = useGTM();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const handleLinkClick = (link: NavLink) => {
    trackNavigationClick({
      label: link.label,
      href: link.href,
    });
    closeMenu();
  };

  const handleCtaClick = () => {
    if (ctaLabel && ctaHref) {
      trackNavigationClick({
        label: ctaLabel,
        href: ctaHref,
      });
    }
    closeMenu();
  };

  return (
    <header className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`.trim()}>
      <div className="navbar__inner">
        <a className="navbar__logo" href="#" onClick={closeMenu}>
          {logoImage && (
            <img
              className="navbar__logo-image"
              src={logoImage}
              alt={logoText}
            />
          )}
        </a>

        <button
          className="navbar__toggle"
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? (
            <X className="navbar__toggle-icon" aria-hidden="true" />
          ) : (
            <Menu className="navbar__toggle-icon" aria-hidden="true" />
          )}
        </button>

        <nav
          className={`navbar__nav ${isMenuOpen ? "navbar__nav--open" : ""}`.trim()}
          aria-label="Navegación principal"
        >
          <ul className="navbar__list">
            {links.map((link) => (
              <li className="navbar__item" key={link.id}>
                <a
                  className="navbar__link"
                  href={link.href}
                  onClick={() => handleLinkClick(link)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {ctaLabel && ctaHref && (
            <a className="navbar__cta" href={ctaHref} onClick={handleCtaClick}>
              {ctaLabel}
            </a>
          )}
        </nav>
      </div>
    </header>
  );
};

