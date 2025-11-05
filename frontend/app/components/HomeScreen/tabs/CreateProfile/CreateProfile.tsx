import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import ProfileSection from './sections/ProfileSection';
import BasicInformation from './sections/BasicInformation';
import ContactInformation from './sections/ContactInformation';
import SocialMedia from './sections/SocialMedia';
import { CustomText } from '../../../../components/UI/CustomText';
import { Profile } from '../../../../types/profile';
import { useRouter } from 'expo-router';
import { Camera, CameraType } from 'expo-camera';

export default function CreateProfile() {
  const router = useRouter();
  const [profileData, setProfileData] = useState<Profile>({
    firstName: '',
    lastName: '',
    middleName: '',
    otherName: '',
    emailAddress: '',
    phoneNumber: '',
    website: '',
    companyName: '',
    socialMedia: [],
    profilePhoto: '',
    status: 'Active',
  });

  const updateProfileData = (updates: Partial<Profile>) => {
    setProfileData(prev => ({ ...prev, ...updates }));
  };

  const handleCreateProfile = async () => {
    if (!profileData.firstName || !profileData.lastName) {
      Alert.alert('Error', 'First Name and Last Name are required.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/profiles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profileData),
      });

      if (response.ok) {
        Alert.alert('Success', 'Profile created successfully!');
        router.push('/screens/ViewCard');
      } else {
        const errorData = await response.json();
        Alert.alert('Error', `Failed to create profile: ${errorData.error}`);
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred while creating the profile.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <ProfileSection updateProfileData={updateProfileData} />
      <BasicInformation profileData={profileData} updateProfileData={updateProfileData} />
      <ContactInformation profileData={profileData} updateProfileData={updateProfileData} />
      <SocialMedia profileData={profileData} updateProfileData={updateProfileData} />
      <TouchableOpacity style={styles.button} onPress={handleCreateProfile}>
        <CustomText style={styles.createProfileText}>Create Profile</CustomText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
  },
  createProfileText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#ffffff',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 10,
  },
});