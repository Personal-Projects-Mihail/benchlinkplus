import React from 'react';
import Link from 'next/link';
import { type LucideIcon } from 'lucide-react';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
}

interface ButtonAsButton extends BaseButtonProps {
  as?: 'button';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  href?: never;
}

interface ButtonAsLink extends BaseButtonProps {
  as: 'link';
  href: string;
  external?: boolean;
  type?: never;
  onClick?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  fullWidth = false,
  disabled = false,
  className,
  as = 'button',
  ...props
}: ButtonProps) {
  const baseStyles = clsx(
    'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
    {
      'w-full': fullWidth,
    }
  );

  const variantStyles = {
    primary: clsx(
      'bg-accent text-white shadow-md hover:shadow-lg',
      'hover:bg-accent-dark focus:ring-accent',
    ),
    secondary: clsx(
      'bg-primary text-white shadow-md hover:shadow-lg',
      'hover:bg-primary-dark focus:ring-primary',
    ),
    outline: clsx(
      'bg-transparent border-2 border-primary text-primary',
      'hover:bg-primary hover:text-white focus:ring-primary',
    ),
    ghost: clsx(
      'bg-transparent text-primary',
      'hover:bg-primary/10 focus:ring-primary',
    ),
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm min-h-[36px]',
    md: 'px-6 py-3 text-base min-h-[44px]',
    lg: 'px-8 py-4 text-lg min-h-[52px]',
  };

  const combinedClassName = clsx(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
      )}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
      )}
    </>
  );

  if (as === 'link' && 'href' in props) {
    const { href, external = false } = props as ButtonAsLink;
    
    if (!href) {
      return null;
    }
    
    if (external || href.startsWith('http')) {
      return (
        <a
          href={href}
          className={combinedClassName}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClassName}>
        {content}
      </Link>
    );
  }

  const { type = 'button', onClick } = props as ButtonAsButton;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
    >
      {content}
    </button>
  );
}
