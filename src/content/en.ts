import { enCases } from "./enCases";
import type { PortfolioCopy } from "./types";

export const enCopy: PortfolioCopy = {
  meta: {
    title: "Jongchan Ko / Aconecto - Full-stack Freelance Portfolio",
    description:
      "A bilingual portfolio for Aconecto, showing Jongchan Ko's frontend, mobile, backend, and cloud delivery work with sanitized case studies.",
  },
  nav: {
    contact: "Start a project",
    viewWork: "View Work",
    languageLabel: "Change language",
    themeLabel: "Toggle theme",
  },
  hero: {
    eyebrow: "Aconecto · registered software studio",
    title: "Jongchan Ko / Aconecto",
    subtitle:
      "A full-stack engineer who isn't tied to one stack. Across ~5 years I've shipped on iOS, Android, web, backend, and cloud — and I learn whatever spec your project needs, owning it from scope to release.",
    availability: "Available for new 2026 projects · usually replies within one business day",
    proof: [
      "~5 yrs full-stack",
      "stack-agnostic",
      "web · app · backend · cloud",
      "scope → release, solo",
    ],
  },
  business: {
    badge: "Aconecto business registration",
    legal: "registered Korean software business since 2025",
    industry: "Information and communication · application software development and supply",
    since: "Formal contracts and tax invoices available",
  },
  trust: {
    eyebrow: "Why Aconecto",
    title: "Built to lower the risk of outsourcing",
    intro:
      "Stack is just a tool. I work by what gets better when you hand it over — not by which technology happens to be used.",
    points: [
      {
        title: "Handles any spec",
        summary:
          "I don't insist on one stack. I've shipped across iOS, Flutter, Next.js, Ktor, FastAPI, gRPC, AWS and more, and I pick up whatever technology your project runs on.",
      },
      {
        title: "One owner, end to end",
        summary:
          "Scope, design, frontend, mobile, backend, and release sit with one person — no handoff cost, no lost context between vendors.",
      },
      {
        title: "Products, not just screens",
        summary:
          "Beyond UI, I close the API contracts, data models, deployment paths, and verification — so what ships actually runs.",
      },
      {
        title: "Safe, transparent engagement",
        summary:
          "A registered business with formal contracts and tax invoices, plus honest updates on scope, progress, and trade-offs.",
      },
    ],
  },
  process: {
    eyebrow: "How I work",
    title: "From a vague request to a shippable plan",
    intro: "From the first conversation to handoff, the work moves in predictable steps.",
    steps: [
      {
        index: "01",
        title: "Diagnose",
        summary:
          "We line up goals, timeline, budget, and current assets — then I propose a realistic scope and schedule, honestly.",
      },
      {
        index: "02",
        title: "Design",
        summary:
          "Screens, API contracts, and data models are agreed first, so frontend and backend can move in parallel.",
      },
      {
        index: "03",
        title: "Build",
        summary:
          "AI-assisted workflows keep delivery fast while code review and QA evidence keep quality visible.",
      },
      {
        index: "04",
        title: "Hand off",
        summary:
          "Deployment paths, a release checklist, and the docs you need to operate it are handed over with the build.",
      },
    ],
  },
  sections: {
    workTitle: "Selected Work",
    workIntro:
      "Client-sensitive details and real names are redacted. The public story focuses on role, delivery shape, and technical depth — how confidentiality is handled is itself a reference.",
    backendTitle: "Ownership past the screen",
    backendIntro:
      "Not just screens: I own API contracts, data models, deployment paths, and verification loops — structures that hold up after launch.",
    servicesTitle: "Ways we can work together",
    servicesIntro:
      "From MVP builds to rescuing a stalled codebase — senior ownership that carries the work all the way through.",
    contactTitle: "Tell me about your project",
    contactIntro:
      "Share the project type, timeline, target platform, and current assets. I will respond with a clear next step.",
  },
  capabilities: [
    {
      id: "frontend",
      label: "Frontend",
      kicker: "interface craft",
      title: "Product-grade web experiences with scroll-synced systems",
      summary:
        "Next.js dashboards, CRM/FSM tools, interactive sites, and admin products with sharp UI detail.",
    },
    {
      id: "mobile",
      label: "Mobile",
      kicker: "device delivery",
      title: "Flutter and iOS delivery from UI to TestFlight",
      summary:
        "Rebrands, wearable flows, local builds, app screens, and release-ready mobile execution.",
    },
    {
      id: "backend",
      label: "Backend",
      kicker: "system depth",
      title: "API, database, auth, and verification designed together",
      summary:
        "Contract-first backend work with Ktor, gRPC, PostgreSQL, OpenAPI, and deployable structure.",
    },
    {
      id: "cloud",
      label: "Cloud",
      kicker: "release path",
      title: "Cloud deployment and CI/CD that make launches calmer",
      summary: "Docker, AWS, Amplify, Git workflows, smoke tests, and release hardening.",
    },
    {
      id: "ai",
      label: "AI-native",
      kicker: "agentic workflow",
      title: "AI-assisted implementation, review, QA, and documentation",
      summary:
        "Agentic workflows for faster delivery without losing traceability or human judgment.",
    },
  ],
  aiShowcase: {
    eyebrow: "AI-native delivery",
    title: "An agent workflow across build, review, QA, and docs",
    summary:
      "Multi-agent tooling like Claude Code, Codex, and Gemini speeds up delivery while keeping review evidence, tests, and human judgment in the loop.",
    tags: ["multi-agent", "code review", "automated QA", "documentation"],
  },
  cases: enCases,
  backendCards: [
    {
      title: "API Contracts",
      summary: "OpenAPI, gRPC, and REST contracts help web and mobile work move in parallel.",
      deliverables: ["endpoint map", "schema review", "typed client handoff"],
    },
    {
      title: "Data and Security",
      summary:
        "PostgreSQL models, access boundaries, and public-content safety are designed together.",
      deliverables: ["schema draft", "access rules", "privacy scan"],
    },
    {
      title: "Release Hardening",
      summary: "Docker, CI, QA checklists, and smoke tests reduce launch risk before handoff.",
      deliverables: ["build pipeline", "release checklist", "rollback notes"],
    },
  ],
  services: [
    {
      title: "MVP Build",
      summary: "Lean web, app, and API builds that can reach real user validation quickly.",
      deliverables: ["product scope", "interactive UI", "deployable backend"],
    },
    {
      title: "Frontend Systems",
      summary:
        "Next.js dashboards, admin tools, and product sites built for daily operational use.",
      deliverables: ["design system", "responsive screens", "interaction QA"],
    },
    {
      title: "Technical Rescue",
      summary:
        "QA repair, release recovery, API contract cleanup, and stabilization for stuck teams.",
      deliverables: ["bug triage", "test coverage", "release recovery"],
    },
  ],
  engagement: {
    eyebrow: "Pricing · how we engage",
    title: "Start in the format that fits your project",
    intro: "Every engagement is quoted by scope and timeline. These are the formats I use most.",
    note: "Instead of a fixed rate card, the first conversation looks at scope, timeline, and budget together — then I propose a realistic quote.",
    tiers: [
      {
        name: "Project package",
        bestFor: "MVPs and new products with a clear launch goal",
        cadence: "Fixed scope · fixed quote",
        includes: [
          "scope and timeline locked in a quote",
          "scope-to-launch delivery",
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
        includes: ["code, deploy, and QA review", "risk report", "a roadmap back to shippable"],
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "What clients ask before starting",
    items: [
      {
        question: "Can you issue formal contracts and tax invoices?",
        answer:
          "Yes. As a Korean software business registered since 2025, I can sign formal contracts and issue tax invoices, and work under an NDA when needed.",
      },
      {
        question: "How long do projects usually take?",
        answer:
          "It depends on scope, but MVPs are usually measured in weeks. I map a realistic timeline in the first conversation before any commitment.",
      },
      {
        question: "Can you take over a stalled project or existing code?",
        answer:
          "Yes. I start by auditing the code, deployment, and QA to map the risks and rescue scope, then focus on getting it back to shippable.",
      },
      {
        question: "How much can you own?",
        answer:
          "Scope, design, frontend, mobile, backend, and release can all sit with one person. Hand over the whole build, or just the parts you need.",
      },
      {
        question: "How do you handle confidentiality and security?",
        answer:
          "Like this portfolio, sensitive details are fully redacted. Client information and operational data are never exposed; confidentiality is the default.",
      },
      {
        question: "How does communication work?",
        answer:
          "I usually reply within one business day and share progress and decision points on a regular cadence, in the channel you prefer.",
      },
    ],
  },
  apps: {
    eyebrow: "Personal Apps",
    title: "Apps I shipped solo",
    intro:
      "Products I scoped, designed, built, and shipped to the App Store on my own — each one keeping data on-device with local AI.",
    items: [
      {
        name: "FormLab",
        tagline: "An AI coach that analyzes your squat form in real time from the camera",
        meta: "Health & Fitness · iPhone · Mac · Vision",
        url: "https://apps.apple.com/us/app/formlab/id6758761079",
        icon: "/assets/apps/formlab.png",
      },
      {
        name: "Haru Maeum",
        tagline: "An emotion diary summarized by on-device AI (Gemma)",
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
      "A rough idea or a stalled project — either is fine. I will start by mapping a realistic direction.",
  },
  contactPrompts: [
    "project type",
    "target timeline",
    "web / app / backend scope",
    "current assets and references",
  ],
  footer: {
    tagline: "Aconecto — registered software studio",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    support: "Support",
    rights: "© 2026 Aconecto. All rights reserved.",
  },
};
