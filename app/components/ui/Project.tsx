import Image from "next/image";
import type { Project } from "../../types/Project.types";
import Link from "next/link";

export default function Project({ slug, heading, subheading, image, alt}: Project) {
    return (
        <Link href={`/project/${slug}`} className="flex flex-col h-full gap-3">
            <div className="w-full bg3 border rounded-xl overflow-hidden flex-shrink-0">
                <img src={image} alt={alt} className="w-full h-auto object-cover" />
            </div>
            <div className="flex flex-col items-start justify-center px-2 pb-2 leading-tight">
                <h2 className="text-xl font2 text1 hover:underline">{heading}</h2>
                <h3 className="text2 tracking-tighter text-sm hover:underline">{subheading}</h3>
            </div>
        </Link>
    )
}