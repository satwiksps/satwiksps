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
const banner = "/images/profile-banner.png";

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
    images: [
      {
        url: banner,
        width: 2172,
        height: 724,
        alt: "design() build() automate() · @satwiksps",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satwik Sai Prakash Sahoo",
    description,
    images: [banner],
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
