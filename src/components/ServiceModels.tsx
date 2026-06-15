import type { PortfolioCopy } from "@/content/types";

type ServiceModelsProps = {
  readonly copy: PortfolioCopy;
};

export function ServiceModels({ copy }: ServiceModelsProps) {
  return (
    <section className="services-section">
      <div className="section-heading">
        <p className="eyebrow">freelance models</p>
        <h2>{copy.sections.servicesTitle}</h2>
        <p>{copy.sections.servicesIntro}</p>
      </div>
      <div className="service-grid">
        {copy.services.map((service) => (
          <article className="service-card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.summary}</p>
            <ul>
              {service.deliverables.map((deliverable) => (
                <li key={deliverable}>{deliverable}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
