import { StyleSheet, Text, View, ScrollView, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/Shared/Header'
import CreateProfile from '../components/HomeScreen/tabs/CreateProfile/CreateProfile'
import Nav from '../components/Shared/Nav'


const CreateScreen = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      
      
        <Nav title="Create Profile" />
        <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CreateProfile />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default CreateScreen

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