import { MetadataRoute } from 'next';
import { locales, defaultLocale } from '@/lib/i18n';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://benchlinkplus.co';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/services',
    '/case-studies',
    '/contact',
    '/inquiry',
    '/privacy-policy',
    '/terms',
    '/cookies',
  ];

  // Service/route pages
  const serviceRoutes = [
    '/services/germany-industry-4',
    '/services/shanghai-innovation',
    '/services/shenzhen-manufacturing',
    '/services/suzhou-excellence',
    '/services/silicon-valley',
    '/services/portugal-innovation',
    '/services/japan-lean',
  ];

  // Case study pages
  const caseStudyRoutes = [
    '/case-studies/automotive-digital-transformation',
    '/case-studies/electronics-supply-chain',
    '/case-studies/pharma-quality-control',
  ];

  const allRoutes = [...routes, ...serviceRoutes, ...caseStudyRoutes];

  // Generate sitemap entries for all locales
  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    allRoutes.forEach((route) => {
      const path = locale === defaultLocale ? route : `/${locale}${route}`;
      
      sitemapEntries.push({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : route.includes('/case-studies/') || route.includes('/services/') ? 0.8 : 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [
              l,
              `${baseUrl}${l === defaultLocale ? route : `/${l}${route}`}`,
            ])
          ),
        },
      });
    });
  });

  return sitemapEntries;
}
