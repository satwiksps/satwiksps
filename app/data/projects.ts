import type { ProjectData } from "../types/Project.types";

export const projects: ProjectData[] = [
  {
    slug: "mobius",
    heading: "Mobius",
    subheading: "LLM-Powered Desktop Automation Agent",
    image: "/images/mobius_cover_photo.png",
    alt: "Mobius Cover Photo",
    description:
      "An LLM-powered desktop automation agent featuring a visual node-based builder and a lightweight, localized execution engine — construct, test, and run reliable, steppable automation workflows seamlessly within your development environment.",
    tech: ["LLM", "Desktop Automation", "Python", "Node.js"],
    filler: "seamlessly integrating with your development workflow.",
    features: [
      "Visual node-based builder",
      "Lightweight, localized execution engine",
      "Reliable, steppable automation workflows"
    ],
    links: {
      live: "https://github.com/satwiksps/mobius",
      github: "https://github.com/satwiksps/mobius",
    },
  },
  {
    slug: "tracelet",
    heading: "Tracelet",
    subheading: "Runtime Trace & Prompt Diff Analyzer",
    image: "/images/tracelet_cover_photo.png",
    alt: "Tracelet Cover Photo",
    description:
      "Inspect runtime traces, analyze prompt diffs, and track token heatmaps directly in your local code editor. Supports OpenTelemetry, LangSmith, and Langfuse.",
    tech: ["OpenTelemetry", "LangSmith", "Langfuse", "LLM Observability"],
    filler: "making observability localized and accessible.",
    features: [
      "Inspect runtime traces in local editor",
      "Analyze prompt diffs and track token heatmaps",
      "Support for leading observability platforms"
    ],
    links: {
      live: "https://github.com/satwiksps/tracelet",
      github: "https://github.com/satwiksps/tracelet",
    },
  }
];