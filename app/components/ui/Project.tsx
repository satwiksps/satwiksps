import Image from "next/image";
import type { Project } from "../../types/Project.types";
import Link from "next/link";

export default function Project({ slug, heading, subheading, image, alt}: Project) {
    return (
        <Link href={`/project/${slug}`} className="h-full">
            <div className="h-[72%] w-full bg3 border rounded-xl relative">
                <Image src={image} alt={alt} fill className="h-full w-full object-cover rounded-xl" />
            </div>
            <div className="h-[28%] flex flex-col items-start justify-center px-2 leading-none">
                <h2 className="text-xl font2 text1 hover:underline">{heading}</h2>
                <h3 className="text2 tracking-tighter text-sm hover:underline">{subheading}</h3>
            </div>
        </Link>
    )
}