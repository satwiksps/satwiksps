import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/projects";

export default function ProjectsSection() {
  return (
    <>
      <ul className="content-grid">
        {projects.map(({ slug, heading, subheading, summary, image, alt }) => (
          <li key={slug}>
            <Link href={`/project/${slug}`} className="content-card project-card">
              <div className="project-cover">
                <Image src={image} alt={alt} fill quality={85} sizes="(min-width: 1024px) 460px, (min-width: 601px) 47vw, 92vw" className="object-cover" />
              </div>
              <div className="content-card-body">
                <div className="project-card-heading">
                  <h3 className="item-title">{heading}</h3>
                  <p className="item-meta">{subheading}</p>
                </div>
                <p>{summary}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <a href="https://github.com/satwiksps" className="section-action">
        More Projects on GitHub <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </>
  );
}
