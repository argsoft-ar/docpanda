import { useState } from "react";
import { CloudinaryVideo, VideoLightbox, Tabs } from "../../../../components";
import { sectionHeadings, videoCategories } from "../../../../data";
import "./ProductVideo.css";

export const ProductVideo = () => {
  const heading = sectionHeadings.video;
  const accentClass = `heading-accent--${heading.accent ?? "primary"}`;
  const [activeTabId, setActiveTabId] = useState(videoCategories[0]?.id ?? "");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const activeCategory = videoCategories.find(
    (category) => category.id === activeTabId,
  );

  const handleTabChange = (id: string) => {
    setActiveTabId(id);
    setLightboxIndex(null);
  };

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
          onTabChange={handleTabChange}
          icon="Star"
        />

        {activeCategory && (
          <div
            key={activeTabId}
            className="product-video__panel"
            id={`tabpanel-${activeCategory.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeCategory.id}`}
          >
            <div className="product-video__grid">
              {activeCategory.items.map((item, i) => (
                <CloudinaryVideo
                  key={item.id}
                  publicId={item.cloudinaryId}
                  title={item.title}
                  aspect="portrait"
                  onClick={() => setLightboxIndex(i)}
                />
              ))}
            </div>
          </div>
        )}

        {lightboxIndex !== null && activeCategory && (
          <VideoLightbox
            items={activeCategory.items}
            initialIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </div>
    </section>
  );
};
