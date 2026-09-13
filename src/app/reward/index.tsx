import { Gift, Sparkles } from 'lucide-react-native';
import { StyleSheet, View } from 'react-native';

import { BottomTabBar } from '@/components/bottom-tab-bar';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Spacing } from '@/constants/theme';

export default function RewardScreen() {
    return (
        <ThemedView style={styles.container}>
            <View style={styles.card}>
                <Gift size={42} color="#F8D66C" />
                <ThemedText type="title" style={styles.title}>Rewards</ThemedText>
                <ThemedText type="default" style={styles.subtitle}>
                    Earn more coins by completing questions and watching short rewards.
                </ThemedText>
                <View style={styles.pill}>
                    <Sparkles size={16} color="#17143A" />
                    <ThemedText type="smallBold" style={styles.pillText}>+50 bonus</ThemedText>
                </View>
            </View>
            <BottomTabBar />
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#090a1c',
        paddingHorizontal: Spacing.four,
    },
    card: {
        width: '100%',
        maxWidth: MaxContentWidth,
        backgroundColor: '#18162f',
        borderRadius: 24,
        borderWidth: 1,
        borderColor: '#4B3A78',
        paddingVertical: Spacing.five,
        paddingHorizontal: Spacing.three,
        alignItems: 'center',
        gap: Spacing.two,
    },
    title: {
        color: '#F5EEFF',
    },
    subtitle: {
        textAlign: 'center',
        color: '#D0C3F8',
        lineHeight: 24,
    },
    pill: {
        backgroundColor: '#F8D66C',
        borderRadius: 999,
        paddingHorizontal: Spacing.two,
        paddingVertical: Spacing.one,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    pillText: {
        color: '#17143A',
    },
});
