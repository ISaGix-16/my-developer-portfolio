import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";

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
  title: {
    default: "Aman Arya | Software Developer",
    template: "%s | Aman Arya",
  },

  description:
    "Explore Aman Arya's portfolio featuring full-stack web applications, technical skills, and software projects built with React, Next.js, and modern web technologies.",

  applicationName: "Aman Arya Portfolio",

  keywords: [
    "Aman Arya",
    "Software Developer",
    "Software Development Engineer",
    "Full-Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js",
    "PostgreSQL",
    "SDE Fresher",
    "IIT Hyderabad",
  ],

  authors: [{ name: "Aman Arya" }],

  openGraph: {
    title: "Aman Arya | Software Developer",
    description:
      "Explore my software development projects, technical skills, and full-stack web applications.",
    type: "website",
    siteName: "Aman Arya Portfolio",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Aman Arya | Software Developer",
    description:
      "Explore my software development projects, technical skills, and full-stack web applications.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d1117",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
