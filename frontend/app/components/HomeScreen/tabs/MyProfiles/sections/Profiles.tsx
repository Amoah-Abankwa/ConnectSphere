import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { CustomText, CustomTextBold, CustomTextMedium, CustomTextSemiBold } from '@/app/components/ui/CustomText';

//ICONS
import AvatarIcon from '@/app/assets/icons/create/avatar.svg';
import LinkIcon from '@/app/assets/icons/create/link.svg';
import DeleteIcon from '@/app/assets/icons/create/delete.svg';
import ViewIcon from '@/app/assets/icons/create/eye.svg';


const Profiles = () => {
    const { width } = Dimensions.get('window');
  const scaleFactor = width / 375; // Normalize to a 375px base width (common iPhone design width)
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <AvatarIcon style={styles.profileIcon}/>
        <View style={styles.profileInfo}>
          <CustomText style={styles.name}>Emma amoah yen</CustomText>
          <CustomText style={styles.email}>vidaopoku2025@gmail.com</CustomText>
        </View>
      </View>
      <View style={styles.statusRow}>
        <CustomText style={styles.date}>Created Oct 16, 2025</CustomText>
        <CustomText style={styles.status}>Active</CustomText>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.viewButton}>
            <ViewIcon style={styles.buttonIcon}/>
          <CustomText style={styles.viewButtonText}>View</CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editButton}>
          <LinkIcon style={styles.buttonIcon}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton}>
          <DeleteIcon style={styles.buttonIcon}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginTop: 10,
    width: '100%',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#4a6ef5',
    tintColor: '#fff',
    marginRight: 10,
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  date: {
    fontSize: 12,
    color: '#666',
  },
  status: {
    fontSize: 12,
    color: '#2ecc71',
    backgroundColor: '#e0ffe6',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewButton: {
    backgroundColor: '#4a6ef5',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    flex: 1,
    marginRight: 5,
  },
  viewButtonText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  editButton: {
    backgroundColor: '#666',
    borderRadius: 8,
    padding: 8,
    marginRight: 5,
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    borderRadius: 8,
    padding: 8,
  },
  buttonIcon: {
    width: 20,
    height: 20,
    tintColor: '#fff',
  },
});

export default Profiles;
