# BenchLink+ Website

A production-ready, multilingual (EN/中文/PT) Next.js 15 B2B platform for executive benchmarking tours and innovation expeditions.

## 🚀 Features

- **Multilingual Support**: English, Simplified Chinese, Portuguese with culturally-adapted content
- **SEO Optimized**: Server-side rendering, dynamic sitemaps, structured data (JSON-LD)
- **Accessibility**: WCAG 2.2 AA compliant with keyboard navigation and screen reader support
- **Performance**: Core Web Vitals optimized, image optimization, code splitting
- **B2B Focused**: Executive-grade design, conversion-optimized inquiry forms
- **Mobile-First**: Responsive design from mobile to 4K displays

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5.3 (strict mode)
- **Styling**: Tailwind CSS 3.4
- **i18n**: next-intl 3.4
- **Animations**: Framer Motion 11
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
NEXT_PUBLIC_BASE_URL=https://benchlinkplus.co
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_BAIDU_ANALYTICS_ID=your-baidu-id
```

## 📁 Project Structure

```
benchlinkplus/
├── app/
│   ├── [locale]/          # Internationalized pages
│   │   ├── page.tsx       # Home
│   │   ├── about/         # About Us
│   │   ├── services/      # Services & Routes
│   │   ├── case-studies/  # Case Studies
│   │   ├── inquiry/       # Booking Form
│   │   └── contact/       # Contact
│   ├── sitemap.ts         # Dynamic sitemap
│   ├── robots.ts          # Robots.txt
│   └── layout.tsx         # Root layout
├── components/
│   ├── layout/            # Header, Footer, LanguageSwitcher
│   └── ui/                # Button, Card components
├── lib/
│   ├── i18n.ts           # i18n configuration
│   ├── metadata.ts       # SEO helpers
│   └── schema.ts         # JSON-LD schemas
├── messages/
│   ├── en.json           # English translations
│   ├── zh.json           # Chinese translations
│   └── pt.json           # Portuguese translations
└── public/
    ├── images/           # Static images
    └── logos/            # Company logos
```

## 🎨 Brand Colors

- **Primary Blue**: `#1A3D7C` (60-70% usage)
- **Accent Orange**: `#F26522` (15-20% usage)
- **Gold**: `#D4A042` (5% premium markers)

## 📄 Pages

### Core Pages
- ✅ Home page with hero, stats, services, how-it-works
- ✅ About Us with mission, values, global reach
- ✅ Services overview with domestic/international routes
- ✅ Case Studies grid with filterable results
- ✅ Contact page with form and contact methods
- ✅ Inquiry/booking page with comprehensive form

### Dynamic Pages
- ✅ Individual route pages (`/services/[slug]`)
- ✅ Individual case study pages (`/case-studies/[slug]`)

### Legal Pages
- ✅ Privacy Policy
- ⏳ Terms of Service (TODO)
- ⏳ Cookie Policy (TODO)

## 🔍 SEO Features

- Server-side rendering (SSR)
- Dynamic sitemap generation
- Hreflang tags for multilingual content
- Open Graph & Twitter Cards
- JSON-LD structured data:
  - Organization schema
  - Service schema
  - Article schema (case studies)
  - Breadcrumb navigation
- Canonical URLs
- Meta descriptions (155 chars)
- Alt text for all images

## ♿ Accessibility

- WCAG 2.2 AA compliant
- Semantic HTML5
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators (2px orange outline)
- Minimum 44x44px touch targets
- Color contrast ratios: 4.5:1 (text), 3:1 (UI)
- Skip-to-content link
- Screen reader friendly
- Reduced motion support

## 🌍 Multilingual Setup

The site supports three languages with `next-intl`:

- **English** (`/`) - Default, ROI-focused
- **Chinese** (`/zh/`) - Authority markers, Baidu SEO
- **Portuguese** (`/pt/`) - EU collaboration focus

### Adding Translations

1. Add keys to `messages/{locale}.json`
2. Use `useTranslations('namespace')` in components
3. Access with `t('key')`

Example:
```tsx
const t = useTranslations('hero');
<h1>{t('title')}</h1>
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

```bash
# Deploy to production
vercel --prod
```

### Manual Deployment

```bash
# Build
npm run build

# Start production server
npm start
```

## 📊 Analytics

- **Global Markets**: Google Analytics 4
- **Chinese Market**: Baidu Analytics (百度统计)
- **Vercel Analytics**: Built-in (auto-configured)

## 🔧 Development

### Code Quality

```bash
# Lint
npm run lint

# Type check
npm run type-check

# Format
npm run format
```

### Adding New Routes

1. Create page file in `app/[locale]/your-page/page.tsx`
2. Add translations to `messages/*.json`
3. Update navigation in `Header.tsx`
4. Add to `sitemap.ts`

### Adding New Languages

1. Add locale to `lib/i18n.ts`
2. Create `messages/{locale}.json`
3. Update `middleware.ts` matcher
4. Add locale metadata

## 📝 TODO

- [ ] Complete Terms of Service page
- [ ] Complete Cookie Policy page
- [ ] Add more route detail pages (all 7 routes)
- [ ] Add more case studies (6 total)
- [ ] Implement actual form submission (currently mock)
- [ ] Add Google Analytics tracking
- [ ] Add Baidu Analytics (Chinese market)
- [ ] Optimize images (add actual route/company photos)
- [ ] Add WeChat QR code image
- [ ] Add logo.svg / logo.png files
- [ ] Test Baidu SEO on .cn domain

## 🤝 Contributing

This is a client project. For changes, please contact the development team.

## 📄 License

Proprietary - © 2024 BenchLink+ & Wanxi Tech. All rights reserved.

## 📞 Support

- **Email**: dev@benchlinkplus.co
- **Website**: https://benchlinkplus.co

---

Built with ❤️ for innovation leaders worldwide
