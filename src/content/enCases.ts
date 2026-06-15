import type { CaseStudy } from "./types";

export const enCases: readonly CaseStudy[] = [
  {
    id: "nextpros",
    capabilityId: "backend",
    name: "NextPros",
    publicName: "NextPros — Voice AI Back Office for Trades",
    eyebrow: "NextPros · full-stack · live product",
    summary:
      "A voice-AI back office for US plumbing and electrical trades that turns a single spoken sentence into a schedule, an invoice, and a follow-up. I built it end to end — web, mobile, backend, and cloud.",
    impact: [
      "Designed 247 gRPC endpoints from 13 proto definitions",
      "Shipped a Next.js admin and a Flutter app from one monorepo, in parallel",
      "Automated AWS deploys and CI/CD to cut release time",
    ],
    stack: ["Next.js", "Ktor", "gRPC", "Flutter", "AWS"],
    asset: "/assets/cases/nextpros-suite.png",
    alt: "NextPros voice-AI back office product screen",
    detail: {
      label: "Specs",
      overview:
        "One product flow tying a contract-first backend, multi-platform apps, and cloud delivery together — so field workers manage their schedule, customers, and invoices hands-free, by voice.",
      specs: [
        { label: "Backend", value: "Kotlin·Ktor · 247 gRPC endpoints from 13 protos · MySQL" },
        {
          label: "Web·App",
          value: "Next.js admin dashboard · Flutter monorepo (multiple build targets)",
        },
        { label: "Cloud", value: "AWS Amplify·ECS deploy · GitHub Actions CI/CD" },
        { label: "AI workflow", value: "Voice-first interface · real-time gRPC streaming" },
      ],
      delivery: [
        "contract-first gRPC design",
        "parallel web and app delivery",
        "release automation that shortened deploys",
      ],
    },
  },
  {
    id: "vivring",
    capabilityId: "mobile",
    name: "VIV / vivring",
    publicName: "VIV Ring Intelligence Platform",
    eyebrow: "VIV Ring · wearable app + backend",
    summary:
      "A VIV smart-ring delivery spanning the iOS app architecture, NestJS API boundaries, local Swift packages, and a TestFlight-ready release path.",
    impact: [
      "Architected the smart-ring iOS app",
      "Drew the NestJS API and database boundaries",
      "Prepared iOS builds and packages for release",
    ],
    stack: ["Swift", "NestJS", "MySQL", "Liquibase", "TestFlight"],
    asset: "/assets/cases/vivring-command-center.svg",
    alt: "Recreated VIV smart-ring product command center",
    detail: {
      label: "Specs",
      overview:
        "A product-level map of the wearable ring: the app architecture, the server boundary, the database migration path, and what it takes to be release-ready.",
      specs: [
        { label: "Mobile app", value: "iOS screen structure and local Swift packages" },
        { label: "NestJS API boundary", value: "user, device, and health-data domains" },
        { label: "DB migration", value: "MySQL schema with Liquibase change control" },
        { label: "TestFlight readiness", value: "build path, package review, release checks" },
      ],
      delivery: [
        "smart-ring app architecture",
        "API and database responsibility map",
        "iOS build and release preparation",
      ],
    },
  },
  {
    id: "smartcharge",
    capabilityId: "frontend",
    name: "Smartcharge",
    publicName: "Smart Device Charging Compatibility Automation",
    eyebrow: "Smartcharge · dashboard + API",
    summary:
      "An operator console and API workflow for smart-device charging-compatibility testing, with an information architecture built for fast comparison and faster decisions.",
    impact: [
      "Designed the operator console UX and information architecture",
      "Built the OpenAPI documentation flow",
      "Modeled the PostgreSQL data layer",
    ],
    stack: ["Next.js", "OpenAPI", "PostgreSQL", "Docker"],
    asset: "/assets/cases/smartcharge-console.svg",
    alt: "Recreated Smartcharge dashboard visual",
    detail: {
      label: "Specs",
      overview:
        "An operator console for comparing charging-compatibility data while keeping the test queue and the underlying API contracts in plain view.",
      specs: [
        { label: "Surface", value: "device matrix, review queue, result summary" },
        { label: "API contract", value: "OpenAPI request and response flow" },
        { label: "Data model", value: "PostgreSQL test batch and compatibility states" },
        { label: "Ops path", value: "Docker-backed local and release verification" },
      ],
      delivery: [
        "admin information architecture",
        "API documentation flow",
        "data state to UI state mapping",
      ],
    },
  },
  {
    id: "backersby",
    capabilityId: "cloud",
    name: "Backersby",
    publicName: "Backersby — Creator Support Platform",
    eyebrow: "Backersby · mobile + payments + auto-deploy",
    summary:
      "A social crowdfunding app used by 1,000+ creators and 8,000+ supporters. I re-architected it from a tangled legacy codebase into clean architecture, with payments, real-time features, and automated store releases.",
    impact: [
      "Migrated GetX to Riverpod clean architecture across 35 screens",
      "Built Toss payments, real-time chat, and FCM push",
      "Set up Fastlane + GitHub Actions for store auto-deploy",
    ],
    stack: ["Flutter", "Riverpod", "REST", "WebSocket", "CI/CD"],
    asset: "/assets/cases/backersby-app.svg",
    alt: "Recreated Backersby creator-support app screens",
    detail: {
      label: "Specs",
      overview:
        "A legacy app rebuilt into clean data, domain, and presentation layers — making feature work roughly 40% faster — with payments, real-time features, and a release pipeline hardened for steady, day-to-day operation.",
      specs: [
        {
          label: "Architecture",
          value: "GetX→Riverpod clean architecture · 35 screens · 60+ custom widgets",
        },
        {
          label: "Core features",
          value: "Toss payments (one-time + subscription), real-time chat and feed, FCM push",
        },
        { label: "Shared modules", value: "FCM·Hive·Dio·Retrofit·GoRouter managed app-wide" },
        {
          label: "Release",
          value: "Fastlane + GitHub Actions auto-deploy to App Store and Play Store",
        },
      ],
      delivery: [
        "legacy re-architecture",
        "payments and real-time hardening",
        "store auto-deploy pipeline",
      ],
    },
  },
];
