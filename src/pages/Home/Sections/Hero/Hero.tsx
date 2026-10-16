import { useRef } from "react";
import { Doodle } from "../../../../components";
import { heroContent } from "../../../../data";
import { useInView } from "../../../../hooks/useInView";
import { useMediaQuery } from "../../../../hooks/useMediaQuery";
import "./Hero.css";

// Must match the breakpoint in Hero.css and the poster preloads in index.html.
const DESKTOP_QUERY = "(min-width: 640px)";

export const Hero = () => {
  const bandRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(bandRef);
  const isDesktop = useMediaQuery(DESKTOP_QUERY);
  const videoSrc =
    isDesktop === null
      ? null
      : isDesktop
        ? heroContent.videoDesktop
        : heroContent.videoMobile;

  return (
    <section className="hero" id="hero">
      <div className="hero__media">
        <picture>
          <source
            media={DESKTOP_QUERY}
            srcSet={heroContent.posterDesktop}
            width={1920}
            height={1080}
          />
          <img
            className="hero__poster"
            src={heroContent.posterMobile}
            width={720}
            height={1280}
            alt=""
            fetchPriority="high"
            loading="eager"
          />
        </picture>
        {videoSrc && (
          <video
            key={videoSrc}
            className="hero__video"
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />
        )}
      </div>

      <div
        className={`hero__band reveal${isInView ? " reveal--visible" : ""}`}
        ref={bandRef}
      >
        <div className="hero__band-inner">
          <div className="hero__band-row">
            <Doodle name="sparkle" className="hero__doodle" />
            <h1 className="hero__title">{heroContent.title}</h1>
            <Doodle name="sparkle" className="hero__doodle" />
          </div>
          <div className="container__subtitle">
            <p className="hero__subtitle">{heroContent.subtitle}</p>
            <p className="hero__subtitle-bold">{heroContent.subtitleBold}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
