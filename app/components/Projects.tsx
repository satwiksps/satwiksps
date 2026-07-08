import Project from "./ui/Project";
import type { ProjectProps } from "../types/Project.types";
export default function Projects({ projectData }: ProjectProps) {
  return (
    <div className="innerContainer">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-2 h-[38vh] sm:border-r hover-bg2 transition ease-in cursor-pointer">
          <Project {...projectData[0]} />
        </div>
        {projectData[1] && (
          <div className="p-2 h-[38vh] sm:border-l hover-bg2 cursor-pointer transition ease-in">
            <Project {...projectData[1]} />
          </div>
        )}
      </div>
    </div>
  );
}