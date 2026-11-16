import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/app/components/layout/Footer";
import { projects } from "@/app/data/projects";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) notFound();

  const title = `${project.heading} · Satwik Sai Prakash Sahoo`;
  const url = `/project/${slug}`;
  const { description, image, alt } = project;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: image.src, width: image.width, height: image.height, alt }],
    },
    twitter: { card: "summary_large_image", title, description, images: [{ url: image.src, alt }] },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) notFound();

  return (
    <main className="portfolio-shell">
      <article className="portfolio-card detail-card">
        <div className="detail-nav">
          <Link href="/#projects" className="accent-link">
            <ArrowLeft size={16} aria-hidden="true" /> Projects
          </Link>
        </div>

        <header className="project-overview">
          <div>
            <h1>{project.heading}</h1>
            <p className="item-meta">{project.subheading}</p>
            <p className="project-description">{project.description}</p>
            <ul className="project-links" aria-label="Project links">
              {project.links.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="social-button">
                    {label} <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <Image
            src={project.image}
            alt={project.alt}
            sizes="(min-width: 1024px) 470px, (min-width: 741px) 50vw, 92vw"
            quality={85}
            loading="eager"
            className="project-detail-image"
          />
        </header>

        <section className="project-detail-section" aria-labelledby="project-results">
          <h2 id="project-results">Measured results</h2>
          <ul className="project-results">
            {project.results.map(({ value, label, context }) => (
              <li key={label}>
                <p className="project-result-value">{value}</p>
                <p className="item-title">{label}</p>
                <p className="item-meta">{context}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="project-detail-section" aria-labelledby="project-implementation">
          <h2 id="project-implementation">What I built</h2>
          <div className="detail-copy">
            {project.implementation.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>

        <section className="project-detail-section" aria-labelledby="project-stack">
          <h2 id="project-stack">Stack</h2>
          <ul className="skill-list">
            {project.tech.map((technology) => <li className="skill" key={technology}>{technology}</li>)}
          </ul>
        </section>
      </article>
      <Footer />
    </main>
  );
}
