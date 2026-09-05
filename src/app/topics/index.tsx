import { router } from 'expo-router';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing, colors } from '@/constants/theme';
import { averageQuestions, numberSystemQuestions, parentData, percentageQuestions, timeAndWorkQuestions, trainQuestions } from '@/data/data';
import { useTheme } from '@/hooks/use-theme';

const questionCountMap = {
    numberSystemQuestions,
    timeAndWorkQuestions,
    trainQuestions,
    averageQuestions,
    percentageQuestions,
} as const;

export default function TopicsScreen() {
    const theme = useTheme();

    return (
        <ThemedView style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.headerCard}>
                    <ThemedText type="subtitle" style={styles.title}>
                        Choose a topic
                    </ThemedText>
                    <ThemedView style={styles.countChip}>
                        <ThemedText type="smallBold" style={styles.countText}>
                            {parentData.topics.length} topics
                        </ThemedText>
                    </ThemedView>
                </View>

                <FlatList
                    data={parentData.topics}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                        const totalQuestions = questionCountMap[item.id as keyof typeof questionCountMap]?.length ?? 0;

                        return (
                            <Pressable
                                onPress={() =>
                                    router.push({
                                        pathname: '/questions',
                                        params: { topic: item.id },
                                    })
                                }
                                style={({ pressed }) => [
                                    styles.topicItem,
                                    // { backgroundColor: theme.backgroundElement },
                                    pressed && styles.topicItemPressed,
                                ]}>
                                <View style={styles.topicRow}>
                                    <View>
                                        <ThemedText type="default" style={styles.topicName}>
                                            {item.name}
                                        </ThemedText>
                                        <ThemedText type="small" style={styles.topicCount}>
                                            {totalQuestions} questions
                                        </ThemedText>
                                    </View>
                                    <ThemedText type="smallBold" style={styles.chevron}>
                                        →
                                    </ThemedText>
                                </View>
                            </Pressable>
                        );
                    }}
                />
            </SafeAreaView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1f1147',
    },
    safeArea: {
        flex: 1,
        width: '100%',
        maxWidth: MaxContentWidth,
        paddingHorizontal: Spacing.four,
        paddingTop: Spacing.five,
        paddingBottom: BottomTabInset + Spacing.three,
    },
    headerCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#24163F',
        borderRadius: 22,
        paddingHorizontal: Spacing.three,
        paddingVertical: Spacing.three,
        marginBottom: Spacing.three,
        borderWidth: 1,
        borderColor: '#4B3A78',
        shadowColor: '#120A25',
        shadowOpacity: 0.25,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 6 },
        elevation: 4,
    },
    title: {
        marginBottom: 0,
        color: '#F5EEFF',
    },
    countChip: {
        backgroundColor: '#2D1D50',
        borderRadius: 999,
        paddingHorizontal: Spacing.two,
        paddingVertical: Spacing.one,
        borderWidth: 1,
        borderColor: '#6048B6',
    },
    countText: {
        color: '#E7DDFF',
    },
    listContent: {
        gap: Spacing.two,
        paddingBottom: Spacing.three,
    },
    topicItem: {
        paddingHorizontal: Spacing.three,
        paddingVertical: Spacing.three,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#4B3A78',
        backgroundColor: '#2A1D49',
        shadowColor: '#120A25',
        shadowOpacity: 0.18,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 3,
    },
    topicRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    topicName: {
        fontSize: 18,
        color: '#F5EEFF',
        fontWeight: '600',
    },
    topicCount: {
        color: '#D0C3F8',
        marginTop: 2,
    },
    chevron: {
        color: '#F4B74C',
        fontSize: 22,
    },
    topicItemPressed: {
        opacity: 0.92,
        transform: [{ scale: 0.995 }],
    },
});
