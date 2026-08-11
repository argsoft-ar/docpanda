import { useState } from "react";
import { Card } from "../../../../components";
import { aboutContent } from "../../../../data";
import "./AboutUs.css";

export const AboutUs = () => {
  const { heading } = aboutContent;
  const accentClass = `heading-accent--${heading.accent ?? "primary"}`;
  const [pandaVisible] = useState(true);

  return (
    <section className="about-us" id="about">
      <div className="about-us__inner">
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
          {pandaVisible && <div className="about-us__panda-container"></div>}
        </div>

        <div className="about-us__team">
          {aboutContent.members.map((member, index) => (
            <Card
              key={member.id}
              variant="profile"
              image={member.photo}
              imageAlt={member.name}
              title={member.name}
              subtitle={member.role}
              badgeColor={index % 2 === 0 ? "secondary" : "primary"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
