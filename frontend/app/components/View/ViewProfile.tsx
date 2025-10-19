import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfileView from './sections/ProfileView'
import ContactInformation from './sections/ContactInformation'

const ViewProfile = () => {
  return (
    <View>
      <ProfileView />
      <ContactInformation />
    </View>
  )
}

export default ViewProfile

const styles = StyleSheet.create({})
