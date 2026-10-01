import Image from "next/image";
import RotatingText from "./ui/RotatingText";

const roles = ["AI/ML Engineer", "DevOps Engineer", "Forward Deployed Engineer", "Data Engineer"];

export default function HeroHeading() {
  return (
    <div className="innerContainer flex items-center gap-4 px-5 py-7 sm:gap-7 sm:px-8 sm:py-9">
      <div className="group relative size-20 shrink-0 overflow-hidden rounded-2xl border bg2 sm:size-32">
        <Image src="/images/profile_photo_v2.jpeg" alt="Satwik Sai Prakash Sahoo" fill sizes="(min-width: 640px) 128px, 80px" className="object-cover transition-transform duration-500 group-hover:scale-105" style={{ opacity: "var(--profile-light-opacity)" }} priority />
        <Image src="/images/profile_photo_dark.png" alt="" fill sizes="(min-width: 640px) 128px, 80px" className="object-cover transition-transform duration-500 group-hover:scale-105" style={{ opacity: "var(--profile-dark-opacity)" }} priority />
      </div>
      <div className="min-w-0 flex-1">
        <p className="mb-2 hidden font-mono text-[10px] tracking-wider text2 sm:block">
          <span className="text-[var(--accent)]">design();</span> &nbsp; build(); &nbsp; automate();
        </p>
        <h1 className="max-w-md text-balance font2 text-[clamp(1.35rem,4.5vw,2.25rem)] leading-tight tracking-tight text1">Satwik Sai Prakash Sahoo</h1>
        <div className="mt-2 text-xs sm:text-sm"><RotatingText texts={roles} /></div>
      </div>
    </div>
  );
}
