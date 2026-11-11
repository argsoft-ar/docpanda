import { useRef } from "react";
import { Doodle, DrawnUnderline } from "../../../../components";
import type { DoodleName } from "../../../../assets/doodles";
import pandaProcess from "../../../../assets/images/Panda_Asi trabajamos.png";
import { processSteps, sectionHeadings } from "../../../../data";
import { useInView } from "../../../../hooks/useInView";
import "./Process.css";

const STEP_GAP_DOODLES: DoodleName[] = [
  "speech-bubble",
  "arrow-curl",
  "sparkle",
];

export const Process = () => {
  const heading = sectionHeadings.process;
  const accentClass = `heading-accent--${heading.accent ?? "primary"}`;
  const titleInitial = heading.titlePart1.charAt(0);
  const titleRest = heading.titlePart1.slice(1);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLOListElement>(null);
  const isInView = useInView(sectionRef);
  const isTitleInView = useInView(titleRef, { threshold: 0.6 });
  const isGridInView = useInView(gridRef, { threshold: 0.3 });

  return (
    <section
      className={`process reveal${isInView ? " reveal--visible" : ""}`}
      id="process"
      ref={sectionRef}
    >
      <div className="process__inner">
        <img
          src={pandaProcess}
          className={`process__panda fade-in reveal-delay-2${isInView ? " fade-in--visible" : ""}`}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          width={2048}
          height={1367}
        />
        <Doodle
          name="stars"
          className="process__doodle process__doodle--right"
        />

        <header className="process__header">
          <h2 className="process__title" ref={titleRef}>
            <DrawnUnderline>
              <span className="process__title-initial">
                {titleInitial}
                <Doodle
                  name="exclamation"
                  className={`process__exclaim pop-in reveal-delay-6${isTitleInView ? " pop-in--visible" : ""}`}
                />
              </span>
              {titleRest}{" "}
              <span className={accentClass}>{heading.titlePart2}</span>
            </DrawnUnderline>
          </h2>
          {heading.subtitle && (
            <p className="process__subtitle">{heading.subtitle}</p>
          )}
        </header>

        <ol className="process__grid" ref={gridRef}>
          {processSteps.map((step, index) => (
            <li className="process__step" key={step.id}>
              <span className="process__step-number" aria-hidden="true">
                <img
                  src={
                    index % 2 === 0
                      ? "/Elementos graficos/brush verde.svg"
                      : "/Elementos graficos/brush violeta.svg"
                  }
                  className="process__step-number__brush"
                  alt=""
                  loading="lazy"
                />
                {String(index + 1).padStart(2, "0")}.
              </span>
              <p className="process__step-description">{step.description}</p>
              {index < processSteps.length - 1 && (
                <Doodle
                  name={STEP_GAP_DOODLES[index % STEP_GAP_DOODLES.length]}
                  className={`process__step-doodle fade-in reveal-delay-${(index + 1) * 2}${isGridInView ? " fade-in--visible" : ""}`}
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
