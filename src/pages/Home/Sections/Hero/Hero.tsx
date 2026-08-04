import { useState } from "react";
import { Doodle } from "../../../../components";
import { heroContent } from "../../../../data";
import "./Hero.css";

export const Hero = () => {
  const [imageVisible, setImageVisible] = useState(true);

  return (
    <section className="hero" id="hero">
      {imageVisible && (
        <img
          className="hero__image"
          src={heroContent.backgroundImage}
          alt=""
          onError={() => setImageVisible(false)}
        />
      )}

      <div className="hero__band">
        <div className="hero__band-inner">
          <div className="hero__band-row">
            <Doodle name="sparkle" className="hero__doodle" />
            <h1 className="hero__title">{heroContent.title}</h1>
            <Doodle name="sparkle" className="hero__doodle" />
          </div>
          <p className="hero__subtitle">
            {heroContent.subtitle}{" "}
            <strong className="hero__subtitle-bold">
              {heroContent.subtitleBold}
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
};
