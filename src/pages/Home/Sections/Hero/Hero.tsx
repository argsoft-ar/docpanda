import { Doodle } from "../../../../components";
import { heroContent } from "../../../../data";
import "./Hero.css";

export const Hero = () => {
  return (
    <section className="hero" id="hero">
      <video
        className="hero__video hero__video--mobile"
        src={heroContent.videoMobile}
        autoPlay
        muted
        loop
        playsInline
      />
      <video
        className="hero__video hero__video--desktop"
        src={heroContent.videoDesktop}
        autoPlay
        muted
        loop
        playsInline
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
