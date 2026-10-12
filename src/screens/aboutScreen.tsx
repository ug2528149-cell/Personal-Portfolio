import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

const COLORS = {
    background: "#101114",
    surface: "#24262D",
    accent: "#C8FF57",
    text: "#FFFFFF",
    muted: "#AEB1BA",
    border: "#42434A",
    success: "#8FE3B0",
};

const APP_INFO = {
    appName: "Prince Portfolio",
    version: "1.0.0",
    fullName: "MANZI PRINCE Peter",
    registrationNumber: "25/28149",
    verificationCode: "MOB-A2-8149",
};

type InfoRowProps = {
    label: string;
    value: string;
};

function InfoRow({ label, value }: InfoRowProps) {
    return (
        <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>{label}</Text>
            <Text style={styles.infoValue}>{value}</Text>
        </View>
    );
}

type SectionTitleProps = {
    title: string;
    subtitle?: string;
};

function SectionTitle({ title, subtitle }: SectionTitleProps) {
    return (
        <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>{title}</Text>
            {subtitle ? (
                <Text style={styles.sectionSubtitle}>{subtitle}</Text>
            ) : null}
        </View>
    );
}

export default function AboutScreen() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >
                {/* Screen heading */}
                <View style={styles.header}>
                    <Text style={styles.eyebrow}>GET TO KNOW THE APP</Text>
                    <Text style={styles.title}>About</Text>
                    <Text style={styles.headerDescription}>
                        A little more about me, my work, and the
                        application behind this portfolio.
                    </Text>
                </View>

                {/* App identity card */}
                <View style={styles.heroCard}>
                    <View style={styles.logo}>
                        <Text style={styles.logoText}>P</Text>
                    </View>

                    <View style={styles.appIdentity}>
                        <Text style={styles.appName}>{APP_INFO.appName}</Text>
                        <Text style={styles.appDescription}>
                            Prince Portfolio Application
                        </Text>
                    </View>

                    <View style={styles.versionBadge}>
                        <Text style={styles.versionText}>
                            v{APP_INFO.version}
                        </Text>
                    </View>

                    <View style={styles.accentLine} />

                    <Text style={styles.heroFooter}>
                        Built with React Native, Expo and TypeScript.
                    </Text>
                </View>

                {/* Student information */}
                <SectionTitle
                    title="Student information"
                    subtitle="The identity behind this portfolio."
                />

                <View style={styles.card}>
                    <InfoRow
                        label="Full name"
                        value={APP_INFO.fullName}
                    />

                    <View style={styles.separator} />

                    <InfoRow
                        label="Registration number"
                        value={APP_INFO.registrationNumber}
                    />

                    <View style={styles.separator} />

                    <InfoRow
                        label="Course"
                        value="Mobile Application Development"
                    />

                    <View style={styles.separator} />

                    <InfoRow
                        label="Course code"
                        value="SWE 3409"
                    />
                </View>

                {/* Verification code */}
                <SectionTitle
                    title="Verification"
                    subtitle="Individual identification."
                />

                <View style={styles.verificationCard}>
                    <View style={styles.verificationTop}>
                        <View style={styles.verificationIcon}>
                            <Text style={styles.checkmark}>✓</Text>
                        </View>

                        <View style={styles.verificationHeading}>
                            <Text style={styles.verificationTitle}>
                                Student verification
                            </Text>
                            <Text style={styles.verificationSubtitle}>

                            </Text>
                        </View>
                    </View>

                    <Text style={styles.codeLabel}>
                        VERIFICATION CODE
                    </Text>

                    <Text
                        selectable
                        style={styles.verificationCode}
                    >
                        {APP_INFO.verificationCode}
                    </Text>

                    <Text style={styles.verificationNote}>

                    </Text>
                </View>

                {/* Technology */}
                <SectionTitle
                    title="Technology"
                    subtitle="The tools used to build this application."
                />

                <View style={styles.techContainer}>
                    {["React Native", "Expo", "TypeScript", "AsyncStorage"].map(
                        (technology) => (
                            <View key={technology} style={styles.techChip}>
                                <View style={styles.techDot} />
                                <Text style={styles.techText}>{technology}</Text>
                            </View>
                        )
                    )}
                </View>

                {/* Data-use statement */}
                <SectionTitle
                    title="Privacy & data"
                    subtitle="How the application handles information."
                />

                <View style={styles.privacyCard}>
                    <View style={styles.privacyHeader}>
                        <Text style={styles.privacyIcon}>◆</Text>
                        <Text style={styles.privacyTitle}>
                            Your data, your device
                        </Text>
                    </View>

                    <Text style={styles.privacyDescription}>
                        This portfolio is designed to work offline.
                        Editable portfolio information and the selected
                        profile image reference are intended to be stored
                        locally on the device. The app does not need an
                        online account for its core portfolio features.
                    </Text>

                    <Text style={styles.privacyFootnote}>
                        Just admire and Learn.
                    </Text>
                </View>

                {/* Footer */}
                <View style={styles.footer}>
                    <View style={styles.footerLine} />
                    <Text style={styles.footerTitle}>
                        https://github.com/ug2528149-cell
                    </Text>
                    <Text style={styles.footerTitle}>
                        Designed with purpose.
                    </Text>
                    <Text style={styles.footerSubtitle}>
                        Prince Portfolio · {APP_INFO.version}
                    </Text>
                    <Text style={styles.footerCopyright}>
                        © {new Date().getFullYear()} {APP_INFO.fullName}
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.background,
    },

    scrollView: {
        flex: 1,
    },

    content: {
        padding: 20,
        paddingBottom: 36,
        gap: 20,
    },

    header: {
        gap: 10,
        marginTop: 12,
    },

    eyebrow: {
        color: COLORS.accent,
        fontSize: 11,
        fontWeight: "800",
        letterSpacing: 2,
    },

    title: {
        color: COLORS.text,
        fontSize: 34,
        fontWeight: "800",
        letterSpacing: -0.8,
    },

    headerDescription: {
        color: COLORS.muted,
        fontSize: 14,
        lineHeight: 22,
    },

    heroCard: {
        backgroundColor: COLORS.surface,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 22,
        padding: 20,
        gap: 16,
        overflow: "hidden",
    },

    logo: {
        width: 58,
        height: 58,
        borderRadius: 18,
        backgroundColor: COLORS.accent,
        alignItems: "center",
        justifyContent: "center",
    },

    logoText: {
        color: COLORS.background,
        fontSize: 29,
        fontWeight: "900",
    },

    appIdentity: {
        gap: 5,
    },

    appName: {
        color: COLORS.text,
        fontSize: 21,
        fontWeight: "800",
    },

    appDescription: {
        color: COLORS.muted,
        fontSize: 13,
        lineHeight: 20,
    },

    versionBadge: {
        alignSelf: "flex-start",
        borderWidth: 1,
        borderColor: COLORS.accent,
        borderRadius: 20,
        paddingHorizontal: 11,
        paddingVertical: 6,
    },

    versionText: {
        color: COLORS.accent,
        fontSize: 12,
        fontWeight: "800",
    },

    accentLine: {
        height: 3,
        width: 44,
        backgroundColor: COLORS.accent,
        borderRadius: 3,
    },

    heroFooter: {
        color: COLORS.muted,
        fontSize: 12,
        lineHeight: 19,
    },

    sectionTitleContainer: {
        gap: 5,
        marginTop: 4,
    },

    sectionTitle: {
        color: COLORS.text,
        fontSize: 19,
        fontWeight: "800",
    },

    sectionSubtitle: {
        color: COLORS.muted,
        fontSize: 12,
        lineHeight: 19,
    },

    card: {
        backgroundColor: COLORS.surface,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 18,
        paddingHorizontal: 16,
        paddingVertical: 4,
    },

    infoRow: {
        paddingVertical: 14,
        gap: 6,
    },

    infoLabel: {
        color: COLORS.muted,
        fontSize: 12,
        fontWeight: "600",
    },

    infoValue: {
        color: COLORS.text,
        fontSize: 14,
        fontWeight: "700",
        lineHeight: 21,
    },

    separator: {
        height: 1,
        backgroundColor: COLORS.border,
    },

    verificationCard: {
        backgroundColor: COLORS.surface,
        borderWidth: 1,
        borderColor: COLORS.accent,
        borderRadius: 18,
        padding: 18,
        gap: 15,
    },

    verificationTop: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },

    verificationIcon: {
        width: 42,
        height: 42,
        borderRadius: 13,
        backgroundColor: COLORS.background,
        alignItems: "center",
        justifyContent: "center",
    },

    checkmark: {
        color: COLORS.accent,
        fontSize: 22,
        fontWeight: "800",
    },

    verificationHeading: {
        flex: 1,
        gap: 4,
    },

    verificationTitle: {
        color: COLORS.text,
        fontSize: 14,
        fontWeight: "800",
    },

    verificationSubtitle: {
        color: COLORS.muted,
        fontSize: 12,
    },

    codeLabel: {
        color: COLORS.muted,
        fontSize: 10,
        fontWeight: "800",
        letterSpacing: 1.5,
    },

    verificationCode: {
        color: COLORS.accent,
        fontSize: 24,
        fontWeight: "900",
        letterSpacing: 1,
    },

    verificationNote: {
        color: COLORS.muted,
        fontSize: 12,
        lineHeight: 19,
    },

    techContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 9,
    },

    techChip: {
        flexDirection: "row",
        alignItems: "center",
        gap: 7,
        backgroundColor: COLORS.surface,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 9,
    },

    techDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: COLORS.accent,
    },

    techText: {
        color: COLORS.text,
        fontSize: 12,
        fontWeight: "600",
    },

    privacyCard: {
        backgroundColor: COLORS.surface,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 18,
        padding: 18,
        gap: 13,
    },

    privacyHeader: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },

    privacyIcon: {
        color: COLORS.success,
        fontSize: 17,
    },

    privacyTitle: {
        color: COLORS.text,
        fontSize: 15,
        fontWeight: "800",
        flexShrink: 1,
    },

    privacyDescription: {
        color: COLORS.muted,
        fontSize: 13,
        lineHeight: 21,
    },

    privacyFootnote: {
        color: COLORS.success,
        fontSize: 12,
        lineHeight: 19,
    },

    footer: {
        alignItems: "center",
        gap: 8,
        paddingTop: 12,
    },

    footerLine: {
        height: 3,
        width: 36,
        backgroundColor: COLORS.accent,
        borderRadius: 3,
        marginBottom: 8,
    },

    footerTitle: {
        color: COLORS.text,
        fontSize: 14,
        fontWeight: "800",
    },

    footerSubtitle: {
        color: COLORS.muted,
        fontSize: 12,
    },

    footerCopyright: {
        color: COLORS.muted,
        fontSize: 11,
        textAlign: "center",
    },
});