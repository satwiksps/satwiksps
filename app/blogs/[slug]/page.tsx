import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { blogs } from "@/app/data/blogs";
import StripedBox from "@/app/components/StripedBox";
import Link from "next/link";
import { ArrowLeft, ArrowRight, NotebookText } from "lucide-react";
import IconBox from "@/app/components/ui/IconBox";
import Heading from "@/app/components/layout/Heading";
import Image from "next/image";
import HiddenFooter from "@/app/components/layout/HiddenFooter";
import Footer from "@/app/components/layout/Footer";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <div className="p-10 text-center text2">Blog not found</div>;
  }

  // 👉 Load MDX file
  const filePath = path.join(process.cwd(), "app/content/blogs", `${slug}.mdx`);

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);

  console.log("slug:", slug);
  console.log("filePath:", filePath);
  console.log("exists:", fs.existsSync(filePath));

  return (
    <div>
      <StripedBox />

      {/* Top bar */}
      <div className="w-full border-b">
        <div className="innerContainer px-4 py-3 flex items-center justify-between">
          <Link
            href="/#blogs"
            scroll={false}
            className="flex gap-2 items-center text2 hover:!text-zinc-600 hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            <h5 className="font1 tracking-tighter">Blogs</h5>
          </Link>

          <div className="flex gap-4">
            <Link
              href="https://medium.com/@rhythmdoshi04/heres-how-i-run-multiple-backends-24x7-for-free-from-my-own-machine-cc70aca2c96e"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBox>
                <NotebookText className="size-6" />
              </IconBox>
            </Link>

            <Link href="/" target="_blank" rel="noopener noreferrer">
              <IconBox>
                <ArrowRight className="size-6" />
              </IconBox>
            </Link>
          </div>
        </div>
      </div>

      <StripedBox />

      {/* Title */}
      <Heading name={data.title || blog.heading} />

      {/* Cover Image (from your data) */}
      <div className="w-full border-b">
        <div className="innerContainer px-4 py-6">
          <div className="w-full h-[30vh] md:h-[55vh] sm:h-[45vh] relative rounded-xl border overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* 🔥 THIS is your MDX content */}
      <div className="w-full border-b">
        <div className="innerContainer px-4 py-6 font2 leading-[1.6]">
          <article className="prose max-w-4xl mx-auto [&_h1]:!text-[var(--text1)] [&_h2]:!text-[var(--text1)] [&_h3]:!text-[var(--text1)] [&_h4]:!text-[var(--text1)] [&_h5]:!text-[var(--text1)] [&_h6]:!text-[var(--text1)] [&_p]:!text-[var(--text1)] [&_li]:!text-[var(--text1)] [&_strong]:!text-[var(--text1)]">
            <MDXRemote source={content} />
          </article>
        </div>
      </div>

      <StripedBox />
      <Footer />
      <HiddenFooter />
    </div>
  );
}
