import Image from "next/image";
import type { PortfolioCopy } from "@/content/types";

type BackendSpotlightProps = {
  readonly copy: PortfolioCopy;
};

export function BackendSpotlight({ copy }: BackendSpotlightProps) {
  return (
    <section className="backend-section">
      <div className="section-heading">
        <p className="eyebrow">system ownership</p>
        <h2>{copy.sections.backendTitle}</h2>
        <p>{copy.sections.backendIntro}</p>
      </div>
      <div className="backend-board">
        <Image
          className="backend-board-image"
          src="/assets/cases/backend-board.svg"
          alt="Backend architecture board"
          loading="eager"
          width={1200}
          height={760}
        />
        <div className="backend-cards">
          {copy.backendCards.map((card) => (
            <article className="service-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.summary}</p>
              <ul>
                {card.deliverables.map((deliverable) => (
                  <li key={deliverable}>{deliverable}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
