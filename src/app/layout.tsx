import type { Metadata } from "next";
import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jbMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jb-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "James Dishman | UX Designer & AI Researcher",
  description:
    "UX researcher and designer working at the intersection of AI, creativity, and human decision-making. MS UX candidate at Kent State University.",
  openGraph: {
    title: "James Dishman | UX Designer & AI Researcher",
    description:
      "UX researcher and designer working at the intersection of AI, creativity, and human decision-making. MS UX candidate at Kent State University.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "James Dishman | UX Designer & AI Researcher",
    description:
      "UX researcher and designer working at the intersection of AI, creativity, and human decision-making. MS UX candidate at Kent State University.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} ${jbMono.variable}`}
    >
      <body className="antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
