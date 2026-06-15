import type { CaseStudy } from "./types";

export const koCases: readonly CaseStudy[] = [
  {
    id: "nextpros",
    capabilityId: "backend",
    name: "NextPros",
    publicName: "NextPros — Voice AI Back Office for Trades",
    eyebrow: "NextPros · 풀스택 · 라이브 서비스",
    summary:
      "미국 배관·전기 트레이드 사업자를 위한 보이스 AI 백오피스. 음성 한 문장을 일정·인보이스·후속 작업으로 바꿔 주는 제품을, 웹·앱·백엔드·클라우드까지 한 사람이 끝까지 만들었습니다.",
    impact: [
      "13개 proto에서 247개 gRPC 엔드포인트 설계",
      "Next.js 관리자와 Flutter 앱을 하나의 모노레포에서 병렬 개발",
      "AWS 배포·CI/CD 자동화로 릴리즈 시간 단축",
    ],
    stack: ["Next.js", "Ktor", "gRPC", "Flutter", "AWS"],
    asset: "/assets/cases/nextpros-suite.png",
    alt: "NextPros 보이스 AI 백오피스 제품 화면",
    detail: {
      label: "상세 스펙",
      overview:
        "현장 작업자가 손을 쓰지 않고 음성만으로 일정·고객·인보이스를 관리하도록, 계약형 백엔드와 멀티플랫폼 앱, 클라우드 배포를 하나의 제품 흐름으로 묶은 케이스입니다.",
      specs: [
        { label: "백엔드", value: "Kotlin·Ktor · 13개 proto에서 247개 gRPC 엔드포인트 · MySQL" },
        { label: "웹·앱", value: "Next.js 관리자 대시보드 · Flutter 모노레포(다중 빌드 타깃)" },
        { label: "클라우드", value: "AWS Amplify·ECS 배포 · GitHub Actions CI/CD" },
        { label: "AI 워크플로", value: "보이스 우선 인터페이스 · 실시간 gRPC 스트리밍" },
      ],
      delivery: ["gRPC 계약 우선 설계", "웹·앱 병렬 개발", "릴리즈 자동화로 배포 시간 단축"],
    },
  },
  {
    id: "vivring",
    capabilityId: "mobile",
    name: "VIV / vivring",
    publicName: "VIV Ring Intelligence Platform",
    eyebrow: "VIV Ring · 웨어러블 앱 + 백엔드",
    summary:
      "VIV 스마트링 제품을 중심으로 iOS 앱 아키텍처, NestJS API 경계, 로컬 Swift 패키지, TestFlight 출시 준비까지 제품 단위로 정리한 케이스입니다.",
    impact: [
      "스마트링 iOS 앱 아키텍처 설계",
      "NestJS API·DB 경계 정리",
      "iOS 빌드·패키지 출시 준비",
    ],
    stack: ["Swift", "NestJS", "MySQL", "Liquibase", "TestFlight"],
    asset: "/assets/cases/vivring-command-center.svg",
    alt: "재구성된 VIV 스마트링 제품 커맨드 센터",
    detail: {
      label: "상세 스펙",
      overview:
        "웨어러블 링을 제품 단위로 정리해, 앱 아키텍처·서버 경계·DB 마이그레이션 경로·출시 준비까지 한 흐름에서 보이게 만든 케이스입니다.",
      specs: [
        { label: "모바일 앱", value: "iOS 화면 구조와 로컬 Swift 패키지" },
        { label: "NestJS API 경계", value: "user, device, health 데이터 도메인 분리" },
        { label: "DB·마이그레이션", value: "MySQL 스키마와 Liquibase 변경 관리" },
        { label: "TestFlight 준비", value: "빌드 경로, 패키지 점검, 릴리즈 체크" },
      ],
      delivery: ["스마트링 앱 아키텍처 설계", "API·DB 책임 경계 정리", "iOS 빌드와 출시 준비"],
    },
  },
  {
    id: "smartcharge",
    capabilityId: "frontend",
    name: "Smartcharge",
    publicName: "Smart Device Charging Compatibility Automation",
    eyebrow: "Smartcharge · 대시보드 + API",
    summary:
      "스마트기기 충전 호환성 테스트를 관리하는 운영 콘솔과 API 흐름을 설계한 프로젝트입니다. 운영자가 데이터를 빠르게 비교하고 더 빠르게 결정하도록 정보구조를 잡았습니다.",
    impact: [
      "운영 콘솔 UX·정보구조 설계",
      "OpenAPI 기반 API 문서화 흐름 구축",
      "PostgreSQL 데이터 모델링",
    ],
    stack: ["Next.js", "OpenAPI", "PostgreSQL", "Docker"],
    asset: "/assets/cases/smartcharge-console.svg",
    alt: "재구성된 Smartcharge 대시보드 화면",
    detail: {
      label: "상세 스펙",
      overview:
        "운영자가 충전 호환성 데이터를 빠르게 비교하면서, 테스트 큐와 그 아래 API 계약까지 한눈에 확인하는 관리 콘솔입니다.",
      specs: [
        { label: "화면 범위", value: "디바이스 매트릭스, 리뷰 큐, 테스트 결과 요약" },
        { label: "API 계약", value: "OpenAPI 기반 request/response 흐름" },
        { label: "데이터 모델", value: "PostgreSQL 테스트 배치와 호환성 상태" },
        { label: "운영 포인트", value: "Docker 기반 로컬·배포 검증 흐름" },
      ],
      delivery: ["관리자 UX 정보구조", "API 문서화 플로우", "데이터 상태와 화면 상태 연결"],
    },
  },
  {
    id: "backersby",
    capabilityId: "cloud",
    name: "Backersby",
    publicName: "Backersby — Creator Support Platform",
    eyebrow: "Backersby · 모바일 + 결제 + 자동 배포",
    summary:
      "1,000명 이상의 크리에이터와 8,000명 이상의 후원자가 사용한 소셜 크라우드펀딩 앱. 엉킨 레거시 코드베이스를 클린 아키텍처로 재설계하고, 결제·실시간·스토어 자동 배포까지 운영 가능한 상태로 만들었습니다.",
    impact: [
      "GetX를 Riverpod 클린 아키텍처로 마이그레이션(35개 화면)",
      "Toss 결제·실시간 채팅·FCM 푸시 구현",
      "Fastlane·GitHub Actions로 스토어 자동 배포 구축",
    ],
    stack: ["Flutter", "Riverpod", "REST", "WebSocket", "CI/CD"],
    asset: "/assets/cases/backersby-app.svg",
    alt: "재구성된 Backersby 크리에이터 후원 앱 화면",
    detail: {
      label: "상세 스펙",
      overview:
        "레거시 앱을 데이터·도메인·프레젠테이션 3계층으로 다시 세워 기능 개발 속도를 약 40% 끌어올리고, 결제·실시간 기능과 배포 파이프라인을 일상 운영에 맞게 단단히 다진 케이스입니다.",
      specs: [
        { label: "아키텍처", value: "GetX→Riverpod 클린 아키텍처 · 35개 화면 · 60+ 커스텀 위젯" },
        { label: "핵심 기능", value: "Toss 결제(단건·구독), 실시간 채팅·피드, FCM 푸시" },
        { label: "공유 모듈", value: "FCM·Hive·Dio·Retrofit·GoRouter 앱 전역 관리" },
        { label: "릴리즈", value: "Fastlane + GitHub Actions로 App Store·Play Store 자동 배포" },
      ],
      delivery: ["레거시 구조 재설계", "결제·실시간 운영 안정화", "스토어 자동 배포 파이프라인"],
    },
  },
];
