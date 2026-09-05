import { router, useLocalSearchParams } from 'expo-router';
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

    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.screenShell}>
                <View style={styles.headerCard}>
                    <ThemedText type="small" style={styles.topicLabel}>
                        {selectedTopic.name}
                    </ThemedText>
                    <View style={styles.counterChip}>
                        <ThemedText type="smallBold" style={styles.counterText}>
                            {currentIndex + 1}/{questions.length}
                        </ThemedText>
                    </View>
                </View>

                <ThemedView style={styles.questionCard}>
                    <ThemedText type="title" style={styles.questionHeading}>
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
                                isSelected && styles.selectedOption,
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
                                        setShowFeedback(true);
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
                            <ThemedText type="default" style={isCorrect ? styles.successText : styles.errorText}>
                                {isCorrect ? 'Correct answer!' : `Wrong answer. Correct option is ${currentQuestion.rightOption}.`}
                            </ThemedText>
                            <ThemedText type="small" style={styles.explanationText}>
                                {currentQuestion.explanation}
                            </ThemedText>
                        </View>
                    )}
                </ThemedView>

                <View style={styles.actionsRow}>
                    <Pressable
                        onPress={() => router.push({ pathname: '/questions', params: { topic: selectedTopic.id } })}
                        style={styles.secondaryButton}>
                        <ThemedText type="default" style={styles.secondaryText}>
                            Questions
                        </ThemedText>
                    </Pressable>

                    {showFeedback && (
                        <Pressable
                            onPress={() => {
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
                                !isCorrect && styles.retryButton,
                                pressed && styles.primaryButtonPressed,
                            ]}>
                            <ThemedText type="default" style={styles.primaryText}>
                                {isCorrect ? (nextQuestion ? 'Next question' : 'Finish') : 'Retry'}
                            </ThemedText>
                        </Pressable>
                    )}
                </View>
            </ThemedView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1f1147',
        alignItems: 'center',
    },
    screenShell: {
        width: '100%',
        maxWidth: MaxContentWidth,
        paddingHorizontal: Spacing.four,
        paddingTop: Spacing.five,
        paddingBottom: Spacing.five,
        backgroundColor: '#1f1147',
    },
    headerCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: Spacing.three,
        backgroundColor: '#24163F',
        borderRadius: 18,
        paddingHorizontal: Spacing.three,
        paddingVertical: Spacing.two,
        borderWidth: 1,
        borderColor: '#4B3A78',
    },
    topicLabel: {
        color: '#F5EEFF',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    counterChip: {
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
        color: '#F5EEFF',
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
        backgroundColor: '#2A1D49',
    },
    selectedOption: {
        borderColor: '#F472B6',
        backgroundColor: '#3A255F',
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
        backgroundColor: '#2A1D49',
        borderRadius: 16,
        padding: Spacing.three,
    },
    successText: {
        color: '#66E3B5',
        fontWeight: '700',
        marginBottom: Spacing.one,
    },
    errorText: {
        color: '#FF7A9D',
        fontWeight: '700',
        marginBottom: Spacing.one,
    },
    explanationText: {
        color: '#D0C3F8',
        lineHeight: 22,
    },
    actionsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: Spacing.four,
        gap: Spacing.two,
    },
    secondaryButton: {
        flex: 1,
        backgroundColor: '#24163F',
        borderWidth: 1,
        borderColor: '#4B3A78',
        borderRadius: 14,
        paddingVertical: Spacing.two,
        alignItems: 'center',
    },
    primaryButton: {
        flex: 1,
        backgroundColor: '#148363',
        borderRadius: 14,
        paddingVertical: Spacing.two,
        alignItems: 'center',
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
