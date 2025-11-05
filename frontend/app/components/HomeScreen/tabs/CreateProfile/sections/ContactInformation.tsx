import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { CustomText } from '../../../../../components/UI/CustomText';
import { Profile } from '../../../../../types/profile';

interface ContactInformationProps {
  profileData: Profile;
  updateProfileData: (updates: Partial<Profile>) => void;
}

const ContactInformation: React.FC<ContactInformationProps> = ({ profileData, updateProfileData }) => {
  return (
    <View style={styles.container}>
      <CustomText style={styles.sectionTitle}>Contact Information</CustomText>
      <View style={styles.inputContainer}>
        <CustomText style={styles.label}>Email Address</CustomText>
        <TextInput
          style={styles.input}
          placeholder="Enter email address"
          value={profileData.emailAddress}
          onChangeText={(text) => updateProfileData({ emailAddress: text })}
        />
      </View>
      <View style={styles.inputContainer}>
        <CustomText style={styles.label}>Phone Number</CustomText>
        <TextInput
          style={styles.input}
          placeholder="Enter phone number"
          value={profileData.phoneNumber}
          onChangeText={(text) => updateProfileData({ phoneNumber: text })}
        />
      </View>
      <View style={styles.inputContainer}>
        <CustomText style={styles.label}>Website</CustomText>
        <TextInput
          style={styles.input}
          placeholder="Enter website URL"
          value={profileData.website}
          onChangeText={(text) => updateProfileData({ website: text })}
        />
      </View>
      <View style={styles.inputContainer}>
        <CustomText style={styles.label}>Company Name</CustomText>
        <TextInput
          style={styles.input}
          placeholder="Enter company name"
          value={profileData.companyName}
          onChangeText={(text) => updateProfileData({ companyName: text })}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  inputContainer: {
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    color: '#000',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 8,
    backgroundColor: 'transparent',
    fontSize: 14,
  },
});

export default ContactInformation;