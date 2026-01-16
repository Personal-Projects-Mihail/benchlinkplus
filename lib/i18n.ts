import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Supported locales
export const locales = ['en', 'zh', 'pt'] as const;
export type Locale = (typeof locales)[number];

// Default locale
export const defaultLocale: Locale = 'en';

// Locale display names
export const localeNames: Record<Locale, string> = {
  en: 'English',
  zh: '中文',
  pt: 'Português',
};

// Locale flags (emoji)
export const localeFlags: Record<Locale, string> = {
  en: '🇬🇧',
  zh: '🇨🇳',
  pt: '🇵🇹',
};

// Locale metadata for SEO
export const localeMetadata: Record<Locale, {
  hreflang: string;
  ogLocale: string;
  direction: 'ltr' | 'rtl';
}> = {
  en: {
    hreflang: 'en',
    ogLocale: 'en_US',
    direction: 'ltr',
  },
  zh: {
    hreflang: 'zh-Hans',
    ogLocale: 'zh_CN',
    direction: 'ltr',
  },
  pt: {
    hreflang: 'pt',
    ogLocale: 'pt_PT',
    direction: 'ltr',
  },
};

// Validate locale
export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

// Get locale configuration for next-intl
export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!isValidLocale(locale)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});

// Helper to get alternate URLs for hreflang tags
export function getAlternateUrls(pathname: string): Record<string, string> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://benchlinkplus.co';
  
  return locales.reduce((acc, locale) => {
    const url = locale === defaultLocale 
      ? `${baseUrl}${pathname}`
      : `${baseUrl}/${locale}${pathname}`;
    
    acc[locale] = url;
    return acc;
  }, {} as Record<string, string>);
}

// Helper to format numbers by locale
export function formatNumber(value: number, locale: Locale): string {
  return new Intl.NumberFormat(locale === 'zh' ? 'zh-CN' : locale === 'pt' ? 'pt-PT' : 'en-US').format(value);
}

// Helper to format dates by locale
export function formatDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(
    locale === 'zh' ? 'zh-CN' : locale === 'pt' ? 'pt-PT' : 'en-US',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
  ).format(date);
}
