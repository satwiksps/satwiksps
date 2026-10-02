import RotatingText from "../ui/RotatingText";

export default function Footer() {
  const texts1 = [
    "Thriving in cross-functional teams.",
    "Driven by collaborative problem-solving.",
    "Fostering strong organizational culture.",
    "Building systems, elevating teams."
  ];

  const texts2 = [
    "Culture eats strategy",
    "for breakfast;",
    "true innovation happens",
    "at the intersection",
    "of diverse minds",
    "working together",
    "towards a shared",
    "and unified vision."
  ];

  return (
    <footer className="w-full h-[30vh] border-b">
      <div className="innerContainer h-full flex flex-col md:flex-row justify-between md:items-end p-4 py-8 md:pt-4">

        {/* rotating texts — top on mobile, right-bottom on desktop */}
        <div className="flex flex-col items-center md:items-end justify-between md:h-full w-full md:w-1/2 md:pt-4 md:order-2">
          <RotatingText texts={texts1} align="center" />
          <div className="hidden md:block">
            <RotatingText texts={texts2} />
          </div>
        </div>

        {/* footer links — bottom on mobile, left-bottom on desktop */}
        <div className="flex flex-col items-center md:items-start md:order-1">
          <a href="https://github.com/satwiksps" className="text-xl font2 text2 underline hover:!text-zinc-700 transition">Satwik Sai Prakash Sahoo</a>
          <a href="https://github.com/satwiksps" className="hover:!text-zinc-700 transition text-sm font1 tracking-tight text2">Github</a>
          <a href="https://www.linkedin.com/in/satwiksps/" className="hover:!text-zinc-700 transition text-sm font1 tracking-tight text2">Linkedin</a>
        </div>

      </div>
    </footer>
  );
}