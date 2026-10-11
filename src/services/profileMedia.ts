import * as ImagePicker from 'expo-image-picker';
import { Alert, Linking } from 'react-native';

/**
 * Profile media service
 *
 * Responsibilities:
 * - Request camera and gallery permissions.
 * - Select a profile image from the gallery.
 * - Capture a profile image using the camera.
 * - Return a predictable result for success, cancellation, and errors.
 *
 * UI components should handle image previews and replacement/removal actions.
 */

export type ProfileMediaSource = 'camera' | 'gallery';

export type ProfileMediaResult =
  | {
      success: true;
      uri: string;
      source: ProfileMediaSource;
    }
  | {
      success: false;
      reason:
        | 'cancelled'
        | 'permission-denied'
        | 'error';
      message: string;
    };

export interface ProfileMediaOptions {
  allowsEditing?: boolean;
  aspect?: [number, number];
  quality?: number;
}

const DEFAULT_OPTIONS: Required<ProfileMediaOptions> = {
  allowsEditing: true,
  aspect: [1, 1],
  quality: 0.9,
};

/**
 * Requests access to the device photo library.
 */
async function requestGalleryPermission(): Promise<boolean> {
  try {
    const permission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    return permission.granted;
  } catch {
    return false;
  }
}

/**
 * Requests permission to use the device camera.
 */
async function requestCameraPermission(): Promise<boolean> {
  try {
    const permission =
      await ImagePicker.requestCameraPermissionsAsync();

    return permission.granted;
  } catch {
    return false;
  }
}

/**
 * Selects an existing profile image from the gallery.
 */
export async function selectProfileImage(
  options: ProfileMediaOptions = {},
): Promise<ProfileMediaResult> {
  try {
    const hasPermission = await requestGalleryPermission();

    if (!hasPermission) {
      return {
        success: false,
        reason: 'permission-denied',
        message:
          'Photo library access is required to select a profile image. You can enable permission in your device settings.',
      };
    }

    const config = {
      ...DEFAULT_OPTIONS,
      ...options,
    };

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: config.allowsEditing,
      aspect: config.aspect,
      quality: config.quality,
    });

    if (result.canceled || !result.assets?.length) {
      return {
        success: false,
        reason: 'cancelled',
        message: 'You cancelled image selection.',
      };
    }

    const uri = result.assets[0]?.uri;

    if (!uri) {
      return {
        success: false,
        reason: 'error',
        message: 'The selected image could not be accessed.',
      };
    }

    return {
      success: true,
      uri,
      source: 'gallery',
    };
  } catch {
    return {
      success: false,
      reason: 'error',
      message:
        'Something went wrong while selecting your profile image. Please try again.',
    };
  }
}

/**
 * Captures a new profile image using the device camera.
 */
export async function captureProfileImage(
  options: ProfileMediaOptions = {},
): Promise<ProfileMediaResult> {
  try {
    const hasPermission = await requestCameraPermission();

    if (!hasPermission) {
      return {
        success: false,
        reason: 'permission-denied',
        message:
          'Camera access is required to take a profile photo. You can enable permission in your device settings.',
      };
    }

    const config = {
      ...DEFAULT_OPTIONS,
      ...options,
    };

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ['images'],
      allowsEditing: config.allowsEditing,
      aspect: config.aspect,
      quality: config.quality,
    });

    if (result.canceled || !result.assets?.length) {
      return {
        success: false,
        reason: 'cancelled',
        message: 'You cancelled the camera capture.',
      };
    }

    const uri = result.assets[0]?.uri;

    if (!uri) {
      return {
        success: false,
        reason: 'error',
        message: 'The captured image could not be accessed.',
      };
    }

    return {
      success: true,
      uri,
      source: 'camera',
    };
  } catch {
    return {
      success: false,
      reason: 'error',
      message:
        'Unable to capture your profile photo. Please try again.',
    };
  }
}

/**
 * Displays a user-friendly permission alert and offers device settings.
 * Call this only after a permission-denied result.
 */
export function showProfileMediaPermissionAlert(
  source: ProfileMediaSource,
): void {
  const mediaName =
    source === 'camera' ? 'camera' : 'photo library';

  Alert.alert(
    `${mediaName === 'camera' ? 'Camera' : 'Gallery'} permission needed`,
    `Please allow access to your ${mediaName} in device settings to use this feature.`,
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Open Settings',
        onPress: () => {
          void Linking.openSettings();
        },
      },
    ],
  );
}