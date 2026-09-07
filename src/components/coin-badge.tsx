import { Coins } from 'lucide-react-native';
import { Pressable, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { ThemedText } from '@/components/themed-text';

type CoinBadgeProps = {
    value: number;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<any>;
    iconColor?: string;
    accentColor?: string;
    compact?: boolean;
};

export function CoinBadge({
    value,
    onPress,
    style,
    textStyle,
    iconColor = '#17143A',
    accentColor = '#F8D66C',
    compact = false,
}: CoinBadgeProps) {
    const content = (
        <>
            <Coins size={compact ? 13 : 15} color={iconColor} />
            <ThemedText type="smallBold" style={[styles.text, textStyle, { color: iconColor }]}>
                {value}
            </ThemedText>
        </>
    );

    if (!onPress) {
        return <View style={[styles.badge, compact && styles.compactBadge, { backgroundColor: accentColor }, style]}>{content}</View>;
    }

    return (
        <Pressable style={[styles.badge, compact && styles.compactBadge, { backgroundColor: accentColor }, style]} onPress={onPress}>
            {content}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    badge: {
        minWidth: 68,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 999,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 4,
        shadowColor: '#F8D66C',
        shadowOpacity: 0.35,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 4,
    },
    compactBadge: {
        minWidth: 56,
        paddingHorizontal: 8,
        paddingVertical: 6,
    },
    text: {
        color: '#17143A',
    },
});
