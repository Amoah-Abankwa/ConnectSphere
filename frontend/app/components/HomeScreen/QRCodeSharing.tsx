import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CustomText, CustomTextBold, CustomTextMedium, CustomTextSemiBold } from '../UI/CustomText';
import QRCodeSharingIcon from '../../assets/icons/General/qrcode.svg';


const QRCodeSharing = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <QRCodeSharingIcon width={24} height={24} />
      </View>
      <CustomTextBold style={styles.contentTitle}>QR Code Sharing</CustomTextBold>
      <CustomText style={styles.contentSubtitle}>Generate and share QR for instant contact sharing</CustomText>
    </View>
  )
}

export default QRCodeSharing

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
    icon: {
      height: 30,
      width: 30,
      marginBottom: 10,
      borderRadius: 20,
      backgroundColor: '#fbd3d3ff',
      padding: 8
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
