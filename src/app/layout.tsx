import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "Metaspire Solutions ",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
      <GoogleAnalytics gaId="G-82EQ0K284C" />
    </html>
  );
}

