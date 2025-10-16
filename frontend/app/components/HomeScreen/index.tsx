import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import QRCodeSharing from './QRCodeSharing'
import FaceRecognition from './FaceRecognition'
import EasySharing from './EasySharing'

const Lower = () => {
  return (
    <View style={styles.container}>
      <QRCodeSharing />
      <FaceRecognition />
      <EasySharing />
    </View>
  )
}

export default Lower

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        marginBottom: 10,
        gap: 10,
    }
})
