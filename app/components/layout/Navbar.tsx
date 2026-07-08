"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkDark();

    // optional: watch for changes if you toggle theme dynamically
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    const update = () => setHash(window.location.hash);

    update(); // initial

    window.addEventListener("hashchange", update);
    window.addEventListener("popstate", update);

    return () => {
      window.removeEventListener("hashchange", update);
      window.removeEventListener("popstate", update);
      observer.disconnect();
    };
  }, []);

  const isHome = pathname === "/" && hash !== "#projects" && hash !== "#blogs";
  const isProjects = pathname.startsWith("/project") || hash === "#projects";
  const isBlogs = hash === "#blogs";

  return (
    <nav className="sticky top-2 z-50 h-12 w-full flex justify-center items-center bg1 border-y">
      <div className="h-full max-w-3xl w-[95%] md:full flex justify-center items-center px-4 sm:px-8 border-x">
        <div className="flex gap-4 sm:gap-8 overflow-x-auto whitespace-nowrap scrollbar-hide w-full justify-center">
          <Link
            href="/"
            onClick={() => setHash("")}
          >
            <h5 className={`text-[12px] sm:text-base ${isHome ? "text1" : "text2 hover:text1"}`}>
              Home
            </h5>
          </Link>

          <Link
            href="/#experience"
            onClick={() => setHash("#experience")}
          >
            <h5 className={`text-[12px] sm:text-base ${hash === "#experience" ? "text1" : "text2 hover:text1"}`}>
              Experience
            </h5>
          </Link>

          <Link
            href="/#projects"
            onClick={() => setHash("#projects")}
          >
            <h5 className={`text-[12px] sm:text-base ${isProjects ? "text1" : "text2 hover:text1"}`}>
              Projects
            </h5>
          </Link>

          <Link
            href="/#publications"
            onClick={() => setHash("#publications")}
          >
            <h5 className={`text-[12px] sm:text-base ${hash === "#publications" ? "text1" : "text2 hover:text1"}`}>
              Publications
            </h5>
          </Link>

          <Link
            href="/#blogs"
            onClick={() => setHash("#blogs")}
          >
            <h5 className={`text-[12px] sm:text-base ${isBlogs ? "text1" : "text2 hover:text1"}`}>
              Blog
            </h5>
          </Link>
        </div>
      </div>
    </nav>
  );
}
