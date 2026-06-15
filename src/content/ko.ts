import { koCases } from "./koCases";
import type { PortfolioCopy } from "./types";

export const koCopy: PortfolioCopy = {
  meta: {
    title: "Jongchan Ko / Aconecto - 풀스택 프리랜스 포트폴리오",
    description:
      "아코넥토의 Jongchan Ko가 제품 화면, 모바일 앱, 백엔드, 클라우드 배포까지 함께 설계하고 구현한 공개용 포트폴리오입니다.",
  },
  nav: {
    contact: "프로젝트 문의",
    viewWork: "작업 보기",
    languageLabel: "언어 변경",
    themeLabel: "테마 변경",
  },
  hero: {
    eyebrow: "Aconecto · 등록 소프트웨어 스튜디오",
    title: "Jongchan Ko / 아코넥토",
    subtitle:
      "어떤 기술을 쓰느냐보다, 어떻게 구현하느냐가 결과를 가릅니다. 약 5년간 직접 제품을 출시하며, 문제를 제대로 정의하고 실제로 돌아가는 형태로 끝까지 만들어 왔습니다.",
    availability: "2026년 신규 프로젝트 협의 가능 · 보통 1영업일 내 회신",
    proof: ["약 5년차 풀스택", "스펙보다 구현의 질", "기획 → 배포 단독", "실제 운영되는 결과물"],
  },
  business: {
    badge: "아코넥토 사업자 등록",
    legal: "2025년 등록된 한국 소프트웨어 개발 개인사업자",
    industry: "정보통신업 · 응용 소프트웨어 개발 및 공급업",
    since: "세금계산서 발행 · 정식 계약 가능",
  },
  trust: {
    eyebrow: "왜 아코넥토인가",
    title: "외주의 리스크를 줄이는 방식으로 일합니다",
    intro:
      "기술 스택은 부차적입니다. 같은 스펙도 어떻게 구현하느냐에 따라 결과가 갈립니다 — 저는 그 ‘어떻게’에 집중합니다.",
    points: [
      {
        title: "스펙이 아니라 구현으로",
        summary:
          "어떤 기술을 쓰는지는 부차적입니다. 문제를 제대로 정의하고, 엣지 케이스까지 닫고, 실제로 운영 가능한 형태로 끝내는 구현의 질이 결과를 가릅니다.",
      },
      {
        title: "한 사람이 끝까지",
        summary:
          "기획·디자인·프론트·앱·백엔드·배포를 한 명이 맡아, 인수인계 비용과 커뮤니케이션 손실 없이 출시까지 이어집니다.",
      },
      {
        title: "화면이 아니라 제품",
        summary:
          "UI만이 아니라 API 계약, 데이터 모델, 배포 경로, 검증까지 닫아 실제로 운영 가능한 결과물을 드립니다.",
      },
      {
        title: "안전하고 투명한 거래",
        summary:
          "등록 사업자로 정식 계약과 세금계산서가 가능하고, 진행 상황과 가능한 범위를 솔직하게 공유합니다.",
      },
    ],
  },
  process: {
    eyebrow: "작업 방식",
    title: "막연한 의뢰를, 출시 가능한 계획으로",
    intro: "처음 대화부터 인도까지, 예측 가능한 단계로 움직입니다.",
    steps: [
      {
        index: "01",
        title: "진단",
        summary:
          "목표·일정·예산·현재 자산을 함께 정리하고, 가능한 범위와 현실적인 일정을 솔직하게 제안합니다.",
      },
      {
        index: "02",
        title: "설계",
        summary:
          "화면, API 계약, 데이터 모델을 먼저 합의해 프론트와 백엔드 개발을 병렬로 진행할 수 있게 만듭니다.",
      },
      {
        index: "03",
        title: "구현",
        summary:
          "AI 워크플로로 속도를 내되, 코드 리뷰와 QA 근거를 남겨 품질을 눈으로 확인할 수 있게 합니다.",
      },
      {
        index: "04",
        title: "인도",
        summary: "배포 경로와 릴리즈 체크리스트, 이후 운영에 필요한 문서까지 정리해 넘겨 드립니다.",
      },
    ],
  },
  sections: {
    workTitle: "Selected Work",
    workIntro:
      "민감한 운영 정보와 실제 고객명은 가리고, 공개 가능한 역할·문제·기술 깊이만 재구성했습니다. 기밀을 다루는 방식 자체가 하나의 레퍼런스입니다.",
    backendTitle: "화면 뒤까지 책임집니다",
    backendIntro:
      "프론트 화면만 만드는 사람이 아니라, API 계약과 데이터 모델, 배포, 검증 흐름까지 닫는 개발자입니다. 출시 후 무너지지 않는 구조를 만듭니다.",
    servicesTitle: "함께 일하는 방식",
    servicesIntro:
      "MVP 구축부터 멈춰 있는 프로젝트의 기술 복구까지, 한 명의 시니어가 끝까지 책임지는 형태로 일합니다.",
    contactTitle: "프로젝트를 이야기해 주세요",
    contactIntro:
      "프로젝트 방향, 일정, 플랫폼, 현재 가지고 계신 자산을 알려 주시면 빠르게 정리해 다음 단계를 제안드립니다.",
  },
  capabilities: [
    {
      id: "frontend",
      label: "Frontend",
      kicker: "interface craft",
      title: "스크롤과 탭이 연결된 제품형 웹 경험",
      summary: "Next.js 대시보드, CRM/FSM 도구, 인터랙티브 랜딩과 관리자 화면을 빠르게 설계합니다.",
    },
    {
      id: "mobile",
      label: "Mobile",
      kicker: "device delivery",
      title: "Flutter와 iOS 빌드까지 이어지는 모바일 실행력",
      summary: "앱 리브랜딩, TestFlight, 웨어러블 연동, 운영 앱 화면까지 실무 흐름으로 완성합니다.",
    },
    {
      id: "backend",
      label: "Backend",
      kicker: "system depth",
      title: "API, DB, 인증, 검증 흐름을 같이 설계",
      summary:
        "Ktor, gRPC, PostgreSQL, OpenAPI 기반의 계약형 백엔드와 운영 가능한 구조를 만듭니다.",
    },
    {
      id: "cloud",
      label: "Cloud",
      kicker: "release path",
      title: "CI/CD와 클라우드 배포까지 연결",
      summary:
        "Docker, AWS, Amplify, Git 기반 릴리즈 흐름을 정리하고 안정적인 배포 경로를 만듭니다.",
    },
    {
      id: "ai",
      label: "AI-native",
      kicker: "agentic workflow",
      title: "AI와 자동화로 구현·리뷰·QA 속도 향상",
      summary:
        "문서화, 번역, 테스트, 코드 리뷰를 에이전트 워크플로로 엮어 납품 품질을 끌어올립니다.",
    },
  ],
  aiShowcase: {
    eyebrow: "AI-native delivery",
    title: "구현·리뷰·QA·문서화를 잇는 에이전트 워크플로",
    summary:
      "Claude Code·Codex·Gemini 같은 멀티에이전트 도구로 구현 속도를 높이되, 리뷰·테스트 근거와 사람의 판단을 함께 남깁니다.",
    tags: ["멀티에이전트", "코드 리뷰", "자동 QA", "문서화"],
  },
  cases: koCases,
  backendCards: [
    {
      title: "API Contracts",
      summary: "OpenAPI, gRPC, REST 계약을 먼저 세워 프론트와 앱 개발을 병렬화합니다.",
      deliverables: ["endpoint map", "schema review", "typed client handoff"],
    },
    {
      title: "Data and Security",
      summary: "PostgreSQL 모델, 권한 경계, 민감 정보 노출 방지 기준을 함께 설계합니다.",
      deliverables: ["schema draft", "access rules", "privacy scan"],
    },
    {
      title: "Release Hardening",
      summary: "Docker, CI, QA 체크리스트, 운영 전 smoke test를 묶어 배포 리스크를 낮춥니다.",
      deliverables: ["build pipeline", "release checklist", "rollback notes"],
    },
  ],
  services: [
    {
      title: "MVP Build",
      summary: "웹·앱·API를 얇고 빠르게 세워 실제 사용자 검증까지 갑니다.",
      deliverables: ["product scope", "interactive UI", "deployable backend"],
    },
    {
      title: "Frontend Systems",
      summary: "Next.js 대시보드, 관리자 도구, 제품형 랜딩을 사용성 중심으로 만듭니다.",
      deliverables: ["design system", "responsive screens", "interaction QA"],
    },
    {
      title: "Technical Rescue",
      summary: "느슨한 QA, 깨진 배포, 애매한 API 계약을 정리해 다시 출시 가능한 상태로 만듭니다.",
      deliverables: ["bug triage", "test coverage", "release recovery"],
    },
  ],
  engagement: {
    eyebrow: "요금 · 참여 방식",
    title: "프로젝트에 맞는 방식으로 시작하세요",
    intro: "모든 작업은 범위와 일정에 따라 견적을 드립니다. 아래는 자주 사용하는 참여 형태입니다.",
    note: "정해진 단가표 대신, 첫 대화에서 범위·일정·예산을 함께 보고 현실적인 견적을 제안드립니다.",
    tiers: [
      {
        name: "프로젝트 패키지",
        bestFor: "출시 목표가 분명한 MVP · 신규 제품",
        cadence: "고정 범위 · 고정 견적",
        includes: [
          "범위·일정 확정 견적",
          "기획부터 배포까지 일괄 진행",
          "릴리즈 체크리스트와 인수 문서",
        ],
      },
      {
        name: "주 단위 리테이너",
        bestFor: "지속 개선이 필요한 운영 중 제품",
        cadence: "주 단위 계약 · 유연한 범위",
        includes: ["주마다 우선순위 합의", "기능 추가·개선 유연 대응", "정기 진행 상황 공유"],
      },
      {
        name: "기술 진단 · 구조 복구",
        bestFor: "멈췄거나 불안정한 코드베이스",
        cadence: "단기 집중 진단",
        includes: ["코드·배포·QA 점검", "리스크 리포트", "다시 출시 가능한 복구 로드맵"],
      },
    ],
  },
  faq: {
    eyebrow: "자주 묻는 질문",
    title: "의뢰 전에 궁금하실 점",
    items: [
      {
        question: "세금계산서 발행과 정식 계약이 가능한가요?",
        answer:
          "네. 2025년 등록된 소프트웨어 개인사업자로, 정식 계약과 세금계산서 발행이 가능합니다. 필요하시면 NDA도 함께 진행합니다.",
      },
      {
        question: "보통 일정은 얼마나 걸리나요?",
        answer:
          "범위에 따라 다르지만 MVP는 보통 수 주 단위로 잡습니다. 첫 대화에서 현실적인 일정을 먼저 정리해 제안드립니다.",
      },
      {
        question: "멈춰 있는 프로젝트나 기존 코드를 이어받을 수 있나요?",
        answer:
          "가능합니다. 먼저 코드·배포·QA를 진단해 리스크와 복구 범위를 정리한 뒤, 다시 출시 가능한 상태로 만드는 데 집중합니다.",
      },
      {
        question: "어디까지 맡길 수 있나요?",
        answer:
          "기획·디자인·프론트·앱·백엔드·배포까지 한 사람이 이어서 진행합니다. 전체를 맡기셔도 되고, 필요한 범위만 선택하셔도 됩니다.",
      },
      {
        question: "비공개와 보안은 어떻게 다루나요?",
        answer:
          "이 포트폴리오처럼 민감한 정보는 철저히 가립니다. 고객사 정보와 운영 데이터는 공개하지 않으며, 기밀 유지가 기본 원칙입니다.",
      },
      {
        question: "소통은 어떤 방식으로 하나요?",
        answer:
          "보통 1영업일 안에 회신하고, 진행 상황과 의사결정이 필요한 지점을 정기적으로 공유합니다. 선호하시는 채널에 맞춰 드립니다.",
      },
    ],
  },
  apps: {
    eyebrow: "Personal Apps",
    title: "직접 출시한 앱",
    intro:
      "기획·디자인·개발·배포까지 혼자 끝내고 App Store에 올린 제품들. 모두 온디바이스 AI로 데이터를 기기 안에서만 처리합니다.",
    items: [
      {
        name: "FormLab",
        tagline: "카메라로 스쿼트 자세를 실시간 분석하는 AI 코치",
        meta: "Health & Fitness · iPhone · Mac · Vision",
        url: "https://apps.apple.com/us/app/formlab/id6758761079",
        icon: "/assets/apps/formlab.png",
      },
      {
        name: "하루마음",
        tagline: "온디바이스 AI(Gemma)가 하루를 정리해 주는 감정 일기",
        meta: "Lifestyle · iPhone",
        url: "https://apps.apple.com/app/id6763255363",
        icon: "/assets/apps/harumaeum.png",
      },
      {
        name: "Your Spine Is Screaming",
        tagline: "오래 앉은 당신을 일으키는 Mac 메뉴바 알림",
        meta: "Developer Tools · Mac",
        url: "https://apps.apple.com/us/app/your-spine-is-screaming/id6764452898",
        icon: "/assets/apps/spine.png",
      },
    ],
  },
  closing: {
    eyebrow: "다음 단계",
    title: "지금 만들고 계신 제품, 끝까지 같이 닫을까요?",
    subtitle:
      "간단한 아이디어든, 멈춰 있는 프로젝트든 괜찮습니다. 먼저 현실적인 방향부터 정리해 드립니다.",
  },
  contactPrompts: ["프로젝트 유형", "희망 일정", "웹 / 앱 / 백엔드 범위", "현재 자료와 레퍼런스"],
  footer: {
    tagline: "Aconecto — 등록 소프트웨어 스튜디오",
    privacy: "개인정보처리방침",
    terms: "이용약관",
    support: "고객 지원",
    rights: "© 2026 Aconecto. All rights reserved.",
  },
};
