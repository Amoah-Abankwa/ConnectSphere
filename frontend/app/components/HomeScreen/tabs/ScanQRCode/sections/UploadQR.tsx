import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { CustomText, CustomTextBold, CustomTextMedium, CustomTextSemiBold } from '@/app/components/UI/CustomText';
import UploadsIcon from '@/app/assets/icons/create/uploads.svg';

const UploadQR = () => {
  const handleUpload = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      },
      (response) => {
        if (response.didCancel) {
          Alert.alert('Cancelled', 'Image selection was cancelled.');
        } else if (response.errorCode) {
          Alert.alert('Error', `Image picker error: ${response.errorMessage}`);
        } else if (response.assets) {
          Alert.alert('Success', `Image selected: ${response.assets[0].fileName}`);
          // Handle the selected image here (e.g., process the QR code)
        }
      }
    );
  };

  return (
    <View style={styles.container}>
        <CustomText style={styles.title}>Or Upload QR Code Image</CustomText>
      <View style={styles.uploadContainer}>
        
        <TouchableOpacity style={styles.uploadArea} onPress={handleUpload}>
          <UploadsIcon width={50} height={50} />
          <CustomText style={styles.uploadText}>Click to upload QR code image</CustomText>
          <CustomText style={styles.formatText}>Supports JPG, PNG formats</CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
    fontWeight: 500,
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
  uploadIcon: {
    width: 50,
    height: 50,
    tintColor: '#666666',
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

export default UploadQR;
