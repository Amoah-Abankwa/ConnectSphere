import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Alert } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import AvatarIcon from '../../../../../assets/icons/create/avatar.svg';
import CameraIcon from '../../../../../assets/icons/create/camera.svg';
import UploadIcon from '../../../../../assets/icons/create/upload.svg';
import { CustomText } from '@/app/components/ui/CustomText';

const { width } = Dimensions.get('window');

const ProfileSection = () => {
  const currentDateTime = new Date().toLocaleString('en-GB', {
    timeZone: 'GMT',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  // Handle "Take Photo" button press
  const handleTakePhoto = () => {
    launchCamera(
      {
        mediaType: 'photo',
        cameraType: 'back',
      },
      (response) => {
        if (response.didCancel) {
          Alert.alert('Cancelled', 'Camera action was cancelled.');
        } else if (response.errorCode) {
          Alert.alert('Error', `Camera error: ${response.errorMessage}`);
        } else if (response.assets) {
          Alert.alert('Success', 'Photo captured successfully!');
          // Handle the captured image (e.g., upload to server or display)
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
        } else if (response.assets) {
          Alert.alert('Success', 'Photo uploaded successfully!');
          // Handle the uploaded image (e.g., process the file)
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>Profile Photo</CustomText>
      <AvatarIcon style={styles.avatar} />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.photoButton} onPress={handleTakePhoto}>
          <CameraIcon style={styles.icon} />
          <CustomText style={styles.name}>Take Photo</CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
          <UploadIcon style={styles.icon} />
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
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  avatar: {
    width: 50,
    height: 50,
    padding: 40,
    borderRadius: 60,
    backgroundColor: '#D1D5DB', // Placeholder background
  },
  icon: {
    width: 15,
    height: 15,
    marginRight: 8,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    width: '100%',
    flexWrap: 'wrap', // Allow wrapping on smaller screens
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff', // Fixed invalid hex color
  },
  photoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#1347e1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    minWidth: width * 0.35, // Responsive button width
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#2f2f30', // Fixed invalid hex color
    paddingVertical: 10,
    paddingHorizontal: 20,
    minWidth: width * 0.35, // Responsive button width
  },
});

export default ProfileSection;
