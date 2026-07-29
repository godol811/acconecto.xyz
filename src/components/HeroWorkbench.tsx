"use client";

import { ArrowUpRight, Mail, Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { contactHref } from "@/content/locales";
import type { Locale, PortfolioCopy } from "@/content/types";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";

const SPOTLIGHT_RADIUS = 260;
const BASE_IMAGE = "/assets/cases/smartcharge-console.svg";
const REVEAL_IMAGE = "/assets/cases/vivring-command-center.svg";

type Position = {
  readonly x: number;
  readonly y: number;
};

type HeroWorkbenchProps = {
  readonly copy: PortfolioCopy;
  readonly locale: Locale;
};

type RevealLayerProps = {
  readonly cursorX: number;
  readonly cursorY: number;
  readonly image: string;
};

function RevealLayer({ cursorX, cursorY, image }: RevealLayerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const reveal = revealRef.current;

    if (!canvas || !reveal) {
      return;
    }

    if (navigator.userAgent.includes("jsdom")) {
      return;
    }

    const drawMask = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const context = canvas.getContext("2d");

      if (!context) {
        return;
      }

      context.clearRect(0, 0, canvas.width, canvas.height);
      const gradient = context.createRadialGradient(
        cursorX,
        cursorY,
        0,
        cursorX,
        cursorY,
        SPOTLIGHT_RADIUS,
      );
      gradient.addColorStop(0, "rgba(255,255,255,1)");
      gradient.addColorStop(0.4, "rgba(255,255,255,1)");
      gradient.addColorStop(0.6, "rgba(255,255,255,0.75)");
      gradient.addColorStop(0.75, "rgba(255,255,255,0.4)");
      gradient.addColorStop(0.88, "rgba(255,255,255,0.12)");
      gradient.addColorStop(1, "rgba(255,255,255,0)");
      context.fillStyle = gradient;
      context.beginPath();
      context.arc(cursorX, cursorY, SPOTLIGHT_RADIUS, 0, Math.PI * 2);
      context.fill();

      const mask = `url(${canvas.toDataURL()})`;
      reveal.style.maskImage = mask;
      reveal.style.webkitMaskImage = mask;
    };

    drawMask();
    window.addEventListener("resize", drawMask);
    return () => window.removeEventListener("resize", drawMask);
  }, [cursorX, cursorY]);

  return (
    <>
      <canvas className="spotlight-canvas" ref={canvasRef} />
      <div
        className="hero-reveal-layer"
        ref={revealRef}
        style={{ backgroundImage: `url("${image}")` }}
      />
    </>
  );
}

function heroTitle(locale: Locale) {
  return locale === "ko"
    ? { accent: "Ideas become", line: "products people use" }
    : { accent: "Ideas become", line: "products people use" };
}

export function HeroWorkbench({ copy, locale }: HeroWorkbenchProps) {
  const mouse = useRef({ x: -999, y: -999 });
  const smooth = useRef({ x: -999, y: -999 });
  const rafRef = useRef<number | null>(null);
  const [cursorPos, setCursorPos] = useState<Position>({ x: -999, y: -999 });
  const title = heroTitle(locale);
  const navigation =
    locale === "ko"
      ? [
          ["프로젝트", "#work"],
          ["출시 앱", "#apps"],
          ["작업 방식", "#process"],
          ["문의", "#contact"],
        ]
      : [
          ["Work", "#work"],
          ["Apps", "#apps"],
          ["Process", "#process"],
          ["Contact", "#contact"],
        ];

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current = { x: event.clientX, y: event.clientY };
    };

    const animate = () => {
      smooth.current.x += (mouse.current.x - smooth.current.x) * 0.1;
      smooth.current.y += (mouse.current.y - smooth.current.y) * 0.1;
      setCursorPos({ x: smooth.current.x, y: smooth.current.y });
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <>
      <section className="hero-section" id="top">
        <div
          className="hero-base-image hero-zoom"
          style={{ backgroundImage: `url("${BASE_IMAGE}")` }}
        />
        <RevealLayer image={REVEAL_IMAGE} cursorX={cursorPos.x} cursorY={cursorPos.y} />
        <div className="hero-shade" />

        <div className="topbar">
          <a className="brand-mark" href={locale === "ko" ? "/" : `/${locale}/`}>
            <span className="brand-glyph">A</span>
            <span className="brand-wordmark">Aconecto</span>
          </a>
          <nav className="topbar-nav" aria-label="Primary navigation">
            {navigation.map(([label, href], index) => (
              <a className={index === 0 ? "is-active" : undefined} href={href} key={href}>
                {label}
              </a>
            ))}
          </nav>
          <div className="topbar-actions">
            <ThemeToggle label={copy.nav.themeLabel} />
            <LanguageToggle current={locale} label={copy.nav.languageLabel} />
            <a className="nav-contact" href={contactHref}>
              {copy.nav.contact}
            </a>
            <button className="mobile-menu" type="button" aria-label="Open navigation">
              <Menu aria-hidden="true" size={20} />
            </button>
          </div>
        </div>

        <div className="hero-heading">
          <p className="hero-kicker hero-anim hero-fade">Jongchan Ko · Product engineer</p>
          <h1>
            <span className="sr-only">Jongchan Ko · Aconecto</span>
            <span
              className="hero-title-accent hero-anim hero-reveal"
              style={{ animationDelay: "0.25s" }}
            >
              {title.accent}
            </span>
            <span
              className="hero-title-main hero-anim hero-reveal"
              style={{ animationDelay: "0.42s" }}
            >
              {title.line}
            </span>
          </h1>
        </div>

        <div className="hero-bottom-left hero-anim hero-fade" style={{ animationDelay: "0.7s" }}>
          <p>{copy.hero.subtitle}</p>
        </div>

        <div className="hero-bottom-right hero-anim hero-fade" style={{ animationDelay: "0.85s" }}>
          <p>{copy.hero.availability}</p>
          <a className="hero-contact" href={contactHref}>
            <Mail aria-hidden="true" size={17} />
            {copy.nav.contact}
            <ArrowUpRight aria-hidden="true" size={17} />
          </a>
        </div>

        <span className="spotlight-hint">Move to reveal · VIV Ring</span>
      </section>

      <div className="hero-proof">
        <ul className="proof-strip">
          {copy.hero.proof.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="business-proof">
          <div>
            <span>{copy.business.badge}</span>
            <strong>{copy.business.legal}</strong>
          </div>
          <div>
            <span>{copy.business.industry}</span>
            <strong>{copy.business.since}</strong>
          </div>
        </div>
      </div>
    </>
  );
}
