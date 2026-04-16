/**
 * Ovation Coffee — Brand Theme
 * Matches ovationpdx.com
 *
 * Usage:
 *   import { Colors, Fonts, Spacing, BorderRadius } from '@/constants/theme';
 */

import { Platform } from 'react-native';

// ─── Brand Palette ────────────────────────────────────────────────────────────

export const Palette = {
  // Core brand
  black:       '#010103',   // site background
  red:         '#d32228',   // hover/accent color
  redDark:     '#a81a1e',   // pressed state
  redLight:    '#e84b50',   // subtle highlight

  // Neutrals
  white:       '#ffffff',
  offWhite:    '#f5f5f5',   // light surface
  gray100:     '#e8e8e8',
  gray200:     '#c4c4c4',
  gray400:     '#888888',
  gray600:     '#444444',
  gray800:     '#1a1a1c',   // dark surface (cards on black bg)
  gray900:     '#0d0d0f',   // slightly lighter than black bg
} as const;

// ─── Semantic Color Tokens ────────────────────────────────────────────────────
// These are what your components should use, not raw Palette values.

export const Colors = {
  // Backgrounds
  background:        Palette.black,
  backgroundCard:    Palette.gray800,
  backgroundInput:   Palette.gray900,
  backgroundOverlay: 'rgba(1, 1, 3, 0.85)',

  // Text
  textPrimary:       Palette.white,
  textSecondary:     Palette.gray200,
  textMuted:         Palette.gray400,
  textInverse:       Palette.black,

  // Brand accent
  accent:            Palette.red,
  accentPressed:     Palette.redDark,
  accentSubtle:      'rgba(211, 34, 40, 0.15)',

  // UI elements
  border:            Palette.gray600,
  borderSubtle:      'rgba(255, 255, 255, 0.08)',
  tabBarBackground:  Palette.black,
  tabIconDefault:    Palette.gray400,
  tabIconSelected:   Palette.red,

  // Status
  success:           '#2e7d32',
  warning:           '#f57c00',
  error:             Palette.red,

  // Tint (used by Expo internals — keep this)
  tint:              Palette.red,
} as const;

// ─── Typography ───────────────────────────────────────────────────────────────

export const Fonts = {
  display: Platform.select({
    ios:     'BebasNeue-Regular',
    android: 'BebasNeue-Regular',
    web:     "'Bebas Neue', sans-serif",
    default: 'BebasNeue-Regular',
  }),
  body: Platform.select({
    ios:     'Jost',
    android: 'Jost',
    web:     "'Jost', sans-serif",
    default: 'Jost',
  }),
  mono: Platform.select({
    ios:     'Courier New',
    android: 'monospace',
    web:     "'Courier New', monospace",
    default: 'monospace',
  }),
} as const;

export const FontSizes = {
  xs:    11,
  sm:    13,
  md:    15,
  lg:    17,
  xl:    20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 38,
  '5xl': 48,   // Bebas Neue display sizes
  '6xl': 64,
} as const;

export const LineHeights = {
  tight:  1.15,
  normal: 1.5,
  loose:  1.75,
} as const;

// ─── Spacing ──────────────────────────────────────────────────────────────────

export const Spacing = {
  xs:   4,
  sm:   8,
  md:  16,
  lg:  24,
  xl:  32,
  '2xl': 48,
  '3xl': 64,
} as const;

// ─── Border Radius ────────────────────────────────────────────────────────────

export const BorderRadius = {
  sm:   4,
  md:   8,
  lg:  12,
  xl:  20,
  full: 999,
} as const;

// ─── Shadows ──────────────────────────────────────────────────────────────────

export const Shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 5,
  },
  lg: {
    shadowColor: Palette.red,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
} as const;