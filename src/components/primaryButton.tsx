import React from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
  TextStyle,
} from "react-native";

type PrimaryButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: "primary" | "secondary" | "outline" | "danger";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  accessibilityLabel?: string;
};

const COLORS = {
  accent: "#C8FF57",
  background: "#101114",
  surface: "#24262D",
  text: "#FFFFFF",
  muted: "#AEB1BA",
  border: "#42434A",
  danger: "#D96C6C",
};

export default function PrimaryButton({
  title,
  onPress,
  disabled = false,
  loading = false,
  variant = "primary",
  size = "medium",
  fullWidth = false,
  style,
  textStyle,
  accessibilityLabel,
}: PrimaryButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? title}
      accessibilityState={{
        disabled: isDisabled,
        busy: loading,
      }}
      style={({ pressed }) => [
        styles.button,
        styles[`${variant}Button`],
        styles[`${size}Button`],
        fullWidth && styles.fullWidth,
        pressed && !isDisabled && styles.pressed,
        isDisabled && styles.disabled,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === "primary" ? COLORS.background : COLORS.accent}
        />
      ) : (
        <Text
          style={[
            styles.text,
            styles[`${variant}Text`],
            styles[`${size}Text`],
            textStyle,
          ]}
          numberOfLines={2}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    borderRadius: 14,
    borderWidth: 1,
    overflow: "hidden",
  },

  primaryButton: {
    backgroundColor: COLORS.accent,
    borderColor: COLORS.accent,
  },

  secondaryButton: {
    backgroundColor: COLORS.surface,
    borderColor: COLORS.surface,
  },

  outlineButton: {
    backgroundColor: "transparent",
    borderColor: COLORS.border,
  },

  dangerButton: {
    backgroundColor: COLORS.danger,
    borderColor: COLORS.danger,
  },

  smallButton: {
    minHeight: 40,
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 10,
  },

  mediumButton: {
    minHeight: 48,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },

  largeButton: {
    minHeight: 56,
    paddingHorizontal: 24,
    paddingVertical: 15,
    borderRadius: 16,
  },

  fullWidth: {
    alignSelf: "stretch",
    width: "100%",
  },

  text: {
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
    flexShrink: 1,
  },

  primaryText: {
    color: COLORS.background,
  },

  secondaryText: {
    color: COLORS.text,
  },

  outlineText: {
    color: COLORS.accent,
  },

  dangerText: {
    color: COLORS.background,
  },

  smallText: {
    fontSize: 13,
  },

  mediumText: {
    fontSize: 15,
  },

  largeText: {
    fontSize: 16,
  },

  pressed: {
    opacity: 0.78,
    transform: [{ scale: 0.98 }],
  },

  disabled: {
    opacity: 0.45,
  },
});