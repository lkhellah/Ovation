import { ThemeProvider, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors, Palette } from '@/constants/theme';

// Override React Navigation's dark theme with Ovation brand colors
const OvationTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background:   Colors.background,
    card:         Colors.backgroundCard,
    text:         Colors.textPrimary,
    border:       Colors.border,
    notification: Colors.accent,
    primary:      Colors.accent,
  },
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    'BebasNeue-Regular': require('../assets/fonts/BebasNeue-Regular.ttf'),
    'Jost':              require('../assets/fonts/Jost-VariableFont_wght.ttf'),
    'Jost-Italic':       require('../assets/fonts/Jost-Italic-VariableFont_wght.ttf'),
  });

  // Don't render until fonts are ready
  if (!loaded) return null;

  return (
    <ThemeProvider value={OvationTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="light" />
    </ThemeProvider>
  );
}