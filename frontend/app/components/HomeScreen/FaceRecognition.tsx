import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { CustomText, CustomTextBold, CustomTextMedium, CustomTextSemiBold } from '../ui/CustomText';
import FaceRecognitionIcon from '../../assets/icons/General/scan.svg';

const FaceRecognition = () => {
  return (
    <View style={styles.container}>
      <FaceRecognitionIcon style={styles.icon} />
      <CustomTextBold>Face Recognition</CustomTextBold>
      <CustomText>Scan faces to quickly access contact information</CustomText>
    </View>
  )
}

export default FaceRecognition

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
