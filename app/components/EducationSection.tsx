import Image from "next/image";
import davLogo from "../../public/images/dav-logo.png";
import outrLogo from "../../public/images/outr-logo.png";

const education = [
  {
    school: "Odisha University of Technology and Research, Bhubaneswar, Odisha",
    logo: outrLogo,
    program: "Bachelor of Technology in Electrical Engineering",
    period: "2023 - 2027",
    grade: "8.00 CGPA",
  },
  {
    school: "DAV Public School, Pokhariput, Bhubaneswar, Odisha",
    logo: davLogo,
    program: "Senior Secondary (Class XII)",
    period: "2021 - 2022",
    grade: "91.2%",
  },
  {
    school: "DAV Public School, Pokhariput, Bhubaneswar, Odisha",
    logo: davLogo,
    program: "Secondary (Class X)",
    period: "2019 - 2020",
    grade: "92.6%",
  },
];

export default function EducationSection() {
  return (
    <ul className="profile-list">
      {education.map(({ school, logo, program, period, grade }) => (
        <li key={program} className="profile-list-row">
          <Image src={logo} alt="" width={48} height={48} sizes="48px" className="education-logo" />
          <div className="profile-list-body">
            <h3 className="item-title">{school}</h3>
            <p>{program}</p>
            <p className="item-meta">{period} · {grade}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
