# Public Assets - Image Requirements

This directory contains all static assets for the BenchLink+ website.

## 📸 Required Images

### Logo Files
- `logo.svg` - Main logo (SVG format, currently placeholder) ✅
- `logo.png` - PNG fallback (1000x1000px minimum)
- `og-image.jpg` - Open Graph default image (1200x630px)

### Hero Images
- `hero-image.jpg` - Homepage hero (1920x1080px)
- `og-home.jpg` - Homepage OG image (1200x630px)

### Route Images (in `/routes/`)
Required for each route page:
- `germany-hero.jpg` - Germany Industry 4.0 hero (1920x1080px)
- `germany-industry-4-og.jpg` - OG image (1200x630px)
- `shanghai-hero.jpg` - Shanghai Innovation hero
- `shanghai-innovation-og.jpg` - OG image
- `shenzhen-manufacturing.jpg` - Route card thumbnail (800x600px)
- `suzhou-excellence.jpg` - Route card thumbnail
- `silicon-valley.jpg` - Route card thumbnail
- `portugal-innovation.jpg` - Route card thumbnail
- `japan-lean.jpg` - Route card thumbnail

### Case Study Images (in `/case-studies/`)
- `automotive-hero.jpg` - Case study hero (1920x1080px)
- `automotive-digital-transformation-og.jpg` - OG image (1200x630px)
- Additional case study images as needed

### Company Logos (in `/logos/`)
Client and benchmark company logos:
- `client-auto.svg` - Automotive client logo
- `client-electronics.svg`
- `client-pharma.svg`
- `client-manufacturing.svg`
- `client-retail.svg`
- `client-tech.svg`
- `tesla.svg` - Benchmark company logos
- `siemens.svg`
- `bmw.svg`
- `huawei.svg`
- `nio.svg`
- `toyota.svg`
- etc.

### About Page Images
- `about-mission.jpg` - Mission section (1200x800px)
- `about-differentiators.jpg` - What sets us apart (1200x800px)

## 📏 Image Specifications

### Formats
- **Photos**: JPEG (.jpg) at 85% quality
- **Logos**: SVG (.svg) preferred, or PNG with transparency
- **OG Images**: JPEG (.jpg) exactly 1200x630px

### Optimization
- Compress all images before uploading
- Use tools like:
  - TinyPNG (https://tinypng.com)
  - Squoosh (https://squoosh.app)
  - ImageOptim (macOS)

### Naming Convention
- Use kebab-case: `germany-industry-4.jpg`
- Be descriptive: `automotive-digital-transformation-hero.jpg`
- Include dimensions if multiple sizes: `logo-1000x1000.png`

## 🎨 Image Guidelines

### Photography
- **High quality**: Minimum 1920px width for hero images
- **Professional**: No obvious stock photos
- **Relevant**: Show actual facilities, delegations, or similar
- **Diverse**: Mix of locations, people, industries

### Company Logos
- **Permission**: Ensure you have rights to use
- **Format**: Vector (SVG) preferred
- **Consistency**: Similar style/size across all logos
- **Background**: Transparent PNG or white background

### Accessibility
- Ensure text overlays have sufficient contrast
- Avoid pure text images where possible
- Provide meaningful alt text in components

## 🚀 Quick Start

1. Replace `logo.svg` with actual BenchLink+ logo
2. Add hero images for main pages
3. Add route thumbnails (at least 3-4 to start)
4. Add 1-2 case study images
5. Add key company logos

## 📝 Notes

- All images are loaded through Next.js `<Image>` component
- Automatic optimization and responsive sizing
- WebP/AVIF format conversion automatic
- Lazy loading enabled for below-fold images

For questions, see: `/app/[locale]/page.tsx` and other page files for exact usage.
