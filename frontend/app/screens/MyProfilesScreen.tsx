import { StyleSheet, Text, View, ScrollView, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/Shared/Header'
import MyProfiles from '../components/HomeScreen/tabs/MyProfiles/MyProfiles'
import Nav from '../components/Shared/Nav'


const MyProfilesScreen = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      
      
        <Nav title='My Profiles'/>
        <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <MyProfiles />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default MyProfilesScreen

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