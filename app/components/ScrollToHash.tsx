"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ScrollToHash() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        const timer = setTimeout(() => {
          el.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
        }, 100); // wait for render
        return () => clearTimeout(timer);
      }
    }
  }, [pathname, searchParams]);

  return null;
}
