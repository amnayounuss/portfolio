import { Sora, Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import PageTransition from "../components/PageTransition";
import StairTransition from "../components/StairTransition";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: '--font-inter'
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-sora'
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: '--font-jakarta'
});

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: "Amna Younus | Software Developer & Experience Architect",
    template: "%s | Amna Younus"
  },
  description: "Experienced Software Developer specializing in crafting high-fidelity digital experiences, technical architectures, and modern web solutions.",
  keywords: ["Software Developer", "Frontend Engineer", "Next.js", "React", "Portfolio", "Amna Younus"],
  authors: [{ name: "Amna Younus" }],
  creator: "Amna Younus",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio-url.com",
    title: "Amna Younus | Software Developer",
    description: "Crafting the future of code through architectural precision and visual sophistication.",
    siteName: "Amna Younus Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amna Younus | Software Developer",
    description: "Experience Architect & Full Stack Developer",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${sora.variable} ${jakarta.variable} ${inter.variable} font-body bg-primary text-white overflow-x-hidden antialiased`}>
        <div className="noise" />
        <Header />
        <StairTransition/>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}