import { router } from 'expo-router';
import { ArrowRight, CalendarDays, Coins, ListFilter, Lock, Target } from 'lucide-react-native';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgUri } from 'react-native-svg';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
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
  // const logoUri = Image.resolveAssetSource(require('../../assets/images/logo.svg')).uri;

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        {/* <View style={styles.logoShell}>
          <SvgUri width={160} height={160} uri={logoUri} />
        </View> */}

        <ThemedText type="title" style={styles.title}>
          <ThemedText type="title" style={styles.titleGradient}>Aptitude</ThemedText>
          App
        </ThemedText>

        <ThemedText type="default" themeColor="textSecondary" style={styles.subtitle}>
          Master aptitude, one topic at a time.
        </ThemedText>

        <View style={styles.badgeRow}>
          <View style={styles.badge}>
            <ListFilter size={18} color="#D8C8FF" />
            <ThemedText type="smallBold" style={styles.badgeText}>
              5 Topics
            </ThemedText>
          </View>

          <View style={styles.badge}>
            <CalendarDays size={18} color="#D8C8FF" />
            <ThemedText type="smallBold" style={styles.badgeText}>
              Daily Practice
            </ThemedText>
          </View>
        </View>

        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <Target size={22} color="#5EEAD4" />
            <ThemedText type="smallBold" style={styles.metaText}>
              Practice
            </ThemedText>
          </View>

          <View style={styles.metaDivider} />

          <View style={styles.metaItem}>
            <Coins size={22} color="#F8D66C" />
            <ThemedText type="smallBold" style={styles.metaText}>
              Earn
            </ThemedText>
          </View>

          <View style={styles.metaDivider} />

          <View style={styles.metaItem}>
            <Lock size={22} color="#D8C8FF" />
            <ThemedText type="smallBold" style={styles.metaText}>
              Unlock
            </ThemedText>
          </View>
        </View>

        <Pressable
          onPress={() => router.push('/topics')}
          style={({ pressed }) => [
            styles.startButton,
            pressed && styles.startButtonPressed,
          ]}>
          <ThemedText type="smallBold" style={styles.startButtonText}>
            Start
          </ThemedText>
        </Pressable>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#020f24',
  },
  safeArea: {
    flex: 1,
    width: '100%',
    maxWidth: MaxContentWidth,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.four,
    paddingBottom: BottomTabInset + Spacing.three,
  },
  logoShell: {
    width: 172,
    height: 172,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    marginBottom: Spacing.three,
    backgroundColor: '#1d1f4a',
    shadowColor: '#6d65ff',
    shadowOpacity: 0.4,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
  },
  title: {
    textAlign: 'center',
    fontSize: 62,
    lineHeight: 68,
    color: '#22c55f',
    fontWeight: '800',
    marginBottom: 0,
  },
  titleGradient: {
    color: '#F5F5FF',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 28,
    marginTop: Spacing.one,
    marginBottom: Spacing.three,
    color: '#D9D2F2',
  },
  badgeRow: {
    flexDirection: 'row',
    gap: Spacing.two,
    marginBottom: Spacing.four,
    width: '100%',
    justifyContent: 'center',
  },
  badge: {
    flex: 1,
    maxWidth: 200,
    backgroundColor: '#2c2256',
    borderRadius: 999,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    borderWidth: 1,
    borderColor: '#5b4cc3',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    shadowColor: '#2c2256',
    shadowOpacity: 0.5,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },
  badgeText: {
    color: '#F0E8FF',
    fontSize: 14,
  },
  metaRow: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.four,
    gap: 14,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    minWidth: 86,
    justifyContent: 'center',
  },
  metaText: {
    color: '#F5EEFF',
    fontSize: 16,
  },
  metaDivider: {
    width: 1,
    height: 26,
    backgroundColor: '#5B4CC3',
    opacity: 0.7,
  },
  startButton: {
    width: '100%',
    paddingVertical: Spacing.three,
    borderRadius: 22,
    backgroundColor: '#22c55f',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
    shadowColor: '#22c55f',
    shadowOpacity: 0.5,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },
  startButtonPressed: {
    opacity: 0.92,
  },
  startButtonText: {
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 30,
    color: '#FFFFFF',
  },
});
