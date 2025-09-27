import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Flip, ToastContainer } from "react-toastify";

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

const inter = localFont({
  src: "../public/fonts/ProximaNova-Regular.otf",
  weight: "400",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
     <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Flip}
      />
    <html lang="en">
      <head>
        <link rel="icon" href="/img/favicon.png" />
      </head>
      <body className={`${inter.variable}`}>{children}</body>
    </html>
    </>
  );
}
