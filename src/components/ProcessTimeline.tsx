import type { PortfolioCopy } from "@/content/types";

type ProcessTimelineProps = {
  readonly copy: PortfolioCopy;
};

export function ProcessTimeline({ copy }: ProcessTimelineProps) {
  return (
    <section className="process-section" id="process">
      <div className="section-heading center">
        <p className="eyebrow">{copy.process.eyebrow}</p>
        <h2>{copy.process.title}</h2>
        <p>{copy.process.intro}</p>
      </div>
      <div className="process-grid">
        {copy.process.steps.map((step) => (
          <article className="process-step" key={step.index}>
            <span className="step-index">{step.index}</span>
            <h4>{step.title}</h4>
            <p>{step.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
