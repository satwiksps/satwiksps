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
      <div className="h-full max-w-3xl w-[95%] md:full flex justify-between items-center px-8 border-x">
        <Link href="/" className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
          <Terminal size={20} className="text-zinc-700 dark:text-zinc-300" />
        </Link>

        <div className="flex gap-8">
          <Link
            href="/"
            onClick={() => setHash("")}
            className="hidden sm:block"
          >
            <h5 className={`${isHome ? "text1" : "text2 hover:text1"}`}>
              Home
            </h5>
          </Link>

          <Link
            href="/#experience"
            onClick={() => setHash("#experience")}
            className="hidden sm:block"
          >
            <h5 className={`${hash === "#experience" ? "text1" : "text2 hover:text1"}`}>
              Experience
            </h5>
          </Link>

          <Link
            href="/#projects"
            onClick={() => setHash("#projects")}
            className="hidden sm:block"
          >
            <h5 className={`${isProjects ? "text1" : "text2 hover:text1"}`}>
              Projects
            </h5>
          </Link>

          <Link
            href="/#publications"
            onClick={() => setHash("#publications")}
            className="hidden sm:block"
          >
            <h5 className={`${hash === "#publications" ? "text1" : "text2 hover:text1"}`}>
              Publications
            </h5>
          </Link>

          <Link
            href="/#blogs"
            onClick={() => setHash("#blogs")}
            className="hidden md:block"
          >
            <h5 className={`${isBlogs ? "text1" : "text2 hover:text1"}`}>
              Blog
            </h5>
          </Link>
        </div>
      </div>
    </nav>
  );
}
