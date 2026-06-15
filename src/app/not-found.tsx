import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="not-found">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p>This static portfolio supports Korean and English routes.</p>
      <div className="hero-actions">
        <Link className="primary-action" href="/ko/">
          Korean
        </Link>
        <Link className="secondary-action" href="/en/">
          English
        </Link>
      </div>
    </main>
  );
}
