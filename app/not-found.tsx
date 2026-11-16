import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="portfolio-shell">
      <section className="portfolio-card detail-card">
        <h1>Page not found</h1>
        <Link href="/" className="accent-link mt-3 inline-flex items-center gap-2">
          <ArrowLeft size={16} aria-hidden="true" /> Go home
        </Link>
      </section>
    </main>
  );
}
