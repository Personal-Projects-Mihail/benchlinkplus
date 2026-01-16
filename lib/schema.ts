const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://benchlinkplus.co';

// Organization Schema (for all pages)
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'BenchLink+',
    alternateName: 'Wanxi Tech',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: 'Leading global platform for executive benchmarking tours and innovation expeditions across 42 countries.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Shanghai',
      addressCountry: 'CN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      email: 'contact@benchlinkplus.co',
      telephone: '+86-138-0000-0000',
      availableLanguage: ['English', 'Chinese', 'Portuguese'],
    },
    sameAs: [
      'https://linkedin.com/company/benchlink',
    ],
  };
}

// WebSite Schema (for home page)
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: 'BenchLink+',
    publisher: {
      '@id': `${baseUrl}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/services?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

// Service Schema (for service/route pages)
export function getServiceSchema(routeName: string, description: string, slug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: routeName,
    description,
    provider: {
      '@id': `${baseUrl}/#organization`,
    },
    areaServed: ['CN', 'US', 'DE', 'PT', 'JP'],
    serviceType: 'Executive Benchmarking Tour',
    url: `${baseUrl}/services/${slug}`,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: 'Contact for pricing',
      },
    },
  };
}

// TouristTrip Schema (alternative for route pages)
export function getTouristTripSchema(
  routeName: string,
  description: string,
  duration: string,
  slug: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: routeName,
    description,
    duration,
    provider: {
      '@id': `${baseUrl}/#organization`,
    },
    url: `${baseUrl}/services/${slug}`,
  };
}

// Article Schema (for case studies)
export function getArticleSchema(
  clientName: string,
  challenge: string,
  result: string,
  publishDate: string,
  slug: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${clientName} Case Study`,
    description: `${challenge} ${result}`,
    image: `${baseUrl}/case-studies/${slug}-og.jpg`,
    datePublished: publishDate,
    dateModified: publishDate,
    author: {
      '@id': `${baseUrl}/#organization`,
    },
    publisher: {
      '@id': `${baseUrl}/#organization`,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/case-studies/${slug}`,
    },
  };
}

// BreadcrumbList Schema
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// FAQPage Schema (for pages with FAQs)
export function getFAQPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Review/AggregateRating Schema (for testimonials)
export function getAggregateRatingSchema(
  ratingValue: number,
  reviewCount: number,
  bestRating: number = 5
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    ratingValue: ratingValue.toString(),
    reviewCount: reviewCount.toString(),
    bestRating: bestRating.toString(),
    worstRating: '1',
  };
}

// ContactPage Schema
export function getContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact BenchLink+',
    url: `${baseUrl}/contact`,
    publisher: {
      '@id': `${baseUrl}/#organization`,
    },
  };
}
