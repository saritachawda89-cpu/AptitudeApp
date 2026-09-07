import { router } from 'expo-router';
import { ArrowRight, Coins, Lock, Sparkles } from 'lucide-react-native';
import { FlatList, Image, Modal, Pressable, StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle } from 'react-native-svg';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { addCoins, averageQuestions, numberSystemQuestions, parentData, percentageQuestions, timeAndWorkQuestions, trainQuestions, UNLOCK_COST, unlockTopic } from '@/data/data';
import { useTheme } from '@/hooks/use-theme';

const topicIconMap = {
    numberSystemQuestions: require('../../../assets/images/numberSystemQuestions.svg'),
    timeAndWorkQuestions: require('../../../assets/images/timeAndWorkQuestions.svg'),
    trainQuestions: require('../../../assets/images/trainQuestions.svg'),
    averageQuestions: require('../../../assets/images/averageQuestions.svg'),
    percentageQuestions: require('../../../assets/images/percentageQuestions.svg'),
} as const;

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
    const [isCoinsInfoOpen, setIsCoinsInfoOpen] = useState(false);
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
            return;
        }

        const successMessage = `${topicName} is now unlocked and ready to play.`;
        setUnlockedTopics([...parentData.unlockedTopics]);
        setCoins(parentData.coins);
        setFeedback({ type: 'success', message: successMessage });
    };

    const handleWatchVideoReward = async () => {
        await addCoins(50);
        setCoins(parentData.coins);
        setIsCoinsInfoOpen(false);
        setFeedback({ type: 'success', message: 'You earned 50 coins from the video reward.' });
    };

    return (
        <ThemedView style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.headerCard}>
                    <View style={styles.titleWrap}>
                        <ThemedText type="subtitle" style={styles.title}>
                            <ThemedText type="title" style={styles.titleGradient}>Aptitude</ThemedText>
                            App
                        </ThemedText>
                        <ThemedText type="small" style={styles.subtitle}>
                            Practice smarter with quick topic-based aptitude drills.
                        </ThemedText>
                    </View>
                    <Pressable onPress={() => setIsCoinsInfoOpen(true)} style={styles.coinBadge}>
                        <Coins size={16} color="#0F111A" />
                        <ThemedText type="smallBold" style={styles.coinText}>
                            {coins}
                        </ThemedText>
                    </Pressable>
                </View>

                {feedback ? (
                    <View style={[styles.feedbackBanner, feedback.type === 'success' ? styles.successBanner : styles.errorBanner]}>
                        <View style={styles.feedbackIconWrap}>
                            <ThemedText type="smallBold" style={styles.feedbackIconText}>
                                {feedback.type === 'success' ? '✓' : '!'}
                            </ThemedText>
                        </View>
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

                {isCoinsInfoOpen && (
                    <View style={styles.overlay} pointerEvents="auto">
                        <View style={styles.coinsModalCard}>
                            <ThemedText type="subtitle" style={styles.coinsModalTitle}>
                                Earn coins
                            </ThemedText>
                            <ThemedText type="default" style={styles.coinsModalText}>
                                You can earn coins by solving questions or you can watch video and earn.
                            </ThemedText>

                            <View style={styles.coinsModalActions}>
                                <Pressable onPress={() => setIsCoinsInfoOpen(false)} style={styles.closeCoinsButton}>
                                    <ThemedText type="smallBold" style={styles.closeCoinsText}>
                                        Close
                                    </ThemedText>
                                </Pressable>

                                <Pressable onPress={handleWatchVideoReward} style={styles.watchVideoButton}>
                                    <ThemedText type="smallBold" style={styles.watchVideoText}>
                                        Watch video (+50)
                                    </ThemedText>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                )}

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
                        const topicAsset = topicIconMap[item.id as keyof typeof topicIconMap];

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
                                            {topicAsset ? (
                                                <Image
                                                    source={topicAsset}
                                                    style={styles.topicIconImage}
                                                    resizeMode="contain"
                                                />
                                            ) : (
                                                <Sparkles size={16} color={isUnlocked ? '#22c55f' : '#8E9BB0'} />
                                            )}
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
                                                    <Coins size={16} color="#f8d66c" /> {UNLOCK_COST} to unlock
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
                                                    stroke="#22c55f"
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
                                        <ArrowRight size={18} color="#22c55f" />
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
                            <ThemedText type="subtitle" style={styles.coinsModalTitle}>
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
        color: '#22c55f',
        fontSize: 24,
        fontWeight: '800',
        lineHeight: 32,
    },
    titleGradient: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '600',
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
        shadowColor: '#F8D66C',
        shadowOpacity: 0.4,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        elevation: 4,
    },
    coinText: {
        color: '#4B2D00',
    },
    overlay: {
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(9, 10, 28, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: Spacing.four,
        zIndex: 10,
    },
    coinsModalCard: {
        width: '100%',
        maxWidth: 320,
        backgroundColor: '#18162f',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#4B3A78',
        padding: Spacing.three,
        alignItems: 'center',
    },
    coinsModalTitle: {
        color: '#F8D66C',
        marginBottom: Spacing.one,
        textAlign: 'center',
    },
    coinsModalText: {
        color: '#F5EEFF',
        lineHeight: 22,
        textAlign: 'center',
        marginBottom: Spacing.three,
    },
    coinsModalActions: {
        width: '100%',
        gap: Spacing.two,
    },
    closeCoinsButton: {
        width: '100%',
        backgroundColor: '#221f3c',
        borderRadius: 12,
        paddingVertical: Spacing.two,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#4B3A78',
    },
    closeCoinsText: {
        color: '#F5EEFF',
    },
    watchVideoButton: {
        width: '100%',
        backgroundColor: '#F8D66C',
        borderRadius: 12,
        paddingVertical: Spacing.two,
        alignItems: 'center',
    },
    watchVideoText: {
        color: '#17143A',
    },
    listContent: {
        gap: Spacing.two,
        paddingBottom: Spacing.three,
    },
    topicItem: {
        paddingHorizontal: Spacing.two,
        paddingVertical: Spacing.two,
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
        width: 48,
        height: 48,
        borderRadius: 10,
        // backgroundColor: 'rgba(94, 234, 212, 0.12)',
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1,
        // borderColor: 'rgba(94, 234, 212, 0.3)',
        overflow: 'hidden',
    },
    topicIconImage: {
        width: 48,
        height: 48,
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
        fontSize: 16,
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
        lineHeight: 18,
    },
    feedbackBanner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: Spacing.two,
        paddingVertical: Spacing.two,
        borderRadius: 16,
        borderWidth: 1,
        gap: Spacing.one,
        marginBottom: Spacing.two,
        shadowColor: '#000000',
        shadowOpacity: 0.18,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 6 },
        elevation: 6,
    },
    successBanner: {
        backgroundColor: 'rgba(15, 118, 110, 0.22)',
        borderColor: 'rgba(94, 234, 212, 0.58)',
    },
    errorBanner: {
        backgroundColor: 'rgba(127, 29, 29, 0.22)',
        borderColor: 'rgba(248, 113, 113, 0.58)',
    },
    feedbackIconWrap: {
        width: 24,
        height: 24,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.08)',
    },
    feedbackIconText: {
        color: '#F5EEFF',
        fontSize: 12,
        lineHeight: 12,
    },
    feedbackText: {
        color: '#F5EEFF',
        textAlign: 'left',
        flex: 1,
        fontSize: 12,
        lineHeight: 18,
    },
    feedbackCloseButton: {
        width: 24,
        height: 24,
        borderRadius: 12,
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
        shadowOpacity: 0.28,
        shadowRadius: 16,
        shadowOffset: { width: 0, height: 10 },
        elevation: 10,
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
        backgroundColor: '#F8D66C',
        alignItems: 'center',
    },
    unlockButtonText: {
        color: '#0E1226',
    }
});
