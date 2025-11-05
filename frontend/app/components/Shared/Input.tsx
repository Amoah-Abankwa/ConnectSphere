import React from 'react';
import { TextInput, TextInputProps, StyleSheet, View } from 'react-native';

interface InputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ value, onChangeText, placeholder, style, ...props }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, style]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 8,
    backgroundColor: 'transparent',
    fontSize: 14,
  },
});

export default Input;