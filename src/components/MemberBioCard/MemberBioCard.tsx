import {
  getCloudinaryImageSrcSet,
  getCloudinaryImageUrl,
} from "../../lib/cloudinary";
import "./MemberBioCard.css";

const IMAGE_WIDTHS = [320, 480, 640, 900] as const;
const IMAGE_SIZES = "(min-width: 1024px) 28rem, 18rem";

export interface MemberBioCardProps {
  image: string;
  imageAlt?: string;
  name: string;
  bio: string;
  className?: string;
}

export const MemberBioCard = ({
  image,
  imageAlt,
  name,
  bio,
  className = "",
}: MemberBioCardProps) => {
  return (
    <article className={`member-bio-card ${className}`.trim()}>
      <div className="member-bio-card__image-wrap">
        <img
          className="member-bio-card__image"
          src={getCloudinaryImageUrl(image, { width: 640 })}
          srcSet={getCloudinaryImageSrcSet(image, IMAGE_WIDTHS)}
          sizes={IMAGE_SIZES}
          width={640}
          height={640}
          alt={imageAlt ?? name}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="member-bio-card__content">
        <h3 className="member-bio-card__name">{name}</h3>
        <p className="member-bio-card__bio">{bio}</p>
      </div>
    </article>
  );
};
