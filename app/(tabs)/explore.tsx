// future menu tab

import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';

export default function MenuScreen() {
  return (
    <ThemedView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ThemedText type="display">MENU</ThemedText>
      <ThemedText type="muted">Coming soon</ThemedText>
    </ThemedView>
  );
}