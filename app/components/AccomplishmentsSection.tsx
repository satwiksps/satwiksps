import {
  ArrowUpRight,
  Award,
  Braces,
  Code2,
  GitPullRequest,
  GraduationCap,
  Trophy,
} from "lucide-react";

const achievements = [
  {
    icon: Award,
    description: (
      <>
        Selected for <strong>Amazon ML Summer School</strong> among top 3,000 of
        134,000+ applicants through a rigorous coding assessment.
      </>
    ),
  },
  {
    icon: GitPullRequest,
    description: (
      <>
        Contributed <strong>85+ merged pull requests</strong> to major open-source
        repositories on GitHub including Podman, Flatcar etc.
      </>
    ),
    link: {
      label: "Contributions Link",
      href: "https://github.com/search?q=author:satwiksps+is:pr+is:merged+-user:satwiksps&type=pullrequests",
      name: "Merged open-source contributions on GitHub",
    },
  },
  {
    icon: Trophy,
    description: (
      <>
        Secured <strong>2nd Place</strong> at TantraFiesta national-level hackathon
        organized by IIIT Nagpur in 2025.
      </>
    ),
    link: {
      label: "Certificate Link",
      href: "https://drive.google.com/file/d/1dMaAZXffgeu8j98GJmnQYkAPSRfmicOt/view?pli=1",
      name: "TantraFiesta certificate",
    },
  },
  {
    icon: Code2,
    description: (
      <>
        Achieved the <strong>LeetCode Knight</strong> title with a current rating of
        1876, placing in the top 4.99% globally.
      </>
    ),
    link: {
      label: "Profile Link",
      href: "https://leetcode.com/u/satwiksps/",
      name: "LeetCode profile",
    },
  },
  {
    icon: GraduationCap,
    description: (
      <>
        Received the <strong>OUTR Merit Scholarship</strong> for maintaining a
        position among the top 10% CGPA holders of my college.
      </>
    ),
  },
  {
    icon: Braces,
    description: (
      <>
        Attained the <strong>Codeforces Specialist</strong> rank with a maximum
        rating of 1430.
      </>
    ),
    link: {
      label: "Profile Link",
      href: "https://codeforces.com/profile/satwiksps",
      name: "Codeforces profile",
    },
  },
];

export default function AccomplishmentsSection() {
  return (
    <div className="innerContainer px-5 font2 sm:px-8">
      <ul className="divide-y divide-[var(--border)] py-1">
        {achievements.map(({ icon: Icon, description, link }, index) => (
          <li key={index} className="flex items-start gap-3 py-5 sm:gap-4 sm:py-6">
            <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)] sm:size-9">
              <Icon size={17} strokeWidth={1.6} aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="text2 text-[15px] leading-[1.75] [&_strong]:font-medium [&_strong]:text-[var(--text1)]">
                {description}
              </p>
              {link && (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.name} (opens in a new tab)`}
                  className="group mt-1 inline-flex min-h-9 items-center gap-1 text-xs font-medium text-[var(--accent)] underline-offset-4 hover:underline focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                >
                  {link.label}
                  <ArrowUpRight
                    size={13}
                    aria-hidden="true"
                    className="motion-safe:transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
                  />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
