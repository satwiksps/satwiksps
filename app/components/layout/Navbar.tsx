"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import ThemeToggle from "../ThemeToggle";

const links = [
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#opensource", label: "Open source" },
  { href: "/#blogs", label: "Blog" },
];
const mobileLinks = [...links, { href: "/#skills", label: "Skills" }, { href: "/#publications", label: "Publications" }, { href: "/#accomplishments", label: "Achievements" }];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setMenuOpen(false); menuButton.current?.focus(); }
    };
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [menuOpen]);

  return (
    <header className="site-nav sticky top-0 z-50 border-b">
      <nav aria-label="Main navigation" className="innerContainer px-4 sm:px-6">
        <div className="flex min-h-18 items-center justify-between gap-3">
          <Link href="/" aria-label="Satwik — home" onClick={() => setMenuOpen(false)} className="flex min-h-11 items-center gap-1 font2 text-xl tracking-tight text1">satwik<span className="text-[var(--accent)]">.</span></Link>
          <div className="hidden items-center gap-5 sm:flex">
            {links.map(link => <Link key={link.href} href={link.href} className={"nav-link inline-flex min-h-11 items-center text-sm " + (pathname.startsWith("/project") && link.label === "Projects" ? "text1" : "text2")}>{link.label}</Link>)}
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button ref={menuButton} type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)} className="flex size-11 items-center justify-center rounded-full border text1 transition-colors hover:bg-[var(--bg2)] sm:hidden">
              {menuOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
            </button>
          </div>
        </div>
        <div id="mobile-navigation" hidden={!menuOpen} className="border-t pb-4 pt-2 sm:hidden">
          <div className="grid grid-cols-2 gap-x-3 gap-y-1">
            {mobileLinks.map(link => <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="flex min-h-12 items-center justify-between gap-2 rounded-lg px-2 text-sm text2 hover:bg-[var(--bg2)] hover:text-[var(--accent)]">{link.label}<ArrowUpRight size={14} aria-hidden="true" /></Link>)}
          </div>
        </div>
      </nav>
    </header>
  );
}
