import type { Metadata } from "next";
import { Geist_Mono, Poiret_One } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/next"

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-geist-mono",
});

// Poiret One for your name
const poiretOne = Poiret_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poiret-one",
});

export const metadata: Metadata = {
  title: "Dario Soatto",
  description: "Personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} ${poiretOne.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
