import { Check, CirclePlay, Gift, WalletCards } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { BottomTabBar } from '@/components/bottom-tab-bar';
import { CoinBadge } from '@/components/coin-badge';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { colors, MaxContentWidth, Spacing } from '@/constants/theme';
import { claimDailyBonus, getTodayDateKey, parentData, rewardConfig } from '@/data/data';

export default function RewardScreen() {
    const [coins, setCoins] = useState(parentData.coins);
    const [hasClaimedToday, setHasClaimedToday] = useState(parentData.lastDailyBonusDate === getTodayDateKey());

    useEffect(() => {
        setCoins(parentData.coins);
        setHasClaimedToday(parentData.lastDailyBonusDate === getTodayDateKey());
    }, [parentData.coins, parentData.lastDailyBonusDate]);

    const rewardActions = [
        {
            id: 'video',
            icon: CirclePlay,
            label: rewardConfig.videoText,
            reward: rewardConfig.videoReward,
            color: colors.warning,
            isPrimary: true,
        },
        {
            id: 'question',
            icon: Check,
            label: rewardConfig.questionText,
            reward: rewardConfig.questionReward,
            color: colors.success,
        },
    ] as const;

    const handleClaimDailyBonus = async () => {
        const didClaim = await claimDailyBonus();

        if (didClaim) {
            setCoins(parentData.coins);
            setHasClaimedToday(true);
        }
    };

    return (
        <ThemedView style={styles.container}>
            <View style={styles.contentWrap}>
                <View style={styles.topBar}>
                    <ThemedText type="subtitle" style={styles.pageTitle}>
                        {rewardConfig.title}
                    </ThemedText>
                    <CoinBadge value={coins} compact style={styles.coinBadge} />
                </View>

                <View style={styles.sectionCard}>
                    <View style={styles.sectionHeader}>
                        <View style={styles.coinIconWrap}>
                            <WalletCards size={18} color="#17143A" />
                        </View>
                        <ThemedText type="smallBold" style={styles.sectionLabel}>
                            Your Coins
                        </ThemedText>
                    </View>

                    <ThemedText type="title" style={styles.bigCoinValue}>
                        {coins}
                    </ThemedText>

                    <ThemedText type="small" style={styles.helperText}>
                        Use coins to unlock topics and get extra help.
                    </ThemedText>
                </View>

                <View style={styles.sectionBlock}>
                    <ThemedText type="smallBold" style={styles.blockTitle}>
                        Daily Bonus
                    </ThemedText>

                    <View style={styles.dailyBonusRow}>
                        <View style={styles.dailyIconWrap}>
                            <Gift size={20} color="#17143A" />
                        </View>

                        <View style={styles.dailyTextWrap}>
                            <ThemedText type="smallBold" style={styles.dailyTitle}>
                                Daily Reward
                            </ThemedText>
                            <ThemedText type="small" style={styles.dailySubtitle}>
                                Come back tomorrow and earn bonus coins.
                            </ThemedText>
                        </View>

                        <View style={styles.claimPill}>
                            <ThemedText type="smallBold" style={styles.claimText}>
                                +{rewardConfig.dailyBonus}
                            </ThemedText>
                        </View>
                    </View>

                    <Pressable
                        disabled={hasClaimedToday}
                        onPress={handleClaimDailyBonus}
                        style={[styles.claimButton, hasClaimedToday && styles.claimButtonDisabled]}>
                        <ThemedText type="smallBold" style={[styles.claimButtonText, hasClaimedToday && styles.claimButtonTextDisabled]}>
                            {hasClaimedToday ? 'Claimed' : 'Claim'}
                        </ThemedText>
                    </Pressable>
                </View>

                <View style={styles.sectionBlock}>
                    <ThemedText type="smallBold" style={styles.blockTitle}>
                        Earn More
                    </ThemedText>

                    {rewardActions.map(({ id, icon: Icon, label, reward, color }) => (
                        <View key={id} style={styles.earnRow}>
                            <View style={[styles.earnIconWrap, { backgroundColor: `${color}22`, borderColor: `${color}66` }]}>
                                <Icon size={18} color={color} />
                            </View>

                            <ThemedText type="default" style={styles.earnLabel}>
                                {label}
                            </ThemedText>

                            <View style={styles.rewardPill}>
                                <ThemedText type="smallBold" style={styles.rewardPillText}>
                                    +{reward}
                                </ThemedText>
                            </View>
                        </View>
                    ))}
                </View>
            </View>

            <BottomTabBar />
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
    },
    contentWrap: {
        width: '100%',
        maxWidth: MaxContentWidth,
        paddingHorizontal: Spacing.three,
        paddingTop: Spacing.three,
        paddingBottom: 96,
    },
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: Spacing.three,
    },
    pageTitle: {
        color: colors.text,
        fontSize: 26,
        lineHeight: 30,
        fontWeight: '700',
    },
    coinBadge: {
        minWidth: 72,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#d9b34d',
        shadowColor: '#F8D66C',
        shadowOpacity: 0.3,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
    },
    sectionCard: {
        backgroundColor: '#22163F',
        borderRadius: 22,
        borderWidth: 1,
        borderColor: colors.border,
        paddingHorizontal: Spacing.three,
        paddingTop: Spacing.three,
        paddingBottom: Spacing.two,
        marginBottom: Spacing.three,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: Spacing.one,
    },
    coinIconWrap: {
        width: 34,
        height: 34,
        borderRadius: 17,
        backgroundColor: colors.warning,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#F0C962',
    },
    sectionLabel: {
        color: colors.text,
        fontSize: 15,
    },
    bigCoinValue: {
        color: colors.text,
        fontSize: 38,
        lineHeight: 46,
        fontWeight: '700',
        marginBottom: Spacing.one,
    },
    helperText: {
        color: colors.textSecondary,
        lineHeight: 20,
    },
    sectionBlock: {
        backgroundColor: '#1B1738',
        borderRadius: 22,
        borderWidth: 1,
        borderColor: colors.border,
        paddingHorizontal: Spacing.three,
        paddingVertical: Spacing.three,
        marginBottom: Spacing.three,
    },
    blockTitle: {
        color: colors.text,
        marginBottom: Spacing.two,
        fontSize: 18,
    },
    dailyBonusRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginBottom: Spacing.two,
    },
    dailyIconWrap: {
        width: 42,
        height: 42,
        borderRadius: 14,
        backgroundColor: '#F8D66C',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#F0C962',
    },
    dailyTextWrap: {
        flex: 1,
    },
    dailyTitle: {
        color: colors.text,
        fontSize: 16,
    },
    dailySubtitle: {
        color: colors.textSecondary,
        marginTop: 2,
        lineHeight: 18,
    },
    claimPill: {
        backgroundColor: '#F8D66C',
        borderRadius: 999,
        paddingHorizontal: 10,
        paddingVertical: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    claimText: {
        color: '#17143A',
        fontSize: 12,
    },
    claimButton: {
        backgroundColor: '#F8D66C',
        borderRadius: 12,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    claimButtonDisabled: {
        backgroundColor: '#3A315B',
    },
    claimButtonText: {
        color: '#17143A',
    },
    claimButtonTextDisabled: {
        color: '#B5ABD8',
    },
    earnRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        gap: 12,
    },
    earnIconWrap: {
        width: 34,
        height: 34,
        borderRadius: 12,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    earnLabel: {
        flex: 1,
        color: colors.text,
    },
    rewardPill: {
        backgroundColor: '#F8D66C',
        borderRadius: 999,
        paddingHorizontal: 8,
        paddingVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rewardPillText: {
        color: '#17143A',
        fontSize: 12,
    },
});
