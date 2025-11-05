// In DigiTabs.tsx
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { CustomTextBold } from '../../UI/CustomText';
import CreateProfileIcon from '@/app/assets/icons/General/user.svg';
import ScanQrCode from '@/app/assets/icons/General/scan.svg';
import ScanFace from '@/app/assets/icons/General/scan-user.svg';
import MyProfiles from '@/app/assets/icons/General/profiles.svg';
import { useRouter } from 'expo-router';


const DigiTabs = () => {
  const router = useRouter();

  const handleCreateProfile = () => {
    router.push('/screens/CreateScreen');
  };

  const handleScanQRCode = () => {
    router.push('/screens/ScanQRCodeScreen');
  };

  const handleScanFace = () => {
    router.push('/screens/ScanFace');
  };

  const handleMyProfile = () => {
    router.push('/screens/ViewCard');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tab} onPress={handleCreateProfile}>
        <CreateProfileIcon width={24} height={24} style={styles.icons} />
        <CustomTextBold style={styles.tabText}>Create Your Profile</CustomTextBold>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab2} onPress={handleScanQRCode}>
        <ScanQrCode width={24} height={24} style={styles.icons} />
        <CustomTextBold style={styles.tabText}>Scan QR Code</CustomTextBold>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab3} onPress={handleScanFace}>
        <ScanFace width={24} height={24} style={styles.icons} />
        <CustomTextBold style={styles.tabText}>Scan Face</CustomTextBold>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab4} onPress={handleMyProfile}>
        <MyProfiles width={24} height={24} style={styles.icons} />
        <CustomTextBold style={styles.tabText}>My Profiles</CustomTextBold>
      </TouchableOpacity>
    </View>
  );
};

export default DigiTabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 10,
  },
  tab: {
    backgroundColor: '#0e32ffff',
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
  tab2: {
    backgroundColor: '#540ff7ff',
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
  tab3: {
    backgroundColor: '#9208e2ff',
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
  tab4: {
    backgroundColor: '#777777ff',
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
  tabText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  icons: {
    height: 24,
    width: 24,
    tintColor: '#fff',
  },
});