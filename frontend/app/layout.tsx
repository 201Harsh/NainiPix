import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NainiPix AI",
  description:
    "Create stunning AI-powered images in seconds with NainiPix AI. Choose from free & premium templates like Anime, Cyberpunk, Retro, Ghost edits, and more. 5 free edits daily!",
  keywords: [
    "NainiPix AI",
    "AI Image Generator",
    "AI Photo Editor",
    "Free AI Templates",
    "Anime Photo AI",
    "Cyberpunk AI Images",
    "Retro Portrait AI",
    "AI Background Change",
    "AI Collage Maker",
    "AI Art Generator",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
