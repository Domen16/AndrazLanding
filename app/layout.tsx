import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://rokstrategist.com'),
  title: {
    default: 'ROK STRATEGIST - Master Rise of Kingdoms',
    template: '%s | ROK STRATEGIST'
  },
  description: "Master your Rise of Kingdoms strategy with AI-powered insights, weekly event analysis, and personalized guidance for all spending tiers. Join 500+ governors waiting for early access!",
  keywords: ['Rise of Kingdoms', 'ROK Strategy', 'ROK Guide', 'Rise of Kingdoms Tips', 'KvK Strategy', 'Commander Guide', 'ROK Events', 'ROK AI', 'Rise of Kingdoms Strategy', 'ROK Strategist', 'Commander Tier List', 'Event Analysis', 'F2P Strategy', 'Low Spender Guide'],
  authors: [{ name: 'ROK STRATEGIST' }],
  creator: 'ROK STRATEGIST',
  publisher: 'ROK STRATEGIST',
  applicationName: 'ROK STRATEGIST',
  category: 'Gaming',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { url: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rokstrategist.com',
    siteName: 'ROK STRATEGIST',
    title: 'ROK STRATEGIST - Master Rise of Kingdoms Strategy',
    description: 'Master your Rise of Kingdoms strategy with AI-powered insights, weekly event analysis, and personalized guidance for all spending tiers. Join 500+ governors waiting for early access!',
    images: [
      {
        url: '/logoFull.png',
        width: 1200,
        height: 630,
        alt: 'ROK STRATEGIST - Master Rise of Kingdoms',
        type: 'image/png',
      },
      {
        url: '/logo.png',
        width: 1200,
        height: 1200,
        alt: 'ROK STRATEGIST Logo',
        type: 'image/png',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ROK STRATEGIST - Master Rise of Kingdoms Strategy',
    description: 'AI-powered insights, weekly event analysis, and personalized guidance for all spending tiers. Join the waitlist now!',
    images: ['/logoFull.png'],
    creator: '@rokstrategist',
    site: '@rokstrategist',
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
    canonical: 'https://rokstrategist.com',
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ROK STRATEGIST',
    description: 'Master your Rise of Kingdoms strategy with AI-powered insights, weekly event analysis, and personalized guidance for all spending tiers.',
    url: 'https://rokstrategist.com',
    logo: 'https://rokstrategist.com/logoFull.png',
    sameAs: [
      'https://discord.gg/VusfRNnY'
    ],
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://rokstrategist.com/?s={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ROK STRATEGIST',
    url: 'https://rokstrategist.com',
    logo: 'https://rokstrategist.com/logoFull.png',
    description: 'AI-powered Rise of Kingdoms strategy platform providing weekly event analysis and personalized guidance.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      url: 'https://discord.gg/VusfRNnY'
    }
  };

  return (
    <html lang="en" style={{ scrollPaddingTop: '100px' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-screen" style={{ backgroundColor: 'var(--deep-night)' }}>
        {children}
      </body>
    </html>
  );
}
