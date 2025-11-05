// @/app/components/Shared/Dropdown.tsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { CustomText } from '../UI/CustomText';

interface DropdownOption {
  label: string;
  value: string | null;
}

interface DropdownProps {
  options: DropdownOption[];
  value: string | null;
  onValueChange: (value: string | null) => void;
  placeholder?: DropdownOption;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onValueChange,
  placeholder = { label: 'Select an option', value: null },
}) => {
  return (
    <View style={styles.container}>
      <RNPickerSelect
        onValueChange={onValueChange}
        items={options}
        value={value}
        placeholder={placeholder}
        style={pickerSelectStyles}
        useNativeAndroidPickerStyle={false}
        // Critical for iOS
        modalProps={{
          supportedOrientations: ['portrait', 'landscape'],
        }}
        fixAndroidTouchableBug={true}
      />
      {/* Optional: Show selected label */}
      <CustomText style={styles.selectedText}>
        {options.find((opt) => opt.value === value)?.label || placeholder.label}
      </CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  selectedText: {
    color: '#666',
    fontSize: 14,
    marginTop: 4,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    backgroundColor: '#f9f9f9',
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#f9f9f9',
  },
  placeholder: {
    color: '#999',
  },
  iconContainer: {
    top: 14,
    right: 12,
  },
});

export default Dropdown;