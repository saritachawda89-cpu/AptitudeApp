import { router, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, CheckCircle2, ChevronRight, Coins, RotateCcw } from 'lucide-react-native';
import { useEffect, useMemo, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Spacing, colors as appColors } from '@/constants/theme';
import {
    addCoins,
    averageQuestions,
    numberSystemQuestions,
    parentData,
    percentageQuestions,
    saveQuestionProgress,
    timeAndWorkQuestions,
    trainQuestions,
} from '@/data/data';

const questionMap = {
    numberSystemQuestions,
    timeAndWorkQuestions,
    trainQuestions,
    averageQuestions,
    percentageQuestions,
} as const;

const markQuestionCompleted = (topicId: string, questionId: string) => {
    const topicQuestions = questionMap[topicId as keyof typeof questionMap];
    const question = topicQuestions?.find((item) => item.id === questionId);

    if (question) {
        question.isCompleted = true;
        void saveQuestionProgress();
    }
};

export default function PracticeScreen() {
    const { topic, questionId } = useLocalSearchParams<{ topic?: string; questionId?: string }>();
    const selectedTopic = parentData.topics.find((item) => item.id === topic) ?? parentData.topics[0];
    const questions = questionMap[selectedTopic.id as keyof typeof questionMap] ?? [];
    const currentQuestion = useMemo(() => {
        if (!questions.length) {
            return null;
        }

        return questions.find((question) => question.id === questionId) ?? questions[0];
    }, [questionId, questions]);

    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [showFeedback, setShowFeedback] = useState(false);
    const [isResultModalOpen, setIsResultModalOpen] = useState(false);
    const [showExplanation, setShowExplanation] = useState(false);
    const [earnedRewardForCurrentSubmission, setEarnedRewardForCurrentSubmission] = useState(false);

    useEffect(() => {
        setSelectedOption(null);
        setShowFeedback(false);
        setIsResultModalOpen(false);
        setShowExplanation(false);
        setEarnedRewardForCurrentSubmission(false);
    }, [topic, questionId]);

    if (!currentQuestion) {
        return (
            <ThemedView style={styles.container}>
                <ThemedText type="title">No question available.</ThemedText>
            </ThemedView>
        );
    }

    const currentIndex = questions.findIndex((question) => question.id === currentQuestion.id);
    const nextQuestion = questions[currentIndex + 1] ?? null;
    const isAlreadyCompleted = Boolean(currentQuestion.isCompleted);
    const isCorrect = selectedOption === currentQuestion.rightOption;
    const isSubmitDisabled = !selectedOption || showFeedback;
    const resultMessage = isCorrect
        ? earnedRewardForCurrentSubmission
            ? 'It\'s correct!'
            : 'You already solved this question.'
        : 'That\'s not the correct answer.';

    const handleSubmit = () => {
        if (!selectedOption || showFeedback) {
            return;
        }

        const rewardAwardedNow = isCorrect && !isAlreadyCompleted;

        setShowFeedback(true);
        setIsResultModalOpen(true);
        setShowExplanation(false);
        setEarnedRewardForCurrentSubmission(rewardAwardedNow);

        if (rewardAwardedNow) {
            markQuestionCompleted(selectedTopic.id, currentQuestion.id);
            void addCoins(10);
        }
    };

    const closeResultModal = () => {
        setIsResultModalOpen(false);
        setShowExplanation(false);
    };

    const handleRetry = () => {
        setSelectedOption(null);
        setShowFeedback(false);
        closeResultModal();
    };

    const handleGoToQuestions = () => {
        closeResultModal();
        router.push({ pathname: '/questions', params: { topic: selectedTopic.id } });
    };

    const handleNextOrFinish = () => {
        closeResultModal();

        if (!nextQuestion) {
            router.push({ pathname: '/questions', params: { topic: selectedTopic.id } });
            return;
        }

        router.push({
            pathname: '/practice',
            params: {
                topic: selectedTopic.id,
                questionId: nextQuestion.id,
            },
        });
    };

    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.screenShell}>
                <View style={styles.topBar}>
                    <Pressable
                        onPress={() => router.push({ pathname: '/questions', params: { topic: selectedTopic.id } })}
                        style={styles.backButton}>
                        <ArrowLeft size={16} color="#F0F4F8" />
                    </Pressable>

                    <View style={styles.titleWrap}>
                        <ThemedText type="title" style={styles.screenTitle}>
                            {selectedTopic.name}
                        </ThemedText>
                    </View>

                    <View style={styles.counterChip}>
                        <ThemedText type="smallBold" style={styles.counterText}>
                            {currentIndex + 1}/{questions.length}
                        </ThemedText>
                    </View>
                </View>

                <ThemedView style={styles.questionCard}>
                    <View style={styles.questionCardHeader}>
                        <ThemedText type="subtitle" style={styles.questionHeading}>
                            Question {currentIndex + 1}
                        </ThemedText>

                        {isAlreadyCompleted && (
                            <View style={styles.completedBadge}>
                                <ThemedText type="smallBold" style={styles.completedBadgeText}>
                                    Completed
                                </ThemedText>
                            </View>
                        )}
                    </View>

                    <ThemedText type="default" style={styles.questionText}>
                        {currentQuestion.question}
                    </ThemedText>

                    <View style={styles.optionsWrap}>
                        {currentQuestion.options.map((option) => {
                            const isSelected = selectedOption === option.id;
                            const isRight = option.id === currentQuestion.rightOption;

                            const optionStyle = [
                                styles.optionButton,
                                !showFeedback && isSelected && styles.selectedOption,
                                showFeedback && isRight && styles.correctOption,
                                showFeedback && isSelected && !isRight && styles.wrongOption,
                            ];

                            return (
                                <Pressable
                                    key={option.id}
                                    onPress={() => {
                                        if (showFeedback) {
                                            return;
                                        }

                                        setSelectedOption(option.id);
                                    }}
                                    style={optionStyle}>
                                    <ThemedText type="default" style={styles.optionLabel}>
                                        {option.id}. {option.text}
                                    </ThemedText>
                                </Pressable>
                            );
                        })}
                    </View>

                </ThemedView>

                <View style={styles.actionsRow}>
                    <Pressable
                        disabled={isSubmitDisabled}
                        onPress={handleSubmit}
                        style={({ pressed }) => [
                            styles.primaryButton,
                            isSubmitDisabled && styles.disabledButton,
                            pressed && !isSubmitDisabled && styles.primaryButtonPressed,
                        ]}>
                        <ThemedText type="default" style={styles.primaryText}>
                            Submit
                        </ThemedText>
                    </Pressable>
                </View>

                {isResultModalOpen && (
                    <View style={styles.modalOverlay} pointerEvents="box-none">
                        <View style={styles.modalCard}>
                            <View style={styles.modalHeader}>
                                {isCorrect ? (
                                    <CheckCircle2 size={20} color="#5EEAD4" />
                                ) : (
                                    <RotateCcw size={20} color="#FF6B6B" />
                                )}
                                <ThemedText type="default" style={isCorrect ? styles.modalSuccessTitle : styles.modalErrorTitle}>
                                    {isCorrect ? 'Correct' : 'Incorrect'}
                                </ThemedText>
                            </View>

                            <ThemedText type="default" style={styles.modalMessage}>
                                {resultMessage}
                            </ThemedText>

                            {earnedRewardForCurrentSubmission && isCorrect && (
                                <View style={styles.coinRewardRow}>
                                    <Coins size={18} color="#F8D66C" />
                                    <ThemedText type="smallBold" style={styles.coinRewardText}>
                                        +10
                                    </ThemedText>
                                </View>
                            )}

                            {showExplanation && (
                                <View style={styles.modalExplanationBox}>
                                    <ThemedText type="small" style={styles.modalExplanationText}>
                                        {currentQuestion.explanation}
                                    </ThemedText>
                                </View>
                            )}

                            <View style={styles.modalActions}>
                                <Pressable onPress={() => setShowExplanation((value) => !value)} style={styles.modalSecondaryButton}>
                                    <ThemedText type="smallBold" style={styles.modalSecondaryText}>
                                        {showExplanation ? 'Hide explain' : 'Explain'}
                                    </ThemedText>
                                </Pressable>

                                {isCorrect ? (
                                    <Pressable onPress={handleNextOrFinish} style={styles.modalPrimaryButton}>
                                        <ThemedText type="smallBold" style={styles.modalPrimaryText}>
                                            {nextQuestion ? 'Next' : 'Finish'}
                                        </ThemedText>
                                    </Pressable>
                                ) : (
                                    <Pressable onPress={handleRetry} style={styles.modalDangerButton}>
                                        <ThemedText type="smallBold" style={styles.modalDangerText}>
                                            Retry
                                        </ThemedText>
                                    </Pressable>
                                )}

                                <Pressable onPress={handleGoToQuestions} style={styles.modalSecondaryButton}>
                                    <ThemedText type="smallBold" style={styles.modalSecondaryText}>
                                        Go to questions
                                    </ThemedText>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                )}
            </ThemedView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#090a1c',
        alignItems: 'center',
    },
    screenShell: {
        width: '100%',
        maxWidth: MaxContentWidth,
        paddingHorizontal: Spacing.four,
        paddingTop: Spacing.four,
        paddingBottom: Spacing.five,
        backgroundColor: '#090a1c',
    },
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: Spacing.three,
        // paddingVertical: Spacing.two,
    },
    backButton: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 999,
        backgroundColor: '#24163F',
        borderWidth: 1,
        borderColor: '#4B3A78',
    },
    titleWrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    screenTitle: {
        fontSize: 24,
        lineHeight: 38,
        fontWeight: '700',
        color: '#F5EEFF',
        textAlign: 'center',
    },
    counterChip: {
        minWidth: 52,
        alignItems: 'center',
        backgroundColor: '#2D1D50',
        borderRadius: 999,
        paddingHorizontal: Spacing.two,
        paddingVertical: Spacing.one,
        borderWidth: 1,
        borderColor: '#6048B6',
    },
    counterText: {
        color: '#F5EEFF',
    },
    questionCard: {
        backgroundColor: '#24163F',
        borderRadius: 24,
        paddingHorizontal: Spacing.three,
        paddingVertical: Spacing.three,
        borderWidth: 1,
        borderColor: '#4B3A78',
        shadowColor: '#120A25',
        shadowOpacity: 0.18,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 4 },
        elevation: 3,
    },
    questionCardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8,
        marginBottom: Spacing.two,
    },
    questionHeading: {
        flex: 1,
        color: '#29aa68',
        textAlign: 'center',
        fontSize: 24,
    },
    completedBadge: {
        // backgroundColor: '#173E37',
        // borderWidth: 1,
        // borderColor: '#73E6C5',
        // borderRadius: 999,
        // paddingHorizontal: 8,
        // paddingVertical: 4,
        // alignSelf: 'flex-end',
        position: 'absolute',
        right: 0,
        top: 0,
    },
    completedBadgeText: {
        color: '#DFFBF0',
        fontSize: 10,
        lineHeight: 12,
    },
    questionText: {
        fontSize: 20,
        lineHeight: 30,
        color: '#F5EEFF',
        marginBottom: Spacing.three,
    },
    optionsWrap: {
        gap: Spacing.two,
    },
    optionButton: {
        paddingHorizontal: Spacing.three,
        paddingVertical: Spacing.three,
        borderWidth: 1,
        borderColor: '#4B3A78',
        borderRadius: 14,
        backgroundColor: '#121230',
    },
    selectedOption: {
        borderColor: '#7C6F9E',
        backgroundColor: '#1D1C35',
    },
    correctOption: {
        borderColor: '#66E3B5',
        backgroundColor: '#16322A',
    },
    wrongOption: {
        borderColor: '#FF7A9D',
        backgroundColor: '#3A1C2A',
    },
    optionLabel: {
        color: '#F5EEFF',
    },
    feedbackBox: {
        marginTop: Spacing.three,
        borderWidth: 1,
        borderColor: '#4B3A78',
        backgroundColor: '#121230',
        borderRadius: 16,
        padding: Spacing.three,
    },
    feedbackHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: Spacing.one,
    },
    successText: {
        color: '#66E3B5',
        fontWeight: '700',
    },
    errorText: {
        color: '#FF7A9D',
        fontWeight: '700',
    },
    explanationText: {
        color: '#D0C3F8',
        lineHeight: 22,
    },
    actionsRow: {
        marginTop: Spacing.four,
    },
    primaryButton: {
        width: '100%',
        backgroundColor: '#148363',
        borderRadius: 14,
        paddingVertical: Spacing.two,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#148363',
        shadowOpacity: 0.2,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 3,
    },
    disabledButton: {
        backgroundColor: '#2D1D50',
        opacity: 0.65,
        shadowOpacity: 0,
        elevation: 0,
    },
    primaryButtonPressed: {
        opacity: 0.9,
    },
    primaryText: {
        color: '#FFFFFF',
        fontWeight: '600',
    },
    modalOverlay: {
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(9, 10, 28, 0.7)',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: Spacing.four,
    },
    modalCard: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: '#181B31',
        borderRadius: 22,
        borderWidth: 1,
        borderColor: '#4B3A78',
        padding: Spacing.three,
        shadowColor: '#120A25',
        shadowOpacity: 0.35,
        shadowRadius: 18,
        shadowOffset: { width: 0, height: 12 },
        elevation: 8,
        alignItems: 'center',
    },
    modalHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        marginBottom: Spacing.two,
    },
    modalSuccessTitle: {
        color: '#5EEAD4',
        fontWeight: '700',
    },
    modalErrorTitle: {
        color: '#FF7A9D',
        fontWeight: '700',
    },
    modalMessage: {
        color: '#F5EEFF',
        fontSize: 18,
        lineHeight: 26,
        marginBottom: Spacing.two,
        textAlign: 'center',
    },
    coinRewardRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        marginBottom: Spacing.two,
    },
    coinRewardText: {
        color: '#F8D66C',
    },
    modalExplanationBox: {
        backgroundColor: '#121230',
        borderWidth: 1,
        borderColor: '#4B3A78',
        borderRadius: 14,
        padding: Spacing.two,
        marginBottom: Spacing.three,
        width: '100%',
    },
    modalExplanationText: {
        color: '#D0C3F8',
        lineHeight: 20,
        textAlign: 'center',
    },
    modalActions: {
        gap: Spacing.two,
        width: '100%',
    },
    modalSecondaryButton: {
        backgroundColor: '#24163F',
        borderWidth: 1,
        borderColor: '#4B3A78',
        borderRadius: 12,
        paddingVertical: Spacing.two,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalPrimaryButton: {
        backgroundColor: '#148363',
        borderRadius: 12,
        paddingVertical: Spacing.two,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalDangerButton: {
        backgroundColor: '#6c2144',
        borderRadius: 12,
        paddingVertical: Spacing.two,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#6c2144',
        shadowOpacity: 0.45,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 6 },
        elevation: 6,
    },
    modalPrimaryText: {
        color: '#FFFFFF',
    },
    modalDangerText: {
        color: '#FFFFFF',
    },
    modalSecondaryText: {
        color: '#F5EEFF',
    },
});
