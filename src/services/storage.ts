import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  initialProfile,
  type Profile,
} from "../types/profile";

const PROFILE_KEY = "@cmportfolio/profile";

export async function loadProfile(): Promise<Profile> {
  try {
    const saved = await AsyncStorage.getItem(PROFILE_KEY);

    if (!saved) return initialProfile;

    const parsed: unknown = JSON.parse(saved);

    if (
      typeof parsed !== "object" ||
      parsed === null ||
      !("fullName" in parsed) ||
      typeof parsed.fullName !== "string"
    ) {
      return initialProfile;
    }

    return { ...initialProfile, ...parsed } as Profile;
  } catch {
    return initialProfile;
  }
}

export async function saveProfile(
  profile: Profile
): Promise<void> {
  await AsyncStorage.setItem(
    PROFILE_KEY,
    JSON.stringify(profile)
  );
}

export async function resetProfile(): Promise<void> {
  await AsyncStorage.removeItem(PROFILE_KEY);
}