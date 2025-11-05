import React, { useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AvatarIcon from '@/app/assets/icons/create/avatar.svg';
import CameraIcon from '@/app/assets/icons/create/camera.svg';
import UploadIcon from '@/app/assets/icons/create/upload.svg';
import { CustomText } from '../../../../../components/UI/CustomText';
import { Profile } from '../../../../../types/profile';

const { width } = Dimensions.get('window');

interface ProfileSectionProps {
  updateProfileData: (updates: Partial<Profile>) => void;
}

/**
 * Helper: request a permission and return true if granted.
 */
const requestPermission = async (
  requestFn: () => Promise<ImagePicker.PermissionResponse>
): Promise<boolean> => {
  const { status } = await requestFn();
  if (status !== 'granted') {
    Alert.alert(
      'Permission required',
      'Please grant permission in Settings to continue.'
    );
    return false;
  }
  return true;
};

const ProfileSection: React.FC<ProfileSectionProps> = ({ updateProfileData }) => {
  // Keep a hidden Camera just to satisfy the hook (optional but safe)
  const [hasPermission, setHasPermission] = React.useState<boolean | null>(null);

  // --------------------------------------------------------------------
  // 1. Ask for camera & library permissions **once** when the component mounts
  // --------------------------------------------------------------------
  useEffect(() => {
    (async () => {
      const cameraOk = await requestPermission(ImagePicker.requestCameraPermissionsAsync);
      const libraryOk = await requestPermission(
        ImagePicker.requestMediaLibraryPermissionsAsync
      );
      setHasPermission(cameraOk && libraryOk);
    })();
  }, []);

  // --------------------------------------------------------------------
  // 2. Handlers – now fully async/await based (iOS loves this)
  // --------------------------------------------------------------------
  const pickImage = async (
    launcher: () => Promise<ImagePicker.ImagePickerResult>
  ) => {
    if (hasPermission === false) {
      Alert.alert('Permission denied', 'Cannot open picker without permission.');
      return;
    }

    try {
      const result = await launcher();

      // User cancelled
      if (result.canceled) {
        Alert.alert('Cancelled', 'Action was cancelled.');
        return;
      }

      // Error from native side
      if (result.assets === undefined || result.assets.length === 0) {
        Alert.alert('Error', 'No image was returned.');
        return;
      }

      const uri = result.assets[0].uri;
      return uri;
    } catch (e: any) {
      Alert.alert('Error', e.message ?? 'Something went wrong.');
    }
  };

  // ---- Take Photo (back camera) ------------------------------------------------
  const handleTakePhoto = async () => {
    const uri = await pickImage(() =>
      ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        quality: 0.8,
        cameraType: ImagePicker.CameraType.back,
      })
    );

    if (uri) {
      updateProfileData({ profilePhoto: uri });
      Alert.alert('Success', 'Photo captured!');
    }
  };

  // ---- Upload from Library ----------------------------------------------------
  const handleUpload = async () => {
    const uri = await pickImage(() =>
      ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        quality: 0.8,
        selectionLimit: 1,
      })
    );

    if (uri) {
      updateProfileData({ profilePhoto: uri });
      Alert.alert('Success', 'Photo uploaded!');
    }
  };

  // ---- Take Face Photo (front camera) -----------------------------------------
  const handleTakeFacePhoto = async () => {
    const uri = await pickImage(() =>
      ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        quality: 0.8,
        cameraType: ImagePicker.CameraType.front,
      })
    );

    if (uri) {
      // In a real app you would send the image to a face-recognition service
      updateProfileData({
        faceEncoding: 'placeholder-encoding',
      } as unknown as Partial<Profile>);
      Alert.alert('Success', 'Face photo captured for recognition!');
    }
  };

  // --------------------------------------------------------------------
  // 3. UI (unchanged except for a hidden Camera to keep the hook happy)
  // --------------------------------------------------------------------
  return (
    <View style={styles.container}>
      {/* Hidden Camera – required for the hook on iOS */}
      {/* Hidden Camera removed — permissions are requested explicitly in useEffect */}
      <CustomText style={styles.title}>Profile Photo</CustomText>
      <AvatarIcon height={50} width={50} />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.photoButton} onPress={handleTakePhoto}>
          <CameraIcon height={15} width={15} />
          <CustomText style={styles.name}>Take Photo</CustomText>
        </TouchableOpacity>

        <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
          <UploadIcon height={15} width={15} />
          <CustomText style={styles.name}>Upload</CustomText>
        </TouchableOpacity>

        <TouchableOpacity style={styles.faceButton} onPress={handleTakeFacePhoto}>
          <CameraIcon height={15} width={15} />
          <CustomText style={styles.name}>Take Face Photo</CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    width: '100%',
    flexWrap: 'wrap',
  },
  photoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    borderRadius: 8,
    backgroundColor: '#1347e1',
    paddingVertical: 10,
    paddingHorizontal: 15,
    minWidth: width * 0.3,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    borderRadius: 8,
    backgroundColor: '#2f2f30',
    paddingVertical: 10,
    paddingHorizontal: 20,
    minWidth: width * 0.3,
  },
  faceButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    borderRadius: 8,
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    minWidth: width * 0.3,
  },
});

export default ProfileSection;