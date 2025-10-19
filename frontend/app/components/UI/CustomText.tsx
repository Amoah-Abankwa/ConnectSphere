import React from 'react';
import { StyleProp, Text, TextProps, TextStyle } from 'react-native';

type Props = TextProps & {
  style?: StyleProp<TextStyle>;
};

export const CustomText: React.FC<Props> = ({ style, children, ...props }) => (
  <Text
    style={[{ fontFamily: 'Poppins-Regular', color: '#374151' }, style]}
    {...props}
  >
    {children}
  </Text>
);

export const CustomTextMedium: React.FC<Props> = ({
  style,
  children,
  ...props
}) => (
  <Text
    style={[{ fontFamily: 'Poppins-Medium', color: '#374151' }, style]}
    {...props}
  >
    {children}
  </Text>
);

export const CustomTextSemiBold: React.FC<Props> = ({
  style,
  children,
  ...props
}) => (
  <Text
    style={[{ fontFamily: 'Poppins-SemiBold', color: '#374151' }, style]}
    {...props}
  >
    {children}
  </Text>
);

export const CustomTextBold: React.FC<Props> = ({
  style,
  children,
  ...props
}) => (
  <Text
    style={[{ fontFamily: 'Poppins-Bold', color: '#374151' }, style]}
    {...props}
  >
    {children}
  </Text>
);
