import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Digitals from '@/app/assets/icons/HomeScreen/managing.svg';

const Digital: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Digitals width={50} height={50} style={styles.icon} />

      </View>
      <Text style={styles.title}>Digital Business Cards</Text>
      <Text style={styles.description}>
        Create, share, and manage your professional contact information with QR
        codes and face recognition
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent', // Light blue background similar to the image
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  iconContainer: {
    backgroundColor: '#007AFF', // Blue circle background
    borderRadius: 50,
    padding: 15,
    marginBottom: 20,
  },
  icon: {
    width: 50,
    height: 50,
    tintColor: '#FFFFFF', // White icon for contrast
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

export default Digital;
