import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CustomText, CustomTextBold, CustomTextMedium, CustomTextSemiBold } from '../../UI/CustomText'
import AvatarIcon from '@/app/assets/icons/create/avatar.svg';

const ProfileView = () => {
  return (
    <View>
      <View style={styles.iconContainer}>
          <AvatarIcon width={24} height={24} />
      </View>
      <View>
        <CustomTextBold>John Doe</CustomTextBold>
        <CustomTextMedium>Yen Motion</CustomTextMedium>
      </View>
    </View>
  )
}

export default ProfileView

const styles = StyleSheet.create({
    iconContainer: {
    backgroundColor: '#f0e1ff', // Blue circle background
    padding: 10,
    borderRadius: 25,}
})
