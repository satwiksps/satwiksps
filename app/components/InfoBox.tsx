import { contactLinks } from "../data/contact";

const contactGrid = [
  contactLinks.email,
  contactLinks.leetCode,
  contactLinks.github,
  contactLinks.resume,
  contactLinks.linkedIn,
  contactLinks.codeforces,
  contactLinks.kaggle,
  contactLinks.x,
];

export default function InfoBox() {
  return (
    <ul className="contact-list">
      {contactGrid.map(({ label, href }) => {
        const isExternal = href.startsWith("https://");
        return (
          <li key={href}>
            <a
              className="accent-link"
              href={href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
            >
              {label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
