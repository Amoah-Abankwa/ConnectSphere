import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
} from 'react-native';
import { Camera, CameraView, CameraType, useCameraPermissions, BarcodeScanningResult } from 'expo-camera';
import { useRouter } from 'expo-router';
import {
  CustomText,
} from '@/app/components/UI/CustomText';
import CameraIcon from '@/app/assets/icons/create/camera.svg';

export default function StartScanning() {
  const router = useRouter();
  const [permission, requestPermission] = useCameraPermissions();
  const [isScanning, setIsScanning] = useState(false);

  // Request permission on mount
  useEffect(() => {
    (async () => {
      const { status } = await Camera.getCameraPermissionsAsync();
      if (status !== 'granted') {
        await requestPermission();
      }
    })();
  }, []);

  const handleStartScan = async () => {
    if (!permission) {
      await requestPermission();
    } else if (permission.granted) {
      setIsScanning(true);
    } else {
      Alert.alert('Error', 'Camera permission denied.');
    }
  };

  const handleBarCodeScanned = async ({ type, data }: BarcodeScanningResult) => {
    if (!data) return;

    setIsScanning(false);
    try {
      const response = await fetch('http://localhost:5000/api/profiles/match-qr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ qrCodeId: data }),
      });

      if (response.ok) {
        const matchedProfile = await response.json();
        Alert.alert('Success', 'Profile matched!');
        router.push({
          pathname: '/view-card',
          params: { id: String(matchedProfile._id) },
        } as any);
      } else {
        Alert.alert('Error', 'No profile found for this QR code.');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to process QR code.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.previewContainer}>
        {isScanning && permission?.granted ? (
          <CameraView
            style={styles.camera}
            facing="back"
            barcodeScannerSettings={{
              barcodeTypes: ['qr'],
            }}
            onBarcodeScanned={handleBarCodeScanned}
          />
        ) : (
          <>
            <CameraIcon width={50} height={50} />
            <CustomText style={styles.previewText}>
              Camera preview will appear here
            </CustomText>
          </>
        )}
      </View>

      <TouchableOpacity style={styles.scanButton} onPress={handleStartScan}>
        <CameraIcon width={20} height={20} />
        <CustomText style={styles.scanButtonText}>Start Scanning</CustomText>
      </TouchableOpacity>
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
    gap: 10,
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
    gap: 10,
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