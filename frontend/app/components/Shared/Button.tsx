import React from 'react';
import {
  Pressable,
  Text,
  View,
  StyleSheet,
  ViewStyle,
  TextStyle,
  StyleProp
} from 'react-native';
import { CustomText } from '../UI/CustomText';

type Props = {
  icon?: React.ReactNode;
  text: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
  style?: StyleProp<ViewStyle>
  textStyle?: TextStyle;
  fontSize?: number;
  disabled?: boolean;  
};

export default function Button({
  icon,
  text,
  onPress,
  backgroundColor = '#544FFF',
  textColor = '#fff',
  style,
  textStyle,
  fontSize = 16,
}: Props) {
  const hasText = text && text.trim().length > 0;

  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, { backgroundColor }, style]}
    >
      {icon && hasText ? (
        <View style={styles.content}>
          {icon}
          <CustomText
            style={[styles.text, { color: textColor, fontSize }, textStyle]}
          >
            {text}
          </CustomText>
        </View>
      ) : icon && !hasText ? (
        icon
      ) : (
        <CustomText
          style={[styles.text, { color: textColor, fontSize }, textStyle]}
        >
          {text}
        </CustomText>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
  },
});
