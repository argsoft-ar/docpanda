import { useState, useEffect, useRef } from "react";
import { Lightbox, Tabs } from "../../../../components";
import { photographyCategories, sectionHeadings } from "../../../../data";
import "./ProductPhotography.css";

const BENTO_PAGE_SIZE = 4;

export const ProductPhotography = () => {
  const heading = sectionHeadings.photography;
  const accentClass = `heading-accent--${heading.accent ?? "primary"}`;
  const [activeTabId, setActiveTabId] = useState(
    photographyCategories[0]?.id ?? "",
  );
  const [pageIndex, setPageIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const carouselRef = useRef<HTMLUListElement>(null);
  const slideRefs = useRef<(HTMLLIElement | null)[]>([]);

  const activeCategory = photographyCategories.find(
    (c) => c.id === activeTabId,
  );

  // Desktop-only pagination; mobile carousel renders every item instead
  const totalPages = Math.ceil(
    (activeCategory?.items.length ?? 0) / BENTO_PAGE_SIZE,
  );
  const currentPageItems =
    activeCategory?.items.slice(
      pageIndex * BENTO_PAGE_SIZE,
      (pageIndex + 1) * BENTO_PAGE_SIZE,
    ) ?? [];

  // Tab click: switch category, reset desktop page and mobile carousel scroll
  const handleTabChange = (id: string) => {
    setActiveTabId(id);
    setPageIndex(0);
    setLightboxIndex(null);
    setActiveImageIndex(0);
    carouselRef.current?.scrollTo({ left: 0 });
  };

  // Auto-rotate bento page every 10s when category has more than one page (desktop only)
  useEffect(() => {
    if (totalPages <= 1) return;
    const timer = setInterval(() => {
      setPageIndex((prev) => (prev + 1) % totalPages);
    }, 10000);
    return () => clearInterval(timer);
  }, [totalPages, activeTabId]);

  // Mobile carousel: sync the active slide index when a slide scrolls into view
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = Number(
              (entry.target as HTMLElement).dataset.imageIndex,
            );
            if (!Number.isNaN(idx)) setActiveImageIndex(idx);
          }
        }
      },
      { root: carousel, threshold: 0.5 },
    );

    slideRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeTabId]);

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
          onTabChange={handleTabChange}
          icon="Star"
        />

        {/* Gallery: snap-scroll carousel on mobile, asymmetric bento on desktop */}
        {activeCategory && (
          <>
            <ul
              className="product-photography__carousel"
              ref={carouselRef}
              aria-label="Galería de fotografía de producto"
            >
              {activeCategory.items.map((item, idx) => (
                <li
                  key={item.id}
                  className="product-photography__carousel-slide"
                  data-image-index={idx}
                  aria-current={idx === activeImageIndex ? "true" : undefined}
                  ref={(el) => {
                    slideRefs.current[idx] = el;
                  }}
                >
                  <button
                    type="button"
                    className="product-photography__bento-figure"
                    onClick={() => setLightboxIndex(idx)}
                    aria-label={`Ver imagen: ${item.alt}`}
                  >
                    <img
                      className="product-photography__bento-image"
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                    />
                  </button>
                </li>
              ))}
            </ul>

            <ul
              key={`${activeTabId}-${pageIndex}`}
              className="product-photography__bento"
              data-count={currentPageItems.length}
              aria-label="Galería de fotografía de producto"
            >
              {currentPageItems.map((item, i) => (
                <li key={item.id} className="product-photography__bento-item">
                  <button
                    type="button"
                    className="product-photography__bento-figure"
                    onClick={() =>
                      setLightboxIndex(pageIndex * BENTO_PAGE_SIZE + i)
                    }
                    aria-label={`Ver imagen: ${item.alt}`}
                  >
                    <img
                      className="product-photography__bento-image"
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      {lightboxIndex !== null && activeCategory && (
        <Lightbox
          items={activeCategory.items}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  );
};
