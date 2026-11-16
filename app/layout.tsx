import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import { siteUrl } from "./site";

const themeScript = `
  (() => {
    let theme;
    try { theme = localStorage.getItem("portfolio-theme"); } catch {}
    document.documentElement.classList.toggle("dark", theme === "dark");
  })();
`;

const description = "Satwik Sai Prakash Sahoo’s portfolio of software projects, open-source contributions, and research.";
const avatar = "/images/satwiksps-avatar.png";
const socialCard = {
  url: "/images/portfolio-social-card.png",
  width: 1200,
  height: 630,
  alt: "Satwik Sai Prakash Sahoo, Software Engineer. AI/ML, DevOps, and Open Source. satwiksps.site.",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  title: "satwiksps",
  description,

  icons: {
    icon: [{ url: avatar, type: "image/png", sizes: "128x128" }],
    apple: [{ url: avatar, sizes: "128x128" }],
  },
  openGraph: {
    title: "Satwik Sai Prakash Sahoo",
    description,
    url: "/",
    siteName: "Satwik Sai Prakash Sahoo",
    images: [socialCard],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satwik Sai Prakash Sahoo",
    description,
    images: [socialCard],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
