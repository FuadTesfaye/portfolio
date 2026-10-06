import type { Metadata, Viewport } from "next";
import { Playfair_Display, EB_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["700", "900"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Fuad Tesfaye — Full-Stack Software Engineer",
  description:
    "Fuad Tesfaye — Full-stack software engineer building modern web products, from polished interactive frontends to scalable backend systems.",
  keywords: [
    "Fuad Tesfaye",
    "Full-Stack Software Engineer",
    "MERN",
    "Next.js",
    "Clean Architecture",
    "TypeScript",
    "Addis Ababa",
  ],
  authors: [{ name: "Fuad Tesfaye", url: "https://github.com/FuadTesfaye" }],
  openGraph: {
    title: "Fuad Tesfaye — Full-Stack Software Engineer",
    description:
      "Full-stack software engineer building modern web products, from polished interactive frontends to scalable backend systems.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${ebGaramond.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="antialiased selection:bg-[var(--ink)] selection:text-[var(--bg)]">
        {children}
      </body>
    </html>
  );
}
