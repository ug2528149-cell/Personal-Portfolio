import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
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

const PROFILE = {
  fullName: "Your Full Name",
  headline: "Aspiring Software Developer",
  bio: "I am a technology enthusiast passionate about learning, solving problems, and building useful digital experiences through software development.",
  primarySkill: "React Native",
  verificationCode: "MOB-A2-LLLL",
  available: true,
};

type HomeScreenProps = {
  navigation?: {
    navigate: (screen: string) => void;
  };
};

export default function HomeScreen({
  navigation,
}: HomeScreenProps) {
  const initials = PROFILE.fullName
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Top navigation-style header */}
        <View style={styles.topBar}>
          <View style={styles.brand}>
            <View style={styles.brandMark}>
              <Text style={styles.brandMarkText}>P</Text>
            </View>

            <View style={styles.brandTextContainer}>
              <Text style={styles.brandName}>PORTFOLIO</Text>
              <Text style={styles.brandCaption}>
                PERSONAL PROFILE
              </Text>
            </View>
          </View>

          <View style={styles.availabilityBadge}>
            <View style={styles.availabilityDot} />
            <Text style={styles.availabilityText}>
              {PROFILE.available ? "Available" : "Unavailable"}
            </Text>
          </View>
        </View>

        {/* Main introduction */}
        <View style={styles.heroSection}>
          <Text style={styles.eyebrow}>HELLO, WORLD.</Text>

          <View style={styles.avatarOuter}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {initials || "ME"}
              </Text>
            </View>

            <View style={styles.avatarBadge}>
              <Text style={styles.avatarBadgeText}>✦</Text>
            </View>
          </View>

          <Text style={styles.introLabel}>INTRODUCING</Text>

          <Text
            style={styles.name}
            accessibilityRole="header"
          >
            My name is{"\n"}
            <Text style={styles.nameAccent}>
              {PROFILE.fullName}.
            </Text>
          </Text>

          <Text style={styles.headline}>
            {PROFILE.headline}
          </Text>

          <Text style={styles.bio}>{PROFILE.bio}</Text>

          <View style={styles.primarySkillBadge}>
            <Text style={styles.primarySkillLabel}>
              PRIMARY SKILL
            </Text>
            <Text style={styles.primarySkillValue}>
              {PROFILE.primarySkill}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => navigation?.navigate("Projects")}
            activeOpacity={0.85}
            accessibilityRole="button"
            accessibilityLabel="Explore my projects"
          >
            <Text style={styles.primaryButtonText}>
              Explore My Work
            </Text>
            <Text style={styles.primaryButtonArrow}>↗</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => navigation?.navigate("Skills")}
            activeOpacity={0.8}
            accessibilityRole="button"
            accessibilityLabel="View my skills"
          >
            <Text style={styles.secondaryButtonText}>
              Discover My Skills
            </Text>
          </TouchableOpacity>
        </View>

        {/* Portfolio overview */}
        <View style={styles.sectionHeader}>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionEyebrow}>
              WHAT I BRING
            </Text>
            <Text style={styles.sectionTitle}>
              My Portfolio
            </Text>
          </View>

          <View style={styles.sectionAccent} />
        </View>

        <View style={styles.featureCard}>
          <View style={styles.featureIcon}>
            <Text style={styles.featureIconText}>✳</Text>
          </View>

          <View style={styles.featureContent}>
            <Text style={styles.featureTitle}>
              Skills & Education
            </Text>
            <Text style={styles.featureDescription}>
              Explore my technical skills, learning journey,
              and professional development.
            </Text>
            <TouchableOpacity
              onPress={() => navigation?.navigate("Skills")}
              accessibilityRole="button"
            >
              <Text style={styles.featureLink}>
                View my skills →
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.featureCard}>
          <View style={styles.featureIcon}>
            <Text style={styles.featureIconText}>⌘</Text>
          </View>

          <View style={styles.featureContent}>
            <Text style={styles.featureTitle}>
              Selected Projects
            </Text>
            <Text style={styles.featureDescription}>
              Discover projects, the problems they address,
              and the technologies behind them.
            </Text>
            <TouchableOpacity
              onPress={() => navigation?.navigate("Projects")}
              accessibilityRole="button"
            >
              <Text style={styles.featureLink}>
                Explore projects →
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Assignment verification */}
        <View style={styles.verificationCard}>
          <View style={styles.verificationHeader}>
            <Text style={styles.verificationLabel}>
              STUDENT VERIFICATION
            </Text>
            <View style={styles.verificationIndicator} />
          </View>

          <Text style={styles.verificationCode}>
            {PROFILE.verificationCode}
          </Text>

          <Text style={styles.verificationDescription}>
            Individual Portfolio Assignment · SWE 3409
          </Text>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.footerLine} />
          <Text style={styles.footerText}>
            Designed to introduce. Built to demonstrate.
          </Text>
          <Text style={styles.footerSubtext}>
            Personal Portfolio · 2026
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
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 36,
    gap: 28,
  },

  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 12,
  },

  brand: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  brandMark: {
    width: 39,
    height: 39,
    borderRadius: 12,
    backgroundColor: COLORS.accent,
    alignItems: "center",
    justifyContent: "center",
  },

  brandMarkText: {
    color: COLORS.background,
    fontSize: 21,
    fontWeight: "900",
  },

  brandTextContainer: {
    gap: 3,
  },

  brandName: {
    color: COLORS.text,
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 1.5,
  },

  brandCaption: {
    color: COLORS.muted,
    fontSize: 9,
    letterSpacing: 1,
  },

  availabilityBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },

  availabilityDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: COLORS.success,
  },

  availabilityText: {
    color: COLORS.text,
    fontSize: 11,
    fontWeight: "700",
  },

  heroSection: {
    alignItems: "flex-start",
    gap: 17,
    paddingTop: 8,
  },

  eyebrow: {
    color: COLORS.accent,
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 2.5,
  },

  avatarOuter: {
    position: "relative",
    marginTop: 2,
    marginBottom: 2,
  },

  avatar: {
    width: 94,
    height: 94,
    borderRadius: 30,
    backgroundColor: COLORS.surface,
    borderWidth: 2,
    borderColor: COLORS.accent,
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    color: COLORS.accent,
    fontSize: 30,
    fontWeight: "900",
  },

  avatarBadge: {
    position: "absolute",
    right: -7,
    bottom: -5,
    width: 30,
    height: 30,
    borderRadius: 11,
    backgroundColor: COLORS.accent,
    borderWidth: 3,
    borderColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
  },

  avatarBadgeText: {
    color: COLORS.background,
    fontSize: 15,
    fontWeight: "900",
  },

  introLabel: {
    color: COLORS.muted,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 2,
  },

  name: {
    color: COLORS.text,
    fontSize: 35,
    fontWeight: "900",
    lineHeight: 44,
    letterSpacing: -1,
  },

  nameAccent: {
    color: COLORS.accent,
  },

  headline: {
    color: COLORS.text,
    fontSize: 17,
    fontWeight: "700",
    lineHeight: 25,
  },

  bio: {
    color: COLORS.muted,
    fontSize: 14,
    lineHeight: 23,
  },

  primarySkillBadge: {
    alignSelf: "flex-start",
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 13,
    paddingHorizontal: 14,
    paddingVertical: 11,
    gap: 6,
  },

  primarySkillLabel: {
    color: COLORS.muted,
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1.5,
  },

  primarySkillValue: {
    color: COLORS.accent,
    fontSize: 14,
    fontWeight: "800",
  },

  primaryButton: {
    width: "100%",
    minHeight: 54,
    backgroundColor: COLORS.accent,
    borderRadius: 15,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },

  primaryButtonText: {
    color: COLORS.background,
    fontSize: 14,
    fontWeight: "900",
  },

  primaryButtonArrow: {
    color: COLORS.background,
    fontSize: 19,
    fontWeight: "800",
  },

  secondaryButton: {
    width: "100%",
    minHeight: 50,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 18,
  },

  secondaryButtonText: {
    color: COLORS.text,
    fontSize: 13,
    fontWeight: "700",
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: 12,
  },

  sectionTitleContainer: {
    gap: 6,
  },

  sectionEyebrow: {
    color: COLORS.accent,
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 2,
  },

  sectionTitle: {
    color: COLORS.text,
    fontSize: 25,
    fontWeight: "900",
  },

  sectionAccent: {
    width: 34,
    height: 4,
    backgroundColor: COLORS.accent,
    borderRadius: 3,
    marginBottom: 5,
  },

  featureCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 14,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 19,
    padding: 17,
  },

  featureIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: "center",
    justifyContent: "center",
  },

  featureIconText: {
    color: COLORS.accent,
    fontSize: 23,
    fontWeight: "800",
  },

  featureContent: {
    flex: 1,
    gap: 9,
  },

  featureTitle: {
    color: COLORS.text,
    fontSize: 15,
    fontWeight: "800",
  },

  featureDescription: {
    color: COLORS.muted,
    fontSize: 12,
    lineHeight: 20,
  },

  featureLink: {
    color: COLORS.accent,
    fontSize: 12,
    fontWeight: "800",
    paddingTop: 2,
  },

  verificationCard: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.accent,
    borderRadius: 19,
    padding: 18,
    gap: 13,
  },

  verificationHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },

  verificationLabel: {
    color: COLORS.muted,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.5,
  },

  verificationIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.accent,
  },

  verificationCode: {
    color: COLORS.accent,
    fontSize: 25,
    fontWeight: "900",
    letterSpacing: 1,
  },

  verificationDescription: {
    color: COLORS.muted,
    fontSize: 11,
    lineHeight: 18,
  },

  footer: {
    alignItems: "center",
    gap: 9,
    paddingTop: 4,
  },

  footerLine: {
    width: 38,
    height: 3,
    backgroundColor: COLORS.accent,
    borderRadius: 2,
    marginBottom: 4,
  },

  footerText: {
    color: COLORS.text,
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
  },

  footerSubtext: {
    color: COLORS.muted,
    fontSize: 11,
    textAlign: "center",
  },
});