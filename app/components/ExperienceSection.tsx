import Image from "next/image";

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
    <div className="innerContainer h-full px-4 text-[15px]">
      <div className="flex flex-col gap-6 font1 tracking-tighter py-4 text1">
        {experiences.map((experience) => (
          <div key={experience.company} className="flex flex-row gap-4 sm:gap-6 items-start">
            <div className="mt-1 flex-shrink-0">
              <Image
                src={experience.image}
                alt={`${experience.company} Logo`}
                width={40}
                height={40}
                className="rounded-md bg-white p-1"
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg text1">
                {experience.company}
              </h3>
              <p className="text-sm font-medium text2">
                {experience.role}
                {experience.link && (
                  <>
                    {" | "}
                    <a
                      href={experience.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${experience.company}: ${experience.link.label} (opens in a new tab)`}
                      className="text2 underline underline-offset-2"
                    >
                      {experience.link.label}
                    </a>
                  </>
                )}
              </p>
              <p className="text-xs text-zinc-500 italic mb-2">{experience.period}</p>
              <ul className="list-disc pl-5 flex flex-col gap-2 marker:text-[var(--text2)] text-[var(--text2)]">
                {experience.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
