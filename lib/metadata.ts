import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://benchlinkplus.co';

interface PageMetadataProps {
  locale: string;
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

export async function generatePageMetadata({
  locale,
  title,
  description,
  path = '',
  image = '/og-image.jpg',
  noIndex = false,
}: PageMetadataProps): Promise<Metadata> {
  const fullUrl = `${baseUrl}${locale === 'en' ? '' : `/${locale}`}${path}`;
  const imageUrl = `${baseUrl}${image}`;

  // Get hreflang alternate URLs
  const alternateLanguages = {
    'en': `${baseUrl}${path}`,
    'zh': `${baseUrl}/zh${path}`,
    'pt': `${baseUrl}/pt${path}`,
  };

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: fullUrl,
      languages: alternateLanguages,
    },
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: 'BenchLink+',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: locale === 'zh' ? 'zh_CN' : locale === 'pt' ? 'pt_PT' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? {
          index: false,
          follow: true,
        }
      : {
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
  };
}

// Helper for route/service pages
export async function generateRouteMetadata(
  locale: string,
  routeName: string,
  description: string,
  slug: string
): Promise<Metadata> {
  return generatePageMetadata({
    locale,
    title: `${routeName} | Benchmarking Tour | BenchLink+`,
    description,
    path: `/services/${slug}`,
    image: `/routes/${slug}-og.jpg`,
  });
}

// Helper for case study pages
export async function generateCaseStudyMetadata(
  locale: string,
  clientName: string,
  industry: string,
  result: string,
  slug: string
): Promise<Metadata> {
  return generatePageMetadata({
    locale,
    title: `${clientName} Case Study | ${industry} | BenchLink+`,
    description: `${result}. Discover how ${clientName} achieved breakthrough results through BenchLink+ benchmarking programs.`,
    path: `/case-studies/${slug}`,
    image: `/case-studies/${slug}-og.jpg`,
  });
}
