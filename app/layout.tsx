import type { Metadata, Viewport } from "next";
import { Playfair_Display } from "next/font/google";
import { LanguageProvider } from "../components/language/LanguageProvider";
import "./globals.css";

const monogramFont = Playfair_Display({
  variable: "--font-monogram",
  subsets: ["latin"],
  weight: ["700"],
  style: ["italic"],
});

const SITE_URL = "https://portfolio-siffleurkevin-3794s-projects.vercel.app";
const SITE_NAME = "Siffleur Kevin — Développeur Frontend";
const SITE_DESCRIPTION =
  "Portfolio de Siffleur Kevin, développeur frontend. Découvrez mes projets web, mes compétences (React, JavaScript, Sass) et mon parcours.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | Siffleur Kevin`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Siffleur Kevin",
    "développeur frontend",
    "portfolio développeur",
    "intégrateur web",
    "React",
    "JavaScript",
  ],
  authors: [{ name: "Siffleur Kevin" }],
  creator: "Siffleur Kevin",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Siffleur Kevin",
  jobTitle: "Développeur Frontend",
  url: SITE_URL,
  email: "mailto:contact.siffleurkevin@gmail.com",
  sameAs: ["https://github.com/Moltozor"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${monogramFont.variable} h-full antialiased`}>
      <body className="min-h-full bg-black">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
