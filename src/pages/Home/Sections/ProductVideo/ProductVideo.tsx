import { lazy, Suspense, useRef, useState } from "react";
import { MediaTile, Tabs } from "../../../../components";
import { sectionHeadings, videoCategories } from "../../../../data";
import { useInView, useGTM } from "../../../../hooks";
import "./ProductVideo.css";

const VideoLightbox = lazy(() =>
  import("../../../../components/VideoLightbox").then((m) => ({
    default: m.VideoLightbox,
  })),
);

const TILE_SIZES = "(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 20rem";

export const ProductVideo = () => {
  const heading = sectionHeadings.video;
  const accentClass = `heading-accent--${heading.accent ?? "primary"}`;
  const [activeTabId, setActiveTabId] = useState(videoCategories[0]?.id ?? "");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef);
  const { trackCategoryView, trackMediaView } = useGTM();

  const activeCategory = videoCategories.find(
    (category) => category.id === activeTabId,
  );

  const handleTabChange = (id: string) => {
    setActiveTabId(id);
    setLightboxIndex(null);
    const cat = videoCategories.find((c) => c.id === id);
    trackCategoryView({
      section: "video",
      categoryId: id,
      categoryLabel: cat?.label,
    });
  };

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    const item = activeCategory?.items[index];
    if (item) {
      trackMediaView({
        mediaType: "video",
        title: item.title,
        mediaId: item.id,
      });
    }
  };

  return (
    <section
      className={`product-video reveal${isInView ? " reveal--visible" : ""}`}
      id="video"
      ref={sectionRef}
    >
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
                loading="lazy"
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
                <MediaTile
                  key={item.id}
                  mediaType="video"
                  aspect="portrait"
                  publicId={item.cloudinaryId}
                  title={item.title}
                  sizes={TILE_SIZES}
                  ariaLabel={
                    item.title ? `Reproducir ${item.title}` : "Reproducir video"
                  }
                  onClick={() => handleOpenLightbox(i)}
                />
              ))}
            </div>
          </div>
        )}

        {lightboxIndex !== null && activeCategory && (
          <Suspense fallback={null}>
            <VideoLightbox
              items={activeCategory.items}
              initialIndex={lightboxIndex}
              onClose={() => setLightboxIndex(null)}
            />
          </Suspense>
        )}
      </div>
    </section>
  );
};
