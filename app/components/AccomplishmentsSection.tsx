const achievements = [
  {
    description: (
      <>
        Selected for <strong className="font-medium text1">Amazon ML Summer School</strong> among top 3,000 of
        134,000+ applicants through a rigorous coding assessment.
      </>
    ),
  },
  {
    description: (
      <>
        Contributed <strong className="font-medium text1">85+ merged pull requests</strong> to major open-source
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
    description: (
      <>
        Secured <strong className="font-medium text1">2nd Place</strong> at TantraFiesta national-level hackathon
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
    description: (
      <>
        Achieved the <strong className="font-medium text1">LeetCode Knight</strong> title with a current rating of
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
    description: (
      <>
        Received the <strong className="font-medium text1">OUTR Merit Scholarship</strong> for maintaining a
        position among the top 10% CGPA holders of my college.
      </>
    ),
  },
  {
    description: (
      <>
        Attained the <strong className="font-medium text1">Codeforces Specialist</strong> rank with a maximum
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
    <div className="innerContainer h-full px-4 text-[15px]">
      <div className="flex flex-col gap-4 font1 tracking-tighter py-4 text1">
        <ul className="list-disc pl-5 flex flex-col gap-4 md:gap-3 marker:text-[var(--text2)] text-[var(--text2)]">
          {achievements.map(({ description, link }, index) => (
            <li key={index}>
              {description}
              {link && (
                <>
                  {" | "}
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${link.name} (opens in a new tab)`}
                    className="text2 underline underline-offset-2"
                  >
                    {link.label}
                  </a>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
