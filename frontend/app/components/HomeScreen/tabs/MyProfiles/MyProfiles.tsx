import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import Profiles from './sections/Profiles';
import { CustomText } from '../../../../components/UI/CustomText';
import { Profile } from '../../../../types/profile';

export default function MyProfiles() {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  const fetchProfiles = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/profiles');
      const data = await response.json();
      setProfiles(data);
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch profiles.');
      console.error(error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:5000/api/profiles/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setProfiles(profiles.filter(profile => profile._id !== id));
        Alert.alert('Success', 'Profile deleted successfully.');
      } else {
        Alert.alert('Error', 'Failed to delete profile.');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred while deleting the profile.');
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>My Profiles</CustomText>
      <FlatList
        data={profiles}
        renderItem={({ item }) => <Profiles profile={item} onDelete={handleDelete} />}
        keyExtractor={item => item._id!}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
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
});