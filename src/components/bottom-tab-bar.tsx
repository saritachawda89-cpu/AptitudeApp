import { router, usePathname } from 'expo-router';
import { Gift, House, UserRound } from 'lucide-react-native';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';

const tabs = [
    { key: 'home', label: 'Home', route: '/topics', icon: House },
    { key: 'reward', label: 'Reward', route: '/reward', icon: Gift },
    { key: 'profile', label: 'My Profile', route: '/myprofile', icon: UserRound },
] as const;

export function BottomTabBar() {
    const pathname = usePathname();

    const activeTab = pathname.includes('/reward')
        ? 'reward'
        : pathname.includes('/myprofile')
            ? 'profile'
            : 'home';

    return (
        <View style={styles.tabBar}>
            {tabs.map(({ key, label, route, icon: Icon }) => {
                const isActive = key === activeTab;

                return (
                    <Pressable
                        key={key}
                        onPress={() => router.push(route as any)}
                        style={[styles.tabItem, isActive && styles.activeTabItem]}>
                        <Icon size={20} color={isActive ? '#F8D66C' : '#A9A0C8'} />
                        <ThemedText type="smallBold" style={[styles.tabLabel, isActive && styles.activeTabLabel]}>
                            {label}
                        </ThemedText>
                    </Pressable>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        left: 16,
        right: 16,
        bottom: 18,
        backgroundColor: '#120F24',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#2A2245',
        paddingVertical: 8,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000000',
        shadowOpacity: 0.24,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 6 },
        elevation: 8,
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        gap: 4,
        borderRadius: 8,
    },
    activeTabItem: {
        backgroundColor: 'rgba(248, 214, 108, 0.12)',
    },
    tabLabel: {
        fontSize: 10,
        color: '#A9A0C8',
    },
    activeTabLabel: {
        color: '#F8D66C',
    },
});
