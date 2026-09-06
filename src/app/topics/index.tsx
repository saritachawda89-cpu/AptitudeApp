import { router } from 'expo-router';
import { ArrowRight, Coins, Lock, Sparkles } from 'lucide-react-native';
import { Alert, FlatList, Modal, Pressable, StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle } from 'react-native-svg';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing, colors } from '@/constants/theme';
import { averageQuestions, numberSystemQuestions, parentData, percentageQuestions, timeAndWorkQuestions, trainQuestions, UNLOCK_COST, unlockTopic } from '@/data/data';
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
    const [coins, setCoins] = useState(parentData.coins);
    const [unlockedTopics, setUnlockedTopics] = useState<string[]>(parentData.unlockedTopics);
    const [pendingUnlockTopic, setPendingUnlockTopic] = useState<{ id: string; name: string } | null>(null);
    const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

    useEffect(() => {
        if (!feedback) {
            return;
        }

        const timeoutId = setTimeout(() => {
            setFeedback(null);
        }, 2800);

        return () => clearTimeout(timeoutId);
    }, [feedback]);

    const handleUnlock = async () => {
        if (!pendingUnlockTopic) {
            return;
        }

        const didUnlock = await unlockTopic(pendingUnlockTopic.id);

        const topicName = pendingUnlockTopic.name;
        setPendingUnlockTopic(null);

        if (!didUnlock) {
            const errorMessage = `You need ${UNLOCK_COST} coins to unlock ${topicName}.`;
            setFeedback({ type: 'error', message: errorMessage });
            Alert.alert('Not enough coins', errorMessage);
            return;
        }

        const successMessage = `${topicName} is now unlocked and ready to play.`;
        setUnlockedTopics([...parentData.unlockedTopics]);
        setCoins(parentData.coins);
        setFeedback({ type: 'success', message: successMessage });
        Alert.alert('Unlocked successfully', successMessage);
    };

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
                            {coins}
                        </ThemedText>
                    </View>
                </View>

                {feedback ? (
                    <View style={[styles.feedbackBanner, feedback.type === 'success' ? styles.successBanner : styles.errorBanner]}>
                        <ThemedText type="smallBold" style={styles.feedbackText}>
                            {feedback.message}
                        </ThemedText>
                        <Pressable onPress={() => setFeedback(null)} style={styles.feedbackCloseButton}>
                            <ThemedText type="smallBold" style={styles.feedbackCloseText}>
                                ✕
                            </ThemedText>
                        </Pressable>
                    </View>
                ) : null}

                <FlatList
                    data={parentData.topics}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                        const questions = questionCountMap[item.id as keyof typeof questionCountMap] ?? [];
                        const totalQuestions = questions.length;
                        const completedQuestions = questions.filter((question) => question.isCompleted).length;
                        const isUnlocked = unlockedTopics.includes(item.id);
                        const progress = totalQuestions ? (completedQuestions / totalQuestions) * 100 : 0;
                        const radius = 18;
                        const strokeWidth = 4;
                        const circumference = 2 * Math.PI * radius;
                        const strokeDashoffset = circumference - (progress / 100) * circumference;

                        return (
                            <Pressable
                                onPress={() => {
                                    if (!isUnlocked) {
                                        setPendingUnlockTopic(item);
                                        return;
                                    }

                                    router.push({
                                        pathname: '/questions',
                                        params: { topic: item.id },
                                    });
                                }}
                                style={({ pressed }) => [
                                    styles.topicItem,
                                    !isUnlocked && styles.topicItemLocked,
                                    pressed && isUnlocked && styles.topicItemPressed,
                                ]}>
                                <View style={styles.topicRow}>
                                    <View style={styles.topicMeta}>
                                        <View style={styles.topicIconWrap}>
                                            <Sparkles size={16} color={isUnlocked ? '#5EEAD4' : '#8E9BB0'} />
                                        </View>
                                        <View>
                                            <ThemedText type="default" style={styles.topicName}>
                                                {item.name}
                                            </ThemedText>
                                            <ThemedText type="small" style={styles.topicCount}>
                                                {totalQuestions} questions
                                            </ThemedText>
                                            {!isUnlocked ? (
                                                <ThemedText type="small" style={styles.unlockHint}>
                                                    Spend {UNLOCK_COST} points
                                                </ThemedText>
                                            ) : null}
                                        </View>
                                    </View>

                                    {isUnlocked ? (
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
                                    ) : (
                                        <View style={styles.lockBadge}>
                                            <Lock size={16} color="#D0C3F8" />
                                        </View>
                                    )}

                                    {isUnlocked ? (
                                        <ArrowRight size={18} color="#5EEAD4" />
                                    ) : (
                                        <View style={styles.lockSpacer} />
                                    )}
                                </View>
                            </Pressable>
                        );
                    }}
                />

                <Modal
                    transparent
                    visible={Boolean(pendingUnlockTopic)}
                    animationType="fade"
                    onRequestClose={() => setPendingUnlockTopic(null)}>
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalCard}>
                            <ThemedText type="subtitle" style={styles.modalTitle}>
                                Unlock level
                            </ThemedText>
                            <ThemedText type="default" style={styles.modalText}>
                                Spend {UNLOCK_COST} coins to unlock {pendingUnlockTopic?.name ?? 'this level'}.
                            </ThemedText>

                            <View style={styles.modalButtonRow}>
                                <Pressable style={styles.cancelButton} onPress={() => setPendingUnlockTopic(null)}>
                                    <ThemedText type="smallBold" style={styles.cancelText}>
                                        Cancel
                                    </ThemedText>
                                </Pressable>

                                <Pressable style={styles.unlockButton} onPress={handleUnlock}>
                                    <ThemedText type="smallBold" style={styles.unlockButtonText}>
                                        Unlock
                                    </ThemedText>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>
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
    lockBadge: {
        width: 42,
        height: 42,
        borderRadius: 21,
        backgroundColor: '#1D1C35',
        borderWidth: 1,
        borderColor: '#4B3A78',
        alignItems: 'center',
        justifyContent: 'center',
    },
    lockSpacer: {
        width: 18,
        height: 18,
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
    unlockHint: {
        color: '#F8D66C',
        marginTop: 4,
        fontSize: 12,
    },
    chevron: {
        color: '#F4B74C',
        fontSize: 22,
    },
    topicItemLocked: {
        opacity: 0.75,
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
    feedbackBanner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: Spacing.two,
        paddingVertical: Spacing.one,
        borderRadius: 12,
        marginBottom: Spacing.two,
        borderWidth: 1,
        gap: Spacing.one,
    },
    successBanner: {
        backgroundColor: 'rgba(94, 234, 212, 0.12)',
        borderColor: 'rgba(94, 234, 212, 0.5)',
    },
    errorBanner: {
        backgroundColor: 'rgba(255, 124, 124, 0.12)',
        borderColor: 'rgba(255, 124, 124, 0.5)',
    },
    feedbackText: {
        color: '#F5EEFF',
        textAlign: 'center',
        flex: 1,
    },
    feedbackCloseButton: {
        width: 22,
        height: 22,
        borderRadius: 11,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.08)',
    },
    feedbackCloseText: {
        color: '#F5EEFF',
        fontSize: 12,
        lineHeight: 12,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(9, 10, 28, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: Spacing.four,
    },
    modalCard: {
        width: '100%',
        maxWidth: 320,
        backgroundColor: '#18162f',
        borderRadius: 22,
        borderWidth: 1,
        borderColor: '#4B3A78',
        padding: Spacing.three,
        shadowColor: '#000000',
        shadowOpacity: 0.25,
        shadowRadius: 14,
        shadowOffset: { width: 0, height: 8 },
        elevation: 8,
    },
    modalTitle: {
        color: '#F5EEFF',
        fontSize: 22,
        marginBottom: Spacing.one,
    },
    modalText: {
        color: '#D0C3F8',
        lineHeight: 22,
        textAlign: 'center',
    },
    modalButtonRow: {
        flexDirection: 'row',
        marginTop: Spacing.three,
        gap: Spacing.two,
    },
    cancelButton: {
        flex: 1,
        paddingVertical: Spacing.two,
        borderRadius: 12,
        backgroundColor: '#221f3c',
        borderWidth: 1,
        borderColor: '#4B3A78',
        alignItems: 'center',
    },
    cancelText: {
        color: '#F5EEFF',
    },
    unlockButton: {
        flex: 1,
        paddingVertical: Spacing.two,
        borderRadius: 12,
        backgroundColor: '#5EEAD4',
        alignItems: 'center',
    },
    unlockButtonText: {
        color: '#0E1226',
    },
});
