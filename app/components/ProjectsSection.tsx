import { ArrowUpRight } from "lucide-react";
import Heading from "./layout/Heading";
import Projects from "./Projects";
import ProjectLines from "./ProjectLines";
import Link from "next/link";
import { projects } from "../data/projects";

export default function ProjectsSection() {
  const projectRows = Array.from(
    { length: Math.ceil(projects.length / 2) },
    (_, index) => projects.slice(index * 2, index * 2 + 2),
  );

  return (
    <div>
      <Heading name="Projects" />

      <div className="w-full border-b">
        <div className="innerContainer h-fit py-4 flex items-center justify-start px-4 font1 tracking-tighter text2 text-sm">
          <h3>A collection of some of the projects I&apos;ve worked on.</h3>
        </div>
      </div>

      <ProjectLines />

      <div className="hidden sm:block">
        {projectRows.map((row, index) => (
          <div key={row[0].slug}>
            <div className="w-full border-b h-fit">
              <Projects projectData={row} />
            </div>
            {index < projectRows.length - 1 && <ProjectLines />}
          </div>
        ))}
      </div>

      <div className="sm:hidden">
        {projects.map((project, index) => (
          <div key={project.slug}>
            <div className="w-full border-b h-fit">
              <Projects projectData={[project]} />
            </div>
            {index < projects.length - 1 && <ProjectLines />}
          </div>
        ))}
      </div>

      <ProjectLines />

      <div className="w-full border-b">
        <div className="innerContainer h-5 flex items-center justify-end px-4 py-3">
          <h5 className="text-sm font2 tracking-tighter">
            <Link
              href={"https://github.com/satwiksps"}
              className="text1 underline flex items-center gap-1 transition-colors duration-200 hover:!text-red-400 dark:hover:!text-zinc-300"
            >
              More Projects on Github
              <ArrowUpRight size={14} />
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
}
