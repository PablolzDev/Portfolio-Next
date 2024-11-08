import type { Metadata } from "next";
import localFont from "next/font/local";
import { Space_Mono } from 'next/font/google';
import "./global.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
});

export const metadata: Metadata = {
  title: "Pablo Dev | Front End Developer",
  description: "Front End Developer specialized in React, Next.js and modern web technologies. Explore my portfolio and open source projects.",
  keywords: [
    "Pablo Dev",
    "Front End Developer",
    "React Developer",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Web Development",
    "Frontend Developer",
    "Backend Developer",
    "GitHub Projects",
    "Open Source",
  ],
  creator: "Pablo Dev",
  authors: [{ name: "Pablo Dev", url: "https://github.com/PablolzDev" }],
  openGraph: {
    title: "Pablo Dev | Front End Developer",
    description: "Front End Developer specialized in React, Next.js, Node.js and modern web technologies.",
    type: "website",
    locale: "en_US",
    siteName: "Pablo Dev Portfolio",
  },
  alternates: {
    canonical: "https://pablolz.xyz/",
    types: {
      'application/github+json': 'https://github.com/PablolzDev',
    }
  },
  verification: {
    other: {
      'github-profile': 'https://github.com/PablolzDev',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  metadataBase: new URL('https://pablolz.xyz/'), // Replace with your actual domain
  other: {
    'github-repo': 'https://github.com/PablolzDev/Portfolio-Next', // Replace with your portfolio repo
    'github-profile': 'https://github.com/PablolzDev',
  }
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}