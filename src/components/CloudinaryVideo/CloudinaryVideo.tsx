import { Play } from "lucide-react";
import {
  getCloudinaryPosterUrl,
  getCloudinaryVideoUrl,
} from "../../lib/cloudinary";
import "./CloudinaryVideo.css";

export interface CloudinaryVideoProps {
  publicId: string;
  title?: string;
  aspect?: "portrait" | "landscape" | "square";
  onClick?: () => void;
}

export const CloudinaryVideo = ({
  publicId,
  title,
  aspect = "portrait",
  onClick,
}: CloudinaryVideoProps) => {
  const posterSrc = getCloudinaryPosterUrl(publicId);
  const aspectClass = `cloudinary-video--${aspect}`;

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
          alt={title ?? ""}
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
        className="cloudinary-video__video"
        src={videoSrc}
        poster={posterSrc}
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
};
