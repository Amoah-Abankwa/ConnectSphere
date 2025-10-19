import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { CustomText, CustomTextBold, CustomTextMedium, CustomTextSemiBold } from '@/app/components/UI/CustomText';


//ICONS
import CameraIcon from '@/app/assets/icons/create/camera.svg';


const StartScanning = () => {
  return (
    <View style={styles.container}>
      <View style={styles.previewContainer}>
        <CameraIcon width={50} height={50}/>
        <CustomText style={styles.previewText}>Camera preview will appear here</CustomText>
      </View>
      <TouchableOpacity style={styles.scanButton}>
        <CameraIcon width={20} height={20}/>
        <CustomText style={styles.scanButtonText}>Start Scanning</CustomText>
      </TouchableOpacity>
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
  previewContainer: {
    width: 300,
    height: 300,
    backgroundColor: '#f5f7fa',
    borderRadius: 8,
    justifyContent: 'center',
    gap: 10,
    alignItems: 'center',
    marginBottom: 16,
  },
  cameraIcon: {
    width: 50,
    height: 50,
    tintColor: '#666666',
  },
  previewText: {
    marginTop: 10,
    color: '#666666',
    fontSize: 14,
  },
  scanButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: '#5f42f1ff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: '100%',
  },
  buttonIcon: {
    width: 20,
    height: 20,
    tintColor: '#fff',
    marginRight: 8,
  },
  scanButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  startIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  previewIcon: {
    width: 50,
    height: 50,
  }

});

export default StartScanning;
