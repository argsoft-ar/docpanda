import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { icons } from "lucide-react";
import { Button, Faq } from "../../../../components";
import {
  faqContactBlock,
  faqItems,
  sectionHeadings,
  siteContent,
} from "../../../../data";
import "./FaqSection.css";

const iconMap = icons as Record<string, LucideIcon | undefined>;

export const FaqSection = () => {
  const heading = sectionHeadings.faq;
  const accentClass = `heading-accent--${heading.accent ?? "primary"}`;
  const [pandaVisible, setPandaVisible] = useState(true);

  return (
    <section className="faq-section" id="faq">
      <div className="faq-section__inner">
        <div className="faq-section__top">
          <header className="faq-section__header">
            <h2 className="faq-section__title">
              {heading.titlePart1 && `${heading.titlePart1} `}
              <span className={accentClass}>{heading.titlePart2}</span>
            </h2>
            {heading.subtitle && (
              <p className="faq-section__subtitle">{heading.subtitle}</p>
            )}
          </header>
          {pandaVisible && (
            <img
              className="faq-section__panda"
              src={siteContent.pandaImage}
              alt=""
              aria-hidden="true"
              loading="lazy"
              onError={() => setPandaVisible(false)}
            />
          )}
        </div>

        <div className="faq-section__panel">
          <Faq items={faqItems} />

          <div className="faq-section__contact">
            <div className="faq-section__contact-cta">
              <h3 className="faq-section__contact-title">
                {faqContactBlock.title}
              </h3>
              <p className="faq-section__contact-text">
                {faqContactBlock.text}
              </p>
              <Button
                label={faqContactBlock.ctaLabel}
                href={faqContactBlock.ctaHref}
                variant="primary"
              />
            </div>

            <ul className="faq-section__channels">
              {faqContactBlock.channels.map((channel) => {
                const IconComponent = iconMap[channel.icon];
                return (
                  <li className="faq-section__channel" key={channel.id}>
                    <a
                      className="faq-section__channel-link"
                      href={channel.href}
                    >
                      {IconComponent && (
                        <IconComponent
                          className="faq-section__channel-icon"
                          aria-hidden="true"
                        />
                      )}
                      <span>{channel.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
