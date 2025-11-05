import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Digitals from '@/app/assets/icons/HomeScreen/managing.svg';

export default function Scan() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Digitals style={styles.icon} />
      </View>
      <Text style={styles.title}>Scan QR Code</Text>
      <Text style={styles.description}>
        Point your camera at a QR code to view the contact profile
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  iconContainer: {
    backgroundColor: '#007AFF',
    borderRadius: 50,
    padding: 15,
    marginBottom: 20,
  },
  icon: {
    width: 50,
    height: 50,
    tintColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
    lineHeight: 22,
  },
});