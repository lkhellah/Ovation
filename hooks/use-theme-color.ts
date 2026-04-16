import { Colors } from '@/constants/theme';

// Ovation is dark-only. This hook exists for compatibility with
// components like ParallaxScrollView that call useThemeColor({}, 'background').
export function useThemeColor(
  _props: { light?: string; dark?: string },
  colorName: keyof typeof Colors
) {
  return Colors[colorName] ?? Colors.background;
}
