import type { StaticImageData } from "next/image";

export type ProjectData = {
  slug: string;
  heading: string;
  subheading: string;
  summary: string;
  image: StaticImageData;
  alt: string;
  description: string;
  implementation: string[];
  results: { value: string; label: string; context: string }[];
  tech: string[];
  links: { label: string; href: string }[];
};
