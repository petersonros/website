import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ToastProvider } from "@/components/Toast";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Peterson — Desenvolvedor", template: "%s | Peterson" },
  description: "Portfólio, projetos e aprendizados em Next.js/TypeScript.",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Peterson — Desenvolvedor",
    description: "Portfólio, projetos e aprendizados.",
    siteName: "Peterson",
    images: [
      { url: "/og.png", width: 1200, height: 630, alt: "Peterson — Portfólio" },
    ],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <ToastProvider>
          <ThemeProvider>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </ThemeProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
