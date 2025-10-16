import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { CustomText, CustomTextBold, CustomTextMedium, CustomTextSemiBold } from '@/app/components/ui/CustomText';
import Dropdown from '@/app/components/shared/Dropdown';
import Input from '@/app/components/Input';

const SocialMedia = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [handleOrUrl, setHandleOrUrl] = useState('');
  const [socialMediaEntries, setSocialMediaEntries] = useState<
    { platform: string; handle: string }[]
  >([]);

  const handleAdd = () => {
    if (selectedPlatform && handleOrUrl) {
      setSocialMediaEntries([...socialMediaEntries, { platform: selectedPlatform, handle: handleOrUrl }]);
      setSelectedPlatform(null);
      setHandleOrUrl('');
    }
  };

  const renderEntry = ({ item }: { item: { platform: string; handle: string } }) => (
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
        <Input
          value={handleOrUrl}
          onChangeText={setHandleOrUrl}
          placeholder="Enter handle or URL"
        />
      </View>
      <FlatList
        data={socialMediaEntries}
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
