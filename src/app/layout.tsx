import type { Metadata } from "next";
import { Roboto_Mono, Poiret_One } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-roboto-mono",
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
      <body className={`${robotoMono.variable} ${poiretOne.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
