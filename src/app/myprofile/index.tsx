import { UserRound } from 'lucide-react-native';
import { StyleSheet, View } from 'react-native';

import { BottomTabBar } from '@/components/bottom-tab-bar';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Spacing } from '@/constants/theme';

export default function MyProfileScreen() {
    return (
        <ThemedView style={styles.container}>
            <View style={styles.card}>
                <View style={styles.avatarWrap}>
                    <UserRound size={34} color="#F5EEFF" />
                </View>
                <ThemedText type="title" style={styles.title}>My Profile</ThemedText>
                <ThemedText type="default" style={styles.subtitle}>
                    Keep track of your progress, streaks, and unlocked topics.
                </ThemedText>
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
    avatarWrap: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#2D1D50',
        borderWidth: 1,
        borderColor: '#4B3A78',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#F5EEFF',
    },
    subtitle: {
        textAlign: 'center',
        color: '#D0C3F8',
        lineHeight: 24,
    },
});
