import { useState } from "react";
import { Tabs } from "../../../../components";
import { photographyCategories, sectionHeadings } from "../../../../data";
import "./ProductPhotography.css";

export const ProductPhotography = () => {
  const heading = sectionHeadings.photography;
  const accentClass = `heading-accent--${heading.accent ?? "primary"}`;
  const [activeTabId, setActiveTabId] = useState(
    photographyCategories[0]?.id ?? "",
  );

  const activeCategory = photographyCategories.find(
    (category) => category.id === activeTabId,
  );

  return (
    <section className="product-photography" id="photography">
      <div className="product-photography__inner">
        <header className="product-photography__header">
          <h2 className="product-photography__title">
            {heading.titlePart1}{" "}
            <span className={`${accentClass} product-photography__title-word`}>
              {heading.titlePart2}
              <img
                src="/Elementos graficos/brush verde.svg"
                className="product-photography__title-brush"
                alt=""
              />
            </span>
          </h2>
          {heading.subtitle && (
            <p className="product-photography__subtitle">{heading.subtitle}</p>
          )}
        </header>

        <Tabs
          tabs={photographyCategories.map(({ id, label }) => ({ id, label }))}
          activeTabId={activeTabId}
          onTabChange={setActiveTabId}
          icon="Star"
        />

        {activeCategory && (
          <div
            className="product-photography__panel"
            id={`tabpanel-${activeCategory.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeCategory.id}`}
          >
            <ul className="product-photography__grid">
              {activeCategory.items.map((item) => (
                <li className="product-photography__item" key={item.id}>
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
        )}
      </div>
    </section>
  );
};
