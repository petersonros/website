import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Peterson | Desenvolvedor",
  description: "Website desenvolvido com Next.js, Tailwind e TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <main className="flex-grow">
          <ThemeProvider>{children}</ThemeProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
