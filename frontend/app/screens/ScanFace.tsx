import { StyleSheet, Text, View, ScrollView, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import Nav from '../components/Shared/Nav'
import FaceRecognition from '../components/HomeScreen/tabs/ScanFace/FaceRecognition'


const ScanFace = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      
      
        <Nav title="Face Recognition" />
        <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FaceRecognition />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default ScanFace

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#e3ecfcff',
  },
  container: {
    flex: 1,
    backgroundColor: '#e7effcff',
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 10
  }
})