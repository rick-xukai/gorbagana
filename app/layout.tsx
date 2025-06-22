import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Gorbagana AI - The Future of Artificial Intelligence",
  description: "Discover revolutionary AI solutions that transform industries and empower innovation. Welcome to the next generation of artificial intelligence.",
  keywords: "AI, artificial intelligence, machine learning, technology, innovation, neural networks",
  authors: [{ name: "Gorbagana AI Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Gorbagana AI - The Future of Artificial Intelligence",
    description: "Revolutionary AI solutions that transform industries and empower innovation.",
    type: "website",
    siteName: "Gorbagana AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gorbagana AI - The Future of Artificial Intelligence",
    description: "Revolutionary AI solutions that transform industries and empower innovation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
