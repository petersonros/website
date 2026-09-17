import React from "react";
import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE_URL } from "@/lib/site";
import "@/styles/globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Peterson — Desenvolvedor", template: "%s | Peterson" },
  description: "Portfólio, projetos e aprendizados em Next.js/TypeScript.",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Peterson — Desenvolvedor",
    description: "Portfólio, projetos e aprendizados.",
    siteName: "Peterson",
    images: [
      {
        url: `${SITE_URL}/og.png`,
        width: 1200,
        height: 630,
        alt: "Peterson — Portfólio",
      },
    ],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
  referrer: "strict-origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} font-sans flex min-h-screen flex-col bg-background bg-dotted text-foreground`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
