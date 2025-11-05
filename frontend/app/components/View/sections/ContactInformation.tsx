import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CustomText, CustomTextBold, CustomTextMedium, CustomTextSemiBold } from '../../UI/CustomText';


//ICONS
import EmailIcon from '@/app/assets/icons/create/email.svg';
import CallIcon from '@/app/assets/icons/create/call.svg';
import WebIcon from '@/app/assets/icons/create/web.svg';

const ContactInformation = () => {
  return (
    <View style={styles.container}>
        <View>
           <CustomTextBold style={styles.Title}>Contact Information</CustomTextBold>
        </View>

        {/* Email */}
        <View style={styles.infoRow}> 
            <View> <EmailIcon width={24} height={24} /></View>
            <View style={styles.infoCol}>
                <CustomText>Email</CustomText>
                <CustomTextMedium>emmanuelohene11@gmail.com</CustomTextMedium>
            </View>
        </View>

        {/* Phone */}
        <View style={styles.infoRow}>
            <View><CallIcon width={24} height={24} /></View>
            <View style={styles.infoCol}>
                <CustomText>Phone</CustomText>
                <CustomTextMedium>0547457779</CustomTextMedium>
            </View>
        </View>

        {/* Website */}
        <View style={styles.infoRow}>
            <View><WebIcon width={24} height={24} /></View>
            <View style={styles.infoCol}>
                <CustomText>Website</CustomText>
                <CustomTextMedium>www.yenmotion.com</CustomTextMedium>
            </View>
        </View>
    </View>
  )
}

export default ContactInformation

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 20,
        paddingVertical: 10,
    },
    Title: {
        fontSize: 18,
        marginBottom: 10,
        color: '#000' 
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    infoCol: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },

})