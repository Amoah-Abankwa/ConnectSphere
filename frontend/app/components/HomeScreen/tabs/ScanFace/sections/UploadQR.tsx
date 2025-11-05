import React from 'react';
import { View, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { useRouter } from 'expo-router';
import { CustomText } from '../../../../UI/CustomText';
import UploadsIcon from '@/app/assets/icons/create/uploads.svg';

export default function UploadQR() {
  const router = useRouter();

  const handleUpload = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      },
      async (pickerResponse) => {
        if (pickerResponse.didCancel) {
          Alert.alert('Cancelled', 'Image selection was cancelled.');
        } else if (pickerResponse.errorCode) {
          Alert.alert('Error', `Image picker error: ${pickerResponse.errorMessage}`);
        } else if (pickerResponse.assets) {
          try {
            const response = await fetch('http://localhost:5000/api/profiles/match-face', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ imageUri: pickerResponse.assets[0].uri }),
            });
            if (response.ok) {
              const matchedProfile = await response.json();
              Alert.alert('Success', 'Profile matched!');
              router.push({ pathname: '/view-card', params: { id: String(matchedProfile._id) } } as any);
            } else {
              Alert.alert('Error', 'No matching profile found.');
            }
          } catch (error) {
            Alert.alert('Error', 'Failed to process uploaded image.');
            console.error(error);
          }
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>Or Upload Face Image</CustomText>
      <View style={styles.uploadContainer}>
        <TouchableOpacity style={styles.uploadArea} onPress={handleUpload}>
          <UploadsIcon width={50} height={50} />
          <CustomText style={styles.uploadText}>Click to upload face image</CustomText>
          <CustomText style={styles.formatText}>Supports JPG, PNG formats</CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
    textAlign: 'center',
    marginBottom: 10,
  },
  uploadContainer: {
    width: 300,
    height: 200,
    backgroundColor: '#f5f7fa',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadArea: {
    alignItems: 'center',
  },
  uploadText: {
    marginTop: 10,
    color: '#666666',
    fontSize: 14,
  },
  formatText: {
    marginTop: 5,
    color: '#666666',
    fontSize: 12,
  },
});