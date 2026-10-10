import { View, Text, StyleSheet } from "react-native";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

type Props = {
  title: string;
  institution: string;
  period: string;
  description: string;
};

export default function EducationItem({
  title,
  institution,
  period,
  description,
}: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.dot} />
      <View style={styles.content}>
        <Text style={styles.period}>{period}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.institution}>{institution}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    gap: spacing.md,
    marginBottom: spacing.lg,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.primary,
    marginTop: 5,
  },
  content: {
    flex: 1,
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  period: { color: colors.primary, fontSize: 12, marginBottom: 6 },
  title: { color: colors.text, fontSize: 16, fontWeight: "700" },
  institution: { color: colors.textSecondary, marginTop: 4 },
  description: {
    color: colors.textSecondary,
    marginTop: 8,
    lineHeight: 21,
  },
});