const achievements = [
  {
    description: (
      <>
        Selected for <strong className="font-medium text1">Amazon ML Summer School</strong> among top 3,000 of
        134,000+ applicants (top 2.2%) through a rigorous coding assessment.
      </>
    ),
  },
  {
    description: (
      <>
        Contributed <strong className="font-medium text1">125+ merged PRs</strong> to major open-source
        repositories on GitHub with 1,000+ stars
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
    <ul className="bullet-list accomplishments-list">
      {achievements.map(({ description, link }, index) => (
        <li key={index}>
          {description}
          {link && (
            <>
              {" · "}
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="accent-link"
              >
                {link.label}
              </a>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
