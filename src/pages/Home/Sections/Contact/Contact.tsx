import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MessageCircle } from "lucide-react";
import { Button, Doodle, Form } from "../../../../components";
import type { FormStatus } from "../../../../components";
import { contactInfo } from "../../../../data";
import { useInView } from "../../../../hooks/useInView";
import pandaImagen from "../../../../../public/Panda/panda_wpp.png";

import "./Contact.css";

const buildWhatsappHref = (number: string, message: string): string => {
  const digits = number.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
};

export const Contact = () => {
  const { heading } = contactInfo;
  const accentClass = `heading-accent--${heading.accent ?? "primary"}`;
  const [pandaVisible, setPandaVisible] = useState(true);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef);

  const whatsappHref = buildWhatsappHref(
    contactInfo.whatsappNumber,
    contactInfo.whatsappMessage,
  );

  const handleSubmit = async (
    values: Record<string, string>,
  ): Promise<void> => {
    setStatus("loading");
    setStatusMessage("");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        values,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setStatus("success");
      setStatusMessage(
        "¡Consulta enviada con éxito! Te responderemos a la brevedad.",
      );

      setTimeout(() => {
        setStatus("idle");
        setStatusMessage("");
      }, 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setStatusMessage(
        "Hubo un error al enviar tu consulta. Por favor, intentá de nuevo.",
      );

      setTimeout(() => {
        setStatus("idle");
        setStatusMessage("");
      }, 5000);
    }
  };

  return (
    <section
      className={`contact reveal${isInView ? " reveal--visible" : ""}`}
      id="contact"
      ref={sectionRef}
    >
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
              status={status}
              statusMessage={statusMessage}
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
