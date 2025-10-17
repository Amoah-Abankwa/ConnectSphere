import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Digitals from '@/app/assets/icons/HomeScreen/managing.svg';

const Scan: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Digitals style={styles.icon} />

      </View>
      <Text style={styles.title}>Face Recognition</Text>
      <Text style={styles.description}>
        Scan a face to find matching contact profiles
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

export default Scan;
