import type { Metadata } from "next";
import { Geist, Geist_Mono, Quicksand, DM_Sans } from "next/font/google";
import "./globals.css";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/react-query-client';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  display: 'swap'
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "ChefMuse",
  description: "A platform for food enthusiasts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} ${quicksand.variable} ${dmSans.variable} antialiased`}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </body>
  </html>
  );
}
