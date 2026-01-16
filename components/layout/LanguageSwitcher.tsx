'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { locales, localeNames, localeFlags, type Locale } from '@/lib/i18n';

interface LanguageSwitcherProps {
  currentLocale: string;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  // Switch language while preserving the current page path
  const switchLanguage = (newLocale: Locale) => {
    if (newLocale === currentLocale) {
      setIsOpen(false);
      return;
    }

    // Remove current locale from pathname
    const pathnameWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/';
    
    // Build new path with new locale
    const newPath = newLocale === 'en' 
      ? pathnameWithoutLocale
      : `/${newLocale}${pathnameWithoutLocale}`;

    setIsOpen(false);
    router.push(newPath);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 min-h-[44px]"
        aria-label="Switch language"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="w-5 h-5" aria-hidden="true" />
        <span className="font-medium text-sm uppercase">
          {currentLocale}
        </span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div 
          className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-neutral-200 py-2 min-w-[200px] z-50"
          role="menu"
          aria-orientation="vertical"
        >
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => switchLanguage(locale)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors duration-200 ${
                locale === currentLocale
                  ? 'bg-accent/10 text-accent font-medium'
                  : 'text-neutral-700 hover:bg-neutral-50 hover:text-accent'
              }`}
              role="menuitem"
              lang={locale}
            >
              <span className="text-2xl" aria-hidden="true">
                {localeFlags[locale]}
              </span>
              <span className="flex-1">
                {localeNames[locale]}
              </span>
              {locale === currentLocale && (
                <svg
                  className="w-5 h-5 text-accent"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-label="Current language"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
