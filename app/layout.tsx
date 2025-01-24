import type { Metadata } from "next";

import "./globals.css";
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { TopButton } from "./components/TopButton";
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })



export const metadata: Metadata = {
  title: "Thyltech",
  description: "Recherche de projet de fin d’études dans le domaine du sport et de la santé. Pour des sujets autour du logiciel embarqué et / ou du développement logiciel ou web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>

      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />

          <TopButton />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
