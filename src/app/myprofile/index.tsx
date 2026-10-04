import {
    Bell,
    ChevronRight,
    FileText,
    Info,
    Settings,
    ShieldCheck,
    UserRound,
} from 'lucide-react-native';
import { Alert, Linking, Pressable, StyleSheet, Text, View } from 'react-native';

import { BottomTabBar } from '@/components/bottom-tab-bar';

const privacyPolicyUrl = 'https://docs.google.com/document/d/1D6m3PPJORTaiovQErtyaNYzhfRro7X3tCv_Jp974IjI/edit?usp=sharing';
const termsUrl = 'https://docs.google.com/document/d/1P-NLy6KEHOzxDvTDNHvqAavVpA_CAwEIXtOmtRXE9yo/edit?usp=sharing';

const menuItems = [
    { label: 'Settings', icon: Settings },
    { label: 'Notifications', icon: Bell },
    { label: 'About', icon: Info },
    { label: 'Privacy Policy', icon: ShieldCheck, url: privacyPolicyUrl },
    { label: 'Terms & Conditions', icon: FileText, url: termsUrl },
];

async function handleOpenLink(url?: string) {
    if (!url) {
        return;
    }

    try {
        const canOpen = await Linking.canOpenURL(url);

        if (!canOpen) {
            Alert.alert('Link unavailable', 'This document could not be opened right now.');
            return;
        }

        await Linking.openURL(url);
    } catch (error) {
        Alert.alert('Unable to open link', 'Please try again later.');
    }
}

export default function MyProfileScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <Text style={styles.heading}>Profile</Text>
                <View style={styles.gearButton}>
                    <Settings size={18} color="#FFFFFF" />
                </View>
            </View>

            <View style={styles.profileCard}>
                <View style={styles.avatarWrap}>
                    <UserRound size={52} color="#F5EEFF" />
                </View>
                <Text style={styles.name}>Aptitude Learner</Text>
            </View>

            <View style={styles.menuList}>
                {menuItems.map(({ label, icon: Icon, url }) => (
                    <Pressable key={label} style={styles.menuItem} onPress={() => handleOpenLink(url)}>
                        <View style={styles.menuLeft}>
                            <View style={styles.iconCircle}>
                                <Icon size={18} color="#F6F0FF" />
                            </View>
                            <Text style={styles.menuLabel}>{label}</Text>
                        </View>
                        <ChevronRight size={18} color="#BDB2E7" />
                    </Pressable>
                ))}
            </View>

            <BottomTabBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#090a1c',
        paddingHorizontal: 20,
        paddingTop: 32,
        paddingBottom: 24,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 18,
    },
    heading: {
        color: '#F6F0FF',
        fontSize: 24,
        fontWeight: '700',
    },
    gearButton: {
        width: 34,
        height: 34,
        borderRadius: 8,
        backgroundColor: '#11172E',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#2C3A5E',
    },
    profileCard: {
        alignItems: 'center',
        marginBottom: 18,
    },
    avatarWrap: {
        width: 90,
        height: 90,
        borderRadius: 999,
        backgroundColor: '#2C2D6B',
        borderWidth: 1,
        borderColor: '#4C5E9E',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 3 },
        elevation: 3,
    },
    name: {
        marginTop: 12,
        color: '#F6F0FF',
        fontSize: 19,
        fontWeight: '700',
    },
    menuList: {
        backgroundColor: '#121833',
        borderRadius: 8,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#1E294F',
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 18,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#1C243F',
    },
    menuLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    iconCircle: {
        width: 28,
        height: 28,
        borderRadius: 8,
        backgroundColor: '#1D2340',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuLabel: {
        color: '#F6F0FF',
        fontSize: 16,
        fontWeight: '500',
    },
});
