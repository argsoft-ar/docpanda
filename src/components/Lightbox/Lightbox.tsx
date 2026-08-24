import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import "./Lightbox.css";

export interface LightboxProps {
  items: { image: string; alt: string }[];
  initialIndex: number;
  onClose: () => void;
}

export const Lightbox = ({ items, initialIndex, onClose }: LightboxProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + items.length) % items.length);
  }, [items.length]);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose, prev, next]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const current = items[currentIndex];
  if (!current) return null;

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Visor de imágenes"
      onClick={onClose}
    >
      <button
        className="lightbox__close"
        type="button"
        onClick={onClose}
        aria-label="Cerrar"
      >
        <X aria-hidden="true" />
      </button>

      {items.length > 1 && (
        <button
          className="lightbox__arrow lightbox__arrow--prev"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          aria-label="Imagen anterior"
        >
          <ChevronLeft aria-hidden="true" />
        </button>
      )}

      <img
        className="lightbox__image"
        src={current.image}
        alt={current.alt}
        onClick={(e) => e.stopPropagation()}
      />

      {items.length > 1 && (
        <button
          className="lightbox__arrow lightbox__arrow--next"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          aria-label="Siguiente imagen"
        >
          <ChevronRight aria-hidden="true" />
        </button>
      )}

      {items.length > 1 && (
        <p className="lightbox__counter" aria-live="polite">
          {currentIndex + 1} / {items.length}
        </p>
      )}
    </div>
  );
};
