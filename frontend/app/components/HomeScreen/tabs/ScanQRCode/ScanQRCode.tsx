import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CustomText } from '@/app/components/UI/CustomText'
import Scan from './sections/Scan';
import StartScanning from './sections/StartScanning';
import UploadQR from './sections/UploadQR';
import ScanningTips from './sections/ScanningTips';

export default function QRCode() {
  return (
    <View style={styles.container}>
      <Scan />
      <StartScanning />
      <UploadQR />
      <ScanningTips />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
  },
});