import { StyleSheet, Text, View, ScrollView, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/Shared/Header'
import Digital from '../components/HomeScreen/Digital'
import DigiTabs from '../components/HomeScreen/tabs/DigiTabs'
import Lower from '../components/HomeScreen'


const HomeScreen = () => {
  
  return (
    <SafeAreaView style={styles.safeContainer}>
      
        <Header />
        <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Digital />
          <DigiTabs />
          <Lower />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

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