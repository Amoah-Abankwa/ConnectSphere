// LoginForm.tsx
import React, { useState } from 'react';
import type { AxiosError } from 'axios';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { authStorage } from '@/utils/authStorage';
import api from '@/utils/api';              // <-- NEW

export interface LoginFormProps {
  onSubmit: (creds: { email: string; password: string; rememberMe: boolean }) => void;
  onForgotPassword?: () => void;
  onCreateAccount?: () => void;
  /** Called after successful login (e.g. navigate) */
  onSuccess?: () => void;
}

/* API_BASE is no longer needed here – it lives in api.ts */

const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  onForgotPassword,
  onCreateAccount,
  onSuccess,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      // ---- AXIOS CALL -------------------------------------------------
      const { data } = await api.post('/login', { email, password });
      // -----------------------------------------------------------------

      // Store tokens & user
      await authStorage.setTokens(data.accessToken, data.refreshToken);
      await authStorage.setUser(data.user);

      // Keep old callback for compatibility
      onSubmit({ email, password, rememberMe });

      Alert.alert('Success', `Welcome back ${data.user.firstName}!`);
      onSuccess?.();
    } catch (e: any) {
      // Axios wraps server errors in `response`, network errors in `request`
      const err = e as AxiosError<{ error?: string }>;

      if (err.response) {
        // Server responded with non-2xx
        Alert.alert('Login failed', err.response.data?.error || 'Unknown error');
      } else if (err.request) {
        // No response (network / timeout)
        Alert.alert('Network error', 'Check your connection and try again.');
      } else {
        // Something else
        console.error(e);
        Alert.alert('Error', e.message);
      }
    } finally {
      setLoading(false);
    }
  };

  /* ---- UI stays 100 % the same ------------------------------------ */
  return (
    <View style={styles.container}>
      {/* Email */}
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="john@example.com"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
        />
      </View>

      {/* Password */}
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="••••••••"
          placeholderTextColor="#999"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
        />
      </View>

      {/* Remember me + Forgot */}
      <View style={styles.optionsRow}>
        <TouchableOpacity
          style={styles.rememberRow}
          onPress={() => setRememberMe(!rememberMe)}
        >
          <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
            {rememberMe && <Ionicons name="checkmark" size={14} color="#fff" />}
          </View>
          <Text style={styles.rememberText}>Remember me</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onForgotPassword}>
          <Text style={styles.forgotText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      {/* Sign In button */}
      <TouchableOpacity
        style={[styles.signInBtn, loading && styles.signInBtnDisabled]}
        onPress={handleSubmit}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.signInText}>Sign In</Text>
        )}
      </TouchableOpacity>

      {/* Create account */}
      <View style={styles.signupRow}>
        <Text style={styles.signupPrompt}>Don't have an account? </Text>
        <TouchableOpacity onPress={onCreateAccount}>
          <Text style={styles.signupLink}>Create one</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginForm;

/* ────────────────────────────── */
const styles = StyleSheet.create({
  container: { flex: 1 },

  inputWrapper: { marginBottom: 16 },
  label: { fontSize: 14, color: '#333', marginBottom: 6, fontWeight: '500' },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#FAFAFA',
  },

  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  rememberRow: { flexDirection: 'row', alignItems: 'center' },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#CCC',
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: { backgroundColor: '#007AFF', borderColor: '#007AFF' },
  rememberText: { fontSize: 14, color: '#333' },
  forgotText: { fontSize: 14, color: '#007AFF', fontWeight: '500' },

  signInBtn: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 24,
  },
  signInBtnDisabled: { backgroundColor: '#8cc0ff', opacity: 0.7 },
  signInText: { color: '#fff', fontSize: 18, fontWeight: '600' },

  signupRow: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  signupPrompt: { fontSize: 16, color: '#666' },
  signupLink: { fontSize: 16, color: '#007AFF', fontWeight: '600' },
});