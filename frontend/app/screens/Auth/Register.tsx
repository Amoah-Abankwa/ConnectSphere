import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import RegisterForm, { RegisterFormData } from './components/RegisterForm';
import {
  CustomTextBold,
  CustomText,
} from '@/app/components/UI/CustomText';
import UserIcon from '@/app/assets/icons/General/user.svg';

const RegisterScreen = () => {
  const router = useRouter();

  const handleRegister = (data: RegisterFormData) => {
    // The form already called the API – we just navigate
    router.replace('/'); // or '/login' if you want to force login again
  };

  const goToLogin = () => router.push('/screens/Auth/Login');

  const handleSuccess = () => {
    router.replace('/'); // protected home after registration
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboard}
      >
        <View style={styles.content}>
          <View style={styles.container}>
            {/* Logo */}
            <View style={styles.logoCircle}>
              <UserIcon height={30} width={30} color="white" />
            </View>

            <CustomTextBold style={styles.title}>Create Account</CustomTextBold>
            <CustomText style={styles.subtitle}>
              Join our digital business card platform
            </CustomText>

            <RegisterForm
              onSubmit={handleRegister}
              onSignIn={goToLogin}
              onSuccess={handleSuccess}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

/* ────────────────────────────── */
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  keyboard: { flex: 1 },
  content: { flex: 1, paddingHorizontal: 24, marginTop: 30 },
  container: { alignItems: 'center', width: '100%' },

  logoCircle: {
    height: 60,
    width: 60,
    padding: 10,
    borderRadius: 40,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 32,
  },
});