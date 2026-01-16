import type React from "react";
import type { Metadata } from "next";
import { Funnel_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const funnelDisplay = Funnel_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cubec",
  description:
    "Building creative brands for the trailblazers. Digital presence consultancy, research & brand strategy, creative direction & design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased bg-[#0a0a0a]`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
