import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { ArrowRight } from 'lucide-react';

interface BaseCardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  interactive?: boolean;
}

interface CardAsDiv extends BaseCardProps {
  as?: 'div';
  href?: never;
}

interface CardAsLink extends BaseCardProps {
  as: 'link';
  href: string;
}

type CardProps = CardAsDiv | CardAsLink;

export function Card({
  children,
  className,
  padding = 'md',
  interactive = false,
  as = 'div',
  ...props
}: CardProps) {
  const baseStyles = clsx(
    'bg-white rounded-xl border border-neutral-200',
    'shadow-card transition-all duration-300',
    {
      'p-4': padding === 'sm',
      'p-6': padding === 'md',
      'p-8': padding === 'lg',
      'p-0': padding === 'none',
      'hover:shadow-card-hover cursor-pointer hover:-translate-y-1': interactive,
    },
    className
  );

  if (as === 'link' && 'href' in props) {
    const { href } = props;
    if (!href) {
      return null;
    }
    return (
      <Link href={href} className={baseStyles}>
        {children}
      </Link>
    );
  }

  return <div className={baseStyles}>{children}</div>;
}

// Service Card Component
interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href: string;
  linkText?: string;
}

export function ServiceCard({
  title,
  description,
  icon,
  href,
  linkText = 'Learn More',
}: ServiceCardProps) {
  return (
    <Card as="link" href={href} interactive padding="lg" className="group">
      {icon && (
        <div className="mb-4 text-accent">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-neutral-600 leading-relaxed mb-4">
        {description}
      </p>
      <div className="flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
        <span>{linkText}</span>
        <ArrowRight className="w-4 h-4" aria-hidden="true" />
      </div>
    </Card>
  );
}

// Route Card Component
interface RouteCardProps {
  title: string;
  tagline: string;
  image: string;
  duration?: string;
  companyLogos?: string[];
  href: string;
}

export function RouteCard({
  title,
  tagline,
  image,
  duration,
  companyLogos = [],
  href,
}: RouteCardProps) {
  return (
    <Card as="link" href={href} interactive padding="none" className="overflow-hidden group">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {duration && (
          <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
            {duration}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-neutral-600 text-sm mb-4">
          {tagline}
        </p>

        {/* Company logos */}
        {companyLogos.length > 0 && (
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            {companyLogos.slice(0, 4).map((logo, index) => (
              <div
                key={index}
                className="relative w-12 h-12 rounded-lg bg-neutral-50 border border-neutral-200 p-2"
              >
                <Image
                  src={logo}
                  alt={`Company ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
            {companyLogos.length > 4 && (
              <span className="text-xs text-neutral-500">
                +{companyLogos.length - 4} more
              </span>
            )}
          </div>
        )}

        {/* CTA */}
        <div className="flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
          <span>View Details</span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </div>
      </div>
    </Card>
  );
}

// Case Study Card Component
interface CaseStudyCardProps {
  clientName: string;
  industry: string;
  challenge: string;
  result: string;
  logo?: string;
  href: string;
}

export function CaseStudyCard({
  clientName,
  industry,
  challenge,
  result,
  logo,
  href,
}: CaseStudyCardProps) {
  return (
    <Card as="link" href={href} interactive padding="lg" className="group">
      {/* Client logo */}
      {logo && (
        <div className="mb-4 h-12 relative">
          <Image
            src={logo}
            alt={`${clientName} logo`}
            width={120}
            height={48}
            className="object-contain object-left"
          />
        </div>
      )}

      {/* Industry tag */}
      <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-4">
        {industry}
      </div>

      {/* Client name */}
      <h3 className="text-lg font-bold text-neutral-900 mb-3 group-hover:text-accent transition-colors">
        {clientName}
      </h3>

      {/* Challenge */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-neutral-700 mb-1">Challenge:</h4>
        <p className="text-sm text-neutral-600 leading-relaxed">
          {challenge}
        </p>
      </div>

      {/* Result */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-neutral-700 mb-1">Result:</h4>
        <p className="text-sm font-bold text-accent">
          {result}
        </p>
      </div>

      {/* CTA */}
      <div className="flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
        <span>Read Full Case</span>
        <ArrowRight className="w-4 h-4" aria-hidden="true" />
      </div>
    </Card>
  );
}

// Stat Card Component
interface StatCardProps {
  number: string;
  label: string;
  icon?: React.ReactNode;
  accent?: boolean;
}

export function StatCard({ number, label, icon, accent = false }: StatCardProps) {
  return (
    <Card padding="lg" className="text-center">
      {icon && (
        <div className={clsx('mb-3 flex justify-center', accent ? 'text-accent' : 'text-primary')}>
          {icon}
        </div>
      )}
      <div className={clsx('stat-number', accent ? 'text-accent' : 'text-primary')}>
        {number}
      </div>
      <div className="stat-label">
        {label}
      </div>
    </Card>
  );
}
