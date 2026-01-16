'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

interface FooterProps {
  locale: string;
}

export function Footer({ locale }: FooterProps) {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: `/${locale}`, label: tNav('home') },
    { href: `/${locale}/about`, label: tNav('about') },
    { href: `/${locale}/services`, label: tNav('services') },
    { href: `/${locale}/case-studies`, label: tNav('caseStudies') },
    { href: `/${locale}/contact`, label: tNav('contact') },
  ];

  const serviceLinks = [
    { href: `/${locale}/services/domestic-routes`, label: tNav('domesticRoutes') },
    { href: `/${locale}/services/international-routes`, label: tNav('internationalRoutes') },
  ];

  const legalLinks = [
    { href: `/${locale}/privacy-policy`, label: t('privacyPolicy') },
    { href: `/${locale}/terms`, label: t('terms') },
    { href: `/${locale}/cookies`, label: t('cookies') },
  ];

  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 text-neutral-700" role="contentinfo">
      {/* Main footer content */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company info */}
          <div className="lg:col-span-1">
            <Link href={`/${locale}`} className="inline-flex items-center gap-3 mb-4 group">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.svg"
                  alt="BenchLink+ Logo"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="text-neutral-900 font-bold text-xl">
                BenchLink+
              </span>
            </Link>
            <p className="text-neutral-600 text-sm leading-relaxed mb-6">
              {t('aboutDescription')}
            </p>
            
            {/* Trust badges / Certifications */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="trust-badge bg-primary/10 border-primary/20 text-neutral-700">
                <span className="text-gold font-bold">285+</span>
                <span className="text-xs">Delegations</span>
              </div>
              <div className="trust-badge bg-primary/10 border-primary/20 text-neutral-700">
                <span className="text-gold font-bold">98%</span>
                <span className="text-xs">Loyalty</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-neutral-900">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-600 hover:text-accent transition-colors duration-200 text-sm inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-neutral-900">
              {t('services')}
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-600 hover:text-accent transition-colors duration-200 text-sm inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Legal links */}
            <h3 className="text-lg font-bold mb-4 mt-8 text-neutral-900">
              {t('legal')}
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-600 hover:text-accent transition-colors duration-200 text-sm inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-neutral-900">
              {t('contact')}
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contact@benchlinkplus.co"
                  className="text-neutral-600 hover:text-accent transition-colors duration-200 text-sm inline-flex items-start gap-3 group"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    contact@benchlinkplus.co
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+8613800000000"
                  className="text-neutral-600 hover:text-accent transition-colors duration-200 text-sm inline-flex items-start gap-3 group"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    +86 138 0000 0000
                  </span>
                </a>
              </li>
              <li className="text-neutral-600 text-sm inline-flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  Shanghai, China
                </span>
              </li>
            </ul>

            {/* Social links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-neutral-900">
                {t('followUs')}
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com/company/benchlink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-neutral-100 hover:bg-accent hover:text-white rounded-lg transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" aria-hidden="true" />
                </a>
                
                {/* WeChat QR code - for Chinese market */}
                {locale === 'zh' && (
                  <div className="p-2 bg-neutral-100 hover:bg-accent hover:text-white rounded-lg transition-colors duration-200 cursor-pointer group relative">
                    <svg 
                      className="w-5 h-5" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                      aria-label="WeChat"
                    >
                      <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.045c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.027zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/>
                    </svg>
                    {/* Tooltip for QR code (could be enhanced with actual QR) */}
                    <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block">
                      <div className="bg-white text-neutral-800 text-xs px-3 py-2 rounded shadow-lg whitespace-nowrap">
                        扫码添加微信
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-200">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
            <p>
              {t('rights').replace('2024', currentYear.toString())}
            </p>
            
            {/* ICP notice for Chinese market */}
            {locale === 'zh' && t('icpNotice') && (
              <p className="text-xs">
                {t('icpNotice')}
              </p>
            )}
            
          </div>
        </div>
      </div>
    </footer>
  );
}
