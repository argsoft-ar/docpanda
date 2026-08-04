import { Star } from "lucide-react";
import { photographyItems, sectionHeadings } from "../../../../data";
import "./ProductPhotography.css";

export const ProductPhotography = () => {
  const heading = sectionHeadings.photography;
  const accentClass = `heading-accent--${heading.accent ?? "primary"}`;

  return (
    <section className="product-photography" id="photography">
      <div className="product-photography__inner">
        <header className="product-photography__header">
          <h2 className="product-photography__title">
            {heading.titlePart1}{" "}
            <span className={`${accentClass} brush-under-green`}>
              {heading.titlePart2}
            </span>
          </h2>
          {heading.subtitle && (
            <p className="product-photography__subtitle">{heading.subtitle}</p>
          )}
        </header>

        <ul className="product-photography__grid">
          {photographyItems.map((item) => (
            <li className="product-photography__item" key={item.id}>
              <span className="product-photography__label">
                <Star
                  className="product-photography__star"
                  aria-hidden="true"
                />
                {item.label}
              </span>
              <img
                className="product-photography__image"
                src={item.image}
                alt={item.alt}
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
