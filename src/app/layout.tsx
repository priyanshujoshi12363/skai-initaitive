import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Skai Initiative - Prop Firm Evaluation & Trading Capital",
    default: "Skai Initiative - Prop Firm Evaluation & Trading Capital",
  },
  
  description: "Skai Initiative connects talented traders with proprietary trading firms. Pass our structured evaluation to secure funding up to $250k. Zero personal financial risk. No time limits. Join now.",
  
  // Keywords (strategically selected)
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
    "trading opportunity"
  ],
  
  // ICONS - THIS IS THE MISSING SECTION
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "any", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  
  openGraph: {
    title: "Skai Initiative - Prop Firm Evaluation & Trading Capital",
    description: "Skai Initiative connects talented traders with proprietary trading firms. Pass our structured evaluation to secure funding up to $250k. Zero personal financial risk.",
    url: "https://skaiinitiative.com",
    siteName: "Skai Initiative",
    images: [
      {
        url: "https://skaiinitiative.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Skai Initiative - Trading Capital for Professionals",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Skai Initiative - Prop Firm Evaluation & Trading Capital",
    description: "Pass our structured evaluation to secure funding up to $250k. Zero personal financial risk. No time limits.",
    images: ["https://skaiinitiative.com/twitter-image.jpg"],
    creator: "@skaiinitiative",
  },
  
  // Robots (for search engine crawling)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  verification: {
    google: "your-google-verification-code",
  },
  
  alternates: {
    canonical: "https://skaiinitiative.com",
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
        {/* Additional favicon link for browsers that need it */}
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/logo.png" type="image/png" />
        
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Skai Initiative",
              "url": "https://skaiinitiative.com",
              "logo": "https://skaiinitiative.com/logo.png",
              "description": "Skai Initiative connects talented traders with proprietary trading firms through a structured evaluation process.",
              "sameAs": [
                "https://twitter.com/skaiinitiative",
                "https://linkedin.com/company/skaiinitiative"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-xxx-xxx-xxxx",
                "contactType": "sales",
                "availableLanguage": ["English"]
              },
              "offers": {
                "@type": "Offer",
                "name": "Trading Evaluation",
                "description": "Structured evaluation to identify institutional-grade trading talent",
                "price": "150",
                "priceCurrency": "USD"
              }
            })
          }}
        />
        
        {/* FAQ Structured Data */}
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
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}