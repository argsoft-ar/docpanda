import { CloudinaryVideo } from "../CloudinaryVideo";
import "./MediaTile.css";

export type MediaTileAspect = "portrait" | "landscape" | "square" | "4:5";

interface MediaTileBaseProps {
  onClick?: () => void;
  ariaLabel: string;
}

export interface ImageMediaTileProps extends MediaTileBaseProps {
  mediaType: "image";
  aspect: MediaTileAspect;
  src: string;
  alt: string;
}

export interface VideoMediaTileProps extends MediaTileBaseProps {
  mediaType: "video";
  aspect: Exclude<MediaTileAspect, "4:5">;
  publicId: string;
  title?: string;
}

export type MediaTileProps = ImageMediaTileProps | VideoMediaTileProps;

const aspectClassMap: Record<MediaTileAspect, string> = {
  portrait: "media-tile--aspect-portrait",
  landscape: "media-tile--aspect-landscape",
  square: "media-tile--aspect-square",
  "4:5": "media-tile--aspect-4-5",
};

export const MediaTile = (props: MediaTileProps) => {
  const { mediaType, aspect, onClick, ariaLabel } = props;
  const aspectClass = aspectClassMap[aspect];

  if (mediaType === "video") {
    return (
      <div className={`media-tile media-tile--video ${aspectClass}`}>
        <CloudinaryVideo
          publicId={props.publicId}
          title={props.title}
          aspect={aspect}
          onClick={onClick}
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      className={`media-tile media-tile--image ${aspectClass}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <img
        className="media-tile__image"
        src={props.src}
        alt={props.alt}
        loading="lazy"
      />
    </button>
  );
};
