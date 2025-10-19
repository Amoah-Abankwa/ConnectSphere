import React from 'react';
import { View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

interface DropdownProps {
  options: { label: string; value: string }[];
  value: string | null;
  onValueChange: (value: string | null) => void;
  placeholder: { label: string; value: null };
}

const Dropdown: React.FC<DropdownProps> = ({ options, value, onValueChange, placeholder }) => {
  return (
    <View style={styles.container}>
      <RNPickerSelect
        style={pickerSelectStyles}
        onValueChange={onValueChange}
        items={options}
        placeholder={placeholder}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 8,
    backgroundColor: 'transparent',
    fontSize: 14,
    flex: 1,
  },
});

export default Dropdown;
