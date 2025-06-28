import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrian Meyhta Ferdiansyah - Web Developer",
  description:
    "Personal portfolio of Andrian Meyhta Ferdiansyah, a Web Developer specializing in Laravel and TypeScript",
  keywords: [
    "Web Developer",
    "Laravel",
    "TypeScript",
    "Portfolio",
    "Andrian Meyhta",
  ],
  authors: [{ name: "Andrian Meyhta Ferdiansyah" }],
  openGraph: {
    title: "Andrian Meyhta Ferdiansyah - Web Developer",
    description:
      "Personal portfolio of Andrian Meyhta Ferdiansyah, a Web Developer specializing in Laravel and TypeScript",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
