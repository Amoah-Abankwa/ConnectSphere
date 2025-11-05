import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { CustomText } from '@/app/components/UI/CustomText'
import Scan from './sections/Scan'
import StartScanning from './sections/StartScanning'
import UploadQR from './sections/UploadQR'
import RecognitionTips from './sections/RecognitionTips'


  export default function ScanFace() {
  return (
    <View style={styles.container}>
      <Scan />
      <StartScanning />
      <UploadQR />
      <RecognitionTips />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
  },
})
