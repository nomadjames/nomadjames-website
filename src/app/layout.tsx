import type { Metadata } from "next";
import { Outfit, Inter, JetBrains_Mono, IBM_Plex_Mono, IBM_Plex_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollRestoration from "@/components/ScrollRestoration";

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

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-ibm-plex-serif",
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
      className={`${outfit.variable} ${inter.variable} ${jbMono.variable} ${ibmPlexMono.variable} ${ibmPlexSerif.variable}`}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VWV4GHNHV7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VWV4GHNHV7');
          `}
        </Script>
      </head>
      <body className="antialiased">
        <ScrollRestoration />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
