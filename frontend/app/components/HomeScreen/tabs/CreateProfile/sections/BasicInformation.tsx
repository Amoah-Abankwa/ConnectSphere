import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { CustomText } from '../../../../../components/UI/CustomText';
import { Profile } from '../../../../../types/profile';

interface BasicInformationProps {
  profileData: Profile;
  updateProfileData: (updates: Partial<Profile>) => void;
}

const BasicInformation: React.FC<BasicInformationProps> = ({ profileData, updateProfileData }) => {
  return (
    <View style={styles.container}>
      <CustomText style={styles.sectionTitle}>Basic Information</CustomText>
      <View style={styles.inputContainer}>
        <CustomText style={styles.label}>
          First Name <CustomText style={styles.required}>*</CustomText>
        </CustomText>
        <TextInput
          style={styles.input}
          placeholder="Enter first name"
          value={profileData.firstName}
          onChangeText={(text) => updateProfileData({ firstName: text })}
        />
      </View>
      <View style={styles.inputContainer}>
        <CustomText style={styles.label}>
          Last Name <CustomText style={styles.required}>*</CustomText>
        </CustomText>
        <TextInput
          style={styles.input}
          placeholder="Enter last name"
          value={profileData.lastName}
          onChangeText={(text) => updateProfileData({ lastName: text })}
        />
      </View>
      <View style={styles.inputContainer}>
        <CustomText style={styles.label}>Middle Name</CustomText>
        <TextInput
          style={styles.input}
          placeholder="Enter middle name"
          value={profileData.middleName}
          onChangeText={(text) => updateProfileData({ middleName: text })}
        />
      </View>
      <View style={styles.inputContainer}>
        <CustomText style={styles.label}>Other Name</CustomText>
        <TextInput
          style={styles.input}
          placeholder="Enter other name"
          value={profileData.otherName}
          onChangeText={(text) => updateProfileData({ otherName: text })}
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
  required: {
    color: '#ff0000',
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

export default BasicInformation;