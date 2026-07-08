import StripedBox from "@/app/components/StripedBox";
import { ArrowLeft, ArrowRight, Github } from "lucide-react";
import IconBox from "@/app/components/ui/IconBox";
import Heading from "@/app/components/layout/Heading";
import Image from "next/image";
import Footer from "@/app/components/layout/Footer";
import Link from "next/link";
import { projects } from "@/app/data/projects";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="p-10 text-center text2">
        Project not found
      </div>
    );
  }

  return (
    <div>
      <StripedBox />

      <div className="w-full border-b">
        <div className="innerContainer px-4 py-3 flex items-center justify-between">
          
          <Link
            href="/#projects" scroll={false}
            className="flex gap-2 items-center text2 hover:!text-zinc-600 hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            <h5 className="font1 tracking-tighter text-inherit">
              Projects
            </h5>
          </Link>

          <div className="flex gap-4">
            {project.links?.github && (
              <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                <IconBox>
                  <Github className="size-6" />
                </IconBox>
              </Link>
            )}

            {project.links?.live && (
              <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                <IconBox>
                  <ArrowRight className="size-6" />
                </IconBox>
              </Link>
            )}
          </div>
        </div>
      </div>

      <StripedBox />

      <Heading name={project.heading} />

      <div className="w-full border-b">
        <div className="innerContainer px-4 py-6 text-zinc-600 text-[1.05rem] font2 tracking-tight leading-[1.55] break-words">

          <h4 className="pb-6">
            {project.subheading}
          </h4>

          <div className="w-full h-[30vh] md:h-[55vh] sm:h-[45vh] relative rounded-xl border overflow-hidden">
            <Image
              src={project.image}
              alt={project.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <p className="py-6">
            {project.description}
          </p>

          <p className="pb-6">
            Built using{" "}
            <span className="text1 font-medium">
              {project.tech.join(", ")}
            </span>
          </p>

          <ul className="list-disc pl-6 flex flex-col gap-2 marker:text-zinc-300">
            {project.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>

          <p className="py-6">
            If you&apos;re curious, feel free to explore:
          </p>

          <ul className="list-disc pl-6 flex flex-col gap-2 marker:text-zinc-300">
            {project.links?.live && (
              <li>
                Live:{" "}
                <a
                  href={project.links.live}
                  target="_blank" rel="noopener noreferrer"
                  className="text1 underline"
                >
                  {project.links.live}
                </a>
              </li>
            )}

            {project.links?.github && (
              <li>
                Github:{" "}
                <a
                  href={project.links.github}
                  target="_blank" rel="noopener noreferrer"
                  className="text1 underline"
                >
                  {project.links.github}
                </a>
              </li>
            )}
          </ul>

        </div>
      </div>

      <div className="w-full border-b">
        <div className="innerContainer h-6" />
      </div>

      <Footer />
    </div>
  );
}