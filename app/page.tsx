import HeroBanner from "./components/HeroBanner";
import HeroHeading from "./components/HeroHeading";
import InfoBox from "./components/InfoBox";
import SocialLinks from "./components/SocialLinks";
import StripedBox from "./components/StripedBox";
import ExperienceSection from "./components/ExperienceSection";
import Heading from "./components/layout/Heading";
import StackBox from "./components/StackBox";
import ProjectsSection from "./components/ProjectsSection";
import EducationSection from "./components/EducationSetion";
import BlogsSection from "./components/BlogsSection";
import PublicationsSection from "./components/PublicationsSection";
import AccomplishmentsSection from "./components/AccomplishmentsSection";
import OpenSourceSection from "./components/OpenSourceSection";
import Footer from "./components/layout/Footer";
import ScrollToHash from "./components/ScrollToHash";
import HiddenFooter from "./components/layout/HiddenFooter";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg1 dark:bg-black">
      <Suspense fallback={null}>
      <ScrollToHash />
      </Suspense>
      {/* HeroBanner */}
      <div className="w-full border-b">
        <HeroBanner />
      </div>

      {/* HeroHeading */}
      <div className="w-full border-b">
        <HeroHeading />
      </div>

      <StripedBox />

      {/* InfoBox */}
      <div className="w-full border-b">
        <InfoBox />
      </div>

      {/* Social Links */}
      <div className="w-full h-fit border-b">
        <SocialLinks />
      </div>

      <StripedBox />

      {/* Experience Heading */}
      <div id="experience" className="scroll-mt-20">
        <Heading name="Experience" />
      </div>

      {/* Experience Section */}
      <div className="w-full border-b">
        <ExperienceSection />
      </div>

      <StripedBox />

      <Heading name="Stack" />

      <div className="w-full border-b">
        <StackBox />
      </div>

      <StripedBox />

      <div id="projects" className="scroll-mt-20">
        <ProjectsSection />
      </div>

      <StripedBox />

      <div id="opensource" className="scroll-mt-20">
        <Heading name="Open Source Contributions" />
        <div className="w-full border-b">
          <div className="innerContainer h-fit py-4 flex items-center justify-start px-4 font1 tracking-tighter text2 text-sm">
            <h3>Some of my impactful contributions</h3>
          </div>
        </div>
      </div>

      <div className="w-full border-b">
        <OpenSourceSection />
      </div>

      <StripedBox />

      <div id="publications" className="scroll-mt-20">
        <Heading name="Publications" />
      </div>

      <div className="w-full border-b">
        <PublicationsSection />
      </div>

      <StripedBox />

      <div id="education" className="scroll-mt-20">
        <Heading name="Education" />
      </div>

      <div className="w-full border-b h-fit">
        <EducationSection />
      </div>

      <StripedBox />

      <div id="blogs" className="scroll-mt-20">
        <Heading name="Blogs" />
      </div>

      <BlogsSection />
      <StripedBox />

      <div id="accomplishments" className="scroll-mt-20">
        <Heading name="Accomplishments" />
      </div>

      <div className="w-full border-b">
        <AccomplishmentsSection />
      </div>

      <StripedBox />

      <Footer />
      <HiddenFooter />

    </main>
  );
}
