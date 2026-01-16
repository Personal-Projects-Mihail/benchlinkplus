# BenchLink+ Deployment Guide

This guide covers deploying the BenchLink+ website to production.

## 🚀 Quick Deploy to Vercel (Recommended)

Vercel provides the best experience for Next.js applications with zero configuration.

### Prerequisites
- GitHub account
- Vercel account (free tier available)
- Repository pushed to GitHub

### Steps

1. **Import Project to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository: `Personal-Projects-Mihail/benchlinkplus`

2. **Configure Environment Variables**
   ```
   NEXT_PUBLIC_BASE_URL=https://benchlinkplus.co
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_BAIDU_ANALYTICS_ID=your-baidu-id
   ```

3. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - Your site is live! 🎉

4. **Custom Domain Setup**
   - Go to Project Settings → Domains
   - Add `benchlinkplus.co` and `www.benchlinkplus.co`
   - Configure DNS records as instructed by Vercel

### Automatic Deployments

Every push to `main` branch automatically deploys to production.

## 🌐 DNS Configuration

### For `benchlinkplus.co`:

```
Type    Name    Value               TTL
A       @       76.76.21.21         Automatic
CNAME   www     cname.vercel-dns.com  Automatic
```

### For Chinese Market (.cn domain):

If you have a `.cn` domain for Chinese market:

```
Type    Name    Value                   Notes
A       @       [China CDN IP]          Requires ICP filing
CNAME   www     cname.vercel-dns.com    Alternative: Use Alibaba Cloud
```

**Important**: `.cn` domains require ICP filing with Chinese authorities.

## 📊 Analytics Setup

### Google Analytics (Global)

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get Measurement ID (format: `G-XXXXXXXXXX`)
3. Add to Vercel environment variables:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
4. Redeploy

### Baidu Analytics (Chinese Market)

1. Register at [tongji.baidu.com](https://tongji.baidu.com)
2. Create site and get tracking ID
3. Add to Vercel environment variables:
   ```
   NEXT_PUBLIC_BAIDU_ANALYTICS_ID=your-baidu-id
   ```
4. Add Baidu verification meta tag to `app/[locale]/layout.tsx`:
   ```tsx
   <meta name="baidu-site-verification" content="your-code" />
   ```

## 🔍 SEO Post-Deployment Checklist

### Search Console Setup

**Google Search Console**
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property for `benchlinkplus.co`
3. Verify ownership (DNS or HTML tag)
4. Submit sitemap: `https://benchlinkplus.co/sitemap.xml`

**Baidu Webmaster Tools** (for Chinese market)
1. Go to [ziyuan.baidu.com](https://ziyuan.baidu.com)
2. Add site and verify ownership
3. Submit sitemap: `https://benchlinkplus.co/zh/sitemap.xml`
4. Enable auto-push for faster indexing

### Verification

After deployment, verify:
- ✅ All pages load correctly in 3 languages
- ✅ Language switcher works
- ✅ Forms submit successfully (once backend is connected)
- ✅ Images load properly
- ✅ Mobile responsive design works
- ✅ Sitemap accessible at `/sitemap.xml`
- ✅ Robots.txt at `/robots.txt`
- ✅ HTTPS enabled (automatic on Vercel)
- ✅ Core Web Vitals green scores

## 🛠️ Alternative Deployment Options

### AWS Amplify

```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Initialize Amplify
amplify init

# Add hosting
amplify add hosting

# Deploy
amplify publish
```

### Cloudflare Pages

1. Connect GitHub repository
2. Build command: `npm run build`
3. Output directory: `.next`
4. Deploy

### Self-Hosted (VPS/Docker)

```bash
# Build
npm run build

# Start with PM2
pm2 start npm --name "benchlink" -- start

# Or use Docker
docker build -t benchlinkplus .
docker run -p 3000:3000 benchlinkplus
```

## 🇨🇳 China-Specific Deployment

For optimal performance in China:

### Option 1: Vercel with China CDN
- Use Vercel's Edge Network (has China PoPs)
- Enable in Project Settings → Performance

### Option 2: Alibaba Cloud
- Deploy to Alibaba Cloud OSS + CDN
- Better performance in mainland China
- Requires ICP filing

### Option 3: Hybrid Approach
- Main site on Vercel (global)
- Separate `.cn` domain on Alibaba Cloud (China)
- Same codebase, different deployment

## 📝 ICP Filing (China)

If deploying to China or using `.cn` domain:

1. **Prepare Documents**:
   - Business license
   - ID verification
   - Domain ownership proof

2. **Submit Application**:
   - Through hosting provider (Alibaba Cloud, Tencent Cloud)
   - Processing time: 10-20 business days

3. **Display ICP Number**:
   - Add to footer: `ICP备XXXXXXXX号`
   - Already implemented in Footer component

## 🔒 Security Best Practices

1. **Environment Variables**:
   - Never commit `.env` files
   - Use Vercel's encrypted environment variables

2. **HTTPS**:
   - Automatic on Vercel
   - Enforce HTTPS redirects (automatic)

3. **Security Headers**:
   - Already configured in `next.config.ts`
   - X-Frame-Options, CSP, HSTS, etc.

4. **Rate Limiting**:
   - Implement on inquiry form (TODO)
   - Use Vercel's Edge Config for IP blocking

## 📈 Performance Optimization

### After Deployment

1. **Test Core Web Vitals**:
   - PageSpeed Insights: [pagespeed.web.dev](https://pagespeed.web.dev)
   - Target: All green scores

2. **Image Optimization**:
   - Use Next.js Image component (already implemented)
   - Add actual high-quality images to `/public/`

3. **CDN Configuration**:
   - Automatic on Vercel
   - Cache static assets for 1 year

4. **Monitor Performance**:
   - Vercel Analytics (built-in)
   - Google Analytics Core Web Vitals reports

## 🐛 Troubleshooting

### Build Fails

```bash
# Check TypeScript errors
npm run type-check

# Check linting
npm run lint

# Clear Next.js cache
rm -rf .next
npm run build
```

### i18n Issues

- Verify `middleware.ts` is in correct location
- Check locale routes in `app/[locale]/`
- Ensure translation files exist for all locales

### Missing Images

- Add placeholder images to `/public/`
- Update image paths in components
- Use Next.js Image component

## 📞 Support

For deployment issues:
- **GitHub Issues**: [github.com/Personal-Projects-Mihail/benchlinkplus/issues](https://github.com/Personal-Projects-Mihail/benchlinkplus/issues)
- **Email**: dev@benchlinkplus.co

---

## 🎉 Post-Launch Checklist

- [ ] Verify all 3 languages work
- [ ] Test on mobile devices
- [ ] Submit sitemaps to Google/Baidu
- [ ] Set up Google Analytics
- [ ] Configure Baidu Analytics (if targeting China)
- [ ] Test inquiry form submission
- [ ] Check Core Web Vitals scores
- [ ] Set up monitoring/alerts
- [ ] Add real company logos
- [ ] Add actual route/case study images
- [ ] Review privacy policy compliance
- [ ] Test accessibility with screen reader
- [ ] Monitor initial performance metrics

**Estimated deployment time**: 30-45 minutes (excluding DNS propagation)

Good luck with your launch! 🚀
