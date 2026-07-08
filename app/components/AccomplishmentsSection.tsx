export default function AccomplishmentsSection() {
  return (
    <>
      <div className="innerContainer h-full px-4 text-[15px]">
        <div className="flex flex-col gap-4 font1 tracking-tighter py-4 text1">
          <ul className="list-disc pl-5 flex flex-col gap-4 md:gap-3 marker:text-[var(--text2)] text-[var(--text2)]">
            <li>
              Secured <span className="font-medium text1">2nd Place</span> at a national-level hackathon organized by IIIT Nagpur in 2025.
            </li>
            <li>
              Awarded the <span className="font-medium text1">OUTR Merit Scholarship</span> for achieving a top 10% CGPA ranking.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
