import { router, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, CheckCircle2, ChevronRight, RotateCcw } from 'lucide-react-native';
import { useEffect, useMemo, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Spacing, colors as appColors } from '@/constants/theme';
import {
    averageQuestions,
    numberSystemQuestions,
    parentData,
    percentageQuestions,
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

    useEffect(() => {
        setSelectedOption(null);
        setShowFeedback(false);
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
    const isCorrect = selectedOption === currentQuestion.rightOption;
    const isSubmitDisabled = !selectedOption && !showFeedback;
    const submitButtonLabel = showFeedback ? (isCorrect ? (nextQuestion ? 'Next question' : 'Finish') : 'Retry') : 'Submit';

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
                    <ThemedText type="subtitle" style={styles.questionHeading}>
                        Question {currentIndex + 1}
                    </ThemedText>

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

                    {showFeedback && (
                        <View style={styles.feedbackBox}>
                            <View style={styles.feedbackHeader}>
                                {isCorrect ? (
                                    <CheckCircle2 size={16} color="#5EEAD4" />
                                ) : (
                                    <RotateCcw size={16} color="#FF6B6B" />
                                )}
                                <ThemedText type="default" style={isCorrect ? styles.successText : styles.errorText}>
                                    {isCorrect ? 'Correct answer!' : `Wrong answer. Correct option is ${currentQuestion.rightOption}.`}
                                </ThemedText>
                            </View>
                            <ThemedText type="small" style={styles.explanationText}>
                                {currentQuestion.explanation}
                            </ThemedText>
                        </View>
                    )}
                </ThemedView>

                <View style={styles.actionsRow}>
                    <Pressable
                        disabled={isSubmitDisabled}
                        onPress={() => {
                            if (!showFeedback) {
                                setShowFeedback(true);
                                return;
                            }

                            if (!isCorrect) {
                                setSelectedOption(null);
                                setShowFeedback(false);
                                return;
                            }

                            markQuestionCompleted(selectedTopic.id, currentQuestion.id);

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
                        }}
                        style={({ pressed }) => [
                            styles.primaryButton,
                            !isCorrect && showFeedback && styles.retryButton,
                            isSubmitDisabled && styles.disabledButton,
                            pressed && !isSubmitDisabled && styles.primaryButtonPressed,
                        ]}>
                        <ThemedText type="default" style={styles.primaryText}>
                            {submitButtonLabel}
                        </ThemedText>
                    </Pressable>
                </View>
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
    questionHeading: {
        marginBottom: Spacing.two,
        color: '#29aa68',
        textAlign: 'center',
        fontSize: 24,
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
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 6,
        shadowColor: '#148363',
        shadowOpacity: 0.2,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 3,
    },
    retryButton: {
        backgroundColor: '#6c2144',
        shadowColor: '#6c2144',
        shadowOpacity: 0.45,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 6 },
        elevation: 6,
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
    secondaryText: {
        color: '#F5EEFF',
        fontWeight: '600',
    },
    primaryText: {
        color: '#FFFFFF',
        fontWeight: '600',
    },
});
