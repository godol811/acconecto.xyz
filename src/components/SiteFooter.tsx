import Image from "next/image";
import type { PortfolioCopy } from "@/content/types";

type SiteFooterProps = {
  readonly copy: PortfolioCopy;
};

export function SiteFooter({ copy }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Image
            alt="Aconecto"
            className="footer-logo"
            height={296}
            src="/assets/brand/aconecto-lockup-white.png"
            width={1087}
          />
          <span>{copy.footer.tagline}</span>
        </div>
        <nav className="footer-links" aria-label="Legal and support">
          <a href="/privacy.html">{copy.footer.privacy}</a>
          <a href="/terms.html">{copy.footer.terms}</a>
          <a href="/support.html">{copy.footer.support}</a>
        </nav>
        <span className="footer-rights">{copy.footer.rights}</span>
      </div>
    </footer>
  );
}
