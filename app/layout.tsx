import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hanen Food",
  description: "Spécialités culinaires tunisiennes faites maison.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        {/* Open Graph meta tags for social sharing */}
        <meta property="og:title" content="Hanen Food" />
        <meta property="og:description" content="Spécialités culinaires tunisiennes faites maison." />
        <meta property="og:image" content="https://hanen-food.vercel.app/og-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hanen-food.vercel.app/" />
        {/* Twitter Card for better preview */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hanen Food" />
        <meta name="twitter:description" content="Spécialités culinaires tunisiennes faites maison." />
        <meta name="twitter:image" content="https://hanen-food.vercel.app/og-image.png" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
