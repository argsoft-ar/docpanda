import { useState } from "react";
import { Plus } from "lucide-react";
import type { FaqItem } from "../../data";
import "./Faq.css";

export interface FaqProps {
  items: FaqItem[];
  allowMultiple?: boolean;
}

export const Faq = ({ items, allowMultiple = false }: FaqProps) => {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const isOpen = prev.includes(id);
      if (isOpen) {
        return prev.filter((openId) => openId !== id);
      }
      return allowMultiple ? [...prev, id] : [id];
    });
  };

  return (
    <div className="faq">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        const headerId = `faq-header-${item.id}`;
        const panelId = `faq-panel-${item.id}`;

        return (
          <div
            className={`faq__item ${isOpen ? "faq__item--open" : ""}`.trim()}
            key={item.id}
          >
            <h3 className="faq__heading">
              <button
                className="faq__trigger"
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
              >
                <span className="faq__question">{item.question}</span>
                <Plus className="faq__icon" aria-hidden="true" />
              </button>
            </h3>

            <div
              className="faq__panel"
              id={panelId}
              role="region"
              aria-labelledby={headerId}
            >
              <div className="faq__panel-inner">
                <p className="faq__answer">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
