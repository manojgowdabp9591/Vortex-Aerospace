import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Galaxy from "./components/Galaxy";
import ParallaxGalaxy from "./components/ParallaxGalaxy";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vortex Aerospace | Advanced Propulsion Systems",
  description: "Vortex Aerospace is an aerospace manufacturer building the next generation of reusable rockets powered by Rotary Detonation Engines (RDE).",
  keywords: ["Vortex", "Aerospace", "RDE", "Rocket", "Space", "India", "Tech", "Startup", "Propulsion"],
  openGraph: {
    title: "Vortex Aerospace | Advancing Humanity",
    description: "Building the infrastructure for the next century of human history with detonation-based propulsion.",
    url: "https://vortex-aerospace.vercel.app", // Update this URL when you deploy
    siteName: "Vortex Aerospace",
    images: [
      {
        url: "/social-preview.png",
        width: 1200,
        height: 630,
        alt: "Vortex Aerospace Launch Vehicle",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vortex Aerospace",
    description: "Advancing Humanity through reusable spaceflight.",
    images: ["/social-preview.jpg"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {/* 1. Global Backgrounds */}
        <Galaxy />
        <ParallaxGalaxy />
        <Preloader />

        {/* 2. Navigation (Fixed Top) */}
        <Navbar />

        {/* 3. Main Page Content */}
        {children}

        {/* 4. Global Footer (Always at bottom) */}
        <Footer />
      </body>
    </html>
  );
}