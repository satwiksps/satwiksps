import { Suspense, type ReactNode } from "react";
import HeroBanner from "./components/HeroBanner";
import HeroHeading from "./components/HeroHeading";
import InfoBox from "./components/InfoBox";
import ExperienceSection from "./components/ExperienceSection";
import StackBox from "./components/StackBox";
import ProjectsSection from "./components/ProjectsSection";
import EducationSection from "./components/EducationSection";
import BlogsSection from "./components/BlogsSection";
import PublicationsSection from "./components/PublicationsSection";
import AccomplishmentsSection from "./components/AccomplishmentsSection";
import OpenSourceSection from "./components/OpenSourceSection";
import Footer from "./components/layout/Footer";
import ScrollToHash from "./components/ScrollToHash";

function PortfolioSection({ id, title, children }: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="portfolio-card section-card">
      <h2 id={`${id}-title`}>{title}</h2>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <main className="portfolio-shell">
      <Suspense fallback={null}>
        <ScrollToHash />
      </Suspense>

      <section className="portfolio-card profile-card" aria-labelledby="profile-name">
        <HeroBanner />
        <HeroHeading />
      </section>

      <PortfolioSection id="experience" title="Experience">
        <ExperienceSection />
      </PortfolioSection>

      <PortfolioSection id="stack" title="Stack">
        <StackBox />
      </PortfolioSection>

      <PortfolioSection id="projects" title="Projects">
        <ProjectsSection />
      </PortfolioSection>

      <PortfolioSection id="opensource" title="Open Source Contributions">
        <p className="section-intro">Some of my impactful contributions</p>
        <OpenSourceSection />
      </PortfolioSection>

      <PortfolioSection id="publications" title="Publications">
        <PublicationsSection />
      </PortfolioSection>

      <PortfolioSection id="education" title="Education">
        <EducationSection />
      </PortfolioSection>

      <PortfolioSection id="blogs" title="Blogs">
        <BlogsSection />
      </PortfolioSection>

      <PortfolioSection id="accomplishments" title="Accomplishments">
        <AccomplishmentsSection />
      </PortfolioSection>

      <PortfolioSection id="contact" title="Contact info">
        <InfoBox />
      </PortfolioSection>

      <Footer />
    </main>
  );
}
