import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { generateMetadata, DEFAULT_SEO_CONFIG } from "@/utils/seo";
import JsonLd from "@/components/JsonLd";
import Analytics from "@/components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = generateMetadata({
  ...DEFAULT_SEO_CONFIG,
  title:
    "Play Learno - Coming Soon | Educational Books & Learning Adventures for Kids",
  description:
    "Something amazing is coming! Play Learno is crafting thoughtful educational books and interactive learning adventures for children aged 2-6. Join our community and be the first to discover stories designed with child development in mind.",
  keywords: [
    "children books",
    "educational books",
    "kids learning",
    "early childhood education",
    "interactive books",
    "child development",
    "preschool learning",
    "ages 2-6",
    "learning adventures",
    "educational activities",
    "coming soon",
    "launch notification",
    "early access",
  ],
});

// Add web app manifest
export const manifest = "/site.webmanifest";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f97316" },
    { media: "(prefers-color-scheme: dark)", color: "#ea580c" },
  ],
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f97316" />
        <meta name="msapplication-TileColor" content="#f97316" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Play Learno" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
