import { useRef, useState } from "react";
import { Button, Faq, Icon } from "../../../../components";
import { faqContactBlock, faqItems, sectionHeadings } from "../../../../data";
import { useInView } from "../../../../hooks/useInView";
import PANDA_IMAGE from "../../../../assets/images/panda_faq.webp";
import "./FaqSection.css";

export const FaqSection = () => {
  const heading = sectionHeadings.faq;
  const accentClass = `heading-accent--${heading.accent ?? "primary"}`;
  const [pandaVisible, setPandaVisible] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef);

  return (
    <section
      className={`faq-section reveal${isInView ? " reveal--visible" : ""}`}
      id="faq"
      ref={sectionRef}
    >
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
              src={PANDA_IMAGE}
              width={720}
              height={410}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
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
              {faqContactBlock.channels.map((channel) => (
                <li className="faq-section__channel" key={channel.id}>
                  <a className="faq-section__channel-link" href={channel.href}>
                    <Icon
                      name={channel.icon}
                      className="faq-section__channel-icon"
                      aria-hidden="true"
                    />
                    <span>{channel.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
