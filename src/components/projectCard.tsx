import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  type StyleProp,
  type ViewStyle,
} from "react-native";

export type ProjectStatus =
  | "Completed"
  | "In Progress"
  | "Planned";

export type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  category?: string;
  status?: ProjectStatus;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  accessibilityLabel?: string;
};

const COLORS = {
  accent: "#C8FF57",
  background: "#101114",
  surface: "#24262D",
  text: "#FFFFFF",
  muted: "#AEB1BA",
  border: "#42434A",
  warning: "#FFD166",
  info: "#8BB8FF",
};

const MAX_VISIBLE_TECHNOLOGIES = 3;

const STATUS_COLORS: Record<ProjectStatus, string> = {
  Completed: COLORS.accent,
  "In Progress": COLORS.warning,
  Planned: COLORS.info,
};

export default function ProjectCard({
  title,
  description,
  technologies = [],
  category = "Student Project",
  status = "In Progress",
  onPress,
  style,
  accessibilityLabel,
}: ProjectCardProps) {
  const visibleTechnologies = technologies.slice(
    0,
    MAX_VISIBLE_TECHNOLOGIES
  );

  const remainingCount = Math.max(
    0,
    technologies.length - MAX_VISIBLE_TECHNOLOGIES
  );

  const statusColor = STATUS_COLORS[status];

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={
        accessibilityLabel ??
        `View project: ${title}. ${description}`
      }
      accessibilityHint="Opens the full project details."
      style={({ pressed }) => [
        styles.card,
        pressed && styles.pressed,
        style,
      ]}
    >
      {/* Project category and status */}
      <View style={styles.topRow}>
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryText}>
            {category}
          </Text>
        </View>

        <View style={styles.statusContainer}>
          <View
            style={[
              styles.statusDot,
              { backgroundColor: statusColor },
            ]}
          />

          <Text
            style={[
              styles.statusText,
              { color: statusColor },
            ]}
          >
            {status}
          </Text>
        </View>
      </View>

      {/* Project title */}
      <Text style={styles.title}>
        {title}
      </Text>

      {/* Short project description */}
      <Text
        style={styles.description}
        numberOfLines={3}
      >
        {description}
      </Text>

      {/* Technologies */}
      {visibleTechnologies.length > 0 && (
        <View style={styles.technologyList}>
          {visibleTechnologies.map((technology, index) => (
            <View
              key={`${technology}-${index}`}
              style={styles.technologyTag}
            >
              <Text style={styles.technologyText}>
                {technology}
              </Text>
            </View>
          ))}

          {remainingCount > 0 && (
            <View style={styles.moreTag}>
              <Text style={styles.moreText}>
                +{remainingCount}
              </Text>
            </View>
          )}
        </View>
      )}

      {/* Project details action */}
      <View style={styles.footer}>
        <Text style={styles.actionText}>
          Explore project
        </Text>

        <View style={styles.arrowCircle}>
          <Text
            style={styles.arrow}
            accessible={false}
          >
            ↗
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    gap: 14,
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 10,
  },

  categoryBadge: {
    backgroundColor: COLORS.background,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
    maxWidth: "65%",
  },

  categoryText: {
    color: COLORS.muted,
    fontSize: 11,
    fontWeight: "600",
    letterSpacing: 0.4,
    flexShrink: 1,
  },

  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  statusDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
  },

  statusText: {
    fontSize: 11,
    fontWeight: "700",
    flexShrink: 1,
  },

  title: {
    color: COLORS.text,
    fontSize: 21,
    lineHeight: 29,
    fontWeight: "800",
    flexShrink: 1,
  },

  description: {
    color: COLORS.muted,
    fontSize: 14,
    lineHeight: 22,
    flexShrink: 1,
  },

  technologyList: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 8,
  },

  technologyTag: {
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 8,
    maxWidth: "100%",
  },

  technologyText: {
    color: COLORS.text,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "500",
    flexShrink: 1,
  },

  moreTag: {
    backgroundColor: COLORS.accent,
    paddingHorizontal: 9,
    paddingVertical: 7,
    borderRadius: 8,
  },

  moreText: {
    color: COLORS.background,
    fontSize: 12,
    fontWeight: "800",
  },

  footer: {
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    paddingTop: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },

  actionText: {
    color: COLORS.accent,
    fontSize: 14,
    fontWeight: "700",
    flexShrink: 1,
  },

  arrowCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.accent,
    alignItems: "center",
    justifyContent: "center",
  },

  arrow: {
    color: COLORS.background,
    fontSize: 22,
    fontWeight: "800",
  },

  pressed: {
    opacity: 0.82,
    borderColor: COLORS.accent,
  },
});