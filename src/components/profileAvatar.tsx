import React from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  StyleProp,
} from "react-native";

type ProfileAvatarProps = {
  name: string;
  imageUri?: string | null;
  size?: number;
  onPress?: () => void;
  showEditIndicator?: boolean;
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

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);

  if (parts.length === 0) {
    return "ME";
  }

  return parts
    .slice(0, 2)
    .map((part) => Array.from(part)[0])
    .join("")
    .toUpperCase();
}

export default function ProfileAvatar({
  name,
  imageUri,
  size = 104,
  onPress,
  showEditIndicator = false,
  style,
  accessibilityLabel,
}: ProfileAvatarProps) {
  const initials = getInitials(name);
  const hasImage = Boolean(imageUri?.trim());

  const avatarContent = (
    <View
      style={[
        styles.avatar,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
      ]}
    >
      {hasImage ? (
        <Image
          source={{ uri: imageUri as string } as ImageSourcePropType}
          style={[
            styles.image,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
            },
          ]}
          resizeMode="cover"
          accessible
          accessibilityLabel={`${name}'s profile photo`}
        />
      ) : (
        <View
          style={[
            styles.placeholder,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
            },
          ]}
        >
          <Text
            style={[
              styles.initials,
              {
                fontSize: Math.max(20, size * 0.3),
              },
            ]}
            numberOfLines={1}
          >
            {initials}
          </Text>
        </View>
      )}

      {showEditIndicator && (
        <View
          style={[
            styles.editIndicator,
            {
              width: Math.max(28, size * 0.28),
              height: Math.max(28, size * 0.28),
              borderRadius: Math.max(14, size * 0.14),
              right: 0,
              bottom: 0,
            },
          ]}
        >
          <Text style={styles.editIcon}>+</Text>
        </View>
      )}
    </View>
  );

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={
          accessibilityLabel ??
          (showEditIndicator
            ? "Change profile photo"
            : `View profile photo for ${name}`)
        }
        style={({ pressed }) => [
          styles.pressable,
          pressed && styles.pressed,
          style,
        ]}
      >
        {avatarContent}
      </Pressable>
    );
  }

  return (
    <View
      accessible
      accessibilityRole="image"
      accessibilityLabel={
        accessibilityLabel ?? `Profile avatar for ${name}`
      }
      style={style}
    >
      {avatarContent}
    </View>
  );
}

const styles = StyleSheet.create({
  pressable: {
    alignSelf: "flex-start",
  },

  avatar: {
    backgroundColor: COLORS.surface,
    borderWidth: 3,
    borderColor: COLORS.accent,
    overflow: "visible",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    backgroundColor: COLORS.surface,
  },

  placeholder: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  initials: {
    color: COLORS.accent,
    fontWeight: "800",
    letterSpacing: 1,
    textAlign: "center",
  },

  editIndicator: {
    position: "absolute",
    backgroundColor: COLORS.accent,
    borderWidth: 3,
    borderColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
  },

  editIcon: {
    color: COLORS.background,
    fontSize: 20,
    fontWeight: "800",
    lineHeight: 22,
  },

  pressed: {
    opacity: 0.8,
  },
});