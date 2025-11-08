import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// @ts-ignore - allow CSS side-effect import without explicit type declarations
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KR Rohit — Full Stack Blockchain Developer",
  description: "rohitisog's personal website & projects",
  keywords: [
    "KR Rohit",
    "rohitisog",
    "Full Stack Developer",
    "Blockchain",
    "Ethereum",
    "Base",
    "Next.js",
  ],
  openGraph: {
    title: "KR Rohit — Blockchain Developer",
    description: "Personal portfolio & projects by KR Rohit",
    url: "https://rohitisog.com",
    siteName: "rohitisog",
    images: [
      {
        url: "/ProfilePic.png",
        width: 800,
        height: 800,
        alt: "KR Rohit",
      },
    ],
    locale: "en_US",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white transition-colors duration-500`}
      >
        {children}
      </body>
    </html>
  );
}
