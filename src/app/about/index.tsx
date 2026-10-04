import { ArrowLeft, ChevronRight, FileText, Info, ShieldCheck } from 'lucide-react-native';
import { Alert, Linking, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { colors, Spacing } from '@/constants/theme';

const privacyPolicyUrl = 'https://docs.google.com/document/d/1D6m3PPJORTaiovQErtyaNYzhfRro7X3tCv_Jp974IjI/edit?usp=sharing';
const termsUrl = 'https://docs.google.com/document/d/1P-NLy6KEHOzxDvTDNHvqAavVpA_CAwEIXtOmtRXE9yo/edit?usp=sharing';

async function openLink(url: string) {
    try {
        const canOpen = await Linking.canOpenURL(url);

        if (!canOpen) {
            Alert.alert('Link unavailable', 'This document could not be opened right now.');
            return;
        }

        await Linking.openURL(url);
    } catch (_error) {
        Alert.alert('Unable to open link', 'Please try again later.');
    }
}

export default function AboutScreen() {
    return (
        <ThemedView style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollContent}>
                    <View style={styles.headerRow}>
                        <Pressable onPress={() => router.back()} style={styles.backButton}>
                            <ArrowLeft size={18} color="#F5EEFF" />
                        </Pressable>
                        <ThemedText type="subtitle" style={styles.title}>About</ThemedText>
                    </View>

                    <View style={styles.infoCard}>
                        <View style={styles.iconWrap}>
                            <Info size={20} color="#F8D66C" />
                        </View>

                        <ThemedText type="default" style={styles.sectionTitle}>
                            Aptitude App
                        </ThemedText>

                        <ThemedText type="small" style={styles.description}>
                            Aptitude App is designed to help learners practice reasoning, quantitative, and verbal aptitude questions in a simple and focused way.
                        </ThemedText>
                    </View>

                    <View style={styles.metaGrid}>
                        <View style={styles.metaItem}>
                            <ThemedText type="smallBold" style={styles.metaLabel}>Version</ThemedText>
                            <ThemedText type="default" style={styles.metaValue}>1.0.0</ThemedText>
                        </View>

                        <View style={styles.metaItem}>
                            <ThemedText type="smallBold" style={styles.metaLabel}>Focus</ThemedText>
                            <ThemedText type="default" style={styles.metaValue}>Practice</ThemedText>
                        </View>
                    </View>

                    <View style={styles.sectionCard}>
                        <ThemedText type="smallBold" style={styles.sectionHeading}>Summary</ThemedText>
                        <ThemedText type="small" style={styles.sectionText}>
                            The app supports daily learning with short practice sessions, skill-building exercises, and a reward-based experience that keeps users motivated while they improve speed and confidence.
                        </ThemedText>
                    </View>

                    <View style={styles.sectionCard}>
                        <ThemedText type="smallBold" style={styles.sectionHeading}>Legal</ThemedText>

                        <Pressable onPress={() => openLink(privacyPolicyUrl)} style={styles.linkRow}>
                            <View style={styles.linkIcon}>
                                <ShieldCheck size={16} color="#F5EEFF" />
                            </View>
                            <View style={styles.linkTextBlock}>
                                <ThemedText type="smallBold" style={styles.linkTitle}>Privacy Policy</ThemedText>
                                <ThemedText type="small" style={styles.linkSubtitle}>How we protect and handle personal data</ThemedText>
                            </View>
                            <ChevronRight size={16} color="#BDB2E7" />
                        </Pressable>

                        <Pressable onPress={() => openLink(termsUrl)} style={styles.linkRow}>
                            <View style={styles.linkIcon}>
                                <FileText size={16} color="#F5EEFF" />
                            </View>
                            <View style={styles.linkTextBlock}>
                                <ThemedText type="smallBold" style={styles.linkTitle}>Terms & Conditions</ThemedText>
                                <ThemedText type="small" style={styles.linkSubtitle}>Rules, usage terms, and responsibilities</ThemedText>
                            </View>
                            <ChevronRight size={16} color="#BDB2E7" />
                        </Pressable>
                    </View>

                    <ThemedText type="small" style={styles.footerNote}>
                        Built for learners who want quick practice, steady progress, and better exam confidence.
                    </ThemedText>
                </ScrollView>
            </SafeAreaView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#090a1c',
        alignItems: 'center',
    },
    safeArea: {
        flex: 1,
        width: '100%',
        maxWidth: 800,
    },
    scrollContent: {
        paddingHorizontal: Spacing.three,
        paddingTop: Spacing.three,
        paddingBottom: Spacing.three,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: Spacing.three,
    },
    backButton: {
        width: 36,
        height: 36,
        borderRadius: 10,
        backgroundColor: '#11172E',
        borderWidth: 1,
        borderColor: '#2C3A5E',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: Spacing.two,
    },
    title: {
        color: colors.text,
    },
    infoCard: {
        backgroundColor: '#121833',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#1E294F',
        padding: Spacing.three,
        marginBottom: Spacing.three,
    },
    iconWrap: {
        width: 42,
        height: 42,
        borderRadius: 10,
        backgroundColor: 'rgba(248, 214, 108, 0.12)',
        borderWidth: 1,
        borderColor: '#F8D66C66',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: Spacing.two,
    },
    sectionTitle: {
        color: colors.text,
        marginBottom: Spacing.one,
    },
    description: {
        color: colors.textSecondary,
        lineHeight: 22,
    },
    metaGrid: {
        flexDirection: 'row',
        gap: Spacing.two,
        marginBottom: Spacing.three,
    },
    metaItem: {
        flex: 1,
        backgroundColor: '#121833',
        borderWidth: 1,
        borderColor: '#1E294F',
        borderRadius: 10,
        padding: Spacing.two,
    },
    metaLabel: {
        color: '#A9A0C8',
        marginBottom: 4,
    },
    metaValue: {
        color: colors.text,
    },
    sectionCard: {
        backgroundColor: '#121833',
        borderWidth: 1,
        borderColor: '#1E294F',
        borderRadius: 12,
        padding: Spacing.three,
        marginBottom: Spacing.three,
    },
    sectionHeading: {
        color: colors.text,
        marginBottom: Spacing.one,
    },
    sectionText: {
        color: colors.textSecondary,
        lineHeight: 22,
    },
    linkRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        paddingVertical: 12,
        borderTopWidth: 1,
        borderTopColor: '#1C243F',
    },
    linkIcon: {
        width: 32,
        height: 32,
        borderRadius: 8,
        backgroundColor: '#1D2340',
        alignItems: 'center',
        justifyContent: 'center',
    },
    linkTextBlock: {
        flex: 1,
    },
    linkTitle: {
        color: colors.text,
    },
    linkSubtitle: {
        color: colors.textSecondary,
        lineHeight: 18,
        marginTop: 2,
    },
    footerNote: {
        color: colors.textSecondary,
        lineHeight: 22,
    },
});
