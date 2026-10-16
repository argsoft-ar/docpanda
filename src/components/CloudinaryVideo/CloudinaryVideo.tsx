import { useEffect, useRef } from "react";
import { Play } from "lucide-react";
import {
  getCloudinaryPosterSrcSet,
  getCloudinaryPosterUrl,
  getCloudinaryVideoUrl,
} from "../../lib/cloudinary";
import { useInView } from "../../hooks/useInView";
import "./CloudinaryVideo.css";

export interface CloudinaryVideoProps {
  publicId: string;
  title?: string;
  aspect?: "portrait" | "landscape" | "square";
  /** `sizes` attribute for the responsive poster image. */
  sizes?: string;
  onClick?: () => void;
}

const POSTER_WIDTHS = [360, 540, 720] as const;

const aspectDimensions: Record<
  NonNullable<CloudinaryVideoProps["aspect"]>,
  { width: number; height: number }
> = {
  portrait: { width: 720, height: 1280 },
  landscape: { width: 1280, height: 720 },
  square: { width: 720, height: 720 },
};

export const CloudinaryVideo = ({
  publicId,
  title,
  aspect = "portrait",
  sizes = "100vw",
  onClick,
}: CloudinaryVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef, { triggerOnce: false, threshold: 0.25 });
  const posterSrc = getCloudinaryPosterUrl(publicId);
  const aspectClass = `cloudinary-video--${aspect}`;
  const { width, height } = aspectDimensions[aspect];

  // Autoplay variant only plays (and therefore downloads) while on screen.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isInView) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isInView]);

  if (onClick) {
    return (
      <button
        className={`cloudinary-video cloudinary-video--clickable ${aspectClass}`}
        type="button"
        onClick={onClick}
        aria-label={title ? `Reproducir ${title}` : "Reproducir video"}
      >
        <img
          className="cloudinary-video__poster"
          src={posterSrc}
          srcSet={getCloudinaryPosterSrcSet(publicId, POSTER_WIDTHS)}
          sizes={sizes}
          width={width}
          height={height}
          alt={title ?? ""}
          loading="lazy"
          decoding="async"
        />
        <span className="cloudinary-video__play-overlay" aria-hidden="true">
          <Play className="cloudinary-video__play-icon" />
        </span>
      </button>
    );
  }

  const videoSrc = getCloudinaryVideoUrl(publicId, { width: 800 });

  return (
    <div className={`cloudinary-video ${aspectClass}`}>
      <video
        ref={videoRef}
        className="cloudinary-video__video"
        src={videoSrc}
        poster={posterSrc}
        width={width}
        height={height}
        preload="none"
        muted
        loop
        playsInline
        aria-label={title ?? "Video de producto"}
      />
    </div>
  );
};
