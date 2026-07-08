"use client";
import IconBox from "./ui/IconBox";

export default function EducationSection() {
  return (
    <div className="innerContainer py-4 px-2 flex flex-col gap-4">
      <div className="flex items-start justify-between hover-bg2 rounded-xl p-2">
        <div className="flex items-start gap-3">
          <IconBox>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
            </svg>
          </IconBox>
          <div className="flex flex-col leading-tight">
            <h2 className="text1 font1 tracking-tighter">
              Bachelor of Technology in Electrical Engineering
            </h2>
            <h2 className="text1 font1 tracking-tighter">
              Odisha University of Technology and Research, Bhubaneswar, Odisha
            </h2>
            <h4 className="sm:hidden !text-[var(--text2)] font1 text-md mt-1 hover:!text-[var(--text1)] transition ease-in-out hover:underline">
              8.00 CGPA
            </h4>
            <span className="text2 font2 tracking-tighter text-sm  sm:mt-1">
              2023 - 2027
            </span>
          </div>
        </div>
        <h4 className="hidden sm:block !text-[var(--text2)] font1 text-sm hover:!text-[var(--text1)] transition ease-in-out hover:underline">
          8.00 CGPA
        </h4>
      </div>

      <div className={`flex items-start justify-between hover:bg-zinc-50 hover-bg2 rounded-xl p-2`}>
        <div className="flex items-start gap-3">
          <IconBox>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
            </svg>
          </IconBox>
          <div className="flex flex-col leading-tight">
            <h2 className="text1 font1 tracking-tighter">
              Senior Secondary (Class XII)
            </h2>
            <h2 className="text1 font1 tracking-tighter">
              DAV Public School, Pokhariput, Bhubaneswar, Odisha
            </h2>
            <h4 className="sm:hidden !text-[var(--text2)] font1 text-md mt-1 hover:!text-[var(--text1)] transition ease-in-out hover:underline">
              91.2%
            </h4>
            <span className="text2 font2 tracking-tighter text-sm sm:mt-1">
              2021 - 2022
            </span>
          </div>
        </div>
        <h4 className="hidden sm:block !text-[var(--text2)] font1 text-sm hover:!text-[var(--text1)] transition ease-in-out hover:underline">
          91.2%
        </h4>
      </div>

      <div className={`flex items-start justify-between hover:bg-zinc-50 hover-bg2 rounded-xl p-2`}>
        <div className="flex items-start gap-3">
          <IconBox>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
            </svg>
          </IconBox>
          <div className="flex flex-col leading-tight">
            <h2 className="text1 font1 tracking-tighter">
              Secondary (Class X)
            </h2>
            <h2 className="text1 font1 tracking-tighter">
              DAV Public School, Pokhariput, Bhubaneswar, Odisha
            </h2>
            <h4 className="sm:hidden !text-[var(--text2)] font1 text-md mt-1 hover:!text-[var(--text1)] transition ease-in-out hover:underline">
              92.6%
            </h4>
            <span className="text2 font2 tracking-tighter text-sm sm:mt-1">
              2019 - 2020
            </span>
          </div>
        </div>
        <h4 className="hidden sm:block !text-[var(--text2)] font1 text-sm hover:!text-[var(--text1)] transition ease-in-out hover:underline">
          92.6%
        </h4>
      </div>

    </div>
  );
}
