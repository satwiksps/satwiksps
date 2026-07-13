import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function SocialLinks() {
  return (
    <div className="w-full">
      <div className="innerContainer h-auto min-h-[4rem] grid grid-cols-2 md:grid-cols-4">
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/satwiksps/" className="group hover-bg2 transition ease-in border-r flex items-center justify-between px-3 py-4 md:py-0 pl-4 border-b md:border-b-0">
          <div className="flex items-center gap-2">
            <Image src="/images/linkedin.webp" alt="LinkedIn Profile" width={24} height={24} className="rounded-md" />
            <h3>LinkedIn</h3>
          </div>
          <ArrowUpRight className="w-4 h-4 text-zinc-600 dark:text-zinc-400 group-hover:rotate-45 transition ease-in-out" />
        </a>

        <a target="_blank" rel="noopener noreferrer" href="https://github.com/satwiksps" className="group hover-bg2 transition ease-in border-r flex items-center justify-between px-3 py-4 md:py-0 pl-4 border-b md:border-b-0">
          <div className="flex items-center gap-2">
            <Image src="/images/github.webp" alt="Github Profile" width={24} height={24} className="rounded-md" />
            <h3>Github</h3>
          </div>
          <ArrowUpRight className="w-4 h-4 text-zinc-600 dark:text-zinc-400 group-hover:rotate-45 transition ease-in-out" />
        </a>

        <a target="_blank" rel="noopener noreferrer" href="https://x.com/satwiksps" className="group hover-bg2 transition ease-in border-r md:border-b-0 border-b flex items-center justify-between px-3 py-4 md:py-0 pl-4">
          <div className="flex items-center gap-2">
            <Image src="/images/x.webp" alt="X Profile" width={24} height={24} className="rounded-md" />
            <h3>X</h3>
          </div>
          <ArrowUpRight className="w-4 h-4 text-zinc-600 dark:text-zinc-400 group-hover:rotate-45 transition ease-in-out" />
        </a>

        <a target="_blank" rel="noopener noreferrer" href="https://bsky.app/profile/satwiksps.bsky.social" className="group hover-bg2 transition ease-in flex items-center justify-between px-3 py-4 md:py-0 pl-4 md:border-b-0 border-b">
          <div className="flex items-center gap-2">
            <Image src="/images/bsky.png" alt="Bluesky Profile" width={24} height={24} className="rounded-md" />
            <h3>Bluesky</h3>
          </div>
          <ArrowUpRight className="w-4 h-4 text-zinc-600 dark:text-zinc-400 group-hover:rotate-45 transition ease-in-out" />
        </a>
      </div>
      
      <div className="innerContainer border-t h-auto min-h-[4rem] grid grid-cols-1 md:grid-cols-2">
        <a target="_blank" rel="noopener noreferrer" href="https://codeforces.com/profile/satwiksps" className="group hover-bg2 transition ease-in border-r flex items-center justify-between px-3 py-4 md:py-0 pl-4 border-b md:border-b-0">
          <div className="flex items-center gap-3">
            <Image src="/images/cf.png" alt="Codeforces Profile" width={24} height={24} className="rounded-md bg-white p-[2px]" />
            <div className="flex flex-col">
              <h3>Codeforces</h3>
              <p className="text-xs font-medium bg-gradient-to-r from-cyan-500 to-cyan-400 dark:from-cyan-400 dark:to-cyan-300 bg-clip-text text-transparent">Specialist, 1424</p>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-zinc-600 dark:text-zinc-400 group-hover:rotate-45 transition ease-in-out" />
        </a>

        <a target="_blank" rel="noopener noreferrer" href="https://leetcode.com/u/satwiksps/" className="group hover-bg2 transition ease-in flex items-center justify-between px-3 py-4 md:py-0 pl-4">
          <div className="flex items-center gap-3">
            <Image src="/images/leetcode.webp" alt="LeetCode Profile" width={24} height={24} className="rounded-md" />
            <div className="flex flex-col">
              <h3>LeetCode</h3>
              <p className="text-xs font-medium bg-gradient-to-r from-amber-500 to-orange-500 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">Knight, 1994</p>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-zinc-600 dark:text-zinc-400 group-hover:rotate-45 transition ease-in-out" />
        </a>
      </div>
    </div>
  );
}