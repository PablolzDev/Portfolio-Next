import type { Metadata } from "next";
import localFont from "next/font/local";
import { Space_Mono } from 'next/font/google'; // Añade esta importación
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

// Añade Space Mono
const spaceMono = Space_Mono({
  weight: ['400', '700'], 
  subsets: ['latin'],
  variable: '--font-space-mono', 
});

export const metadata: Metadata = {
  title: "Pablo Dev",
  description: "This is my portfolio to show me as a developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceMono.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}