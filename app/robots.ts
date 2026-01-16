import { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://benchlinkplus.co';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/inquiry/thank-you',
          '/*?*utm_*', // Exclude URLs with UTM parameters from indexing
        ],
      },
      {
        userAgent: 'Baiduspider', // Specific rules for Baidu (Chinese search engine)
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/zh/sitemap.xml`,
      `${baseUrl}/pt/sitemap.xml`,
    ],
  };
}
