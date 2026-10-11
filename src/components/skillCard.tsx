import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";

type SkillLevel = "Beginner" | "Intermediate" | "Advanced";

type SkillCardProps = {
  name: string;
  category?: string;
  description?: string;
  level?: SkillLevel;
  style?: StyleProp<ViewStyle>;
};

const COLORS = {
  accent: "#C8FF57",
  background: "#101114",
  surface: "#24262D",
  text: "#FFFFFF",
  muted: "#AEB1BA",
  border: "#42434A",
  beginner: "#8BB8FF",
  intermediate: "#C8FF57",
  advanced: "#B7A0FF",
};

const LEVEL_COLORS: Record<SkillLevel, string> = {
  Beginner: COLORS.beginner,
  Intermediate: COLORS.intermediate,
  Advanced: COLORS.advanced,
};

export default function SkillCard({
  name,
  category,
  description,
  level,
  style,
}: SkillCardProps) {
  const levelColor = level ? LEVEL_COLORS[level] : COLORS.accent;

  return (
    <View
      style={[styles.card, style]}
      accessible
      accessibilityRole="summary"
      accessibilityLabel={[
        name,
        category,
        description,
        level ? `Proficiency: ${level}` : undefined,
      ]
        .filter(Boolean)
        .join(". ")}
    >
      <View style={styles.topRow}>
        <View style={styles.iconContainer}>
          <Text style={styles.iconText}>
            {name.trim().charAt(0).toUpperCase() || "S"}
          </Text>
        </View>

        {level ? (
          <View
            style={[
              styles.levelBadge,
              { borderColor: levelColor },
            ]}
          >
            <View
              style={[
                styles.levelDot,
                { backgroundColor: levelColor },
              ]}
            />
            <Text
              style={[
                styles.levelText,
                { color: levelColor },
              ]}
            >
              {level}
            </Text>
          </View>
        ) : null}
      </View>

      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>

        {category ? (
          <Text style={styles.category}>{category}</Text>
        ) : null}

        {description ? (
          <Text style={styles.description}>{description}</Text>
        ) : null}
      </View>

      <View style={styles.bottomAccent} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minWidth: 0,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 18,
    padding: 16,
    gap: 16,
    overflow: "hidden",
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 8,
  },

  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: "center",
    justifyContent: "center",
  },

  iconText: {
    color: COLORS.accent,
    fontSize: 18,
    fontWeight: "800",
  },

  levelBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 20,
  },

  levelDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },

  levelText: {
    fontSize: 10,
    fontWeight: "700",
  },

  content: {
    gap: 5,
    flexShrink: 1,
  },

  name: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: "800",
    lineHeight: 22,
  },

  category: {
    color: COLORS.accent,
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 18,
  },

  description: {
    color: COLORS.muted,
    fontSize: 13,
    lineHeight: 20,
    marginTop: 3,
    flexShrink: 1,
  },

  bottomAccent: {
    height: 3,
    width: 30,
    backgroundColor: COLORS.accent,
    borderRadius: 2,
    marginTop: "auto",
  },
});