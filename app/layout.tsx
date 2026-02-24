import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@fontsource/orbitron/700.css";
import "@fontsource/sora/600.css";
import Header from "./components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AscendBet — Prove Your Discipline. Get Funded",
  description:
    "Join the free 14–21 day virtual betting challenge. Bet on real football matches with real odds. Top performers qualify for partner-funded bonus accounts.",

  openGraph: {
    title: "AscendBet — Prove Your Discipline. Get Funded",
    description:
      "Join the free 14–21 day virtual betting challenge and qualify for funded bonus accounts.",
    url: "https://ascendbet-landing-deploy.vercel.app",
    siteName: "AscendBet",
    images: [
      {
        url: "/ascendbet-preview.png",
        width: 1200,
        height: 630,
      },
    ],
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
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
