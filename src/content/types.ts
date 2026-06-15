export type Locale = "ko" | "en";

export type CapabilityId = "frontend" | "mobile" | "backend" | "cloud" | "ai";

export type Capability = {
  readonly id: CapabilityId;
  readonly label: string;
  readonly kicker: string;
  readonly title: string;
  readonly summary: string;
};

export type CaseStudy = {
  readonly id: string;
  readonly capabilityId: CapabilityId;
  readonly name: string;
  readonly publicName: string;
  readonly eyebrow: string;
  readonly summary: string;
  readonly impact: readonly string[];
  readonly stack: readonly string[];
  readonly asset: string;
  readonly alt: string;
  readonly detail: {
    readonly label: string;
    readonly overview: string;
    readonly specs: readonly CaseSpec[];
    readonly delivery: readonly string[];
  };
};

export type CaseSpec = {
  readonly label: string;
  readonly value: string;
};

export type TrustPoint = {
  readonly title: string;
  readonly summary: string;
};

export type ProcessStep = {
  readonly index: string;
  readonly title: string;
  readonly summary: string;
};

export type AppProduct = {
  readonly name: string;
  readonly tagline: string;
  readonly meta: string;
  readonly url: string;
  readonly icon: string;
};

export type EngagementTier = {
  readonly name: string;
  readonly bestFor: string;
  readonly cadence: string;
  readonly includes: readonly string[];
};

export type FaqItem = {
  readonly question: string;
  readonly answer: string;
};

export type ServiceModel = {
  readonly title: string;
  readonly summary: string;
  readonly deliverables: readonly string[];
};

export type PortfolioCopy = {
  readonly meta: {
    readonly title: string;
    readonly description: string;
  };
  readonly nav: {
    readonly contact: string;
    readonly viewWork: string;
    readonly languageLabel: string;
    readonly themeLabel: string;
  };
  readonly hero: {
    readonly eyebrow: string;
    readonly title: string;
    readonly subtitle: string;
    readonly availability: string;
    readonly proof: readonly string[];
  };
  readonly trust: {
    readonly eyebrow: string;
    readonly title: string;
    readonly intro: string;
    readonly points: readonly TrustPoint[];
  };
  readonly process: {
    readonly eyebrow: string;
    readonly title: string;
    readonly intro: string;
    readonly steps: readonly ProcessStep[];
  };
  readonly engagement: {
    readonly eyebrow: string;
    readonly title: string;
    readonly intro: string;
    readonly note: string;
    readonly tiers: readonly EngagementTier[];
  };
  readonly faq: {
    readonly eyebrow: string;
    readonly title: string;
    readonly items: readonly FaqItem[];
  };
  readonly apps: {
    readonly eyebrow: string;
    readonly title: string;
    readonly intro: string;
    readonly items: readonly AppProduct[];
  };
  readonly closing: {
    readonly eyebrow: string;
    readonly title: string;
    readonly subtitle: string;
  };
  readonly footer: {
    readonly tagline: string;
    readonly privacy: string;
    readonly terms: string;
    readonly support: string;
    readonly rights: string;
  };
  readonly business: {
    readonly badge: string;
    readonly legal: string;
    readonly industry: string;
    readonly since: string;
  };
  readonly sections: {
    readonly workTitle: string;
    readonly workIntro: string;
    readonly backendTitle: string;
    readonly backendIntro: string;
    readonly servicesTitle: string;
    readonly servicesIntro: string;
    readonly contactTitle: string;
    readonly contactIntro: string;
  };
  readonly capabilities: readonly Capability[];
  readonly aiShowcase: {
    readonly eyebrow: string;
    readonly title: string;
    readonly summary: string;
    readonly tags: readonly string[];
  };
  readonly cases: readonly CaseStudy[];
  readonly backendCards: readonly ServiceModel[];
  readonly services: readonly ServiceModel[];
  readonly contactPrompts: readonly string[];
};
