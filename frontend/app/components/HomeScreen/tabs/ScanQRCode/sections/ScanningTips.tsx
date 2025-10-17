import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CustomText, CustomTextBold, CustomTextMedium, CustomTextSemiBold } from '@/app/components/ui/CustomText';

const ScanningTips = () => {
  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>Scanning Tips:</CustomText>
      <View style={styles.tipsContainer}>
        <CustomText style={styles.tip}>✓ Ensure good lighting conditions</CustomText>
        <CustomText style={styles.tip}>✓ Hold your device steady</CustomText>
        <CustomText style={styles.tip}>✓ Position QR code within the frame</CustomText>
        <CustomText style={styles.tip}>✓ Keep appropriate distance from QR code</CustomText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d9e9f7ff',
    borderRadius: 8,
    padding: 16,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0d00caff',
    marginBottom: 10,
  },
  tipsContainer: {
    paddingLeft: 10,
  },
  tip: {
    fontSize: 14,
    color: '#0d00caff',
    marginBottom: 8,
  },
});

export default ScanningTips;
