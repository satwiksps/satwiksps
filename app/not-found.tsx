import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Magnet from "./components/ui/Magnet";

export default function NotFound() {
  return (
    <main id="main-content" className="bg1 min-h-[75vh] w-full flex flex-col items-center justify-center gap-4 p-5 text-center">
      <h1 className="text2 font1 tracking-tight text-3xl">Satwik Sai Prakash Sahoo</h1>
      <h2 className="text1 font2 tracking-tighter" style={{ fontSize: "10vw", lineHeight: 1 }}>404</h2>
      <Magnet padding={80} magnetStrength={1}>
      <Link href="/" className="flex hover:underline hover:text-black items-center justify-center gap-2 text2 font1 py-2 px-3 bg2 rounded-lg tracking-tight text-sm  transition mt-2">
        Go Home 
        <ArrowRight className="w-4 h-4" />
      </Link>
      </Magnet>
    </main>
  );
}
