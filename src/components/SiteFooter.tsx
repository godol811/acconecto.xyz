import type { PortfolioCopy } from "@/content/types";

type SiteFooterProps = {
  readonly copy: PortfolioCopy;
};

export function SiteFooter({ copy }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span className="footer-brand">{copy.footer.tagline}</span>
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
