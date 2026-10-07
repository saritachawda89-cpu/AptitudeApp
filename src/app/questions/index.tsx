import { router, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, CheckCheck, CircleDashed } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { CoinBadge } from '@/components/coin-badge';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Spacing, colors } from '@/constants/theme';
import {
    addCoins,
    averageQuestions,
    numberSystemQuestions,
    parentData,
    percentageQuestions,
    timeAndWorkQuestions,
    trainQuestions,
    profitAndLossQuestions,
    permutationAndCombinationQuestions,
    ratioAndProportionQuestions,
    mixtureAndAlligationQuestions
} from '@/data/data';

const questionMap = {
    numberSystemQuestions,
    timeAndWorkQuestions,
    trainQuestions,
    averageQuestions,
    percentageQuestions,
    profitAndLossQuestions,
    permutationAndCombinationQuestions,
    ratioAndProportionQuestions,
    mixtureAndAlligationQuestions
} as const;

const levelOrder = ['basic', 'medium', 'hard'] as const;
type LevelKey = (typeof levelOrder)[number];

const getLevelGroups = (allQuestions: typeof numberSystemQuestions) => {
    const total = allQuestions.length;
    const basicEnd = Math.ceil(total / 3);
    const mediumEnd = Math.ceil((total * 2) / 3);

    return [
        { key: 'basic' as const, label: 'Basic', questions: allQuestions.slice(0, basicEnd) },
        { key: 'medium' as const, label: 'Medium', questions: allQuestions.slice(basicEnd, mediumEnd) },
        { key: 'hard' as const, label: 'Hard', questions: allQuestions.slice(mediumEnd) },
    ];
};

export default function QuestionsScreen() {
    const { topic } = useLocalSearchParams<{ topic?: string }>();
    const selectedTopic = parentData.topics.find((item) => item.id === topic) ?? parentData.topics[0];
    const questions = questionMap[selectedTopic.id as keyof typeof questionMap] ?? [];
    const completedCount = questions.filter((question) => question.isCompleted).length;
    const levelGroups = getLevelGroups(questions);
    const [activeLevel, setActiveLevel] = useState<LevelKey>('basic');
    const [coins, setCoins] = useState(parentData.coins);
    const [isCoinsInfoOpen, setIsCoinsInfoOpen] = useState(false);

    useEffect(() => {
        setCoins(parentData.coins);
        setActiveLevel('basic');
    }, [topic]);

    const selectedLevelGroup = levelGroups.find((group) => group.key === activeLevel) ?? levelGroups[0];
    const activeLevelQuestions = selectedLevelGroup.questions;
    const activeCompletedCount = activeLevelQuestions.filter((question) => question.isCompleted).length;

    const handleWatchVideoReward = async () => {
        await addCoins(50);
        setCoins(parentData.coins);
        setIsCoinsInfoOpen(false);
    };

    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.screenShell}>
                <View style={styles.headerArea}>
                    <View style={styles.topBar}>
                        <Pressable onPress={() => router.push('/topics')} style={styles.backButton}>
                            <ArrowLeft size={16} color="#F0F4F8" />
                        </Pressable>

                        <View style={styles.titleWrap}>
                            <ThemedText type="title" style={styles.screenTitle}>
                                {selectedTopic.name}
                            </ThemedText>
                        </View>

                        <CoinBadge value={coins} onPress={() => setIsCoinsInfoOpen(true)} compact />
                    </View>

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

                    <View style={styles.progressPanel}>
                        <View style={styles.progressRow}>
                            <View style={styles.progressTrack}>
                                <View
                                    style={[
                                        styles.progressFill,
                                        {
                                            width: `${activeLevelQuestions.length ? (activeCompletedCount / activeLevelQuestions.length) * 100 : 0}%`,
                                        },
                                    ]}
                                />
                            </View>
                            <ThemedText type="smallBold" style={styles.progressValue}>
                                {activeCompletedCount}/{activeLevelQuestions.length}
                            </ThemedText>
                        </View>
                    </View>

                    <View style={styles.levelSelector}>
                        {levelGroups.map((group) => {
                            const isActive = activeLevel === group.key;
                            return (
                                <Pressable
                                    key={group.key}
                                    onPress={() => setActiveLevel(group.key)}
                                    style={[styles.levelButton, isActive && styles.levelButtonActive]}>
                                    <ThemedText type="smallBold" style={[styles.levelButtonText, isActive && styles.levelButtonTextActive]}>
                                        {group.label}
                                    </ThemedText>
                                    <ThemedText type="smallBold" style={[styles.levelButtonCount, isActive && styles.levelButtonCountActive]}>
                                        {group.questions.length}
                                    </ThemedText>
                                </Pressable>
                            );
                        })}
                    </View>
                </View>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollContent}
                    style={styles.scrollView}>
                    <View style={styles.grid}>
                        {activeLevelQuestions.map((question, index) => {
                            const isDone = question.isCompleted;
                            const displayNumber = levelGroups
                                .slice(0, levelOrder.indexOf(activeLevel) + 1)
                                .reduce((sum, group) => sum + (group.key === activeLevel ? 0 : group.questions.length), 0) + index + 1;

                            return (
                                <Pressable
                                    key={question.id}
                                    hitSlop={8}
                                    onPress={() =>
                                        router.push({
                                            pathname: '/practice',
                                            params: {
                                                topic: selectedTopic.id,
                                                questionId: question.id,
                                            },
                                        })
                                    }
                                    style={({ pressed }) => [
                                        styles.questionTile,
                                        isDone && styles.questionTileCompleted,
                                        pressed && styles.questionTilePressed,
                                    ]}>
                                    <ThemedText type="smallBold" style={styles.tileNumber}>
                                        {displayNumber}
                                    </ThemedText>
                                    {isDone ? (
                                        <CheckCheck size={12} color="#22c55f" style={styles.checkMark} />
                                    ) : (
                                        <CircleDashed size={12} color="#8E9BB0" style={styles.checkMark} />
                                    )}
                                </Pressable>
                            );
                        })}
                    </View>
                </ScrollView>
            </ThemedView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#090a1c',
    },
    screenShell: {
        flex: 1,
        width: '100%',
        maxWidth: MaxContentWidth,
        paddingHorizontal: Spacing.four,
        paddingTop: Spacing.four,
        paddingBottom: Spacing.five,
        backgroundColor: '#090a1c',
        position: 'relative',
    },
    headerArea: {
        flexShrink: 0,
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: Spacing.three,
    },
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: Spacing.four,
    },
    backButton: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: '#24163F',
        borderWidth: 1,
        borderColor: '#4B3A78',
    },
    backText: {
        color: '#F5EEFF',
        fontWeight: '600',
    },
    titleWrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: Spacing.one,
    },
    screenTitle: {
        fontSize: 24,
        lineHeight: 38,
        fontWeight: '700',
        color: '#F5EEFF',
        textAlign: 'center',
    },
    overlay: {
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(9, 10, 28, 0.72)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: Spacing.four,
        zIndex: 20,
    },
    coinsModalCard: {
        width: '100%',
        maxWidth: 320,
        backgroundColor: '#18162f',
        borderRadius: 8,
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
        borderRadius: 8,
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
        borderRadius: 8,
        paddingVertical: Spacing.two,
        alignItems: 'center',
    },
    watchVideoText: {
        color: '#17143A',
    },
    progressPanel: {
        // backgroundColor: '#24163F',
        borderRadius: 8,
        paddingHorizontal: Spacing.three,
        paddingVertical: Spacing.three,
        borderWidth: 1,
        borderColor: '#4B3A78',
        marginBottom: Spacing.three,
    },
    progressRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.two,
    },
    progressTrack: {
        flex: 1,
        height: 12,
        backgroundColor: '#3B2D5F',
        borderRadius: 8,
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        backgroundColor: '#22c55f',
        borderRadius: 8,
    },
    progressValue: {
        minWidth: 56,
        textAlign: 'right',
        color: '#F5EEFF',
    },
    levelSelector: {
        flexDirection: 'row',
        gap: Spacing.two,
        marginBottom: Spacing.three,
    },
    levelButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        borderRadius: 10,
        paddingVertical: Spacing.two,
        backgroundColor: '#1B1A30',
        borderWidth: 1,
        borderColor: '#4B3A78',
    },
    levelButtonActive: {
        backgroundColor: '#2D2857',
        borderColor: '#8C7FE6',
    },
    levelButtonText: {
        color: '#F5EEFF',
        textTransform: 'capitalize',
    },
    levelButtonTextActive: {
        color: '#F8D66C',
    },
    levelButtonCount: {
        color: '#A9B6D4',
        fontSize: 12,
    },
    levelButtonCountActive: {
        color: '#F8D66C',
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 12,
    },
    questionTile: {
        width: '30%',
        aspectRatio: 1,
        backgroundColor: '#121230',
        borderWidth: 1,
        borderColor: '#4B3A78',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        shadowColor: '#120A25',
        shadowOpacity: 0.15,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 3 },
        elevation: 2,
    },
    questionTilePressed: {
        opacity: 1,
        transform: [{ scale: 0.98 }],
        backgroundColor: '#1B1C35',
        borderColor: '#8C7FE6',
        shadowOpacity: 0.25,
    },
    questionTileCompleted: {
        backgroundColor: '#1A2B2A',
        borderColor: '#22c55f',
    },
    tileNumber: {
        fontSize: 20,
        color: '#F5EEFF',
    },
    checkMark: {
        position: 'absolute',
        right: 8,
        top: 6,
        fontSize: 12,
        color: '#22c55f',
        fontWeight: '700',
    },
});

