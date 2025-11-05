import { StyleSheet, Text, View, ScrollView, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import Nav from '../components/Shared/Nav'
import ScanQRCode from '../components/HomeScreen/tabs/ScanQRCode/ScanQRCode'


const ScanQRCodeScreen = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      
      
        <Nav title="Scan Code" />
        <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ScanQRCode />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default ScanQRCodeScreen

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