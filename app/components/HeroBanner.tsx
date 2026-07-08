import Magnet from "./ui/Magnet";

export default function HeroBanner() {
  return (
    <div className="innerContainer relative">
      <div
        className="
      h-[23vh] sm:h-[27vh] md:h-[30vh] w-full
      flex items-center justify-center
      bg-[radial-gradient(var(--bg2)_1px,transparent_0)]
      [background-size:10px_10px]
      bg-center
    "
      />
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text2 text-2xl font-semibold">
        <Magnet padding={30} magnetStrength={5} className="hover:text-zinc-600 cursor-pointer whitespace-nowrap"><a href="mailto:rhythmdoshi04@gmail.com?subject=Let's connect&body=Hi Rhythm,">Open for full-time <br /> & freelance work</a></Magnet>
      </div>
    </div>
  );
}
