import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CustomText, CustomTextBold, CustomTextMedium, CustomTextSemiBold } from '../UI/CustomText'

const Header = () => {
  return (
    <View style={styles.container}>
      <CustomText style={styles.Title}>Connect Sphere</CustomText>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    Title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000',
    }
})
