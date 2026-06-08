// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://skainitiative.com'),
  
  title: {
    template: "%s | Skai Initiative - Prop Firm Evaluation & Trading Capital",
    default: "Skai Initiative - Prop Firm Evaluation & Trading Capital | Get Funded Up to $250k",
  },
  
  description: "Skai Initiative connects talented traders with proprietary trading firms. Pass our structured evaluation to secure funding up to $250k. Zero personal financial risk. No time limits. Join 10,000+ successful traders.",
  
  keywords: [
    "prop firm",
    "prop trading",
    "trading evaluation",
    "trader funding",
    "proprietary trading firm",
    "skai initiative",
    "trading capital",
    "funded trader",
    "trading assessment",
    "prop firm evaluation",
    "trading challenge",
    "institutional trading",
    "trading talent",
    "simulated trading",
    "trader assessment",
    "funding for traders",
    "prop firm funding",
    "trading career",
    "professional trading",
    "trading opportunity",
    "get funded trading",
    "prop firm challenge",
    "trading psychology",
    "risk management trading"
  ],
  
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
      { url: "/logo.png", sizes: "any", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.png"],
  },
  
  openGraph: {
    title: "Skai Initiative - Prop Firm Evaluation & Trading Capital | Get Funded Up to $250k",
    description: "Pass our structured evaluation to secure funding up to $250k. Zero personal financial risk. No time limits. Join 10,000+ successful traders.",
    url: "https://skainitiative.com",
    siteName: "Skai Initiative",
    images: [
      {
        url: "https://skainitiative.com/logo.png",
        width: 512,
        height: 512,
        alt: "Skai Initiative - Prop Firm Trading Evaluation Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  
  alternates: {
    canonical: "https://skainitiative.com",
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
        <link rel="canonical" href="https://skainitiative.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Skai Initiative",
              "url": "https://skainitiative.com",
              "logo": "https://skainitiative.com/logo.png",
              "description": "Skai Initiative connects talented traders with proprietary trading firms through a structured evaluation process.",
              "founder": {
                "@type": "Person",
                "name": "Skai Initiative Team"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer support",
                "availableLanguage": ["English"]
              },
              "offers": {
                "@type": "Offer",
                "name": "Trading Evaluation Assessment",
                "description": "Structured evaluation to identify institutional-grade trading talent",
                "price": "150",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              }
            })
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What constitutes a successful evaluation at Skai Initiative?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Success is determined by consistent profitability, adhering to drawdown limits, and maintaining risk management criteria over a sustained period."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which prop firms do you connect traders with?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We maintain relationships with a network of regulated proprietary trading firms looking for unique talent."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is there a time limit for the trading assessment?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. We prioritize quality over speed. Traders can take as long as they need to meet their targets, provided they maintain active trading activity once every 30 days."
                  }
                }
              ]
            })
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Skai Initiative",
              "url": "https://skainitiative.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://skainitiative.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}