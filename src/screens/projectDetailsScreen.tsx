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
};

type Project = {
  id: string;
  title: string;
  category?: string;
  description?: string;
  problem?: string;
  contribution?: string;
  technologies?: string[];
  outcome?: string;
  status?: string;
};

type ProjectDetailsScreenProps = {
  route?: {
    params?: {
      project?: Project;
      projectId?: string;
    };
  };
  navigation?: {
    goBack: () => void;
    navigate: (screen: string) => void;
  };
};

function DetailSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeading}>
        <View style={styles.sectionNumber}>
          <Text style={styles.sectionNumberText}>{number}</Text>
        </View>

        <Text style={styles.sectionTitle}>{title}</Text>
      </View>

      <View style={styles.sectionBody}>{children}</View>
    </View>
  );
}

export default function ProjectDetailsScreen({
  route,
  navigation,
}: ProjectDetailsScreenProps) {
  const project = route?.params?.project;

  const title = project?.title ?? "Project Details";
  const category = project?.category ?? "Student Project";
  const description =
    project?.description ??
    "Explore the purpose, development process, and technologies behind this project.";

  const problem =
    project?.problem ??
    "Describe the real problem this project was designed to address.";

  const contribution =
    project?.contribution ??
    "Explain the features you personally designed, implemented, tested, or documented.";

  const technologies = project?.technologies ?? [];

  const outcome =
    project?.outcome ??
    "Describe the result achieved, what you learned, and any improvements you plan to make.";

  const status = project?.status ?? "Student project";

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Navigation */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation?.goBack()}
          activeOpacity={0.8}
          accessibilityRole="button"
          accessibilityLabel="Go back to projects"
        >
          <Text style={styles.backArrow}>←</Text>
          <Text style={styles.backText}>Back to projects</Text>
        </TouchableOpacity>

        {/* Project hero */}
        <View style={styles.heroCard}>
          <View style={styles.heroTopRow}>
            <View style={styles.projectIcon}>
              <Text style={styles.projectIconText}>
                {title.trim().charAt(0).toUpperCase() || "P"}
              </Text>
            </View>

            <View style={styles.statusBadge}>
              <View style={styles.statusDot} />
              <Text style={styles.statusText}>{status}</Text>
            </View>
          </View>

          <Text style={styles.eyebrow}>{category.toUpperCase()}</Text>

          <Text style={styles.title} accessibilityRole="header">
            {title}
          </Text>

          <Text style={styles.description}>{description}</Text>

          <View style={styles.heroAccent} />

          <Text style={styles.heroCaption}>
            PROJECT CASE STUDY
          </Text>
        </View>

        {/* Problem */}
        <DetailSection number="01" title="The Problem">
          <Text style={styles.bodyText}>{problem}</Text>
        </DetailSection>

        {/* Contribution */}
        <DetailSection number="02" title="My Contribution">
          <Text style={styles.bodyText}>{contribution}</Text>
        </DetailSection>

        {/* Technologies */}
        <DetailSection number="03" title="Technologies Used">
          {technologies.length > 0 ? (
            <View style={styles.technologyContainer}>
              {technologies.map((technology, index) => (
                <View
                  key={`${technology}-${index}`}
                  style={styles.technologyChip}
                >
                  <View style={styles.technologyDot} />
                  <Text style={styles.technologyText}>
                    {technology}
                  </Text>
                </View>
              ))}
            </View>
          ) : (
            <Text style={styles.bodyText}>
              Add the programming languages, frameworks, libraries,
              and tools actually used for this project.
            </Text>
          )}
        </DetailSection>

        {/* Outcome */}
        <DetailSection number="04" title="Outcome & Learning">
          <Text style={styles.bodyText}>{outcome}</Text>
        </DetailSection>

        {/* Project summary */}
        <View style={styles.summaryCard}>
          <Text style={styles.summaryEyebrow}>
            PROJECT SUMMARY
          </Text>

          <Text style={styles.summaryTitle}>
            Every project is a learning opportunity.
          </Text>

          <Text style={styles.summaryDescription}>
            This case study documents the project's purpose,
            individual contribution, technical choices, and
            lessons learned.
          </Text>
        </View>

        {/* Footer navigation */}
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation?.goBack()}
          activeOpacity={0.85}
          accessibilityRole="button"
        >
          <Text style={styles.footerButtonText}>
            Return to Portfolio Projects
          </Text>
          <Text style={styles.footerButtonArrow}>→</Text>
        </TouchableOpacity>

        <Text style={styles.footerNote}>
          Personal Portfolio · Project Case Study
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
    padding: 20,
    paddingBottom: 36,
    gap: 25,
  },

  backButton: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
    paddingVertical: 8,
  },

  backArrow: {
    color: COLORS.accent,
    fontSize: 21,
    fontWeight: "700",
  },

  backText: {
    color: COLORS.muted,
    fontSize: 13,
    fontWeight: "700",
  },

  heroCard: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 22,
    padding: 20,
    gap: 15,
    overflow: "hidden",
  },

  heroTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 12,
  },

  projectIcon: {
    width: 58,
    height: 58,
    borderRadius: 18,
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.accent,
    alignItems: "center",
    justifyContent: "center",
  },

  projectIconText: {
    color: COLORS.accent,
    fontSize: 26,
    fontWeight: "900",
  },

  statusBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },

  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.accent,
  },

  statusText: {
    color: COLORS.text,
    fontSize: 10,
    fontWeight: "700",
  },

  eyebrow: {
    color: COLORS.accent,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.7,
  },

  title: {
    color: COLORS.text,
    fontSize: 30,
    fontWeight: "900",
    lineHeight: 38,
    letterSpacing: -0.6,
  },

  description: {
    color: COLORS.muted,
    fontSize: 14,
    lineHeight: 23,
  },

  heroAccent: {
    width: 42,
    height: 4,
    backgroundColor: COLORS.accent,
    borderRadius: 3,
    marginTop: 3,
  },

  heroCaption: {
    color: COLORS.muted,
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 2,
  },

  section: {
    gap: 15,
  },

  sectionHeading: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  sectionNumber: {
    width: 35,
    height: 35,
    borderRadius: 11,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: "center",
    justifyContent: "center",
  },

  sectionNumberText: {
    color: COLORS.accent,
    fontSize: 11,
    fontWeight: "900",
  },

  sectionTitle: {
    color: COLORS.text,
    fontSize: 18,
    fontWeight: "800",
    flexShrink: 1,
  },

  sectionBody: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 17,
    padding: 17,
  },

  bodyText: {
    color: COLORS.muted,
    fontSize: 13,
    lineHeight: 22,
  },

  technologyContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 9,
  },

  technologyChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 20,
    paddingHorizontal: 11,
    paddingVertical: 9,
  },

  technologyDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.accent,
  },

  technologyText: {
    color: COLORS.text,
    fontSize: 11,
    fontWeight: "700",
  },

  summaryCard: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.accent,
    borderRadius: 19,
    padding: 19,
    gap: 12,
  },

  summaryEyebrow: {
    color: COLORS.accent,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.6,
  },

  summaryTitle: {
    color: COLORS.text,
    fontSize: 19,
    fontWeight: "900",
    lineHeight: 27,
  },

  summaryDescription: {
    color: COLORS.muted,
    fontSize: 12,
    lineHeight: 20,
  },

  footerButton: {
    minHeight: 54,
    backgroundColor: COLORS.accent,
    borderRadius: 15,
    paddingHorizontal: 17,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  footerButtonText: {
    color: COLORS.background,
    fontSize: 13,
    fontWeight: "900",
  },

  footerButtonArrow: {
    color: COLORS.background,
    fontSize: 19,
    fontWeight: "800",
  },

  footerNote: {
    color: COLORS.muted,
    fontSize: 11,
    textAlign: "center",
  },
});