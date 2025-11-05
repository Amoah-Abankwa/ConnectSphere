import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native';
import { Camera } from 'expo-camera';
import type { CameraType } from 'expo-camera';
import { useRouter } from 'expo-router';
import { CustomText } from '../../../../UI/CustomText';
import CameraIcon from '@/app/assets/icons/create/camera.svg';

// Cast Camera to a React component type to satisfy TypeScript JSX checks
const ExpoCamera = (Camera as unknown) as React.ComponentType<any>;

export default function StartScanning() {
  const router = useRouter();
  const [permission, setPermission] = useState<any | null>(null);
  const [isScanning, setIsScanning] = useState(false);

  const requestPermission = async () => {
    try {
      const res = await Camera.requestCameraPermissionsAsync();
      setPermission(res);
      return res;
    } catch (e) {
      console.error('Error requesting camera permission', e);
      return null;
    }
  };

  const handleStartScan = async () => {
    // Ensure we use the result of requesting permission immediately
    let res = permission;
    if (!permission) {
      res = await requestPermission();
    }

    if (res?.granted) {
      setIsScanning(true);
      // Placeholder: Capture face image and send to backend
      try {
        // In a real implementation, capture image from camera and send to /match-face
        const response = await fetch('http://localhost:5000/api/profiles/match-face', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ imageUri: 'placeholder-uri' }),
        });
        if (response.ok) {
          const matchedProfile = await response.json();
          Alert.alert('Success', 'Profile matched!');
          router.push({ pathname: '/view-card', params: { id: String(matchedProfile._id) } } as any);
        } else {
          Alert.alert('Error', 'No matching profile found.');
        }
      } catch (error) {
        Alert.alert('Error', 'Failed to process face scan.');
        console.error(error);
      }
      setIsScanning(false);
    } else {
      Alert.alert('Error', 'Camera permission denied.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.previewContainer}>
        {isScanning && permission?.granted ? (
          <ExpoCamera style={styles.camera} type={'front' as CameraType} />
        ) : (
          <>
            <CameraIcon width={20} height={20} />
            <CustomText style={styles.previewText}>Camera preview will appear here</CustomText>
          </>
        )}
      </View>
      <View>
        <TouchableOpacity style={styles.scanButton} onPress={handleStartScan}>
          <CameraIcon width={20} height={20} />
          <CustomText style={styles.scanButtonText}>Start Face Scan</CustomText>
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
  previewContainer: {
    width: 300,
    height: 300,
    backgroundColor: '#f5f7fa',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  camera: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
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
    backgroundColor: '#5f42f1ff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: '100%',
  },
  scanButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});