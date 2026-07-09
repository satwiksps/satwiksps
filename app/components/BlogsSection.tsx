import Link from "next/link";
import ProjectLines from "./ProjectLines";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";

export default function BlogsSection() {
  const arr = [
    {
      heading: "How I Got Selected for GSoC: My Journey with sbi",
      summary: "Being a fan of Linus Torvalds, I was always fascinated by open source. Also, I wanted to test my coding skills. I wanted to know: Is my code actually good enough for the real world? In my first year of college, I spent a lot of ....",
      tags: ["opensource", "github", "google", "gsoc"],
      date: "2026-05-01",
      readTime: "5 min read",
      link: "https://dev.to/satwiksps/how-i-got-selected-for-gsoc-my-journey-with-sbi-56g5"
    },
    {
      heading: "First internal integration of the new API",
      summary: "The primary goal of this phase was to replace the old, opaque posterior_nn() and likelihood_nn() factory closures with something typed, inspectable, and much more robust. To solve this, I introduced the DensityEstimatorBuilder ....",
      tags: ["opensource", "gsoc", "python", "ai"],
      date: "2026-06-15",
      readTime: "6 min read",
      link: "https://dev.to/satwiksps/gsoc-community-bonding-period-getting-ready-to-code-5hl9"
    }
  ];

  const getTagStyle = (tag: string) => {
    switch (tag.toLowerCase()) {
      case "opensource":
        return { color: "#10b981" }; // emerald-500
      case "github":
        return { color: "#8b5cf6" }; // purple-500
      case "google":
        return { color: "#3b82f6" }; // blue-500
      case "gsoc":
        return { color: "#f59e0b" }; // amber-500
      case "python":
        return { color: "#eab308" }; // yellow-500
      case "ai":
        return { color: "#f43f5e" }; // rose-500
      default:
        return { color: "var(--text1)" }; // fallback to main text color
    }
  };

  return (
    <div className="w-full border-b">
      <div className="innerContainer">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
          {arr.map((blog, idx) => (
            <div key={idx} className={`p-4 sm:p-6 ${idx === 0 ? "sm:border-r" : ""} hover-bg2 transition ease-in cursor-pointer`}>
              <Link
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="h-full flex flex-col"
              >
                <div className="flex items-center gap-3 text-zinc-500 text-sm mb-4 font-mono">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={15} />
                    <span>{blog.date}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <Clock size={15} />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
                
                <h2 className="text-xl md:text-2xl font-bold text1 mb-4 leading-snug group-hover:underline">
                  {blog.heading}
                </h2>
                
                <p className="font-mono text-zinc-600 dark:text-zinc-400 text-sm mb-6 flex-grow leading-relaxed">
                  {blog.summary}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {blog.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="bg2 border border-[var(--border)] rounded-full px-3 py-1 text-xs font-mono font-medium shadow-sm"
                      style={getTagStyle(tag)}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full border-b">
        <div className="innerContainer h-5 relative">
          <div className="pointer-events-none absolute inset-0 grid grid-cols-1 sm:grid-cols-2 gap-0">
            <div className="sm:border-r border-edge"></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="w-full border-b">
        <div className="innerContainer h-5 flex items-center justify-end px-4 py-3 pb-8">
          <h5 className="text-sm font2 tracking-tighter">
            <Link
              href={"https://dev.to/satwiksps"}
              className="text1 underline flex items-center gap-1 transition-colors duration-200 hover:!text-red-400 dark:hover:!text-zinc-300"
            >
              Read more blogs
              <ArrowUpRight size={14} />
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
}
