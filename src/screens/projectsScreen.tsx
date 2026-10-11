import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import ProjectCard from "../components/projectCard";
import { projects } from "../data/projects";

const COLORS = {
  background: "#101114",
  surface: "#24262D",
  accent: "#C8FF57",
  text: "#FFFFFF",
  muted: "#AEB1BA",
  border: "#42434A",
};

type ProjectsScreenProps = {
  navigation: {
    navigate: (
      screen: string,
      params?: { project: (typeof projects)[number] }
    ) => void;
  };
};

export default function ProjectsScreen({
  navigation,
}: ProjectsScreenProps) {
  const featuredProject = projects[0];

  const openProject = (project: (typeof projects)[number]) => {
    navigation.navigate("ProjectDetails", { project });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Page introduction */}
        <View style={styles.header}>
          <Text style={styles.eyebrow}>MY WORK & IDEAS</Text>

          <Text
            style={styles.title}
            accessibilityRole="header"
          >
            Projects<Text style={styles.titleAccent}>.</Text>
          </Text>

          <Text style={styles.subtitle}>
            A collection of projects showcasing my learning,
            creativity, technical skills, and problem-solving.
          </Text>
        </View>

        {/* Collection overview */}
        <View style={styles.overviewRow}>
          <View style={styles.overviewText}>
            <Text style={styles.overviewLabel}>
              PORTFOLIO COLLECTION
            </Text>
            <Text style={styles.overviewTitle}>
              Selected work
            </Text>
          </View>

          <View style={styles.countBadge}>
            <Text style={styles.countNumber}>
              {String(projects.length).padStart(2, "0")}
            </Text>
            <Text style={styles.countLabel}>PROJECTS</Text>
          </View>
        </View>

        {/* Featured project */}
        {featuredProject ? (
          <View style={styles.featuredCard}>
            <View style={styles.featuredTopRow}>
              <View style={styles.featuredIcon}>
                <Text style={styles.featuredIconText}>
                  {featuredProject.title.trim().charAt(0).toUpperCase() || "P"}
                </Text>
              </View>

              <View style={styles.featuredBadge}>
                <Text style={styles.featuredBadgeText}>
                  FEATURED PROJECT
                </Text>
              </View>
            </View>

            <Text style={styles.featuredCategory}>
              {featuredProject.category ?? "STUDENT PROJECT"}
            </Text>

            <Text style={styles.featuredTitle}>
              {featuredProject.title}
            </Text>

            <Text style={styles.featuredDescription}>
              {featuredProject.description}
            </Text>

            <Text style={styles.featuredTechnologiesLabel}>
              TECHNOLOGIES
            </Text>

            <View style={styles.technologyList}>
              {featuredProject.technologies.map(
                (technology, index) => (
                  <View
                    key={`${technology}-${index}`}
                    style={styles.technologyTag}
                  >
                    <Text style={styles.technologyText}>
                      {technology}
                    </Text>
                  </View>
                )
              )}
            </View>

            <Text
              style={styles.featuredLink}
              onPress={() => openProject(featuredProject)}
              accessibilityRole="link"
            >
              Explore case study {"↗"}
            </Text>
          </View>
        ) : null}

        {/* All projects */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionEyebrow}>
            BUILT THROUGH PRACTICE
          </Text>
          <Text style={styles.sectionTitle}>All Projects</Text>
          <View style={styles.sectionAccent} />
        </View>

        {projects.length > 0 ? (
          <View style={styles.projectList}>
            {projects.map((project, index) => (
              <View
                key={project.id}
                style={styles.projectItem}
              >
                <View style={styles.projectNumber}>
                  <Text style={styles.projectNumberText}>
                    {String(index + 1).padStart(2, "0")}
                  </Text>
                </View>

                <View style={styles.projectCardContainer}>
                  <ProjectCard
                    title={project.title}
                    category={project.category}
                    description={project.description}
                    technologies={project.technologies}
                    status={project.status}
                    onPress={() => openProject(project)}
                    accessibilityLabel={`Open details for ${project.title}`}
                  />
                </View>
              </View>
            ))}
          </View>
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>✳</Text>
            <Text style={styles.emptyTitle}>
              Your projects start here
            </Text>
            <Text style={styles.emptyDescription}>
              Add at least two genuine student projects to
              src/data/projects.ts to showcase your work.
            </Text>
          </View>
        )}

        {/* Closing message */}
        <View style={styles.closingCard}>
          <View style={styles.closingAccent} />
          <Text style={styles.closingTitle}>
            Every project tells a story.
          </Text>
          <Text style={styles.closingDescription}>
            Discover the problem, my individual contribution,
            the technologies used, and the lessons learned.
          </Text>
        </View>

        <Text style={styles.footer}>
          PERSONAL PORTFOLIO · PROJECT COLLECTION
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

  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
    gap: 25,
  },

  header: {
    gap: 11,
  },

  eyebrow: {
    color: COLORS.accent,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 2,
  },

  title: {
    color: COLORS.text,
    fontSize: 36,
    fontWeight: "900",
    letterSpacing: -1,
  },

  titleAccent: {
    color: COLORS.accent,
  },

  subtitle: {
    color: COLORS.muted,
    fontSize: 14,
    lineHeight: 23,
  },

  overviewRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },

  overviewText: {
    flexShrink: 1,
    gap: 5,
  },

  overviewLabel: {
    color: COLORS.muted,
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1.4,
  },

  overviewTitle: {
    color: COLORS.text,
    fontSize: 19,
    fontWeight: "800",
  },

  countBadge: {
    minWidth: 70,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 14,
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 9,
    gap: 3,
  },

  countNumber: {
    color: COLORS.accent,
    fontSize: 22,
    fontWeight: "900",
  },

  countLabel: {
    color: COLORS.muted,
    fontSize: 8,
    fontWeight: "800",
    letterSpacing: 1,
  },

  featuredCard: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.accent,
    borderRadius: 22,
    padding: 19,
    gap: 13,
  },

  featuredTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 10,
  },

  featuredIcon: {
    width: 49,
    height: 49,
    borderRadius: 15,
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: "center",
    justifyContent: "center",
  },

  featuredIconText: {
    color: COLORS.accent,
    fontSize: 23,
    fontWeight: "900",
  },

  featuredBadge: {
    borderWidth: 1,
    borderColor: COLORS.accent,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  featuredBadgeText: {
    color: COLORS.accent,
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1,
  },

  featuredCategory: {
    color: COLORS.accent,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.2,
  },

  featuredTitle: {
    color: COLORS.text,
    fontSize: 22,
    fontWeight: "900",
    lineHeight: 29,
  },

  featuredDescription: {
    color: COLORS.muted,
    fontSize: 13,
    lineHeight: 21,
  },

  featuredTechnologiesLabel: {
    color: COLORS.muted,
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1.3,
  },

  technologyList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },

  technologyTag: {
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 9,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },

  technologyText: {
    color: COLORS.text,
    fontSize: 11,
    fontWeight: "600",
  },

  featuredLink: {
    color: COLORS.accent,
    fontSize: 13,
    fontWeight: "800",
    paddingVertical: 5,
  },

  sectionHeader: {
    gap: 6,
  },

  sectionEyebrow: {
    color: COLORS.accent,
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1.7,
  },

  sectionTitle: {
    color: COLORS.text,
    fontSize: 24,
    fontWeight: "900",
  },

  sectionAccent: {
    width: 34,
    height: 4,
    backgroundColor: COLORS.accent,
    borderRadius: 3,
    marginTop: 3,
  },

  projectList: {
    gap: 2,
  },

  projectItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },

  projectNumber: {
    width: 29,
    height: 29,
    borderRadius: 9,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },

  projectNumberText: {
    color: COLORS.accent,
    fontSize: 10,
    fontWeight: "800",
  },

  projectCardContainer: {
    flex: 1,
    minWidth: 0,
  },

  emptyState: {
    alignItems: "center",
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 20,
    padding: 25,
    gap: 12,
  },

  emptyIcon: {
    color: COLORS.accent,
    fontSize: 29,
  },

  emptyTitle: {
    color: COLORS.text,
    fontSize: 17,
    fontWeight: "800",
    textAlign: "center",
  },

  emptyDescription: {
    color: COLORS.muted,
    fontSize: 12,
    lineHeight: 20,
    textAlign: "center",
  },

  closingCard: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 18,
    padding: 18,
    gap: 11,
  },

  closingAccent: {
    width: 34,
    height: 4,
    backgroundColor: COLORS.accent,
    borderRadius: 2,
  },

  closingTitle: {
    color: COLORS.text,
    fontSize: 17,
    fontWeight: "900",
  },

  closingDescription: {
    color: COLORS.muted,
    fontSize: 12,
    lineHeight: 20,
  },

  footer: {
    color: COLORS.muted,
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 1.1,
    textAlign: "center",
  },
});