import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { CustomText } from '../components/UI/CustomText';
import { Profile } from '../types/profile';
import { useLocalSearchParams } from 'expo-router';

export default function ViewCard() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5000/api/profiles/${id}`)
        .then(res => res.json())
        .then(data => setProfile(data))
        .catch(error => {
          Alert.alert('Error', 'Failed to fetch profile.');
          console.error(error);
        });
    }
  }, [id]);

  if (!profile) return <CustomText>Loading...</CustomText>;

  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>Profile Details</CustomText>
      <View style={styles.section}>
        <CustomText style={styles.sectionTitle}>Basic Information</CustomText>
        <CustomText>First Name: {profile.firstName}</CustomText>
        <CustomText>Last Name: {profile.lastName}</CustomText>
        {profile.middleName && <CustomText>Middle Name: {profile.middleName}</CustomText>}
        {profile.otherName && <CustomText>Other Name: {profile.otherName}</CustomText>}
      </View>
      <View style={styles.section}>
        <CustomText style={styles.sectionTitle}>Contact Information</CustomText>
        {profile.emailAddress && <CustomText>Email: {profile.emailAddress}</CustomText>}
        {profile.phoneNumber && <CustomText>Phone: {profile.phoneNumber}</CustomText>}
        {profile.website && <CustomText>Website: {profile.website}</CustomText>}
        {profile.companyName && <CustomText>Company: {profile.companyName}</CustomText>}
      </View>
      {profile.socialMedia && profile.socialMedia.length > 0 && (
        <View style={styles.section}>
          <CustomText style={styles.sectionTitle}>Social Media</CustomText>
          {profile.socialMedia.map((entry, index) => (
            <CustomText key={index}>{`${entry.platform}: ${entry.handle}`}</CustomText>
          ))}
        </View>
      )}
      {profile.profilePhoto && (
        <View style={styles.section}>
          <CustomText style={styles.sectionTitle}>Profile Photo</CustomText>
          <CustomText>Photo URI: {profile.profilePhoto}</CustomText>
        </View>
      )}
      <CustomText style={styles.status}>Status: {profile.status || 'Active'}</CustomText>
      <CustomText>Created: {profile.createdAt ? new Date(profile.createdAt).toLocaleDateString('en-GB') : 'Unknown'}</CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  status: {
    fontSize: 14,
    color: '#2ecc71',
    marginTop: 10,
  },
});