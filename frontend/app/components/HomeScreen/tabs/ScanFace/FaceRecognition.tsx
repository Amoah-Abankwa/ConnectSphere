import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { CustomText } from '@/app/components/ui/CustomText'
import Scan from './sections/Scan'
import StartScanning from './sections/StartScanning'
import UploadQR from './sections/UploadQR'
import RecognitionTips from './sections/RecognitionTips'

const ScanFace = () => {
  return (
    <View style={styles.container}>
      <Scan />
      <StartScanning />
      <UploadQR />
      <RecognitionTips />
    </View>
  )
}

export default ScanFace

const styles = StyleSheet.create({
  container: {
    paddingBottom: 100,
  },
  createProfileText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#ffffffff',
  },
  button: { 
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 10,
  }

})
