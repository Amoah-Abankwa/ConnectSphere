import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CustomText, CustomTextBold, CustomTextMedium, CustomTextSemiBold } from '../ui/CustomText';
import QRCodeSharingIcon from '../../assets/icons/General/qrcode.svg';


const QRCodeSharing = () => {
  return (
    <View style={styles.container}>
      <QRCodeSharingIcon style={styles.icon}/>
      <CustomTextBold>QR Code Sharing</CustomTextBold>
      <CustomText>Generate and share QR for instant contact sharing</CustomText>
    </View>
  )
}

export default QRCodeSharing

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 20,
        paddingVertical: 10,
        marginHorizontal: 20,
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
    }
})
