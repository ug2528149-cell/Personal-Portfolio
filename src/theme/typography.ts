import {
  Platform,
  type TextStyle,
} from 'react-native';
export const fontFamilies = {
  regular: Platform.select({
    ios: 'System',
    android: 'Roboto',
    default: 'System',
  })!,

  medium: Platform.select({
    ios: 'System',
    android: 'Roboto-Medium',
    default: 'System',
  })!,

  semiBold: Platform.select({
    ios: 'System',
    android: 'Roboto-Medium',
    default: 'System',
  })!,

  bold: Platform.select({
    ios: 'System',
    android: 'Roboto-Bold',
    default: 'System',
  })!,

  mono: Platform.select({
    ios: 'Menlo',
    android: 'monospace',
    default: 'monospace',
  })!,
} as const;

/**
 * Typography size scale.
 *
 * Sizes are measured in React Native density-independent units.
 */
export const fontSizes = {
  xs: 11,
  sm: 12,
  base: 14,
  md: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
  '5xl': 44,
} as const;

/**
 * Supported font weights.
 */
export const fontWeights = {
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  extraBold: '800',
} as const;

/**
 * Line heights support readability and consistent vertical rhythm.
 */
export const lineHeights = {
  tight: 1.15,
  snug: 1.3,
  normal: 1.5,
  relaxed: 1.65,
  loose: 1.8,
} as const;

/**
 * Letter spacing values.
 */
export const letterSpacing = {
  tighter: -0.8,
  tight: -0.4,
  normal: 0,
  wide: 0.4,
  wider: 0.8,
  widest: 1.4,
} as const;

/**
 * Reusable typography styles.
 *
 * Colors are intentionally omitted so the typography system
 * can work with light mode, dark mode and your color theme.
 */
export const typography = {
  // Display and page headings
  display: {
    fontFamily: fontFamilies.bold,
    fontSize: fontSizes['5xl'],
    fontWeight: fontWeights.bold,
    lineHeight: Math.round(
      fontSizes['5xl'] * lineHeights.tight,
    ),
    letterSpacing: letterSpacing.tighter,
  },

  h1: {
    fontFamily: fontFamilies.bold,
    fontSize: fontSizes['4xl'],
    fontWeight: fontWeights.bold,
    lineHeight: Math.round(
      fontSizes['4xl'] * lineHeights.tight,
    ),
    letterSpacing: letterSpacing.tight,
  },

  h2: {
    fontFamily: fontFamilies.bold,
    fontSize: fontSizes['3xl'],
    fontWeight: fontWeights.bold,
    lineHeight: Math.round(
      fontSizes['3xl'] * lineHeights.snug,
    ),
    letterSpacing: letterSpacing.tight,
  },

  h3: {
    fontFamily: fontFamilies.semiBold,
    fontSize: fontSizes['2xl'],
    fontWeight: fontWeights.semiBold,
    lineHeight: Math.round(
      fontSizes['2xl'] * lineHeights.snug,
    ),
  },

  h4: {
    fontFamily: fontFamilies.semiBold,
    fontSize: fontSizes.xl,
    fontWeight: fontWeights.semiBold,
    lineHeight: Math.round(
      fontSizes.xl * lineHeights.normal,
    ),
  },

  // Body text
  bodyLarge: {
    fontFamily: fontFamilies.regular,
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.regular,
    lineHeight: Math.round(
      fontSizes.lg * lineHeights.relaxed,
    ),
  },

  body: {
    fontFamily: fontFamilies.regular,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.regular,
    lineHeight: Math.round(
      fontSizes.md * lineHeights.normal,
    ),
  },

  bodySmall: {
    fontFamily: fontFamilies.regular,
    fontSize: fontSizes.base,
    fontWeight: fontWeights.regular,
    lineHeight: Math.round(
      fontSizes.base * lineHeights.normal,
    ),
  },

  // Buttons and interactive elements
  buttonLarge: {
    fontFamily: fontFamilies.semiBold,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.semiBold,
    lineHeight: Math.round(
      fontSizes.md * lineHeights.normal,
    ),
    letterSpacing: letterSpacing.normal,
  },

  button: {
    fontFamily: fontFamilies.semiBold,
    fontSize: fontSizes.base,
    fontWeight: fontWeights.semiBold,
    lineHeight: Math.round(
      fontSizes.base * lineHeights.normal,
    ),
  },

  buttonSmall: {
    fontFamily: fontFamilies.medium,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
    lineHeight: Math.round(
      fontSizes.sm * lineHeights.normal,
    ),
  },

  // Metadata and labels
  label: {
    fontFamily: fontFamilies.semiBold,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.semiBold,
    lineHeight: Math.round(
      fontSizes.sm * lineHeights.normal,
    ),
    letterSpacing: letterSpacing.wide,
  },

  caption: {
    fontFamily: fontFamilies.regular,
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.regular,
    lineHeight: Math.round(
      fontSizes.xs * lineHeights.relaxed,
    ),
  },

  overline: {
    fontFamily: fontFamilies.bold,
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.bold,
    lineHeight: Math.round(
      fontSizes.xs * lineHeights.normal,
    ),
    letterSpacing: letterSpacing.widest,
  },

  // Technical details and verification codes
  code: {
    fontFamily: fontFamilies.mono,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
    lineHeight: Math.round(
      fontSizes.sm * lineHeights.relaxed,
    ),
    letterSpacing: letterSpacing.wide,
  },
} satisfies Record<string, TextStyle>;

/**
 * Utility for creating a consistent custom text style.
 *
 * Example:
 * createTextStyle({ fontSize: 18, fontWeight: '600' })
 */
export function createTextStyle(
  overrides: TextStyle = {},
): TextStyle {
  return {
    fontFamily: fontFamilies.regular,
    fontSize: fontSizes.md,
    color: '#171717',
    ...overrides,
  };
}

/**
 * Central typography export for the app theme.
 */
const typographyTheme = {
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacing,
  typography,
  createTextStyle,
};

export default typographyTheme;