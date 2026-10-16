import { CloudinaryVideo } from "../CloudinaryVideo";
import "./MediaTile.css";

export type MediaTileAspect = "portrait" | "landscape" | "square" | "4:5";

interface MediaTileBaseProps {
  onClick?: () => void;
  ariaLabel: string;
  /** `sizes` attribute for the rendered image/poster. */
  sizes?: string;
}

export interface ImageMediaTileProps extends MediaTileBaseProps {
  mediaType: "image";
  aspect: MediaTileAspect;
  src: string;
  srcSet?: string;
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

// Intrinsic dimensions so the browser can reserve space before CSS aspect-ratio applies.
const aspectDimensions: Record<
  MediaTileAspect,
  { width: number; height: number }
> = {
  portrait: { width: 720, height: 1280 },
  landscape: { width: 1280, height: 720 },
  square: { width: 800, height: 800 },
  "4:5": { width: 800, height: 1000 },
};

export const MediaTile = (props: MediaTileProps) => {
  const { mediaType, aspect, onClick, ariaLabel, sizes } = props;
  const aspectClass = aspectClassMap[aspect];

  if (mediaType === "video") {
    return (
      <div className={`media-tile media-tile--video ${aspectClass}`}>
        <CloudinaryVideo
          publicId={props.publicId}
          title={props.title}
          aspect={aspect}
          sizes={sizes}
          onClick={onClick}
        />
      </div>
    );
  }

  const { width, height } = aspectDimensions[aspect];

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
        srcSet={props.srcSet}
        sizes={props.srcSet ? sizes : undefined}
        width={width}
        height={height}
        alt={props.alt}
        loading="lazy"
        decoding="async"
      />
    </button>
  );
};
