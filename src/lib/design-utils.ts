/**
 * Design System Utility Functions
 * Helper functions for applying design system styles in React components
 */

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { colors, gradients, typography, spacing, borderRadius } from './design-system';

/**
 * Merge Tailwind classes with proper precedence
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Generate heading className with design system styles
 */
export function headingClass(level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5', className?: string) {
  const baseClasses = {
    h1: 'font-semibold text-indigo',
    h2: 'font-semibold text-indigo',
    h3: 'font-semibold text-black',
    h4: 'font-medium text-black',
    h5: 'font-medium text-black',
  };
  
  return cn(baseClasses[level], className);
}

/**
 * Generate text style className
 */
export function textClass(
  variant: 'body' | 'subtitle' | 'small' | 'label' | 'hero',
  className?: string
) {
  const baseClasses = {
    body: 'font-medium text-primary',
    subtitle: 'font-normal text-body-color',
    small: 'font-normal text-muted',
    label: 'font-normal text-secondary',
    hero: "font-['Vina'] text-black",
  };
  
  return cn(baseClasses[variant], className);
}

/**
 * Generate button className
 */
export function buttonClass(
  variant: 'primary' | 'blue' | 'outline',
  className?: string
) {
  const baseClasses = 'inline-flex items-center justify-center gap-[15.945px] px-[31.004px] py-[9.744px] rounded-[88.583px] font-medium transition-all duration-300 border-[2.657px]';
  
  const variantClasses = {
    primary: 'bg-gradient-to-b from-[#484848] to-[#333333] border-[#c2c2c2] text-white hover:opacity-90',
    blue: 'bg-gradient-to-b from-[#7da3f6] to-[#0020d7] border-[#929292] text-white hover:opacity-90',
    outline: 'bg-white border-[#9b9b9b] text-[#1e2939] hover:bg-gray-50',
  };
  
  return cn(baseClasses, variantClasses[variant], className);
}

/**
 * Generate card className
 */
export function cardClass(variant: 'default' | 'secondary', className?: string) {
  const baseClasses = {
    default: 'bg-[#e1e1e1] border-[0.956px] border-[#aaaaaa] rounded-[33px] p-[44.937px_38.244px]',
    secondary: 'bg-[#e4e3e3] border-[1.5px] border-[#b4b4b4] rounded-[15px] p-5',
  };
  
  return cn(baseClasses[variant], className);
}

/**
 * Generate tag className
 */
export function tagClass(active: boolean, className?: string) {
  const baseClasses = 'inline-flex items-center justify-center h-[44px] px-4 py-3 rounded-full border-2 border-[#9b9b9b] font-medium transition-all';
  
  const activeClasses = active
    ? 'bg-gradient-to-b from-[#7da3f6] to-[#0020d7] text-white'
    : 'bg-white text-[#1e2939] hover:bg-gray-50';
  
  return cn(baseClasses, activeClasses, className);
}

/**
 * Generate tool card className
 */
export function toolCardClass(className?: string) {
  return cn(
    'flex items-center gap-5 p-5 bg-[#e4e3e3] border-[1.5px] border-[#b4b4b4] rounded-[15px] transition-all hover:translate-y-[-2px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]',
    className
  );
}

/**
 * Generate gradient section className
 */
export function gradientSectionClass(className?: string) {
  return cn(
    'bg-gradient-to-b from-[#7da3f6] to-[#0020d7] border-[5px] border-[#c4c4c4] rounded-[25px] relative overflow-hidden',
    className
  );
}

/**
 * Generate ticker/marquee className
 */
export function tickerClass(className?: string) {
  return cn(
    'bg-[#d8d8d8] border border-[#a4a4a4] px-[50px] py-[15px] font-medium text-black whitespace-nowrap',
    className
  );
}

/**
 * Apply gradient text effect
 */
export function gradientTextClass(variant: 'blue' | 'gray', className?: string) {
  const baseClasses = 'bg-clip-text text-transparent';
  
  const variantClasses = {
    blue: 'bg-gradient-to-b from-[#7da3f6] to-[#0020d7]',
    gray: 'bg-gradient-to-b from-[#3c3c3c] to-[#323232]',
  };
  
  return cn(baseClasses, variantClasses[variant], className);
}

/**
 * Apply blur effect
 */
export function blurClass(intensity: 'sm' | 'md' | 'lg', className?: string) {
  const blurClasses = {
    sm: 'blur-[7.5px]',
    md: 'blur-[13.011px]',
    lg: 'blur-[17.5px]',
  };
  
  return cn(blurClasses[intensity], className);
}

/**
 * Generate icon container className
 */
export function iconContainerClass(size: 'sm' | 'md' | 'lg', className?: string) {
  const sizeClasses = {
    sm: 'size-[30px]',
    md: 'size-[46.949px]',
    lg: 'size-[57.083px]',
  };
  
  return cn('flex items-center justify-center rounded-[2.854px] overflow-hidden', sizeClasses[size], className);
}

/**
 * Generate section container className
 */
export function sectionClass(className?: string) {
  return cn('w-full max-w-[1190px] mx-auto px-4 md:px-6', className);
}

/**
 * Generate spacing className
 */
export function spacingClass(
  direction: 'gap' | 'px' | 'py' | 'p',
  size: keyof typeof spacing,
  className?: string
) {
  const spacingMap = {
    gap: `gap-[${spacing[size]}]`,
    px: `px-[${spacing[size]}]`,
    py: `py-[${spacing[size]}]`,
    p: `p-[${spacing[size]}]`,
  };
  
  return cn(spacingMap[direction], className);
}

/**
 * Generate text color className based on design system
 */
export function textColorClass(
  color: 'primary' | 'blue' | 'indigo' | 'body' | 'secondary' | 'muted' | 'white',
  className?: string
) {
  const colorMap = {
    primary: 'text-[#0b0b0c]',
    blue: 'text-[#0020d7]',
    indigo: 'text-[#0e0e2c]',
    body: 'text-[#4a4a68]',
    secondary: 'text-[#323232]',
    muted: 'text-[#c1c1c1]',
    white: 'text-[#fafcfe]',
  };
  
  return cn(colorMap[color], className);
}

/**
 * Generate background color className
 */
export function bgColorClass(
  bg: 'main' | 'card' | 'secondary' | 'tertiary' | 'accent',
  className?: string
) {
  const bgMap = {
    main: 'bg-[#ececec]',
    card: 'bg-[#e1e1e1]',
    secondary: 'bg-[#e4e3e3]',
    tertiary: 'bg-[#d9d9d9]',
    accent: 'bg-[#d8d8d8]',
  };
  
  return cn(bgMap[bg], className);
}

/**
 * Helper to create responsive font sizes (deprecated - use default browser sizes)
 */
export function responsiveText(
  desktop: string,
  mobile?: string,
  className?: string
) {
  // Font sizes removed - using default browser sizes
  return cn(className);
}

/**
 * Helper to create responsive spacing
 */
export function responsiveSpacing(
  direction: 'gap' | 'px' | 'py' | 'p',
  mobile: string,
  desktop: string,
  className?: string
) {
  return cn(
    `${direction}-[${mobile}] md:${direction}-[${desktop}]`,
    className
  );
}
