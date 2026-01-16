'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';

interface HeaderProps {
  locale: string;
}

export function Header({ locale }: HeaderProps) {
  const t = useTranslations('nav');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navigationLinks = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/about`, label: t('about') },
    { 
      href: `/${locale}/services`, 
      label: t('services'),
      submenu: [
        { href: `/${locale}/services/domestic-routes`, label: t('domesticRoutes') },
        { href: `/${locale}/services/international-routes`, label: t('internationalRoutes') },
      ]
    },
    { href: `/${locale}/case-studies`, label: t('caseStudies') },
    { href: `/${locale}/contact`, label: t('contact') },
  ];

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg py-3'
            : 'bg-white/95 backdrop-blur-sm py-4'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              href={`/${locale}`} 
              className="flex items-center gap-3 group"
              aria-label="BenchLink+ Home"
            >
              <div className="relative w-12 h-12 md:w-14 md:h-14">
                <Image
                  src="/logo.svg"
                  alt="BenchLink+ Logo"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
              <span className="text-neutral-900 font-bold text-xl md:text-2xl hidden sm:block">
                BenchLink+
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {navigationLinks.map((link) => (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className="text-neutral-700 hover:text-accent transition-colors duration-200 font-medium text-base"
                  >
                    {link.label}
                  </Link>
                  
                  {/* Submenu dropdown */}
                  {link.submenu && (
                    <div className="absolute top-full left-0 mt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50">
                      <div className="bg-white rounded-lg shadow-xl border border-neutral-200 py-2 min-w-[220px]">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.href}
                            href={sublink.href}
                            className="block px-4 py-3 text-neutral-700 hover:bg-accent/5 hover:text-accent transition-colors duration-200"
                          >
                            {sublink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA + Language Switcher */}
            <div className="hidden lg:flex items-center gap-4">
              <LanguageSwitcher currentLocale={locale} />
              
              <Link
                href={`/${locale}/inquiry`}
                className="btn-primary"
              >
                {t('inquiry')}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 lg:hidden">
              <LanguageSwitcher currentLocale={locale} />
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-neutral-700 p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[72px] bg-white z-40 overflow-y-auto">
            <nav className="container-custom py-6" aria-label="Mobile navigation">
              <ul className="space-y-1">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block px-4 py-3 text-neutral-800 hover:bg-accent/5 hover:text-accent rounded-lg transition-colors duration-200 font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                    
                    {/* Mobile submenu */}
                    {link.submenu && (
                      <ul className="ml-4 mt-1 space-y-1">
                        {link.submenu.map((sublink) => (
                          <li key={sublink.href}>
                            <Link
                              href={sublink.href}
                              className="block px-4 py-2 text-neutral-600 hover:bg-accent/5 hover:text-accent rounded-lg transition-colors duration-200"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {sublink.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              {/* Mobile CTA */}
              <div className="mt-6 px-4">
                <Link
                  href={`/${locale}/inquiry`}
                  className="btn-primary w-full text-center inline-block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('inquiry')}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-[72px]" aria-hidden="true" />
    </>
  );
}
