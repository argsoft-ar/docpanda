import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  getCloudinaryVideoUrl,
  getCloudinaryPosterUrl,
} from "../../lib/cloudinary";
import type { VideoItem } from "../../data/types";
import "./VideoLightbox.css";

export interface VideoLightboxProps {
  items: VideoItem[];
  initialIndex: number;
  onClose: () => void;
}

export const VideoLightbox = ({
  items,
  initialIndex,
  onClose,
}: VideoLightboxProps) => {
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
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  const current = items[currentIndex];
  if (!current) return null;

  const videoSrc = getCloudinaryVideoUrl(current.cloudinaryId);
  const posterSrc = getCloudinaryPosterUrl(current.cloudinaryId);

  return (
    <div
      className="video-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Reproductor de video"
      onClick={onClose}
    >
      <button
        className="video-lightbox__close"
        type="button"
        onClick={onClose}
        aria-label="Cerrar"
      >
        <X aria-hidden="true" />
      </button>

      {items.length > 1 && (
        <button
          className="video-lightbox__arrow video-lightbox__arrow--prev"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          aria-label="Video anterior"
        >
          <ChevronLeft aria-hidden="true" />
        </button>
      )}

      <video
        key={currentIndex}
        className="video-lightbox__video"
        src={videoSrc}
        poster={posterSrc}
        controls
        autoPlay
        playsInline
        onClick={(e) => e.stopPropagation()}
      />

      {items.length > 1 && (
        <button
          className="video-lightbox__arrow video-lightbox__arrow--next"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          aria-label="Siguiente video"
        >
          <ChevronRight aria-hidden="true" />
        </button>
      )}

      {items.length > 1 && (
        <p className="video-lightbox__counter" aria-live="polite">
          {currentIndex + 1} / {items.length}
        </p>
      )}
    </div>
  );
};
