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
      { url: '/duck.png', sizes: '48x48' },
      { url: '/duck.png', type: 'image/png', sizes: '192x192' }
    ],
    apple: { url: '/duck.png', sizes: '180x180' },
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
        <link rel="icon" href="/duck.png" sizes="48x" />
        <link rel="icon" href="/duck.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/favicon.ico" sizes="180x180" />
      </head>
      <body className="min-h-screen bg-gray-900 text-white">
        <main className="relative flex min-h-screen flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
