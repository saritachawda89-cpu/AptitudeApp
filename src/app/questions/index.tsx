import { router, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, CheckCheck, CircleDashed } from 'lucide-react-native';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Spacing, colors } from '@/constants/theme';
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

export default function QuestionsScreen() {
    const { topic } = useLocalSearchParams<{ topic?: string }>();
    const selectedTopic = parentData.topics.find((item) => item.id === topic) ?? parentData.topics[0];
    const questions = questionMap[selectedTopic.id as keyof typeof questionMap] ?? [];
    const completedCount = questions.filter((question) => question.isCompleted).length;

    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.screenShell}>
                <View style={styles.topBar}>
                    <Pressable onPress={() => router.push('/topics')} style={styles.backButton}>
                        <ArrowLeft size={16} color="#F0F4F8" />
                    </Pressable>

                    <View style={styles.titleWrap}>
                        <ThemedText type="title" style={styles.screenTitle}>
                            {selectedTopic.name}
                        </ThemedText>
                    </View>

                    <View style={styles.headerSpacer} />
                </View>

                <View style={styles.progressPanel}>
                    <View style={styles.progressRow}>
                        <View style={styles.progressTrack}>
                            <View
                                style={[
                                    styles.progressFill,
                                    { width: `${questions.length ? (completedCount / questions.length) * 100 : 0}%` },
                                ]}
                            />
                        </View>
                        <ThemedText type="smallBold" style={styles.progressValue}>
                            {completedCount}/{questions.length}
                        </ThemedText>
                    </View>
                </View>

                <View style={styles.grid}>
                    {questions.map((question, index) => {
                        const isDone = question.isCompleted;

                        return (
                            <Pressable
                                key={question.id}
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
                                    {index + 1}
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
        marginBottom: Spacing.four,
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
    backText: {
        color: '#F5EEFF',
        fontWeight: '600',
    },
    titleWrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerSpacer: {
        width: 40,
        height: 40,
    },
    screenTitle: {
        fontSize: 24,
        lineHeight: 38,
        fontWeight: '700',
        color: '#F5EEFF',
        textAlign: 'center',
    },
    progressPanel: {
        // backgroundColor: '#24163F',
        borderRadius: 18,
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
        borderRadius: 999,
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        backgroundColor: '#22c55f',
        borderRadius: 999,
    },
    progressValue: {
        minWidth: 56,
        textAlign: 'right',
        color: '#F5EEFF',
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
        borderRadius: 18,
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
        opacity: 0.9,
        transform: [{ scale: 0.98 }],
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

