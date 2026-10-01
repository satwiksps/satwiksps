import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    company: "Google Summer of Code",
    role: "Software Developer Intern at NumFOCUS",
    period: "May 2026 – Sep 2026",
    image: "/images/google.png",
    link: {
      label: "Work Product Link",
      href: "https://summerofcode.withgoogle.com/programs/2026/projects/P5QOhl9F",
    },
    bullets: [
      "Redesigned the Python model-building API with typed configurations and fail-fast validation, introducing typed builders and model-specific configurations across PyTorch inference trainers while reducing exposed configuration fields by 69%.",
      "Collaborated with mentors through agile development, code reviews, and feature integration, troubleshooting 12+ tracked issues across memory usage, sampling reliability, input handling, automation, and ML infrastructure to deliver 23 merged contributions.",
      "Expanded Python test automation, regression validation to 200+ checks, correcting flaky and ineffective tests across model configuration, training, and backward compatibility, while debugging device mismatches, data inconsistency, & inference memory bloat.",
    ],
  },
  {
    company: "IBM",
    role: "Contributor at Qiskit Advocate Mentorship Program",
    period: "October 2025 – January 2026",
    image: "/images/ibm.png",
    bullets: [
      "Built QuDET, a Python framework that consolidates ML pipeline infrastructure into reusable, configurable modules, reducing per-pipeline setup overhead by 89% and standardizing deployment across teams.",
      "Developed a pluggable data governance layer with AES-128 encryption, role-based access control, automated audit logging, and statistical drift detection, reducing governance-related infrastructure code by 87%.",
    ],
  },
  {
    company: "Amazon ML Summer School",
    role: "Mentee",
    period: "Aug 2025 – Sep 2025",
    image: "/images/amazon.png",
    link: {
      label: "Certificate Link",
      href: "https://drive.google.com/file/d/1VwqyTUeFrBndSyhoS-gsJLoQIIWbwXV5/view",
    },
    bullets: [
      "Analysed algorithms and optimization techniques for large-scale recommendation and prediction systems through technical discussions with Amazon scientists, strengthening algorithmic problem-solving and technical communication skills.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <div className="innerContainer px-5 font2 sm:px-8">
      {experiences.map((experience) => (
        <article
          key={experience.company}
          className="border-b py-6 last:border-b-0 sm:py-8"
        >
          <div className="flex items-start gap-3 sm:gap-4">
            <Image
              src={experience.image}
              alt=""
              width={42}
              height={42}
              className="shrink-0 rounded-xl border bg-white p-1.5"
            />
            <div className="min-w-0 flex-1">
              <h3 className="text1 text-base font-semibold leading-snug tracking-tight sm:text-lg">
                {experience.company}
              </h3>
              <p className="text2 mt-1 text-sm leading-relaxed">
                {experience.role}
              </p>
              <div className="text2 mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs leading-relaxed">
                <span>{experience.period}</span>
                {experience.link && (
                  <a
                    href={experience.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${experience.company}: ${experience.link.label} (opens in a new tab)`}
                    className="group inline-flex min-h-8 items-center gap-1 font-medium text-[var(--accent)] underline-offset-4 hover:underline focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                  >
                    {experience.link.label}
                    <ArrowUpRight
                      size={13}
                      aria-hidden="true"
                      className="motion-safe:transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
          <ul className="text2 mt-4 list-disc space-y-3 pl-4 text-[15px] leading-[1.75] marker:text-[var(--accent)] sm:ml-[58px] sm:pl-4">
            {experience.bullets.map((bullet) => (
              <li key={bullet} className="pl-1">
                {bullet}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
