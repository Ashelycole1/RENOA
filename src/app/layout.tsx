import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RENOA | Software Studio — Kampala, Uganda",
  description: "Product design, platform engineering, and AI operations from Kampala for teams across East Africa and global markets. Book a free discovery call.",
  keywords: ["software studio", "product design", "Kampala", "Uganda", "web development", "AI automation", "Mobile Money integration", "MTN MoMo", "RENOA", "East Africa tech"],
  metadataBase: new URL("https://renoa.tech"),
  alternates: {
    canonical: "https://renoa.tech",
  },
  openGraph: {
    title: "RENOA | Software Studio — Kampala, Uganda",
    description: "Product design, platform engineering, and AI operations from Kampala for teams across East Africa and global markets.",
    type: "website",
    url: "https://renoa.tech",
    siteName: "RENOA",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "RENOA Software Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RENOA | Software Studio — Kampala, Uganda",
    description: "Product design, engineering, and AI from Kampala for East Africa and global markets.",
    site: "@renoa_tech",
    images: ["/icon.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
