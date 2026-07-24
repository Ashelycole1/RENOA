import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RENOA | Software Studio",
  description: "Product design, engineering, and AI operations from Kampala for teams across Africa and global markets.",
  keywords: ["software studio", "product design", "Kampala", "Uganda", "web development", "AI", "RENOA"],
  openGraph: {
    title: "RENOA | Software Studio",
    description: "Product design, engineering, and AI operations from Kampala for teams across Africa and global markets.",
    type: "website",
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
