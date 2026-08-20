import { useState, useRef, useEffect } from "react";
import { MemberBioCard, Tabs } from "../../../../components";
import { aboutContent } from "../../../../data";
import "./AboutUs.css";

export const AboutUs = () => {
  const { heading } = aboutContent;
  const accentClass = `heading-accent--${heading.accent ?? "primary"}`;
  const [activeMemberId, setActiveMemberId] = useState(
    aboutContent.members[0]?.id ?? "",
  );

  const carouselRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const activeMember =
    aboutContent.members.find((m) => m.id === activeMemberId) ??
    aboutContent.members[0];

  const tabs = aboutContent.members.map((m) => ({
    id: m.id,
    label: m.name,
  }));

  // Tab click: update state + scroll carousel to matching card
  const handleTabChange = (id: string) => {
    setActiveMemberId(id);
    const idx = aboutContent.members.findIndex((m) => m.id === id);
    const slide = cardRefs.current[idx];
    if (slide && carouselRef.current) {
      carouselRef.current.scrollTo({
        left: slide.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  // Scroll: sync active tab when a card snaps into view
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = (entry.target as HTMLElement).dataset.memberId;
            if (id) setActiveMemberId(id);
          }
        }
      },
      { root: carousel, threshold: 0.5 },
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-us" id="about">
      <div className="about-us__inner">
        {/* Header row: text (left) + panda (right on desktop, below on mobile) */}
        <div className="about-us__header">
          <div className="about-us__text">
            <h2 className="about-us__title">
              <span className="underline-stroke">
                {heading.titlePart1} <br />
                <span className={accentClass}>{heading.titlePart2}</span>
              </span>
            </h2>
            <p className="about-us__description">
              {aboutContent.description}{" "}
              <strong className="about-us__description-accent">
                {aboutContent.descriptionAccent}
              </strong>
            </p>
          </div>

          <div className="about-us__panda" />
        </div>

        <div className="about-us__members">
          <Tabs
            tabs={tabs}
            activeTabId={activeMemberId}
            onTabChange={handleTabChange}
          />

          {/* Mobile: horizontal snap carousel (all cards rendered) */}
          <div className="about-us__carousel" ref={carouselRef}>
            {aboutContent.members.map((member, idx) => (
              <div
                key={member.id}
                className="about-us__carousel-slide"
                data-member-id={member.id}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
              >
                <MemberBioCard
                  image={member.photo}
                  name={member.name}
                  bio={member.role}
                />
              </div>
            ))}
          </div>

          {/* Desktop: single card, re-keyed to trigger slide animation */}
          {activeMember && (
            <div className="about-us__desktop-card">
              <MemberBioCard
                key={activeMember.id}
                image={activeMember.photo}
                name={activeMember.name}
                bio={activeMember.role}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
