import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button, Doodle, Form } from "../../../../components";
import { contactInfo } from "../../../../data";
import pandaImagen from "../../../../../public/Panda/panda_wpp.png";

import "./Contact.css";

const buildWhatsappHref = (number: string, message: string): string => {
  const digits = number.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
};

const handleSubmit = (values: Record<string, string>): void => {
  // Integración con backend pendiente (Fase 4).
  console.log("Contact form submitted", values);
};

export const Contact = () => {
  const { heading } = contactInfo;
  const accentClass = `heading-accent--${heading.accent ?? "primary"}`;
  const [pandaVisible, setPandaVisible] = useState(true);

  const whatsappHref = buildWhatsappHref(
    contactInfo.whatsappNumber,
    contactInfo.whatsappMessage,
  );

  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <header className="contact__header">
          <h2 className="contact__title">
            {heading.titlePart1}{" "}
            <span className={accentClass}>{heading.titlePart2}</span>
          </h2>
          {heading.subtitle && (
            <p className="contact__subtitle">
              {heading.subtitle}
              <Doodle name="heart" className="contact__heart" />
            </p>
          )}
        </header>

        <div className="contact__grid">
          <div className="contact__form-column">
            <Form
              fields={contactInfo.fields}
              submitLabel={contactInfo.submitLabel}
              onSubmit={handleSubmit}
            />
          </div>

          <aside className="contact__whatsapp">
            {pandaVisible && (
              <img
                className="contact__panda"
                src={pandaImagen}
                alt=""
                aria-hidden="true"
                loading="lazy"
                onError={() => setPandaVisible(false)}
              />
            )}
            <div className="contact__whatsapp-panel">
              <span className="contact__whatsapp-icon" aria-hidden="true">
                <MessageCircle />
              </span>
              <h3 className="contact__whatsapp-title">
                {contactInfo.whatsappTitlePart1}{" "}
                <span className={accentClass}>
                  {contactInfo.whatsappTitlePart2}
                </span>
              </h3>
              <p className="contact__whatsapp-text">
                {contactInfo.whatsappText}
              </p>
              <Button
                label={contactInfo.whatsappCtaLabel}
                href={whatsappHref}
                variant="secondary"
                size="lg"
                icon="MessageCircle"
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
