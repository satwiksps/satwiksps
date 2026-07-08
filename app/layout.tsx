import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://satwiksps.xyz"),
  alternates: {
    canonical: "/",
  },
  title: "satwiksps",
  description:
    "Full Stack Engineer building modern web applications. Explore my projects, stack, and experience in React, Next.js, Node.js and more.",

  icons: {
    icon: [
      { url: "/newlogo.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/meta/apple-touch-icon180.png", sizes: "180x180" }],
    other: [
      {
        rel: "mask-icon",
        url: "/meta/apple-touch-icon180.png",
        color: "#000000",
      },
      { rel: "msapplication-TileImage", url: "/meta/mstile144.png" },
    ],
  },
  openGraph: {
    title: "Satwik Sai Prakash Sahoo — I Build Things for the Web",
    description: "Full Stack Engineer building modern web applications.",
    url: "https://github.com/satwiksps",
    siteName: "Satwik Sai Prakash Sahoo",
    images: [
      {
        url: "https://satwiksps.xyz/meta/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satwik Sai Prakash Sahoo — I Build Things for the Web",
    description:
      "Full Stack Engineer building modern web applications. Explore my projects, stack, and experience in React, Next.js, Node.js and more.",
    images: ["https://satwiksps.xyz/meta/twitter-image.png"], // absolute URL
  },
  manifest: "/meta/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/font2.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/font1.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`font1 font2 antialiased`}>
        <div className="sticky top-0 h-2 w-full bg1 z-50"></div>
        <Navbar />
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
