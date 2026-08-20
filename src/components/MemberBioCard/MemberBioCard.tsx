import "./MemberBioCard.css";

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
          src={image}
          alt={imageAlt ?? name}
        />
      </div>
      <div className="member-bio-card__content">
        <h3 className="member-bio-card__name">{name}</h3>
        <p className="member-bio-card__bio">{bio}</p>
      </div>
    </article>
  );
};
