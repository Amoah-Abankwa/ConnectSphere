import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { CustomText } from '@/app/components/ui/CustomText'
import Profiles from './sections/Profiles'

const MyProfiles = () => {
  return (
    <View style={styles.container}>
        <Profiles />
    </View>
  )
}

export default MyProfiles

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
