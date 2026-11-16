"use client";

import Image from "next/image";
import { useState } from "react";

const experiences = [
  {
    company: "Google Summer of Code",
    role: "Software Developer Intern at NumFOCUS",
    period: "May 2026 – Sep 2026",
    image: "/images/google-summer-of-code.svg",
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
    link: {
      label: "Contributor Badge",
      href: "https://www.credly.com/badges/64aed70f-a9ca-48b8-ae02-53a3a466b0c6/public_url",
    },
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
    <ul className="profile-list">
      {experiences.map((experience, index) => (
        <ExperienceEntry key={experience.company} experience={experience} id={`experience-details-${index}`} />
      ))}
    </ul>
  );
}

function ExperienceEntry({ experience, id }: { experience: (typeof experiences)[number]; id: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <li className="profile-list-row">
      <Image src={experience.image} alt="" width={48} height={48} className="experience-logo" />
      <div className="profile-list-body">
        <h3 className="item-title">{experience.company}</h3>
        <p>{experience.role}</p>
        <p className="item-meta">
          {experience.period}
          {experience.link && (
            <>
              {" · "}
              <a href={experience.link.href} target="_blank" rel="noopener noreferrer" className="accent-link">
                {experience.link.label}
              </a>
            </>
          )}
        </p>
        <div className="experience-description" data-expanded={expanded}>
          <div id={id}>
            {expanded ? (
              <ul className="bullet-list">
                {experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            ) : (
              <p className="experience-preview">{experience.bullets[0]}</p>
            )}
          </div>
          <button
            type="button"
            className="experience-toggle"
            aria-label={`See ${expanded ? "less" : "more"} about ${experience.company}`}
            aria-expanded={expanded}
            aria-controls={id}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "See less" : "see more"}
          </button>
        </div>
      </div>
    </li>
  );
}
