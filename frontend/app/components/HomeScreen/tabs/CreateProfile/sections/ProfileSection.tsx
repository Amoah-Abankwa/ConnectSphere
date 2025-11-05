import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Alert } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import AvatarIcon from '../../../../../assets/icons/create/avatar.svg';
import CameraIcon from '../../../../../assets/icons/create/camera.svg';
import UploadIcon from '../../../../../assets/icons/create/upload.svg';
import { CustomText } from '../../../../../components/UI/CustomText';
import { Profile } from '../../../../../types/profile';

const { width } = Dimensions.get('window');

interface ProfileSectionProps {
  updateProfileData: (updates: Partial<Profile>) => void;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ updateProfileData }) => {
  // Handle "Take Photo" button press
  const handleTakePhoto = () => {
  launchCamera(
    {
      mediaType: 'photo',
      cameraType: 'back',
    },
    (response) => {
      console.log('Camera Response:', response); // Add this

      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
        Alert.alert('Error', response.errorMessage || 'Unknown error');
      } else if (response.assets && response.assets[0]?.uri) {
        updateProfileData({ profilePhoto: response.assets[0].uri });
        Alert.alert('Success', 'Photo captured!');
      }
    }
  );
};

  // Handle "Upload" button press
  const handleUpload = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        selectionLimit: 1,
      },
      (response) => {
        if (response.didCancel) {
          Alert.alert('Cancelled', 'Upload action was cancelled.');
        } else if (response.errorCode) {
          Alert.alert('Error', `Upload error: ${response.errorMessage}`);
        } else if (response.assets && response.assets[0].uri) {
          updateProfileData({ profilePhoto: response.assets[0].uri });
          Alert.alert('Success', 'Photo uploaded successfully!');
        }
      }
    );
  };

  return (
    <View style={styles.container}>
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
    minWidth: width * 0.35,
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
    minWidth: width * 0.35,
  },
});

export default ProfileSection;