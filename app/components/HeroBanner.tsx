import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function HeroBanner() {
  return (
    <div className="innerContainer hero-banner relative isolate overflow-hidden px-5 py-9 sm:px-8 sm:py-12">
      <div className="hero-orbit" aria-hidden="true" />
      <div className="relative max-w-lg hero-enter">
        <a href="mailto:sahoospsatwik@gmail.com" className="availability inline-flex min-h-11 items-center gap-2.5 rounded-full border px-3 py-1 text-xs font-medium">
          <span className="status-dot" aria-hidden="true" />
          Open for full-time &amp; freelance work
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
        <p className="mt-5 text-balance font2 text-[clamp(1.9rem,5vw,3rem)] leading-[1.15] tracking-tight text1">
          Building useful things.<br />
          <span className="text-[var(--accent)]">Out in the open.</span>
        </p>
        <a href="#opensource" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm text2 transition-colors hover:text-[var(--accent)]">
          Explore my contributions <ArrowDownRight size={16} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
