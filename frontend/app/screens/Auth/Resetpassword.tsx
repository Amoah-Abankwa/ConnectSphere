// app/(auth)/reset-password.tsx
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';

const ResetPassword = () => {
  const router = useRouter();
  const params = useLocalSearchParams(); // e.g. ?token=abc123

  const token = params.token as string;

  // Simulate invalid/expired token (in real app, validate with backend)
  const isValid = false; // Change to `true` for valid flow

  const goToRequestReset = () => router.replace('/');
  const goToLogin = () => router.replace('/screens/Auth/Login');

  if (isValid) {
    // Optional: Show actual reset form here
    return (
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.keyboard}>
          <View style={styles.content}>
            <Text style={styles.title}>Set New Password</Text>
            {/* Add password + confirm fields */}
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.keyboard}>
        <View style={styles.content}>

          {/* Modal Card */}
          <View style={styles.modalCard}>

            {/* Error Icon */}
            <View style={styles.iconCircle}>
              <Ionicons name="close-circle" size={40} color="#FF3B30" />
            </View>

            {/* Title */}
            <Text style={styles.modalTitle}>Invalid Reset Link</Text>

            {/* Subtitle */}
            <Text style={styles.modalSubtitle}>
              This password reset link is invalid or has expired.
            </Text>

            {/* Request New Link Button */}
            <TouchableOpacity style={styles.primaryBtn} onPress={goToRequestReset}>
              <Text style={styles.primaryBtnText}>Request New Reset Link</Text>
            </TouchableOpacity>

            {/* Back to Sign In */}
            <TouchableOpacity style={styles.secondaryBtn} onPress={goToLogin}>
              <Text style={styles.secondaryBtnText}>Back to Sign In</Text>
            </TouchableOpacity>

          </View>

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ResetPassword;

/* ────────────────────────────── */
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F8FAFF' },
  keyboard: { flex: 1 },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 32,
    width: '100%',
    maxWidth: 340,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },

  iconCircle: {
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1A1A1A',
    marginBottom: 8,
  },

  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1A1A1A',
    textAlign: 'center',
    marginBottom: 8,
  },

  modalSubtitle: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },

  primaryBtn: {
    backgroundColor: '#007AFF',
    borderRadius: 12,
    paddingVertical: 14,
    width: '100%',
    alignItems: 'center',
    marginBottom: 12,
  },
  primaryBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  secondaryBtn: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 12,
    paddingVertical: 14,
    width: '100%',
    alignItems: 'center',
  },
  secondaryBtnText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '500',
  },
});