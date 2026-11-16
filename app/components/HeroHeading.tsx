import Image from "next/image";
import portrait from "../../public/images/profile-portrait.png";
import { contactLinks } from "../data/contact";
import RotatingText from "./ui/RotatingText";

const roles = ["AI/ML Engineer", "DevOps Engineer", "Forward Deployed Engineer", "Software Engineer"];
const profileActions = [contactLinks.linkedIn, contactLinks.resume, contactLinks.github];

export default function HeroHeading() {
  return (
    <div className="profile-body">
      <div className="profile-photo">
        <Image
          src={portrait}
          alt="Portrait of Satwik Sai Prakash Sahoo"
          fill
          unoptimized
          loading="eager"
          className="object-cover"
        />
      </div>
      <div className="profile-name-row">
        <h1 id="profile-name">Satwik Sai Prakash Sahoo</h1>
        <svg className="profile-verification" viewBox="0 0 24 24" fill="currentColor" role="img" aria-label="Verified">
          <path d="M24 12a4.454 4.454 0 0 0-2.564-3.91 4.437 4.437 0 0 0-.948-4.578 4.436 4.436 0 0 0-4.577-.948A4.44 4.44 0 0 0 12 0a4.423 4.423 0 0 0-3.9 2.564 4.434 4.434 0 0 0-2.43-.178 4.425 4.425 0 0 0-2.158 1.126 4.42 4.42 0 0 0-1.12 2.156 4.42 4.42 0 0 0 .183 2.421A4.456 4.456 0 0 0 0 12a4.465 4.465 0 0 0 2.576 3.91 4.433 4.433 0 0 0 .936 4.577 4.459 4.459 0 0 0 4.577.95A4.454 4.454 0 0 0 12 24a4.439 4.439 0 0 0 3.91-2.563 4.26 4.26 0 0 0 5.526-5.526A4.453 4.453 0 0 0 24 12Zm-13.709 4.917-4.38-4.378 1.652-1.663 2.646 2.646L15.83 7.4l1.72 1.591-7.258 7.926Z" />
        </svg>
      </div>
      <div className="profile-role">
        <RotatingText texts={roles} />
      </div>
      <p className="profile-location">
        India <span aria-hidden="true">·</span>{" "}
        <a href="#contact" className="accent-link">Contact info</a>{" "}
        <span aria-hidden="true">·</span> he/him
      </p>
      <a href={contactLinks.email.href} className="profile-availability accent-link">
        Open for full-time &amp; freelance work
      </a>
      <ul className="profile-actions" aria-label="Profile links">
        {profileActions.map(({ label, href }) => (
          <li key={href}>
            <a href={href} target="_blank" rel="noopener noreferrer" className="social-button">
              {label}
            </a>
          </li>
        ))}
      </ul>
      <div className="profile-decoration" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
