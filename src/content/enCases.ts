import type { CaseStudy } from "./types";

export const enCases: readonly CaseStudy[] = [
  {
    id: "nextpros",
    capabilityId: "backend",
    name: "NextPros",
    publicName: "NextPros — Voice AI Back Office for Trades",
    eyebrow: "NextPros · full-stack · live product",
    summary:
      "A voice-AI back office for US plumbing and electrical trades — turning a single spoken sentence into the schedule, the invoice, and the follow-up. Built end-to-end across web, mobile, backend, and cloud.",
    impact: [
      "247 gRPC endpoints designed from 13 proto definitions",
      "Next.js admin and Flutter app monorepo built in parallel",
      "AWS deploy and CI/CD automation that shortened release time",
    ],
    stack: ["Next.js", "Ktor", "gRPC", "Flutter", "AWS"],
    asset: "/assets/cases/nextpros-suite.png",
    alt: "NextPros voice-AI back office product screen",
    detail: {
      label: "Specs",
      overview:
        "A single product flow tying a contract-first backend, multi-platform apps, and cloud delivery together so field workers manage schedule, customers, and invoices hands-free by voice.",
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
        "release automation",
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
      "A VIV smart-ring delivery story spanning iOS app structure, NestJS API boundaries, local Swift packages, and TestFlight readiness.",
    impact: [
      "smart-ring app architecture",
      "NestJS API and database flow",
      "iOS build and package readiness",
    ],
    stack: ["Swift", "NestJS", "MySQL", "Liquibase", "TestFlight"],
    asset: "/assets/cases/vivring-command-center.svg",
    alt: "Recreated VIV smart-ring product command center",
    detail: {
      label: "Specs",
      overview:
        "A product-level map of the wearable ring app, server boundary, database migration path, and release readiness.",
      specs: [
        { label: "Mobile app", value: "iOS screen structure and local Swift packages" },
        { label: "NestJS API boundary", value: "user, device, and health-data domains" },
        { label: "DB migration", value: "MySQL schema with Liquibase change control" },
        { label: "TestFlight readiness", value: "build path, package review, release checks" },
      ],
      delivery: [
        "smart-ring app structure",
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
      "An operator console and API workflow for smart-device charging compatibility testing, with an information architecture built for fast comparison and decisions.",
    impact: [
      "operator console UX and IA",
      "OpenAPI documentation flow",
      "PostgreSQL data modeling",
    ],
    stack: ["Next.js", "OpenAPI", "PostgreSQL", "Docker"],
    asset: "/assets/cases/smartcharge-console.svg",
    alt: "Recreated Smartcharge dashboard visual",
    detail: {
      label: "Specs",
      overview:
        "An operator console for comparing charging-compatibility data while keeping test queues and API contracts visible.",
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
      "A social crowdfunding app used by 1,000+ creators and 8,000+ supporters. Re-architected from a legacy structure into clean architecture, with payments, real-time, and automated store releases.",
    impact: [
      "GetX→Riverpod clean-architecture migration (35 screens)",
      "Toss payments, real-time chat, and FCM push",
      "Fastlane + GitHub Actions store auto-deploy",
    ],
    stack: ["Flutter", "Riverpod", "REST", "WebSocket", "CI/CD"],
    asset: "/assets/cases/backersby-app.svg",
    alt: "Recreated Backersby creator-support app screens",
    detail: {
      label: "Specs",
      overview:
        "A legacy app redesigned into data/domain/presentation layers — roughly 40% faster feature work — with payments, real-time, and a release pipeline hardened for steady operation.",
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
