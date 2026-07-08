"use client";

import Image from "next/image";
import RotatingText from "./ui/RotatingText";

export default function Heroheading() {
  const texts = [
    "AI/ML Engineer",
    "DevOps Engineer",
    "Forward Deployed Engineer",
    "Data Engineer",
  ];

  return (
    <div className="innerContainer">
      <div className="h-[17vh] sm:h-[20vh] md:h-[24vh] lg:h-[24vh] w-full flex items-center justify-start">
        
        <div
          id="imageDiv"
          className="h-full aspect-square bg1 border-r flex items-center justify-center group"
        >
          <div className="relative size-[100%] rounded-2xl border p-[2px] sm:p-[3px] group-hover:p-1 transition-all duration-500 ease-out">
            
            <div className="relative w-full h-full rounded-2xl overflow-hidden [perspective:1000px]">
              
                <Image
                  src="/images/profile_photo_v2.jpeg"
                  alt="Portrait of Satwik Sai Prakash Sahoo"
                  fill
                  className="object-cover absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105"
                  priority={true}
                />

            </div>

          </div>
        </div>

        <div id="infoDiv" className="h-full flex-1">
          <div className="h-[50%] md:h-[55%] border-b flex items-end px-2 pb-[1px] gap-3 font2 tracking-tighter text-[9px] sm:text-[10px] md:text-xs">
            <span className="inline text-pink-500 dark:text-pink-400">design();</span>
            <span className="inline text-emerald-500 dark:text-emerald-400">build();</span>
            <span className="inline text-indigo-500 dark:text-indigo-400">automate();</span>
          </div>

          <div className="h-[25%] border-b flex items-center px-2 gap-1.5 sm:gap-2">
            <h1 className="font2 text-lg sm:text-xl md:text-2xl lg:text-3xl text1">
              Satwik Sai Prakash Sahoo
            </h1>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="size-3 sm:size-3.5 md:size-4 lg:size-4.5 text-info select-none hover:rotate-360 transition duration-500 ease-in-out flex-shrink-0"
              aria-label="Verified"
            >
              <path
                fill="#009CF6"
                d="M24 12a4.454 4.454 0 0 0-2.564-3.91 4.437 4.437 0 0 0-.948-4.578 4.436 4.436 0 0 0-4.577-.948A4.44 4.44 0 0 0 12 0a4.423 4.423 0 0 0-3.9 2.564 4.434 4.434 0 0 0-2.43-.178 4.425 4.425 0 0 0-2.158 1.126 4.42 4.42 0 0 0-1.12 2.156 4.42 4.42 0 0 0 .183 2.421A4.456 4.456 0 0 0 0 12a4.465 4.465 0 0 0 2.576 3.91 4.433 4.433 0 0 0 .936 4.577 4.459 4.459 0 0 0 4.577.95A4.454 4.454 0 0 0 12 24a4.439 4.439 0 0 0 3.91-2.563 4.26 4.26 0 0 0 5.526-5.526A4.453 4.453 0 0 0 24 12Zm-13.709 4.917-4.38-4.378 1.652-1.663 2.646 2.646L15.83 7.4l1.72 1.591-7.258 7.926Z"
              />
            </svg>
          </div>

          <div className="h-[25%] md:h-[20%] px-2 flex items-center font1 tracking-tighter text-xs sm:text-sm">
            <RotatingText texts={texts} />
          </div>
        </div>

      </div>
    </div>
  );
}