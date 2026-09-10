import { useRef } from "react";
import { Doodle } from "../../../../components";
import { heroContent } from "../../../../data";
import { useInView } from "../../../../hooks/useInView";
import "./Hero.css";

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef);

  return (
    <section
      className={`hero reveal${isInView ? " reveal--visible" : ""}`}
      id="hero"
      ref={sectionRef}
    >
      <video
        className="hero__video hero__video--mobile"
        src={heroContent.videoMobile}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <video
        className="hero__video hero__video--desktop"
        src={heroContent.videoDesktop}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      <div className="hero__band">
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
