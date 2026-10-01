import type { Project } from "../../types/Project.types";
import Link from "next/link";
import Image from "next/image";

export default function Project({ slug, heading, subheading, image, alt }: Project) {
    return (
        <Link href={`/project/${slug}`} className="project-card flex flex-col h-full gap-3 rounded-xl">
            <div className="relative aspect-[2/1] w-full bg3 border rounded-xl overflow-hidden flex-shrink-0">
                <Image
                    src={image}
                    alt={alt}
                    fill
                    sizes="(min-width: 768px) 376px, 95vw"
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col items-start justify-center px-2 pb-2 leading-tight">
                <h2 className="text-xl font2 text1 hover:underline">{heading}</h2>
                <h3 className="text2 text-sm leading-relaxed">{subheading}</h3>
            </div>
        </Link>
    )
}
