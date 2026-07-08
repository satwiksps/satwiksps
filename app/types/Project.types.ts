export type Project = {
    slug: string;
    heading: string;
    subheading: string;
    image: string;
    alt: string;
}

export type ProjectProps = {
    projectData: Project[];
}

export type ProjectData = {
  slug: string;
  heading: string;
  subheading: string;
  image: string;
  alt: string;
  description: string;
  tech: string[];
  filler: string;
  features: string[];
  links: {
    live: string;
    github: string;
  };
};