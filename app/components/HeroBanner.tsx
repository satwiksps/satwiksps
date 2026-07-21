import Magnet from "./ui/Magnet";

export default function HeroBanner() {
  return (
    <div className="innerContainer flex items-center justify-center p-1 sm:p-1.5 border-b border-dashed sm:border-solid">
      <div className="relative w-full rounded-2xl border p-[2px] sm:p-[3px] transition-all duration-500 ease-out">
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <img
            src="/images/top_photo.gif"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-[0.25] dark:opacity-[0.20] pointer-events-none"
          />
          <div
            className="
              h-[20vh] sm:h-[24vh] md:h-[28vh] w-full
              flex items-center justify-center
              bg-[radial-gradient(var(--bg2)_1px,transparent_0)]
              [background-size:10px_10px]
              bg-center
              pointer-events-none
            "
          />
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text2 text-2xl font-semibold z-10">
            <Magnet padding={30} magnetStrength={5} className="hover:text-zinc-600 cursor-pointer whitespace-nowrap"><a href="mailto:sahoospsatwik@gmail.com?subject=Let's connect&body=Hi Satwik,">Open for full-time <br /> & freelance work</a></Magnet>
          </div>
        </div>
      </div>
    </div>
  );
}
