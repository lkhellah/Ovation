import { View, type ViewProps } from 'react-native';
import { Colors } from '@/constants/theme';

export type ThemedViewProps = ViewProps & {
  variant?: 'default' | 'card' | 'input';
};

export function ThemedView({ style, variant = 'default', ...otherProps }: ThemedViewProps) {
  const backgroundColor =
    variant === 'card'  ? Colors.backgroundCard  :
    variant === 'input' ? Colors.backgroundInput :
    Colors.background;

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}