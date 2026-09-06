import { router } from 'expo-router';
import { ArrowRight, Coins, Sparkles } from 'lucide-react-native';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle } from 'react-native-svg';

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
                    <View style={styles.titleWrap}>
                        <ThemedText type="subtitle" style={styles.title}>
                            AptitudeApp Logo
                        </ThemedText>
                        <ThemedText type="small" style={styles.subtitle}>
                            Practice smarter with quick topic-based aptitude drills.
                        </ThemedText>
                    </View>
                    <View style={styles.coinBadge}>
                        <Coins size={16} color="#0F111A" />
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
                        const questions = questionCountMap[item.id as keyof typeof questionCountMap] ?? [];
                        const totalQuestions = questions.length;
                        const completedQuestions = questions.filter((question) => question.isCompleted).length;
                        const progress = totalQuestions ? (completedQuestions / totalQuestions) * 100 : 0;
                        const radius = 18;
                        const strokeWidth = 4;
                        const circumference = 2 * Math.PI * radius;
                        const strokeDashoffset = circumference - (progress / 100) * circumference;

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
                                    pressed && styles.topicItemPressed,
                                ]}>
                                <View style={styles.topicRow}>
                                    <View style={styles.topicMeta}>
                                        <View style={styles.topicIconWrap}>
                                            <Sparkles size={16} color="#5EEAD4" />
                                        </View>
                                        <View>
                                            <ThemedText type="default" style={styles.topicName}>
                                                {item.name}
                                            </ThemedText>
                                            <ThemedText type="small" style={styles.topicCount}>
                                                {totalQuestions} questions
                                            </ThemedText>
                                        </View>
                                    </View>

                                    <View style={styles.progressRingOuter}>
                                        <Svg width={42} height={42} viewBox="0 0 42 42">
                                            <Circle
                                                cx={21}
                                                cy={21}
                                                r={radius}
                                                stroke="#4B3A78"
                                                strokeWidth={strokeWidth}
                                                fill="transparent"
                                            />
                                            <Circle
                                                cx={21}
                                                cy={21}
                                                r={radius}
                                                stroke="#5EEAD4"
                                                strokeWidth={strokeWidth}
                                                strokeDasharray={circumference}
                                                strokeDashoffset={strokeDashoffset}
                                                strokeLinecap="round"
                                                fill="transparent"
                                                transform="rotate(-90 21 21)"
                                            />
                                        </Svg>
                                        <View style={styles.progressCenter}>
                                            <ThemedText type="smallBold" style={styles.progressText}>
                                                {completedQuestions}/{totalQuestions}
                                            </ThemedText>
                                        </View>
                                    </View>

                                    <ArrowRight size={18} color="#5EEAD4" />
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
        marginBottom: Spacing.three,
    },
    titleWrap: {
        flex: 1,
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
        flexDirection: 'row',
        gap: 4,
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
        gap: 12,
    },
    topicMeta: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.two,
        flex: 1,
    },
    topicIconWrap: {
        width: 28,
        height: 28,
        borderRadius: 10,
        backgroundColor: 'rgba(94, 234, 212, 0.12)',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'rgba(94, 234, 212, 0.3)',
    },
    progressRingOuter: {
        width: 42,
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    progressCenter: {
        position: 'absolute',
        width: 26,
        height: 26,
        borderRadius: 13,
        // backgroundColor: '#090a1c',
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1,
        // borderColor: '#2B1F49',
    },
    progressText: {
        color: '#F5EEFF',
        fontSize: 8,
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
    subtitle: {
        color: '#D0C3F8',
        fontSize: 14,
        lineHeight: 20,
    },
});
