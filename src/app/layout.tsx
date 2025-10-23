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
  metadataBase: new URL('https://dario.soatto.com'),
  title: {
    default: "Dario Soatto - Stanford CS & Economics | AI, Investing, Technology",
    template: "%s | Dario Soatto"
  },
  description: "Dario Soatto studies Computer Science and Economics at Stanford. AI agent builder at Context AI, former Investment Associate at Lux Capital, angel investor in AI startups.",
  keywords: [
    "Dario Soatto",
    "Stanford Computer Science",
    "Stanford Economics", 
    "AI agents",
    "Context AI",
    "Lux Capital",
    "AI investing",
    "venture capital",
    "angel investor",
    "tech investing",
    "artificial intelligence",
    "machine learning"
  ],
  authors: [{ name: "Dario Soatto", url: "https://dario.soatto.com" }],
  creator: "Dario Soatto",
  publisher: "Dario Soatto",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dario.soatto.com",
    siteName: "Dario Soatto",
    title: "Dario Soatto - Stanford CS & Economics | AI, Investing, Technology",
    description: "Dario Soatto studies Computer Science and Economics at Stanford. AI agent builder at Context AI, former Investment Associate at Lux Capital, angel investor in AI startups.",
    images: [
      {
        url: "/SMG_Photos_-141 copy.jpg",
        width: 1200,
        height: 630,
        alt: "Dario Soatto"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Dario Soatto - Stanford CS & Economics | AI, Investing, Technology",
    description: "Dario Soatto studies Computer Science and Economics at Stanford. AI agent builder at Context AI, former Investment Associate at Lux Capital, angel investor in AI startups.",
    images: ["/SMG_Photos_-141 copy.jpg"],
    creator: "@dariosoatto" // Add your Twitter handle if you have one
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://dario.soatto.com"
  },
  verification: {
    google: "your-google-verification-code", // Add after setting up Google Search Console
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dario Soatto',
    url: 'https://dario.soatto.com',
    image: 'https://dario.soatto.com/SMG_Photos_-141 copy.jpg',
    email: 'soatto@stanford.edu',
    jobTitle: 'Learner',
    worksFor: {
      '@type': 'Organization',
      name: 'Context AI'
    },
    alumniOf: {
      '@type': 'Organization',
      name: 'Stanford University'
    },
    knowsAbout: ['Artificial Intelligence', 'Venture Capital', 'Computer Science', 'Economics', 'AI Agents'],
    sameAs: [
      'https://www.linkedin.com/in/dario-soatto', // Add your actual social profiles
      'https://twitter.com/dsoatto',
      'https://github.com/dario-soatto'
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistMono.variable} ${poiretOne.variable} antialiased`}>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
