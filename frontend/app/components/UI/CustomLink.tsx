import React from "react";
import {
  Pressable,
  Linking,
  StyleSheet,
  ViewStyle,
  GestureResponderEvent,
} from "react-native";
import { router } from "expo-router";
import { CustomText } from "./CustomText";

type CustomLinkProps = {
  children: React.ReactNode;
  to?: string;
  url?: string;
  style?: ViewStyle;
  onPress?: (event: GestureResponderEvent) => void;
};

export default function CustomLink({
  children,
  to,
  url,
  style,
  onPress,
}: CustomLinkProps) {
  const handlePress = (event: GestureResponderEvent) => {
    if (onPress) {
      onPress(event);
      return;
    }

    if (to) {
      router.push(to);
    } else if (url) {
      Linking.openURL(url);
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [pressed && styles.pressed, style]}
    >
      <CustomText style={styles.text}>{children}</CustomText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    color: "#6c5ce7",
  },
  pressed: {
    opacity: 0.7,
  },
});
