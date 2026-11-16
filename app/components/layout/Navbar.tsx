"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BriefcaseBusiness, FolderCode, House, Newspaper, ScrollText } from "lucide-react";
import ThemeToggle from "../ThemeToggle";

const links = [
  { href: "/", label: "Home", icon: House },
  { href: "/#experience", label: "Experience", icon: BriefcaseBusiness },
  { href: "/#projects", route: "/project/", label: "Projects", icon: FolderCode },
  { href: "/#publications", label: "Publications", icon: ScrollText },
  { href: "/#blogs", label: "Blog", icon: Newspaper },
];

export default function Navbar() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    window.addEventListener("popstate", updateHash);
    return () => {
      window.removeEventListener("hashchange", updateHash);
      window.removeEventListener("popstate", updateHash);
    };
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="site-brand" aria-label="satwiksps home" onClick={() => setHash("")}>
          <Image src="/images/satwiksps-avatar.png" alt="" width={32} height={32} unoptimized />
          <span>satwiksps</span>
        </Link>
        <nav className="site-nav" aria-label="Main navigation">
          {links.map(({ href, route, label, icon: Icon }) => {
            const active = pathname === "/" ? `/${hash}` === href : route && pathname.startsWith(route);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? (hash && pathname === "/" ? "location" : "page") : undefined}
                className="site-nav-link"
                onClick={() => setHash(href.slice(1))}
              >
                <Icon size={20} strokeWidth={2} aria-hidden="true" />
                {label}
              </Link>
            );
          })}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
