import Image from "next/image";

export default function ExperienceSection() {
  return (
    <>
      <div className="innerContainer h-full px-4 text-[15px]">
        <div className="flex flex-col gap-6 font1 tracking-tighter py-4 text1">
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
            <div className="mt-1 flex-shrink-0">
              <Image src="/images/google.png" alt="Google Summer of Code Logo" width={40} height={40} className="rounded-md bg-white p-1" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text1">Google Summer of Code</h3>
              <p className="text-sm font-medium text2">Software Developer at NumFOCUS</p>
              <p className="text-xs text-zinc-500 italic mb-2">May 2, 2026 – Present</p>
              <ul className="list-disc pl-5 flex flex-col gap-2 marker:text-[var(--text2)] text-[var(--text2)]">
                <li>Designed a zero-downtime migration strategy that intercepts legacy API calls and routes them to a new Builder backend with targeted FutureWarning deprecations, cutting irrelevant parameters by 70%.</li>
                <li>Built a streaming-ready data preprocessing seam by decoupling z-score computation from model instantiation, reducing initialization memory complexity from O(N) to O(1), enabling out-of-core training for massive datasets.</li>
                <li>Overhauled the CI pipeline with 30+ rewritten unit tests featuring rigorous tensor shape assertions and neural network wiring validation, ensuring stability across 60+ test runs per commit.</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
            <div className="mt-1 flex-shrink-0">
              <Image src="/images/IBM.png" alt="IBM Logo" width={40} height={40} className="rounded-md bg-white p-1" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text1">IBM</h3>
              <p className="text-sm font-medium text2">Contributor at Qiskit Advocate Mentorship Program</p>
              <p className="text-xs text-zinc-500 italic mb-2">October 2, 2025 – January 2026</p>
              <ul className="list-disc pl-5 flex flex-col gap-2 marker:text-[var(--text2)] text-[var(--text2)]">
                <li>Built QuDET 2, a Python framework that consolidates ML pipeline infrastructure into reusable, configurable modules, reducing per-pipeline setup overhead by 89% and standardizing deployment across teams.</li>
                <li>Developed a pluggable data governance layer with AES-128 encryption, role-based access control, automated audit logging, and statistical drift detection, reducing governance-related infrastructure code by 87%.</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
            <div className="mt-1 flex-shrink-0">
              <Image src="/images/amazon.png" alt="Amazon Logo" width={40} height={40} className="rounded-md bg-white p-1" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text1">Amazon</h3>
              <p className="text-sm font-medium text2">Mentee at Machine Learning Summer School</p>
              <p className="text-xs text-zinc-500 italic mb-2">August 2025 – Sept 2025</p>
              <ul className="list-disc pl-5 flex flex-col gap-2 marker:text-[var(--text2)] text-[var(--text2)]">
                <li>Selected among the top 3,000 candidates out of over 134,000+ applicants to receive a month-long mentorship from Amazon scientists on Machine Learning.</li>
                <li>Gained specialized knowledge in modern AI technologies, including Generative AI, Large Language Models (LLMs), and Deep Neural Networks.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
