import { Doodle } from "../../../../components";
import { processSteps, sectionHeadings } from "../../../../data";
import "./Process.css";

export const Process = () => {
  const heading = sectionHeadings.process;
  const accentClass = `heading-accent--${heading.accent ?? "primary"}`;

  return (
    <section className="process" id="process">
      <div className="process__inner">
        <Doodle
          name="arrow-curl"
          className="process__doodle process__doodle--left"
        />
        <Doodle
          name="stars"
          className="process__doodle process__doodle--right"
        />

        <header className="process__header">
          <h2 className="process__title">
            <span className="underline-stroke">
              {heading.titlePart1}{" "}
              <span className={accentClass}>{heading.titlePart2}</span>
            </span>
          </h2>
          {heading.subtitle && (
            <p className="process__subtitle">{heading.subtitle}</p>
          )}
        </header>

        <ol className="process__grid">
          {processSteps.map((step, index) => (
            <li className="process__step" key={step.id}>
              <span
                className={`process__step-number ${
                  index % 2 === 0 ? "brush-green" : "brush-purple"
                }`}
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}.
              </span>
              <p className="process__step-description">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
