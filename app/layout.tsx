import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://rokstrategy.com'),
  title: {
    default: 'ROK Strategy Hub - Master Rise of Kingdoms',
    template: '%s | ROK Strategy Hub'
  },
  description: "Master your Rise of Kingdoms strategy with AI-powered insights, weekly event analysis, and personalized guidance for all spending tiers.",
  keywords: ['Rise of Kingdoms', 'ROK Strategy', 'ROK Guide', 'Rise of Kingdoms Tips', 'KvK Strategy', 'Commander Guide', 'ROK Events'],
  authors: [{ name: 'ROK Strategy Hub' }],
  creator: 'ROK Strategy Hub',
  publisher: 'ROK Strategy Hub',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'ROK Strategy Hub',
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
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen" style={{ backgroundColor: 'var(--deep-night)' }}>
        {children}
      </body>
    </html>
  );
}
