import { StyleSheet, Text, type TextProps } from 'react-native';
import { Colors, Fonts, FontSizes } from '@/constants/theme';

export type ThemedTextProps = TextProps & {
  type?: 'default' | 'title' | 'display' | 'semiBold' | 'subtitle' | 'muted' | 'link';
};

export function ThemedText({
  style,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  return (
    <Text
      style={[
        styles.base,
        type === 'default'   ? styles.default   : undefined,
        type === 'title'     ? styles.title      : undefined,
        type === 'display'   ? styles.display    : undefined,
        type === 'semiBold'  ? styles.semiBold   : undefined,
        type === 'subtitle'  ? styles.subtitle   : undefined,
        type === 'muted'     ? styles.muted      : undefined,
        type === 'link'      ? styles.link       : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  base: {
    fontFamily: Fonts.body as string,
    color: Colors.textPrimary,
  },
  default: {
    fontSize: FontSizes.md,
    lineHeight: FontSizes.md * 1.5,
  },
  semiBold: {
    fontSize: FontSizes.md,
    lineHeight: FontSizes.md * 1.5,
    fontWeight: '600',
  },
  title: {
    fontFamily: Fonts.body as string,
    fontSize: FontSizes['2xl'],
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  display: {
    // Bebas Neue — for big hero text
    fontFamily: Fonts.display as string,
    fontSize: FontSizes['5xl'],
    color: Colors.textPrimary,
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: FontSizes.lg,
    fontWeight: '500',
    color: Colors.textSecondary,
  },
  muted: {
    fontSize: FontSizes.sm,
    color: Colors.textMuted,
  },
  link: {
    fontSize: FontSizes.md,
    color: Colors.accent,
    textDecorationLine: 'underline',
  },
});