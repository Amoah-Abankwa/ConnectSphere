import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { CustomText, CustomTextBold, CustomTextMedium, CustomTextSemiBold } from '../ui/CustomText';
import EasyShareIcon from '../../assets/icons/General/share.svg';

const EasySharing = () => {
  return (
    <View style={styles.container}>
        <EasyShareIcon style={styles.icon} />
        <CustomTextBold>Easy Sharing</CustomTextBold>
        <CustomText>Share your profile via link or QR Code instantly.</CustomText>
    </View>
  )
}

export default EasySharing

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 20,
        marginHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 10,
        minHeight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: 'column',
    }, 
     icon: {
      height: 20,
      width: 20,
      marginBottom: 10,
      borderRadius: 20,
      backgroundColor: '#fbd3d3ff',
      padding: 8
    }
})
