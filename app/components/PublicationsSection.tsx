import Image from "next/image";
import Link from "next/link";

export default function PublicationsSection() {
  return (
    <>
      <div className="innerContainer h-full px-4 text-[15px]">
        <div className="flex flex-col gap-4 font1 tracking-tighter py-4 text1">
          
          <Link href="https://arxiv.org/abs/2605.16404" target="_blank" rel="noopener noreferrer" className="block w-full">
            <div className="w-full border mb-4 rounded-md overflow-hidden">
              <img 
                src="/images/paper_pakdd_1.jpg" 
                alt="Hybrid Quantum-MambaVision Architecture" 
                className="w-full h-auto"
              />
            </div>

            <h3 className="text-xl font2 text1 hover:underline">
              Hybrid Quantum-MambaVision: A Quantum-enhanced State Space Model for Calibrated Mixed-type Wafer Defect Detection
            </h3>
          </Link>
          <p className="text2 tracking-tighter text-sm">
            <span className="font-medium text1">Venue:</span> Pacific-Asia Conference on Knowledge Discovery and Data Mining (PAKDD 2026), Hong Kong
          </p>

        </div>
      </div>
    </>
  );
}
