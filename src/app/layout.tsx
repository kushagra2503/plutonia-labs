import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/components/ui/cn";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Termcrawl.ai - AI Agentic Solutions",
  description: "Pioneering the future of AI technology with cutting-edge research and solutions.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/logo.png', type: 'image/png', sizes: '192x192' }
    ],
    apple: { url: '/favicon.ico', sizes: '180x180' },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("antialiased", inter.variable)}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/logo.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/favicon.ico" sizes="180x180" />
      </head>
      <body className="min-h-screen bg-black text-white">
        <main className="relative flex min-h-screen flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
