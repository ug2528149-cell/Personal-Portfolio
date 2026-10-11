import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  StyleProp,
} from "react-native";

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  category?: string;
  status?: "Completed" | "In Progress" | "Planned";
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
  success: "#C8FF57",
  warning: "#FFD166",
  info: "#8BB8FF",
};

const MAX_VISIBLE_TECHNOLOGIES = 3;

export default function ProjectCard({
  title,
  description,
  technologies,
  category = "Student Project",
  status = "Completed",
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

  const statusColor =
    status === "Completed"
      ? COLORS.success
      : status === "In Progress"
        ? COLORS.warning
        : COLORS.info;

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={
        accessibilityLabel ??
        `View project ${title}. ${description}`
      }
      style={({ pressed }) => [
        styles.card,
        pressed && styles.pressed,
        style,
      ]}
    >
      {/* Top row */}
      <View style={styles.topRow}>
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryText}>{category}</Text>
        </View>

        <View style={styles.statusContainer}>
          <View
            style={[
              styles.statusDot,
              { backgroundColor: statusColor },
            ]}
          />
          <Text style={[styles.statusText, { color: statusColor }]}>
            {status}
          </Text>
        </View>
      </View>

      {/* Project information */}
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.description} numberOfLines={3}>
        {description}
      </Text>

      {/* Technology tags */}
      {technologies.length > 0 && (
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

      {/* Bottom action */}
      <View style={styles.footer}>
        <Text style={styles.actionText}>Explore project</Text>

        <View style={styles.arrowCircle}>
          <Text style={styles.arrow}>↗</Text>
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
  },

  title: {
    color: COLORS.text,
    fontSize: 21,
    lineHeight: 28,
    fontWeight: "800",
  },

  description: {
    color: COLORS.muted,
    fontSize: 14,
    lineHeight: 22,
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
    fontWeight: "500",
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
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: COLORS.accent,
    alignItems: "center",
    justifyContent: "center",
  },

  arrow: {
    color: COLORS.background,
    fontSize: 20,
    fontWeight: "800",
  },

  pressed: {
    opacity: 0.82,
    borderColor: COLORS.accent,
  },
});