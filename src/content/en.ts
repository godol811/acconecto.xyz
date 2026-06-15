import { enCases } from "./enCases";
import type { PortfolioCopy } from "./types";

export const enCopy: PortfolioCopy = {
  meta: {
    title: "Jongchan Ko / Aconecto - Full-stack Freelance Developer",
    description:
      "Aconecto is a registered Korean software studio led by Jongchan Ko. Full-stack delivery across web, mobile, backend, and cloud — one owner from scope to release, working in English across time zones.",
  },
  nav: {
    contact: "Start a project",
    viewWork: "View work",
    languageLabel: "Change language",
    themeLabel: "Toggle theme",
  },
  hero: {
    eyebrow: "Aconecto · registered software studio",
    title: "Jongchan Ko / Aconecto",
    subtitle:
      "How something is built matters more than what it's built with. Over ~5 years of shipping my own products, I've learned to find the real problem and carry it all the way to something that runs in production — end to end.",
    availability:
      "Taking on new projects for 2026 · I work in English, async across time zones, and usually reply within one business day.",
    proof: [
      "~5 yrs full-stack",
      "craft over spec",
      "scope to release, solo",
      "ships, then keeps running",
    ],
  },
  business: {
    badge: "Aconecto business registration",
    legal: "A registered Korean software business since 2025",
    industry: "Information and communication · application software development and supply",
    since: "Formal contracts, NDAs, and tax invoices available",
  },
  trust: {
    eyebrow: "Why Aconecto",
    title: "Built to take the risk out of outsourcing",
    intro:
      "The stack is the easy part. The same spec ships very differently depending on how it's built — and that 'how' is where I do my best work.",
    points: [
      {
        title: "Implementation over spec",
        summary:
          "The technology is secondary. What decides the outcome is the quality of the build: finding the real problem, closing the edge cases, and finishing in a form that actually holds up in production.",
      },
      {
        title: "One owner, end to end",
        summary:
          "Scope, design, frontend, mobile, backend, and release all sit with one person — no handoffs, no context lost between vendors, no finger-pointing.",
      },
      {
        title: "Products, not just screens",
        summary:
          "Past the UI, I own the API contracts, data models, deployment paths, and testing — so what you launch is a working product, not a demo.",
      },
      {
        title: "Safe, transparent to work with",
        summary:
          "A registered business with formal contracts, NDAs, and tax invoices — plus honest updates on scope, progress, and trade-offs, in English and on your schedule.",
      },
    ],
  },
  process: {
    eyebrow: "How I work",
    title: "From a vague idea to a plan you can ship",
    intro: "From the first message to handoff, the work moves through clear, predictable steps.",
    steps: [
      {
        index: "01",
        title: "Diagnose",
        summary:
          "We line up goals, timeline, budget, and what already exists. Then I propose a realistic scope and schedule — honestly, even when the honest answer is 'smaller'.",
      },
      {
        index: "02",
        title: "Design",
        summary:
          "We agree on screens, API contracts, and data models up front, so frontend and backend can move in parallel without surprises later.",
      },
      {
        index: "03",
        title: "Build",
        summary:
          "AI-assisted workflows keep delivery fast, while code review and QA evidence keep quality visible at every step.",
      },
      {
        index: "04",
        title: "Hand off",
        summary:
          "You get the deployment paths, a release checklist, and the documentation you need to run it — so you're never locked in.",
      },
    ],
  },
  sections: {
    workTitle: "Selected work",
    workIntro:
      "Client-sensitive details and real names are redacted. Each story focuses on the role I played, the shape of the delivery, and the technical depth — and the care taken with confidentiality here is itself a reference.",
    backendTitle: "Ownership past the screen",
    backendIntro:
      "Not just screens. I own the API contracts, data models, deployment paths, and testing loops — the structure that has to hold up long after launch.",
    servicesTitle: "Ways we can work together",
    servicesIntro:
      "From a fresh MVP to rescuing a stalled codebase — senior ownership that carries the work all the way through.",
    contactTitle: "Tell me about your project",
    contactIntro:
      "Share the project type, timeline, target platform, and anything you already have. I'll reply with a clear, honest next step.",
  },
  capabilities: [
    {
      id: "frontend",
      label: "Frontend",
      kicker: "interface craft",
      title: "Product-grade web interfaces with the details right",
      summary:
        "Dashboards, CRM and field-service tools, interactive sites, and admin products with UI that feels considered, not generic.",
    },
    {
      id: "mobile",
      label: "Mobile",
      kicker: "device delivery",
      title: "Mobile apps carried from first screen to the store",
      summary:
        "Rebrands, wearable flows, local builds, and release-ready apps shipped through TestFlight to the App Store.",
    },
    {
      id: "backend",
      label: "Backend",
      kicker: "system depth",
      title: "API, database, auth, and testing designed as one",
      summary:
        "Contract-first backends with a deployable structure that frontend and mobile can build against from day one.",
    },
    {
      id: "cloud",
      label: "Cloud",
      kicker: "release path",
      title: "Cloud deployment and CI/CD that make launches calm",
      summary:
        "Container builds, cloud hosting, Git-based release flows, smoke tests, and the hardening that keeps launch day boring.",
    },
    {
      id: "ai",
      label: "AI-native",
      kicker: "agentic workflow",
      title: "AI-assisted build, review, QA, and documentation",
      summary:
        "Agentic workflows that speed up delivery without giving up traceability or human judgment.",
    },
  ],
  aiShowcase: {
    eyebrow: "AI-native delivery",
    title: "An agent workflow across build, review, QA, and docs",
    summary:
      "Multi-agent tooling like Claude Code, Codex, and Gemini speeds up delivery, while review evidence, tests, and human judgment stay firmly in the loop.",
    tags: ["multi-agent", "code review", "automated QA", "documentation"],
  },
  cases: enCases,
  backendCards: [
    {
      title: "API contracts",
      summary:
        "OpenAPI, gRPC, and REST contracts defined first, so web and mobile can build in parallel without guessing.",
      deliverables: ["endpoint map", "schema review", "typed client handoff"],
    },
    {
      title: "Data and security",
      summary:
        "PostgreSQL models, access boundaries, and safe handling of sensitive data, designed together rather than bolted on.",
      deliverables: ["schema draft", "access rules", "privacy scan"],
    },
    {
      title: "Release hardening",
      summary:
        "Container builds, CI, QA checklists, and smoke tests that cut launch risk before anything ships.",
      deliverables: ["build pipeline", "release checklist", "rollback notes"],
    },
  ],
  services: [
    {
      title: "MVP build",
      summary:
        "A lean web, app, and API build, focused enough to reach real users — and real feedback — fast.",
      deliverables: ["product scope", "interactive UI", "deployable backend"],
    },
    {
      title: "Frontend systems",
      summary:
        "Dashboards, admin tools, and product sites built for the people who use them every day.",
      deliverables: ["design system", "responsive screens", "interaction QA"],
    },
    {
      title: "Technical rescue",
      summary:
        "Broken QA, stalled releases, and tangled API contracts, untangled and stabilized — so a stuck team can move again.",
      deliverables: ["bug triage", "test coverage", "release recovery"],
    },
  ],
  engagement: {
    eyebrow: "Pricing · how we engage",
    title: "Start in the format that fits your project",
    intro: "Every engagement is quoted by scope and timeline. These are the formats I use most.",
    note: "Instead of a fixed rate card, the first conversation looks at scope, timeline, and budget together — then I send a realistic, written quote.",
    tiers: [
      {
        name: "Project package",
        bestFor: "MVPs and new products with a clear launch goal",
        cadence: "Fixed scope · fixed quote",
        includes: [
          "scope and timeline locked in the quote",
          "delivery from scope to launch",
          "release checklist and handoff docs",
        ],
      },
      {
        name: "Weekly retainer",
        bestFor: "Live products that need steady improvement",
        cadence: "Weekly contract · flexible scope",
        includes: [
          "priorities agreed each week",
          "flexible feature and fix work",
          "regular progress updates",
        ],
      },
      {
        name: "Tech audit · rescue",
        bestFor: "Stalled or shaky codebases",
        cadence: "Short, focused diagnosis",
        includes: ["code, deploy, and QA review", "a risk report", "a roadmap back to shippable"],
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "What clients ask before we start",
    items: [
      {
        question: "Can you sign formal contracts and issue tax invoices?",
        answer:
          "Yes. Aconecto is a Korean software business registered since 2025, so I can sign formal contracts, issue tax invoices, and work under an NDA whenever you need one.",
      },
      {
        question: "How long do projects usually take?",
        answer:
          "It depends on scope, but most MVPs are measured in weeks, not months. I'll map a realistic timeline in our first conversation, before you commit to anything.",
      },
      {
        question: "Can you take over a stalled project or existing code?",
        answer:
          "Yes. I start with an audit of the code, deployment, and QA to lay out the risks and the rescue scope, then focus on getting it back to a shippable state.",
      },
      {
        question: "How much of the work can you own?",
        answer:
          "Scope, design, frontend, mobile, backend, and release can all sit with one person. Hand over the whole build, or just the part you're missing.",
      },
      {
        question: "How do you handle confidentiality and security?",
        answer:
          "Exactly like this portfolio: sensitive details are fully redacted. Client information and operational data are never exposed, and confidentiality is the default, NDA or not.",
      },
      {
        question: "How does communication work across time zones?",
        answer:
          "I work in English and async, so the time-zone gap is rarely a problem. I usually reply within one business day and share progress and decision points on a regular cadence, in whatever channel you prefer.",
      },
    ],
  },
  apps: {
    eyebrow: "Personal apps",
    title: "Apps I shipped solo",
    intro:
      "Products I scoped, designed, built, and shipped to the App Store entirely on my own — each one running on-device AI so user data never leaves the phone.",
    items: [
      {
        name: "FormLab",
        tagline: "An AI coach that reads your squat form in real time, straight from the camera",
        meta: "Health & Fitness · iPhone · Mac · Vision",
        url: "https://apps.apple.com/us/app/formlab/id6758761079",
        icon: "/assets/apps/formlab.png",
      },
      {
        name: "Haru Maeum",
        tagline: "An emotion journal that on-device AI (Gemma) quietly summarizes for you",
        meta: "Lifestyle · iPhone",
        url: "https://apps.apple.com/app/id6763255363",
        icon: "/assets/apps/harumaeum.png",
      },
      {
        name: "Your Spine Is Screaming",
        tagline: "A Mac menu-bar nudge that gets long sitters back on their feet",
        meta: "Developer Tools · Mac",
        url: "https://apps.apple.com/us/app/your-spine-is-screaming/id6764452898",
        icon: "/assets/apps/spine.png",
      },
    ],
  },
  closing: {
    eyebrow: "Next step",
    title: "Want one person to carry your product all the way to launch?",
    subtitle:
      "A rough idea or a stalled project — either works. I'll start by mapping out a realistic direction, and you'll hear back within one business day.",
  },
  contactPrompts: [
    "project type",
    "target timeline",
    "web / app / backend scope",
    "what you already have",
  ],
  footer: {
    tagline: "Aconecto — registered software studio",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    support: "Support",
    rights: "© 2026 Aconecto. All rights reserved.",
  },
};
