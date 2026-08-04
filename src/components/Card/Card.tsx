import { useState } from "react";
import { Play } from "lucide-react";
import "./Card.css";

export interface CardProps {
  image?: string;
  imageAlt?: string;
  videoUrl?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  badge?: string;
  /** Color del brush del badge de nombre (variant profile). */
  badgeColor?: "primary" | "secondary";
  variant?: "media" | "profile" | "stat";
  /** Relación de aspecto del media. Por defecto: landscape (imagen) / video 16:9. */
  aspect?: "landscape" | "portrait" | "square";
}

export const Card = ({
  image,
  imageAlt = "",
  videoUrl,
  title,
  subtitle,
  description,
  badge,
  badgeColor = "primary",
  variant = "media",
  aspect,
}: CardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  const showProfileFallback = variant === "profile" && (!image || imageFailed);
  const hasMedia = Boolean(videoUrl || image || showProfileFallback);
  const initial = title?.trim().charAt(0).toUpperCase() ?? "";

  const mediaClassName = ["card__media", aspect ? `card__media--${aspect}` : ""]
    .filter(Boolean)
    .join(" ");

  const profileBadgeClassName = [
    "card__title",
    "card__title--badge",
    badgeColor === "secondary" ? "brush-green" : "brush-purple",
  ].join(" ");

  return (
    <article className={`card card--${variant}`}>
      {hasMedia && (
        <div className={mediaClassName}>
          {videoUrl ? (
            isPlaying || !image ? (
              <video
                className="card__video"
                src={videoUrl}
                poster={image}
                controls
                autoPlay={isPlaying}
                playsInline
              />
            ) : (
              <button
                className="card__play-button"
                type="button"
                onClick={() => setIsPlaying(true)}
                aria-label={title ? `Reproducir ${title}` : "Reproducir video"}
              >
                <img className="card__image" src={image} alt={imageAlt} />
                <span className="card__play-overlay" aria-hidden="true">
                  <Play className="card__play-icon" />
                </span>
              </button>
            )
          ) : showProfileFallback ? (
            <span className="card__image-fallback" aria-hidden="true">
              {initial}
            </span>
          ) : (
            <img
              className="card__image"
              src={image}
              alt={imageAlt}
              onError={
                variant === "profile" ? () => setImageFailed(true) : undefined
              }
            />
          )}
          {badge && <span className="card__badge">{badge}</span>}
        </div>
      )}

      {(title || subtitle || description || (badge && !hasMedia)) && (
        <div className="card__body">
          {badge && !hasMedia && <span className="card__badge">{badge}</span>}
          {title &&
            (variant === "profile" ? (
              <h3 className={profileBadgeClassName}>{title}</h3>
            ) : variant === "stat" ? (
              <h3 className="card__title brush-under-green">{title}</h3>
            ) : (
              <h3 className="card__title">{title}</h3>
            ))}
          {subtitle && <p className="card__subtitle">{subtitle}</p>}
          {description && <p className="card__description">{description}</p>}
        </div>
      )}
    </article>
  );
};
