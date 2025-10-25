import './globals.css';
import { Analytics } from "@vercel/analytics/react";
import Head from 'next/head';

export const metadata = {
  title: "Calendrier de Jade - Rhode Island",
  description: "Le calendrier des matchs de Jade.",
   manifest: "/manifest.json",
  appleWebApp: {
    title: "Inès Schedule",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Calendrier de Jade - Rhode Island",
    description: "Le calendrier des matchs de Jade.",
    url: "https://jade-calendrier.vercel.app/",
    siteName: "Jade Celerier Schedule",
    images: [
      {
        url: "https://jade-calendrier.vercel.app/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Calendrier de Jade - Rhode Island",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calendrier de Jade - Rhode Island",
    description: "Le calendrier des matchs de Jade.",
    images: ["https://jade-calendrier.vercel.app/preview.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <Head>
        <link rel="icon" href="/favicon.ico" />
         
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-title" content="Jade Schedule" />
        <meta name="theme-color" content="#1e40af" />
      </Head>

      <body className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 text-gray-900 dark:text-white">
        <header className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white p-6 text-3xl sm:text-3xl font-bold text-center shadow-lg tracking-wide">
          
          {/* Mobile */}
          <span className="sm:hidden">🏀 JADE SCHEDULE</span>

          {/* Tablette */}
          <span className="hidden sm:inline lg:hidden">🏀 CALENDRIER DE JADE</span>

          {/* Ordinateur */}
          <span className="hidden lg:inline">🏀 CALENDRIER DE JADE - DODGE CITY</span>
        </header>

        <main className="container mx-auto mt-6 px-4">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
