/**
 * Design System Configuration
 * Based on Figma Design: https://www.figma.com/design/UwNN3KEicJ7NYsNT1sCcCw/Abin-Portfolio
 * 
 * This file provides type-safe access to design tokens extracted from Figma.
 * Use these constants throughout your application for consistent styling.
 */

// ================================
// Color System
// ================================

export const colors = {
  // Primary Colors
  primary: '#0b0b0c',
  blue: '#0020d7',
  indigo: '#0e0e2c',
  whiteMain: '#fafcfe',
  
  // Text Colors
  text: {
    body: '#4a4a68',
    secondary: '#323232',
    muted: '#c1c1c1',
    dark: '#1e2939',
  },
  
  // Background Colors
  background: {
    main: '#ECECEC',
    card: '#e1e1e1',
    secondary: '#e4e3e3',
    tertiary: '#d9d9d9',
    accent: '#d8d8d8',
  },
  
  // Border Colors
  border: {
    primary: '#aaaaaa',
    secondary: '#b4b4b4',
    tertiary: '#a4a4a4',
    light: '#c2c2c2',
    medium: '#9b9b9b',
    dark: '#929292',
    card: '#c4c4c4',
  },
} as const;

// ================================
// Gradient System
// ================================

export const gradients = {
  blue: 'linear-gradient(180deg, #7da3f6 0%, #0020d7 100%)',
  gray: 'linear-gradient(180deg, #484848 0%, #333333 100%)',
  text: 'linear-gradient(180deg, #3c3c3c 0%, #323232 100%)',
} as const;

// ================================
// Typography System
// ================================

export const typography = {
  // Font Families
  fonts: {
    display: '"Vina", sans-serif',
    sans: '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
  },
  
  // Font Weights
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
} as const;

// ================================
// Spacing System
// ================================

export const spacing = {
  xs: '5px',
  sm: '10px',
  md: '15px',
  lg: '20px',
  xl: '30px',
  '2xl': '50px',
  '3xl': '70px',
  '4xl': '100px',
} as const;

// ================================
// Border Radius System
// ================================

export const borderRadius = {
  sm: '8px',
  md: '15px',
  lg: '25px',
  xl: '33px',
  '2xl': '53.5px',
  full: '88.583px',
  round: '9999px',
} as const;

// ================================
// Shadow System
// ================================

export const shadows = {
  card: '5px 7px 32.3px 0px rgba(0, 0, 0, 0.5)',
  soft: '0 4px 12px rgba(0, 0, 0, 0.1)',
  medium: '0 8px 24px rgba(0, 0, 0, 0.15)',
  hard: '0 12px 32px rgba(0, 0, 0, 0.2)',
} as const;

// ================================
// Transition System
// ================================

export const transitions = {
  fast: '200ms ease',
  normal: '300ms ease',
  slow: '500ms ease',
} as const;

// ================================
// Blur Effects
// ================================

export const blur = {
  sm: '7.5px',
  md: '13.011px',
  lg: '17.5px',
} as const;

// ================================
// Component Configurations
// ================================

export const components = {
  // Card Configurations
  card: {
    default: {
      background: colors.background.card,
      border: `0.956px solid ${colors.border.primary}`,
      borderRadius: borderRadius.xl,
      padding: '44.937px 38.244px',
    },
    secondary: {
      background: colors.background.secondary,
      border: `1.5px solid ${colors.border.secondary}`,
      borderRadius: borderRadius.md,
      padding: spacing.lg,
    },
  },
  
  // Button Configurations
  button: {
    base: {
      gap: '15.945px',
      padding: '9.744px 31.004px',
      borderRadius: borderRadius.full,
      fontWeight: typography.fontWeight.medium,
      border: `2.657px solid ${colors.border.light}`,
    },
    primary: {
      background: gradients.gray,
      color: colors.whiteMain,
    },
    blue: {
      background: gradients.blue,
      borderColor: colors.border.dark,
      color: colors.whiteMain,
    },
    icon: {
      width: '46.949px',
      height: '46.949px',
      padding: '12.845px 12.402px 12.845px 13.287px',
      background: 'white',
      borderRadius: borderRadius.full,
    },
  },
  
  // Tag Configurations
  tag: {
    height: '44px',
    padding: '12px 16px',
    borderRadius: borderRadius.round,
    border: `2px solid ${colors.border.medium}`,
    fontWeight: typography.fontWeight.medium,
    active: {
      background: gradients.blue,
      color: colors.whiteMain,
    },
    inactive: {
      background: 'white',
      color: colors.text.dark,
    },
  },
  
  // Badge Configurations
  badge: {
    padding: '3.139px 3.924px',
    background: colors.blue,
    borderRadius: '8.047px',
    color: colors.whiteMain,
    fontWeight: typography.fontWeight.semibold,
  },
  
  // Tool Card Configurations
  toolCard: {
    gap: spacing.lg,
    padding: spacing.lg,
    background: colors.background.secondary,
    border: `1.5px solid ${colors.border.secondary}`,
    borderRadius: borderRadius.md,
    iconSize: '57.083px',
    iconRadius: '2.854px',
  },
} as const;

// ================================
// Utility Functions
// ================================

/**
 * Create a CSS variable string from design token
 */
export function cssVar(token: string): string {
  return `var(--${token})`;
}

/**
 * Get gradient CSS
 */
export function gradient(type: keyof typeof gradients): string {
  return gradients[type];
}

/**
 * Get color with optional opacity
 */
export function colorWithOpacity(color: string, opacity: number): string {
  // Convert hex to rgba
  const hex = color.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

// ================================
// Responsive Breakpoints
// ================================

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1440px',
} as const;

// ================================
// Type Exports
// ================================

export type ColorKey = keyof typeof colors;
export type GradientKey = keyof typeof gradients;
export type FontWeight = keyof typeof typography.fontWeight;
export type Spacing = keyof typeof spacing;
export type BorderRadius = keyof typeof borderRadius;
export type Shadow = keyof typeof shadows;
export type Transition = keyof typeof transitions;
export type Blur = keyof typeof blur;
