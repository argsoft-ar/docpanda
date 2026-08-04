import { useState } from "react";
import { Star } from "lucide-react";
import { Card, Doodle } from "../../../../components";
import type { Brand } from "../../../../data";
import {
  brands,
  reviews,
  sectionHeadings,
  services,
  stats,
} from "../../../../data";
import "./WorkWith.css";

/** Logo con fallback: si el archivo no carga, muestra el nombre de la marca. */
const BrandLogo = ({ brand }: { brand: Brand }) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <span className="work-with__brand-name">{brand.name}</span>;
  }

  return (
    <img
      className="work-with__brand-logo"
      src={brand.logo}
      alt={brand.name}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
};

export const WorkWith = () => {
  const heading = sectionHeadings.brands;
  const accentClass = `heading-accent--${heading.accent ?? "primary"}`;

  return (
    <section className="work-with" id="brands">
      <div className="work-with__services">
        <ul className="work-with__services-track">
          {services.map((service) => (
            <li className="work-with__service" key={service.id}>
              {service.label}
            </li>
          ))}
        </ul>
        <ul className="work-with__services-track" aria-hidden="true">
          {services.map((service) => (
            <li className="work-with__service" key={`dup-${service.id}`}>
              {service.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="work-with__inner">
        <div className="work-with__panel">
          <h2 className="work-with__title">
            {heading.titlePart1 && `${heading.titlePart1} `}
            <span className={accentClass}>{heading.titlePart2}</span>
          </h2>

          <ul className="work-with__brands">
            {brands.map((brand) => (
              <li className="work-with__brand" key={brand.id}>
                <BrandLogo brand={brand} />
              </li>
            ))}
          </ul>
        </div>

        <div className="work-with__stats">
          <Doodle name="stars" className="work-with__stats-doodle" />
          {stats.map((stat) => (
            <div className="work-with__stat" key={stat.id}>
              <Card variant="stat" title={stat.value} subtitle={stat.label} />
            </div>
          ))}
          <Doodle
            name="sparkle"
            className="work-with__stats-doodle work-with__stats-doodle--end"
          />
        </div>

        <div className="work-with__reviews-panel">
          <ul className="work-with__reviews">
            {reviews.map((review) => (
              <li className="work-with__review" key={review.id}>
                <span className="work-with__review-stars" aria-hidden="true">
                  {Array.from({ length: review.rating }, (_, index) => (
                    <Star className="work-with__review-star" key={index} />
                  ))}
                </span>
                <blockquote className="work-with__review-quote">
                  “{review.text}”
                </blockquote>
                <p className="work-with__review-author">
                  {review.author} · {review.company}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
