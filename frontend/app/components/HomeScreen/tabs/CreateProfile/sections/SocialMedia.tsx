import React, { useState } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { CustomText } from '../../../../../components/UI/CustomText';
import Dropdown from '@/app/components/Shared/Dropdown';
import Input from '@/app/components/Shared/Input';
import { Profile, SocialMediaEntry } from '../../../../../types/profile';

interface SocialMediaProps {
  profileData: Profile;
  updateProfileData: (updates: Partial<Profile>) => void;
}

const SocialMedia: React.FC<SocialMediaProps> = ({ profileData, updateProfileData }) => {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [handleOrUrl, setHandleOrUrl] = useState('');

  const handleAdd = () => {
    if (selectedPlatform && handleOrUrl) {
      const newSocialMedia = [
        ...(profileData.socialMedia || []),
        { platform: selectedPlatform, handle: handleOrUrl },
      ];
      updateProfileData({ socialMedia: newSocialMedia });
      setSelectedPlatform(null);
      setHandleOrUrl('');
    }
  };

  const renderEntry = ({ item }: { item: SocialMediaEntry }) => (
    <View style={styles.entry}>
      <CustomText>{`${item.platform}: ${item.handle}`}</CustomText>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CustomText style={styles.sectionTitle}>Social Media</CustomText>
        <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
          <CustomText style={styles.addButtonText}>+ Add</CustomText>
        </TouchableOpacity>
      </View>
      <View style={styles.inputRow}>
  <View style={{ flex: 1 }}>
    <Dropdown
      options={[
        { label: 'LinkedIn', value: 'linkedin' },
        { label: 'Twitter', value: 'twitter' },
        { label: 'Instagram', value: 'instagram' },
        { label: 'Facebook', value: 'facebook' },
        { label: 'GitHub', value: 'github' },
        { label: 'YouTube', value: 'youtube' },
        { label: 'TikTok', value: 'tiktok' },
        { label: 'SnapChat', value: 'snapchat' },
      ]}
      value={selectedPlatform}
      onValueChange={(value) => setSelectedPlatform(value)}
      placeholder={{ label: 'Select Platform', value: null }}
    />
  </View>
  <View style={{ flex: 1 }}>
    <Input
      value={handleOrUrl}
      onChangeText={setHandleOrUrl}
      placeholder="Enter handle or URL"
    />
  </View>
</View>
      <FlatList
        data={profileData.socialMedia}
        renderItem={renderEntry}
        keyExtractor={(item, index) => index.toString()}
        style={styles.list}
      />
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  addButton: {
    backgroundColor: '#1e90ff',
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    marginBottom: 16,
  },
  list: {
    marginTop: 16,
  },
  entry: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default SocialMedia;