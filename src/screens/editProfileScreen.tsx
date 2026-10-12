import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
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
  error: "#FF7777",
  success: "#8FE3B0",
};

export type EditableProfile = {
  headline: string;
  bio: string;
  primarySkill: string;
  availableForOpportunities: boolean;
};

type ProfileErrors = {
  headline?: string;
  bio?: string;
  primarySkill?: string;
};

type EditProfileScreenProps = {
  initialProfile?: EditableProfile;
  onSave?: (profile: EditableProfile) => void;
};

const DEFAULT_PROFILE: EditableProfile = {
  headline: "Software Developer",
  bio: "I am a technology enthusiast passionate about learning and building useful applications.",
  primarySkill: "React Native",
  availableForOpportunities: true,
};

export default function EditProfileScreen({
  initialProfile = DEFAULT_PROFILE,
  onSave,
}: EditProfileScreenProps) {
  const [headline, setHeadline] = useState(initialProfile.headline);
  const [bio, setBio] = useState(initialProfile.bio);
  const [primarySkill, setPrimarySkill] = useState(
    initialProfile.primarySkill
  );
  const [available, setAvailable] = useState(
    initialProfile.availableForOpportunities
  );

  const [errors, setErrors] = useState<ProfileErrors>({});
  const [saved, setSaved] = useState(false);

  function validateProfile(): boolean {
    const nextErrors: ProfileErrors = {};

    // Rule 1: Headline must contain 5–60 characters.
    if (headline.trim().length < 5) {
      nextErrors.headline =
        "Headline must contain at least 5 characters.";
    } else if (headline.trim().length > 60) {
      nextErrors.headline =
        "Headline cannot exceed 60 characters.";
    }

    // Rule 2: Biography must contain 20–300 characters.
    if (bio.trim().length < 20) {
      nextErrors.bio =
        "Biography must contain at least 20 characters.";
    } else if (bio.trim().length > 300) {
      nextErrors.bio =
        "Biography cannot exceed 300 characters.";
    }

    // Rule 3: Primary skill must contain 2–40 characters.
    if (primarySkill.trim().length < 2) {
      nextErrors.primarySkill =
        "Enter a primary skill with at least 2 characters.";
    } else if (primarySkill.trim().length > 40) {
      nextErrors.primarySkill =
        "Primary skill cannot exceed 40 characters.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSave() {
    setSaved(false);

    if (!validateProfile()) {
      return;
    }

    const updatedProfile: EditableProfile = {
      headline: headline.trim(),
      bio: bio.trim(),
      primarySkill: primarySkill.trim(),
      availableForOpportunities: available,
    };

    onSave?.(updatedProfile);
    setSaved(true);

    if (!onSave) {
      Alert.alert(
        "Profile validated",
        "Your changes are valid. Connect the save handler to persist them across app restarts."
      );
    }
  }

  function handleReset() {
    setHeadline(initialProfile.headline);
    setBio(initialProfile.bio);
    setPrimarySkill(initialProfile.primarySkill);
    setAvailable(initialProfile.availableForOpportunities);
    setErrors({});
    setSaved(false);
  }

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Heading */}
        <View style={styles.header}>
          <Text style={styles.eyebrow}>MAKE IT YOURS</Text>
          <Text style={styles.title}>Edit Profile</Text>
          <Text style={styles.subtitle}>
            Keep your professional introduction clear,
            accurate, and up to date.
          </Text>
        </View>

        {/* Profile summary */}
        <View style={styles.summaryCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {headline.trim().charAt(0).toUpperCase() || "P"}
            </Text>
          </View>

          <View style={styles.summaryContent}>
            <Text style={styles.summaryName}>
              Your Portfolio
            </Text>
            <Text style={styles.summaryHeadline}>
              {headline.trim() || "Your professional headline"}
            </Text>
          </View>

          <View
            style={[
              styles.statusDot,
              {
                backgroundColor: available
                  ? COLORS.success
                  : COLORS.muted,
              },
            ]}
          />
        </View>

        {/* Headline */}
        <View style={styles.fieldGroup}>
          <View style={styles.labelRow}>
            <Text style={styles.label}>
              Professional headline
            </Text>
            <Text style={styles.counter}>
              {headline.length}/60
            </Text>
          </View>

          <TextInput
            style={[
              styles.input,
              errors.headline ? styles.inputError : null,
            ]}
            value={headline}
            onChangeText={(value) => {
              setHeadline(value);
              setSaved(false);
              setErrors((previous) => ({
                ...previous,
                headline: undefined,
              }));
            }}
            placeholder="e.g. Software Developer"
            placeholderTextColor={COLORS.muted}
            maxLength={60}
            accessibilityLabel="Professional headline"
            returnKeyType="next"
          />

          {errors.headline ? (
            <Text style={styles.errorText}>
              {errors.headline}
            </Text>
          ) : (
            <Text style={styles.helperText}>
              Introduce your professional focus in 5–60 characters.
            </Text>
          )}
        </View>

        {/* Biography */}
        <View style={styles.fieldGroup}>
          <View style={styles.labelRow}>
            <Text style={styles.label}>
              Short biography
            </Text>
            <Text style={styles.counter}>
              {bio.length}/300
            </Text>
          </View>

          <TextInput
            style={[
              styles.input,
              styles.bioInput,
              errors.bio ? styles.inputError : null,
            ]}
            value={bio}
            onChangeText={(value) => {
              setBio(value);
              setSaved(false);
              setErrors((previous) => ({
                ...previous,
                bio: undefined,
              }));
            }}
            placeholder="Tell recruiters about yourself..."
            placeholderTextColor={COLORS.muted}
            multiline
            textAlignVertical="top"
            maxLength={300}
            accessibilityLabel="Short biography"
          />

          {errors.bio ? (
            <Text style={styles.errorText}>
              {errors.bio}
            </Text>
          ) : (
            <Text style={styles.helperText}>
              Write 20–300 characters about your interests and goals.
            </Text>
          )}
        </View>

        {/* Primary skill */}
        <View style={styles.fieldGroup}>
          <Text style={styles.label}>Primary skill</Text>

          <TextInput
            style={[
              styles.input,
              errors.primarySkill ? styles.inputError : null,
            ]}
            value={primarySkill}
            onChangeText={(value) => {
              setPrimarySkill(value);
              setSaved(false);
              setErrors((previous) => ({
                ...previous,
                primarySkill: undefined,
              }));
            }}
            placeholder="e.g. React Native"
            placeholderTextColor={COLORS.muted}
            maxLength={40}
            accessibilityLabel="Primary skill"
            returnKeyType="done"
          />

          {errors.primarySkill ? (
            <Text style={styles.errorText}>
              {errors.primarySkill}
            </Text>
          ) : (
            <Text style={styles.helperText}>
              Choose one skill you want recruiters to notice.
            </Text>
          )}
        </View>

        {/* Availability */}
        <View style={styles.availabilityCard}>
          <View style={styles.availabilityContent}>
            <Text style={styles.availabilityTitle}>
              Open to opportunities
            </Text>
            <Text style={styles.availabilityDescription}>
              Let recruiters know if you are available
              for internships, projects, or collaboration.
            </Text>
            <Text
              style={[
                styles.availabilityStatus,
                {
                  color: available
                    ? COLORS.success
                    : COLORS.muted,
                },
              ]}
            >
              {available ? "Currently available" : "Not available"}
            </Text>
          </View>

          <Switch
            value={available}
            onValueChange={(value) => {
              setAvailable(value);
              setSaved(false);
            }}
            trackColor={{
              false: COLORS.border,
              true: COLORS.accent,
            }}
            thumbColor={COLORS.text}
            accessibilityLabel="Available for opportunities"
          />
        </View>

        {/* Validation / save feedback */}
        {saved ? (
          <View style={styles.successCard}>
            <Text style={styles.successText}>
              ✓ Profile changes passed validation.
            </Text>
            <Text style={styles.successDescription}>
              {onSave
                ? "Your save handler has received the updated profile."
                : "Connect local persistence to keep these changes after restarting the app."}
            </Text>
          </View>
        ) : null}

        {/* Actions */}
        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleSave}
          activeOpacity={0.85}
          accessibilityRole="button"
          accessibilityLabel="Validate and save profile"
        >
          <Text style={styles.saveButtonText}>
            Save Changes
          </Text>
          <Text style={styles.saveArrow}>→</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.resetButton}
          onPress={handleReset}
          activeOpacity={0.8}
          accessibilityRole="button"
          accessibilityLabel="Reset profile form"
        >
          <Text style={styles.resetButtonText}>
            Reset Form
          </Text>
        </TouchableOpacity>

        <Text style={styles.footerNote}>
          Your portfolio should reflect your genuine skills,
          experience, and professional goals.
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  scrollView: {
    flex: 1,
  },

  content: {
    padding: 20,
    paddingBottom: 40,
    gap: 22,
  },

  header: {
    gap: 9,
    marginTop: 12,
  },

  eyebrow: {
    color: COLORS.accent,
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 2,
  },

  title: {
    color: COLORS.text,
    fontSize: 32,
    fontWeight: "800",
    letterSpacing: -0.7,
  },

  subtitle: {
    color: COLORS.muted,
    fontSize: 14,
    lineHeight: 22,
  },

  summaryCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 15,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 18,
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: COLORS.accent,
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    color: COLORS.background,
    fontSize: 21,
    fontWeight: "900",
  },

  summaryContent: {
    flex: 1,
    gap: 5,
  },

  summaryName: {
    color: COLORS.text,
    fontSize: 14,
    fontWeight: "800",
  },

  summaryHeadline: {
    color: COLORS.muted,
    fontSize: 12,
    lineHeight: 18,
  },

  statusDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
  },

  fieldGroup: {
    gap: 9,
  },

  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },

  label: {
    color: COLORS.text,
    fontSize: 13,
    fontWeight: "700",
  },

  counter: {
    color: COLORS.muted,
    fontSize: 11,
  },

  input: {
    minHeight: 52,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 13,
    paddingHorizontal: 15,
    paddingVertical: 13,
    color: COLORS.text,
    fontSize: 14,
    lineHeight: 21,
  },

  bioInput: {
    minHeight: 125,
    paddingTop: 14,
  },

  inputError: {
    borderColor: COLORS.error,
  },

  helperText: {
    color: COLORS.muted,
    fontSize: 11,
    lineHeight: 17,
  },

  errorText: {
    color: COLORS.error,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "600",
  },

  availabilityCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 18,
    padding: 16,
  },

  availabilityContent: {
    flex: 1,
    gap: 7,
  },

  availabilityTitle: {
    color: COLORS.text,
    fontSize: 14,
    fontWeight: "800",
  },

  availabilityDescription: {
    color: COLORS.muted,
    fontSize: 12,
    lineHeight: 19,
  },

  availabilityStatus: {
    fontSize: 11,
    fontWeight: "800",
  },

  successCard: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.success,
    borderRadius: 14,
    padding: 14,
    gap: 7,
  },

  successText: {
    color: COLORS.success,
    fontSize: 13,
    fontWeight: "800",
  },

  successDescription: {
    color: COLORS.muted,
    fontSize: 12,
    lineHeight: 19,
  },

  saveButton: {
    minHeight: 54,
    backgroundColor: COLORS.accent,
    borderRadius: 15,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  saveButtonText: {
    color: COLORS.background,
    fontSize: 14,
    fontWeight: "900",
  },

  saveArrow: {
    color: COLORS.background,
    fontSize: 20,
    fontWeight: "800",
  },

  resetButton: {
    minHeight: 48,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 18,
  },

  resetButtonText: {
    color: COLORS.text,
    fontSize: 13,
    fontWeight: "700",
  },

  footerNote: {
    color: COLORS.muted,
    fontSize: 11,
    lineHeight: 18,
    textAlign: "center",
    paddingHorizontal: 8,
  },
});