import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { CustomText, CustomTextBold, CustomTextMedium, CustomTextSemiBold } from '../UI/CustomText';
import EasyShareIcon from '@/app/assets/icons/General/share.svg';

const EasySharing = () => {
  return (
    <View style={styles.container}>
       <View style={styles.iconContainer}>
          <EasyShareIcon width={24} height={24} />
        </View>
        <CustomTextBold style={styles.contentTitle}>Easy Sharing</CustomTextBold>
        <CustomText style={styles.contentSubtitle}>Share your profile via link or QR Code instantly.</CustomText>
    </View>
  )
}

export default EasySharing

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 20,
        paddingVertical: 10,
        marginBottom: 10,
        minHeight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: 'column',
    }, 
    
    
    iconContainer: {
    backgroundColor: '#b4d4f6ff', // Blue circle background
    borderRadius: 25,
    padding: 10,
    marginBottom: 10,
  },
  contentTitle: {
    marginBottom: 5,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
    color: '#000',
  },
  contentSubtitle: {
    textAlign: 'center',
    fontSize: 14,
    color: '#555',  
  }
})
