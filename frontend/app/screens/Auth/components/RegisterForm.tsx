import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {
  CustomText,
  CustomTextBold,
  CustomTextMedium,
  CustomTextSemiBold,
} from '@/app/components/UI/CustomText';

export interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface RegisterFormProps {
  onSubmit: (data: RegisterFormData) => void;
  onSignIn?: () => void;
  onSuccess?: () => void;
}

const API_BASE =
  process.env.EXPO_PUBLIC_API_URL ?? 'http://10.0.2.2:8081/api/auth';

const RegisterForm: React.FC<RegisterFormProps> = ({
  onSubmit,
  onSignIn,
  onSuccess,
}) => {
  const [form, setForm] = useState<RegisterFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);

  const updateField = (key: keyof RegisterFormData, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    const { firstName, lastName, email, password, confirmPassword } = form;

    // ---- client validation ----
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'All fields are required');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });

      const json = await res.json();

      if (!res.ok) {
        Alert.alert('Registration failed', json.error ?? 'Unknown error');
        return;
      }

      Alert.alert('Success', `Welcome ${firstName} ${lastName}!`);
      onSubmit(form);
      onSuccess?.();
    } catch (e: any) {
      console.error(e);
      Alert.alert('Network error', 'Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* First & Last Name */}
      <View style={styles.nameRow}>
        <View style={styles.nameField}>
          <CustomText style={styles.label}>
            First Name <CustomText style={styles.required}>*</CustomText>
          </CustomText>
          <TextInput
            style={styles.input}
            placeholder="John"
            value={form.firstName}
            onChangeText={(v) => updateField('firstName', v)}
            autoCapitalize="words"
          />
        </View>

        <View style={styles.nameField}>
          <CustomText style={styles.label}>
            Last Name <CustomText style={styles.required}>*</CustomText>
          </CustomText>
          <TextInput
            style={styles.input}
            placeholder="Doe"
            value={form.lastName}
            onChangeText={(v) => updateField('lastName', v)}
            autoCapitalize="words"
          />
        </View>
      </View>

      {/* Email */}
      <View style={styles.inputWrapper}>
        <CustomText style={styles.label}>
          Email Address <CustomText style={styles.required}>*</CustomText>
        </CustomText>
        <TextInput
          style={styles.input}
          placeholder="john@example.com"
          placeholderTextColor="#999"
          value={form.email}
          onChangeText={(v) => updateField('email', v)}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
        />
      </View>

      {/* Password */}
      <View style={styles.inputWrapper}>
        <CustomText style={styles.label}>
          Password <CustomText style={styles.required}>*</CustomText>
        </CustomText>
        <TextInput
          style={styles.input}
          placeholder="••••••••"
          placeholderTextColor="#999"
          value={form.password}
          onChangeText={(v) => updateField('password', v)}
          secureTextEntry
          autoCapitalize="none"
        />
      </View>

      {/* Confirm Password */}
      <View style={styles.inputWrapper}>
        <CustomText style={styles.label}>
          Confirm Password <CustomText style={styles.required}>*</CustomText>
        </CustomText>
        <TextInput
          style={styles.input}
          placeholder="••••••••"
          placeholderTextColor="#999"
          value={form.confirmPassword}
          onChangeText={(v) => updateField('confirmPassword', v)}
          secureTextEntry
          autoCapitalize="none"
        />
      </View>

      {/* Create Account */}
      <TouchableOpacity
        style={[styles.createBtn, loading && styles.createBtnDisabled]}
        onPress={handleSubmit}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <CustomText style={styles.createBtnText}>Create Account</CustomText>
        )}
      </TouchableOpacity>

      {/* Sign-In link */}
      <View style={styles.signInRow}>
        <CustomText style={styles.signInPrompt}>
          Already have an account?{' '}
        </CustomText>
        <TouchableOpacity onPress={onSignIn}>
          <CustomText style={styles.signInLink}>Sign In</CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterForm;

/* ────────────────────────────── */
const styles = StyleSheet.create({
  container: { flex: 1 },

  nameRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  nameField: { flex: 1, marginRight: 8 },

  inputWrapper: { marginBottom: 16 },
  label: { fontSize: 14, color: '#333', marginBottom: 6, fontWeight: '500' },
  required: { color: '#FF3B30' },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#FAFAFA',
  },

  createBtn: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 24,
  },
  createBtnDisabled: { backgroundColor: '#8cc0ff', opacity: 0.7 },
  createBtnText: { color: '#fff', fontSize: 18, fontWeight: '600' },

  signInRow: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  signInPrompt: { fontSize: 16, color: '#666' },
  signInLink: { fontSize: 16, color: '#007AFF', fontWeight: '600' },
});