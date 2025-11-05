import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import LoginForm from './components/LoginForm';

//ICON
import LoginIcon from '@/app/assets/icons/HomeScreen/managing.svg';

const Login = () => {
  const router = useRouter();

  const handleForgot = () => router.push('/screens/Auth/Forgotpassword');
  const handleSignup = () => router.push('/screens/Auth/Register');

  const handleSuccess = () => {
    // Replace with your protected home route
    router.replace('/');
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
            <LoginIcon height={30} width={30} color="white" />
          </View>

          <Text style={styles.welcome}>Welcome Back</Text>
          <Text style={styles.subtitle}>Sign in to your account</Text>

          <LoginForm
            onSubmit={() => {}}
            onForgotPassword={handleForgot}
            onCreateAccount={handleSignup}
            onSuccess={handleSuccess}
          />
        </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

/* ---------------------------------------------------- */
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  keyboard: { flex: 1 },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 30,
  },
  container: {
    alignItems: 'center',
    width: '100%'
  },

  logoCircle: {
    height: 60,
    width: 60,
    padding: 10,
    borderRadius: 40,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    alignSelf: 'center',
  },

  welcome: {
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