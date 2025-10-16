import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ProfileSection from './sections/ProfileScetion'
import BasicInformation from './sections/BasicInformation'
import ContactInformation from './sections/ContactInformation'
import SocialMedia from './sections/SocialMedia'
import { CustomText } from '@/app/components/ui/CustomText'

const CreateProfile = () => {
  return (
    <View style={styles.container}>
      <ProfileSection />
      <BasicInformation />
      <ContactInformation />
      <SocialMedia />
      <TouchableOpacity style={styles.button}>
         <CustomText style={styles.createProfileText}>
              Create Profile
         </CustomText>
      </TouchableOpacity>
    </View>
  )
}

export default CreateProfile

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
