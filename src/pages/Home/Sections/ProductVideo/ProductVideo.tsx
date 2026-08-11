import { useState } from "react";
import { Card, Tabs } from "../../../../components";
import { sectionHeadings, videoCategories } from "../../../../data";
import "./ProductVideo.css";

export const ProductVideo = () => {
  const heading = sectionHeadings.video;
  const accentClass = `heading-accent--${heading.accent ?? "primary"}`;
  const [activeTabId, setActiveTabId] = useState(videoCategories[0]?.id ?? "");

  const activeCategory = videoCategories.find(
    (category) => category.id === activeTabId,
  );

  return (
    <section className="product-video" id="video">
      <div className="product-video__inner">
        <header className="product-video__header">
          <h2 className="product-video__title">
            {heading.titlePart1}{" "}
            <span className={`${accentClass} product-video__title-word`}>
              {heading.titlePart2}
              <img
                src="/Elementos graficos/brush violeta.svg"
                className="product-video__title-brush"
                alt=""
              />
            </span>
          </h2>
          {heading.subtitle && (
            <p className="product-video__subtitle">{heading.subtitle}</p>
          )}
        </header>

        <Tabs
          tabs={videoCategories.map(({ id, label }) => ({ id, label }))}
          activeTabId={activeTabId}
          onTabChange={setActiveTabId}
          icon="Star"
        />

        {activeCategory && (
          <div
            className="product-video__panel"
            id={`tabpanel-${activeCategory.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeCategory.id}`}
          >
            <div className="product-video__grid">
              {activeCategory.items.map((item) => (
                <Card
                  key={item.id}
                  variant="media"
                  videoUrl={item.video}
                  image={item.thumbnail}
                  imageAlt={item.title}
                  title={item.title}
                  aspect="portrait"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
