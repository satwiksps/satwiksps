import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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

  return (
    <>
      <ul className="content-grid">
        {arr.map((blog) => (
          <li key={blog.link}>
            <Link href={blog.link} target="_blank" rel="noopener noreferrer" className="content-card content-card-body">
              <p className="item-meta"><time dateTime={blog.date}>{blog.date}</time> · {blog.readTime}</p>
              <h3 className="item-title">{blog.heading}</h3>
              <p>{blog.summary}</p>
              <p className="tag-list">{blog.tags.map((tag) => <span key={tag}>#{tag}</span>)}</p>
            </Link>
          </li>
        ))}
      </ul>
      <a href="https://dev.to/satwiksps" className="section-action">
        Read more blogs <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </>
  );
}
