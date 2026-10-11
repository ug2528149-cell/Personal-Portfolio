import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";

type ScreenHeaderProps = {
  title: string;
  subtitle?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  rightActionLabel?: string;
  onRightActionPress?: () => void;
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
};

export default function ScreenHeader({
  title,
  subtitle,
  showBackButton = false,
  onBackPress,
  rightActionLabel,
  onRightActionPress,
  style,
  accessibilityLabel,
}: ScreenHeaderProps) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.topRow}>
        {showBackButton && (
          <Pressable
            onPress={onBackPress}
            disabled={!onBackPress}
            accessibilityRole="button"
            accessibilityLabel="Go back"
            accessibilityState={{
              disabled: !onBackPress,
            }}
            hitSlop={8}
            style={({ pressed }) => [
              styles.backButton,
              pressed && onBackPress && styles.pressed,
            ]}
          >
            <Text style={styles.backIcon}>‹</Text>
          </Pressable>
        )}

        <View
          style={[
            styles.titleContainer,
            showBackButton && styles.titleWithBack,
          ]}
        >
          <Text
            style={styles.title}
            accessibilityRole="header"
            accessibilityLabel={accessibilityLabel ?? title}
          >
            {title}
          </Text>
        </View>

        {rightActionLabel && (
          <Pressable
            onPress={onRightActionPress}
            disabled={!onRightActionPress}
            accessibilityRole="button"
            accessibilityLabel={rightActionLabel}
            accessibilityState={{
              disabled: !onRightActionPress,
            }}
            hitSlop={8}
            style={({ pressed }) => [
              styles.actionButton,
              pressed && onRightActionPress && styles.pressed,
            ]}
          >
            <Text style={styles.actionText}>
              {rightActionLabel}
            </Text>
          </Pressable>
        )}
      </View>

      {subtitle ? (
        <Text style={styles.subtitle}>{subtitle}</Text>
      ) : null}

      <View style={styles.accentLine} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 12,
    paddingBottom: 18,
    gap: 10,
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 42,
    gap: 10,
  },

  titleContainer: {
    flex: 1,
    minWidth: 0,
  },

  titleWithBack: {
    paddingLeft: 0,
  },

  title: {
    color: COLORS.text,
    fontSize: 28,
    lineHeight: 36,
    fontWeight: "800",
    letterSpacing: -0.7,
    flexShrink: 1,
  },

  subtitle: {
    color: COLORS.muted,
    fontSize: 14,
    lineHeight: 21,
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: "center",
    justifyContent: "center",
  },

  backIcon: {
    color: COLORS.accent,
    fontSize: 34,
    lineHeight: 37,
    marginTop: -3,
  },

  actionButton: {
    minHeight: 42,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
  },

  actionText: {
    color: COLORS.accent,
    fontSize: 13,
    fontWeight: "700",
  },

  accentLine: {
    height: 2,
    width: 44,
    backgroundColor: COLORS.accent,
    borderRadius: 2,
    marginTop: 2,
  },

  pressed: {
    opacity: 0.7,
  },
});