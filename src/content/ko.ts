import { koCases } from "./koCases";
import type { PortfolioCopy } from "./types";

export const koCopy: PortfolioCopy = {
  meta: {
    title: "풀스택 프리랜서 개발자 · 웹·앱·백엔드 외주 개발 | 아코넥토",
    description:
      "웹·모바일·백엔드·클라우드까지 한 사람이 기획부터 배포까지 책임지는 풀스택 프리랜서 개발자. MVP 구축·외주 개발·기술 복구까지, 정식 계약과 세금계산서 발행이 가능한 등록 소프트웨어 스튜디오 아코넥토(Jongchan Ko).",
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
      "어떤 기술을 쓰느냐보다, 어떻게 구현하느냐가 결과를 가릅니다. 약 5년간 직접 제품을 출시하며, 진짜 문제를 찾아 실제로 운영되는 형태까지 끝맺는 법을 익혔습니다.",
    availability:
      "2026년 신규 프로젝트 협의 가능 · 영어로 시차를 넘어 비동기 협업하며, 보통 1영업일 안에 회신합니다.",
    proof: [
      "약 5년차 풀스택",
      "스펙보다 구현의 질",
      "기획부터 배포까지 단독",
      "출시 후에도 멈추지 않는 결과물",
    ],
  },
  business: {
    badge: "아코넥토 사업자 등록",
    legal: "2025년 등록된 한국 소프트웨어 개발 개인사업자",
    industry: "정보통신업 · 응용 소프트웨어 개발 및 공급업",
    since: "정식 계약 · NDA · 세금계산서 발행 가능",
  },
  trust: {
    eyebrow: "왜 아코넥토인가",
    title: "외주의 리스크를 덜어내는 방식으로 일합니다",
    intro:
      "기술 스택은 쉬운 쪽입니다. 같은 스펙도 어떻게 구현하느냐에 따라 결과가 크게 갈립니다 — 저는 그 ‘어떻게’에서 가장 잘합니다.",
    points: [
      {
        title: "스펙이 아니라 구현으로",
        summary:
          "어떤 기술을 쓰는지는 부차적입니다. 진짜 문제를 찾고, 엣지 케이스까지 닫고, 운영 환경에서 실제로 버티는 형태로 끝맺는 구현의 질이 결과를 가릅니다.",
      },
      {
        title: "한 사람이 끝까지",
        summary:
          "기획·디자인·프론트·앱·백엔드·배포를 한 명이 맡습니다. 인수인계도, 업체 간 맥락 손실도, 책임 떠넘기기도 없습니다.",
      },
      {
        title: "화면이 아니라 제품",
        summary:
          "UI 너머의 API 계약, 데이터 모델, 배포 경로, 테스트까지 직접 책임집니다. 데모가 아니라 실제로 돌아가는 제품을 출시하도록.",
      },
      {
        title: "안전하고 투명한 협업",
        summary:
          "등록 사업자로 정식 계약·NDA·세금계산서가 가능하고, 범위·진행 상황·트레이드오프를 영어로도 솔직하게, 원하시는 일정에 맞춰 공유합니다.",
      },
    ],
  },
  process: {
    eyebrow: "작업 방식",
    title: "막연한 아이디어를, 출시할 수 있는 계획으로",
    intro: "첫 메시지부터 인도까지, 명확하고 예측 가능한 단계로 움직입니다.",
    steps: [
      {
        index: "01",
        title: "진단",
        summary:
          "목표·일정·예산·기존 자산을 함께 정리합니다. 그리고 현실적인 범위와 일정을 솔직하게 제안합니다 — ‘더 작게 가자’는 답이 솔직한 답일 때조차도요.",
      },
      {
        index: "02",
        title: "설계",
        summary:
          "화면, API 계약, 데이터 모델을 먼저 합의해 프론트와 백엔드를 병렬로 진행하고, 뒤늦은 변수가 생기지 않게 합니다.",
      },
      {
        index: "03",
        title: "구현",
        summary:
          "AI 워크플로로 속도를 내되, 단계마다 코드 리뷰와 QA 근거를 남겨 품질을 눈으로 확인할 수 있게 합니다.",
      },
      {
        index: "04",
        title: "인도",
        summary:
          "배포 경로, 릴리즈 체크리스트, 직접 운영하는 데 필요한 문서까지 넘겨 드립니다. 종속될 일이 없도록.",
      },
    ],
  },
  sections: {
    workTitle: "Selected Work",
    workIntro:
      "민감한 운영 정보와 실제 고객명은 가리고, 맡은 역할·전달한 결과의 형태·기술 깊이만 재구성했습니다. 여기서 기밀을 다룬 방식 자체가 하나의 레퍼런스입니다.",
    backendTitle: "화면 뒤까지 책임집니다",
    backendIntro:
      "프론트 화면만 만드는 사람이 아닙니다. API 계약, 데이터 모델, 배포 경로, 테스트 흐름까지 — 출시 한참 뒤에도 버텨야 하는 구조를 직접 책임집니다.",
    servicesTitle: "함께 일하는 방식",
    servicesIntro:
      "새 MVP 구축부터 멈춰 있는 코드베이스의 기술 복구까지, 한 명의 시니어가 끝까지 책임지는 형태로 일합니다.",
    contactTitle: "프로젝트를 이야기해 주세요",
    contactIntro:
      "프로젝트 유형, 일정, 플랫폼, 이미 가지고 계신 자료를 알려 주세요. 명확하고 솔직한 다음 단계로 회신드립니다.",
  },
  capabilities: [
    {
      id: "frontend",
      label: "Frontend",
      kicker: "interface craft",
      title: "디테일까지 맞아떨어지는 제품형 웹 인터페이스",
      summary:
        "대시보드, CRM·현장 서비스 도구, 인터랙티브 사이트, 관리자 화면을 — 흔한 템플릿이 아니라 손이 간 UI로 만듭니다.",
    },
    {
      id: "mobile",
      label: "Mobile",
      kicker: "device delivery",
      title: "첫 화면부터 스토어 출시까지 끌고 가는 모바일",
      summary:
        "앱 리브랜딩, 웨어러블 연동, 로컬 빌드를 거쳐 TestFlight로 App Store까지 출시합니다.",
    },
    {
      id: "backend",
      label: "Backend",
      kicker: "system depth",
      title: "API·DB·인증·테스트를 하나로 설계",
      summary:
        "프론트와 앱이 첫날부터 붙여 개발할 수 있는, 배포 가능한 구조의 계약형 백엔드를 만듭니다.",
    },
    {
      id: "cloud",
      label: "Cloud",
      kicker: "release path",
      title: "출시일을 평온하게 만드는 배포와 CI/CD",
      summary:
        "컨테이너 빌드, 클라우드 호스팅, Git 기반 릴리즈 흐름, smoke test까지 묶어 출시일을 지루하게 만듭니다.",
    },
    {
      id: "ai",
      label: "AI-native",
      kicker: "agentic workflow",
      title: "AI로 구현·리뷰·QA·문서화 속도 향상",
      summary:
        "추적 가능성과 사람의 판단을 포기하지 않으면서 납품 속도를 높이는 에이전트 워크플로.",
    },
  ],
  aiShowcase: {
    eyebrow: "AI-native delivery",
    title: "구현·리뷰·QA·문서화를 잇는 에이전트 워크플로",
    summary:
      "Claude Code·Codex·Gemini 같은 멀티에이전트 도구로 구현 속도를 높이되, 리뷰·테스트 근거와 사람의 판단은 끝까지 흐름 안에 둡니다.",
    tags: ["멀티에이전트", "코드 리뷰", "자동 QA", "문서화"],
  },
  cases: koCases,
  backendCards: [
    {
      title: "API Contracts",
      summary: "OpenAPI·gRPC·REST 계약을 먼저 세워, 웹과 앱이 추측 없이 병렬로 개발하게 합니다.",
      deliverables: ["endpoint map", "schema review", "typed client handoff"],
    },
    {
      title: "Data and Security",
      summary:
        "PostgreSQL 모델, 권한 경계, 민감 정보 처리를 나중에 덧붙이지 않고 처음부터 함께 설계합니다.",
      deliverables: ["schema draft", "access rules", "privacy scan"],
    },
    {
      title: "Release Hardening",
      summary:
        "컨테이너 빌드·CI·QA 체크리스트·smoke test로, 무언가 배포되기 전에 출시 리스크를 줄입니다.",
      deliverables: ["build pipeline", "release checklist", "rollback notes"],
    },
  ],
  services: [
    {
      title: "MVP Build",
      summary: "실제 사용자와 진짜 피드백까지 빠르게 닿도록, 핵심만 추린 웹·앱·API를 만듭니다.",
      deliverables: ["product scope", "interactive UI", "deployable backend"],
    },
    {
      title: "Frontend Systems",
      summary: "대시보드, 관리자 도구, 제품형 사이트를 — 매일 쓰는 사람을 기준으로 만듭니다.",
      deliverables: ["design system", "responsive screens", "interaction QA"],
    },
    {
      title: "Technical Rescue",
      summary:
        "느슨한 QA, 멈춘 배포, 엉킨 API 계약을 풀어 안정화하고, 멈춰 있던 팀이 다시 움직이게 합니다.",
      deliverables: ["bug triage", "test coverage", "release recovery"],
    },
  ],
  engagement: {
    eyebrow: "요금 · 참여 방식",
    title: "프로젝트에 맞는 방식으로 시작하세요",
    intro: "모든 작업은 범위와 일정에 따라 견적을 드립니다. 아래는 자주 사용하는 참여 형태입니다.",
    note: "정해진 단가표 대신, 첫 대화에서 범위·일정·예산을 함께 보고 현실적인 견적을 서면으로 보내 드립니다.",
    tiers: [
      {
        name: "프로젝트 패키지",
        bestFor: "출시 목표가 분명한 MVP · 신규 제품",
        cadence: "고정 범위 · 고정 견적",
        includes: [
          "범위·일정을 확정한 견적",
          "기획부터 출시까지 일괄 진행",
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
    title: "시작 전에 궁금하실 점",
    items: [
      {
        question: "정식 계약과 세금계산서 발행이 가능한가요?",
        answer:
          "네. 아코넥토는 2025년 등록된 한국 소프트웨어 개인사업자라, 정식 계약과 세금계산서 발행이 가능하고 필요하실 때 NDA도 함께 진행합니다.",
      },
      {
        question: "보통 일정은 얼마나 걸리나요?",
        answer:
          "범위에 따라 다르지만 대부분의 MVP는 달 단위가 아니라 주 단위입니다. 약속하시기 전에, 첫 대화에서 현실적인 일정을 먼저 정리해 드립니다.",
      },
      {
        question: "멈춰 있는 프로젝트나 기존 코드를 이어받을 수 있나요?",
        answer:
          "가능합니다. 먼저 코드·배포·QA를 진단해 리스크와 복구 범위를 펼쳐 보인 뒤, 다시 출시 가능한 상태로 되돌리는 데 집중합니다.",
      },
      {
        question: "작업을 어디까지 맡길 수 있나요?",
        answer:
          "기획·디자인·프론트·앱·백엔드·배포까지 한 사람이 맡습니다. 전체를 맡기셔도 되고, 비어 있는 부분만 채우셔도 됩니다.",
      },
      {
        question: "비공개와 보안은 어떻게 다루나요?",
        answer:
          "이 포트폴리오와 똑같습니다. 민감한 정보는 철저히 가리고, 고객사 정보와 운영 데이터는 절대 노출하지 않으며, NDA 여부와 무관하게 기밀 유지가 기본입니다.",
      },
      {
        question: "시차를 넘는 소통은 어떻게 하나요?",
        answer:
          "영어로, 비동기로 일하기 때문에 시차가 문제가 되는 일은 드뭅니다. 보통 1영업일 안에 회신하고, 진행 상황과 의사결정 지점을 선호하시는 채널에서 정기적으로 공유합니다.",
      },
    ],
  },
  apps: {
    eyebrow: "Personal Apps",
    title: "직접 출시한 앱",
    intro:
      "기획·디자인·개발·배포까지 혼자 끝내 App Store에 올린 제품들. 모두 온디바이스 AI로, 사용자 데이터가 기기 밖으로 나가지 않습니다.",
    items: [
      {
        name: "FormLab",
        tagline: "카메라만으로 스쿼트 자세를 실시간으로 읽어 주는 AI 코치",
        meta: "Health & Fitness · iPhone · Mac · Vision",
        url: "https://apps.apple.com/us/app/formlab/id6758761079",
        icon: "/assets/apps/formlab.png",
      },
      {
        name: "하루마음",
        tagline: "온디바이스 AI(Gemma)가 하루를 조용히 정리해 주는 감정 일기",
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
    title: "한 사람이 제품을 출시까지 끌고 가길 원하시나요?",
    subtitle:
      "간단한 아이디어든, 멈춰 있는 프로젝트든 괜찮습니다. 먼저 현실적인 방향부터 정리해, 1영업일 안에 회신드립니다.",
  },
  contactPrompts: ["프로젝트 유형", "희망 일정", "웹 / 앱 / 백엔드 범위", "이미 가지고 계신 자료"],
  footer: {
    tagline: "Aconecto — 등록 소프트웨어 스튜디오",
    privacy: "개인정보처리방침",
    terms: "이용약관",
    support: "고객 지원",
    rights: "© 2026 Aconecto. All rights reserved.",
  },
};
