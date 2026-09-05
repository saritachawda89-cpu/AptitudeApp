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
                    <View style={styles.coinBadge}>
                        <ThemedText type="smallBold" style={styles.coinText}>
                            {parentData.coins}
                        </ThemedText>
                    </View>
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
        backgroundColor: '#090a1c',
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
        // backgroundColor: '#24163F',
        // borderRadius: 22,
        // paddingHorizontal: Spacing.three,
        // paddingVertical: Spacing.three,
        marginBottom: Spacing.three,
        // borderWidth: 1,
        // borderColor: '#4B3A78',
        // shadowColor: '#120A25',
        // shadowOpacity: 0.25,
        // shadowRadius: 10,
        // shadowOffset: { width: 0, height: 6 },
        // elevation: 4,
    },
    title: {
        marginBottom: 0,
        color: '#37e9bb',
        fontSize: 24,
        fontWeight: '800',
        lineHeight: 32,
    },
    coinBadge: {
        minWidth: 54,
        paddingHorizontal: Spacing.two,
        paddingVertical: Spacing.one,
        borderRadius: 999,
        alignItems: 'center',
        backgroundColor: '#F8D66C',
        borderWidth: 1,
        borderColor: '#F7C84C',
    },
    coinText: {
        color: '#4B2D00',
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
        backgroundColor: '#121230',
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
