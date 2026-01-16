import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://benchlinkplus.co'),
  title: {
    default: 'BenchLink+ | Executive Benchmarking Tours & Innovation Expeditions',
    template: '%s | BenchLink+',
  },
  description: 'Exclusive study tours to Tesla, ByteDance, German Industry 4.0. Customized executive delegations across 42 countries. 285+ successful programs.',
  keywords: [
    'executive study tours',
    'benchmarking tours',
    'innovation expeditions',
    'China business tours',
    'Industry 4.0 tours',
    'corporate learning',
    'executive education',
    'business delegations',
  ],
  authors: [{ name: 'BenchLink+ & Wanxi Tech' }],
  creator: 'BenchLink+',
  publisher: 'BenchLink+',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://benchlinkplus.co',
    siteName: 'BenchLink+',
    title: 'BenchLink+ | Executive Benchmarking Tours & Innovation Expeditions',
    description: 'Exclusive study tours to Tesla, ByteDance, German Industry 4.0. Customized executive delegations across 42 countries.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BenchLink+ - Executive Benchmarking Tours',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BenchLink+ | Executive Benchmarking Tours',
    description: 'Exclusive study tours to world-class companies. 285+ successful programs across 42 countries.',
    images: ['/og-image.jpg'],
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
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
