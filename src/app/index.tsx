import * as Device from 'expo-device';
import { router } from 'expo-router';
import { Platform, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AnimatedIcon } from '@/components/animated-icon';
import { HintRow } from '@/components/hint-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing, colors } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

// function getDevMenuHint() {
//   if (Platform.OS === 'web') {
//     return <ThemedText type="small">use browser devtools</ThemedText>;
//   }
//   if (Device.isDevice) {
//     return (
//       <ThemedText type="small">
//         shake device or press <ThemedText type="code">m</ThemedText> in terminal
//       </ThemedText>
//     );
//   }
//   const shortcut = Platform.OS === 'android' ? 'cmd+m (or ctrl+m)' : 'cmd+d';
//   return (
//     <ThemedText type="small">
//       press <ThemedText type="code">{shortcut}</ThemedText>
//     </ThemedText>
//   );
// }

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.heroCard}>
          <ThemedView style={styles.badgeRow}>
            <ThemedView style={styles.badge}>
              <ThemedText type="smallBold" style={styles.badgeText}>
                5 Topics
              </ThemedText>
            </ThemedView>
            <ThemedView style={styles.badge}>
              <ThemedText type="smallBold" style={styles.badgeText}>
                Daily Practice
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedText type="title" style={styles.title}>
            AptitudeApp
          </ThemedText>
          <ThemedText type="default" themeColor="textSecondary" style={styles.subtitle}>
            Practice smarter with quick topic-based aptitude drills.
          </ThemedText>

          <Pressable
            onPress={() => router.push('/topics')}
            style={({ pressed }) => [
              styles.startButton,
              { backgroundColor: '#6949fe' },
              pressed && styles.startButtonPressed,
            ]}>
            <ThemedText type="smallBold" style={[styles.startButtonText]}>
              Start
            </ThemedText>
          </Pressable>
        </ThemedView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#090a1c',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
    justifyContent: 'center',
  },
  heroCard: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.five,
    paddingVertical: Spacing.five,
    backgroundColor: '#090a1c',
    // borderRadius: 28,
    // borderWidth: 1,
    // borderColor: '#4B3A78',
    // shadowColor: '#120A25',
    // shadowOpacity: 0.35,
    // shadowRadius: 20,
    // shadowOffset: { width: 0, height: 12 },
    elevation: 8,
  },
  badgeRow: {
    flexDirection: 'row',
    gap: Spacing.two,
    marginBottom: Spacing.three,
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#24163F',
  },
  badge: {
    backgroundColor: '#2A1D4D',
    borderRadius: 999,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
    borderWidth: 1,
    borderColor: '#5D4BA7',
  },
  badgeText: {
    color: '#F0E8FF',
    fontSize: 12,
  },
  title: {
    textAlign: 'center',
    fontSize: 38,
    color: '#F7F1FF',
    marginBottom: Spacing.one,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 26,
    marginBottom: Spacing.four,
    color: '#DCCFFF',
  },
  startButton: {
    minWidth: 200,
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.three,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#A855F7',
    shadowOpacity: 0.28,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 7 },
    elevation: 5,
  },
  startButtonPressed: {
    opacity: 0.88,
  },
  startButtonText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#FFFFFF',
  },
});
