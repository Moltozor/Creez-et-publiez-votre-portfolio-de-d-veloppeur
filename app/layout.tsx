import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const monogramFont = Playfair_Display({
  variable: "--font-monogram",
  subsets: ["latin"],
  weight: ["700"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "Mon Portfolio",
  description: "Portfolio de développeur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${monogramFont.variable} h-full antialiased`}>
      <body className="min-h-full bg-black">
        {children}
      </body>
    </html>
  );
}
