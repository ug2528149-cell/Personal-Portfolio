import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import SkillCard from "../components/skillCard";
import { skills } from "../data/skills";
import educationData from "../data/education";

const COLORS = {
  background: "#101114",
  surface: "#24262D",
  accent: "#C8FF57",
  text: "#FFFFFF",
  muted: "#AEB1BA",
  border: "#42434A",
  beginner: "#8BB8FF",
  intermediate: "#C8FF57",
  advanced: "#B7A0FF",
};

type SkillsScreenProps = {
  navigation?: {
    navigate: (screen: string) => void;
  };
};

export default function SkillsScreen({
  navigation: _navigation,
}: SkillsScreenProps) {
  const skillCount = skills.length;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Page heading */}
        <View style={styles.header}>
          <Text style={styles.eyebrow}>MY CAPABILITIES</Text>

          <Text
            style={styles.title}
            accessibilityRole="header"
          >
            Skills &{"\n"}
            <Text style={styles.titleAccent}>Education.</Text>
          </Text>

          <Text style={styles.subtitle}>
            The technical abilities I am developing and the
            learning journey shaping my growth as a developer.
          </Text>
        </View>

        {/* Skills overview */}
        <View style={styles.overviewCard}>
          <View style={styles.overviewTopRow}>
            <View style={styles.overviewIcon}>
              <Text style={styles.overviewIconText}>✳</Text>
            </View>

            <View style={styles.overviewBadge}>
              <View style={styles.overviewDot} />
              <Text style={styles.overviewBadgeText}>
                CONTINUOUS LEARNING
              </Text>
            </View>
          </View>

          <Text style={styles.overviewNumber}>
            {String(skillCount).padStart(2, "0")}
          </Text>

          <Text style={styles.overviewLabel}>
            SKILLS IN MY PORTFOLIO
          </Text>

          <Text style={styles.overviewDescription}>
            Each skill represents an area of learning,
            practical experience, or continued development.
          </Text>
        </View>

        {/* Skill levels legend */}
        <View style={styles.sectionHeader}>
          <View style={styles.sectionHeadingText}>
            <Text style={styles.sectionEyebrow}>
              WHAT I AM LEARNING
            </Text>
            <Text style={styles.sectionTitle}>
              My Skills
            </Text>
          </View>

          <View style={styles.sectionAccent} />
        </View>

        <View style={styles.legend}>
          <View style={styles.legendItem}>
            <View
              style={[
                styles.legendDot,
                { backgroundColor: COLORS.beginner },
              ]}
            />
            <Text style={styles.legendText}>Beginner</Text>
          </View>

          <View style={styles.legendItem}>
            <View
              style={[
                styles.legendDot,
                { backgroundColor: COLORS.intermediate },
              ]}
            />
            <Text style={styles.legendText}>Intermediate</Text>
          </View>

          <View style={styles.legendItem}>
            <View
              style={[
                styles.legendDot,
                { backgroundColor: COLORS.advanced },
              ]}
            />
            <Text style={styles.legendText}>Advanced</Text>
          </View>
        </View>

        {/* Reusable skill cards */}
        {skillCount > 0 ? (
          <View style={styles.skillsGrid}>
            {skills.map((skill) => (
              <View
                key={skill.id}
                style={styles.skillItem}
              >
                <SkillCard
                  name={skill.name}
                  category={skill.category}
                  description={skill.description}
                  level={skill.level}
                />
              </View>
            ))}
          </View>
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>✳</Text>
            <Text style={styles.emptyTitle}>
              Your skills start here
            </Text>
            <Text style={styles.emptyDescription}>
              Add your genuine skills to src/data/skills.ts
              to display them in your portfolio.
            </Text>
          </View>
        )}

        {/* Education heading */}
        <View style={styles.sectionHeader}>
          <View style={styles.sectionHeadingText}>
            <Text style={styles.sectionEyebrow}>
              MY LEARNING JOURNEY
            </Text>
            <Text style={styles.sectionTitle}>
              Education
            </Text>
          </View>

          <View style={styles.sectionAccent} />
        </View>

        <Text style={styles.educationIntro}>
          My academic background and training provide the
          foundation for my technical growth.
        </Text>

        {/* Education timeline */}
        {educationData.length > 0 ? (
          <View style={styles.timeline}>
            {educationData.map((item, index) => (
              <View
                key={item.id}
                style={styles.timelineItem}
              >
                <View style={styles.timelineRail}>
                  <View style={styles.timelineDot} />

                  {index < educationData.length - 1 ? (
                    <View style={styles.timelineLine} />
                  ) : null}
                </View>

                <View style={styles.educationCard}>
                  <Text style={styles.educationPeriod}>
                    {item.period}
                  </Text>

                  <Text style={styles.educationTitle}>
                    {item.title}
                  </Text>

                  <Text style={styles.educationInstitution}>
                    {item.institution}
                  </Text>

                  {item.description ? (
                    <Text style={styles.educationDescription}>
                      {item.description}
                    </Text>
                  ) : null}
                </View>
              </View>
            ))}
          </View>
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyTitle}>
              Education timeline
            </Text>
            <Text style={styles.emptyDescription}>
              Add your academic background to
              src/data/education.ts.
            </Text>
          </View>
        )}

        {/* Closing card */}
        <View style={styles.closingCard}>
          <View style={styles.closingAccent} />

          <Text style={styles.closingTitle}>
            Learning today. Building tomorrow.
          </Text>

          <Text style={styles.closingDescription}>
            I aim to turn knowledge into practical solutions
            through consistent learning, experimentation,
            and project development.
          </Text>
        </View>

        <Text style={styles.footer}>
          PERSONAL PORTFOLIO · SKILLS & EDUCATION
        </Text>
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
    paddingTop: 20,
    paddingBottom: 40,
    gap: 24,
  },

  header: {
    gap: 12,
  },

  eyebrow: {
    color: COLORS.accent,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 2,
  },

  title: {
    color: COLORS.text,
    fontSize: 35,
    fontWeight: "900",
    lineHeight: 44,
    letterSpacing: -0.8,
  },

  titleAccent: {
    color: COLORS.accent,
  },

  subtitle: {
    color: COLORS.muted,
    fontSize: 14,
    lineHeight: 23,
  },

  overviewCard: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 22,
    padding: 20,
    gap: 12,
  },

  overviewTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 12,
  },

  overviewIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: "center",
    justifyContent: "center",
  },

  overviewIconText: {
    color: COLORS.accent,
    fontSize: 24,
    fontWeight: "800",
  },

  overviewBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 20,
    paddingHorizontal: 9,
    paddingVertical: 7,
  },

  overviewDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.accent,
  },

  overviewBadgeText: {
    color: COLORS.muted,
    fontSize: 8,
    fontWeight: "800",
    letterSpacing: 0.7,
  },

  overviewNumber: {
    color: COLORS.accent,
    fontSize: 48,
    fontWeight: "900",
    lineHeight: 55,
    marginTop: 5,
  },

  overviewLabel: {
    color: COLORS.text,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.4,
  },

  overviewDescription: {
    color: COLORS.muted,
    fontSize: 12,
    lineHeight: 20,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: 12,
  },

  sectionHeadingText: {
    gap: 6,
  },

  sectionEyebrow: {
    color: COLORS.accent,
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1.5,
  },

  sectionTitle: {
    color: COLORS.text,
    fontSize: 24,
    fontWeight: "900",
  },

  sectionAccent: {
    width: 32,
    height: 4,
    backgroundColor: COLORS.accent,
    borderRadius: 3,
    marginBottom: 5,
  },

  legend: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },

  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  legendDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
  },

  legendText: {
    color: COLORS.muted,
    fontSize: 10,
    fontWeight: "600",
  },

  skillsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },

  skillItem: {
    width: "100%",
    minWidth: 0,
  },

  emptyState: {
    alignItems: "center",
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 19,
    padding: 24,
    gap: 12,
  },

  emptyIcon: {
    color: COLORS.accent,
    fontSize: 27,
  },

  emptyTitle: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: "800",
    textAlign: "center",
  },

  emptyDescription: {
    color: COLORS.muted,
    fontSize: 12,
    lineHeight: 20,
    textAlign: "center",
  },

  educationIntro: {
    color: COLORS.muted,
    fontSize: 13,
    lineHeight: 21,
    marginTop: -12,
  },

  timeline: {
    gap: 0,
  },

  timelineItem: {
    flexDirection: "row",
    alignItems: "stretch",
    gap: 13,
  },

  timelineRail: {
    width: 18,
    alignItems: "center",
  },

  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.accent,
    borderWidth: 3,
    borderColor: COLORS.surface,
    marginTop: 22,
  },

  timelineLine: {
    width: 2,
    flex: 1,
    minHeight: 20,
    backgroundColor: COLORS.border,
  },

  educationCard: {
    flex: 1,
    minWidth: 0,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 17,
    padding: 16,
    marginBottom: 14,
    gap: 8,
  },

  educationPeriod: {
    color: COLORS.accent,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 0.7,
  },

  educationTitle: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: "800",
    lineHeight: 23,
  },

  educationInstitution: {
    color: COLORS.text,
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 19,
  },

  educationDescription: {
    color: COLORS.muted,
    fontSize: 12,
    lineHeight: 20,
  },

  closingCard: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.accent,
    borderRadius: 19,
    padding: 19,
    gap: 12,
  },

  closingAccent: {
    width: 34,
    height: 4,
    backgroundColor: COLORS.accent,
    borderRadius: 2,
  },

  closingTitle: {
    color: COLORS.text,
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 26,
  },

  closingDescription: {
    color: COLORS.muted,
    fontSize: 12,
    lineHeight: 21,
  },

  footer: {
    color: COLORS.muted,
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 1,
    textAlign: "center",
  },
});