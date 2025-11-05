// app/(auth)/verify-otp.tsx
import React, { useState, useEffect, useRef } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';

const VerifyOTPScreen = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const email = params.email as string;

  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputs = useRef<Array<TextInput | null>>([]);
  const [timeLeft, setTimeLeft] = useState(4 * 60 + 48); // 4:48

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleCodeChange = (text: string, index: number) => {
    if (!/^\d?$/.test(text)) return;

    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Auto-focus next
    if (text && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const otp = code.join('');
    if (otp.length !== 6) {
      Alert.alert('Invalid Code', 'Please enter all 6 digits');
      return;
    }

    // TODO: Call API to verify OTP
    Alert.alert('Success', `Verified OTP: ${otp}`, [
      { text: 'OK', onPress: () => router.replace('/screens/Auth/Login') }
    ]);
  };

  const handleResend = () => {
    setTimeLeft(4 * 60 + 48);
    Alert.alert('Code Resent', 'A new verification code has been sent.');
  };

  const goBack = () => router.back();

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.content}>

          {/* Modal Card */}
          <View style={styles.card}>

            {/* Shield Icon */}
            <View style={styles.iconCircle}>
              <Ionicons name="shield-checkmark" size={40} color="#007AFF" />
            </View>

            {/* Title */}
            <Text style={styles.title}>Verify Your Identity</Text>
            <Text style={styles.subtitle}>
              We’ve sent a 6-digit verification code to
            </Text>
            <Text style={styles.email}>{email || 'your email'}</Text>

            {/* OTP Input */}
            <Text style={styles.inputLabel}>Enter Verification Code</Text>
            <View style={styles.otpContainer}>
              {code.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={(ref) => { inputs.current[index] = ref; }}
                  style={[styles.otpBox, digit ? styles.otpBoxFilled : {}]}
                  value={digit}
                  onChangeText={(text) => handleCodeChange(text, index)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  keyboardType="number-pad"
                  maxLength={1}
                  textAlign="center"
                />
              ))}
            </View>

            {/* Timer */}
            <Text style={styles.timer}>
              Time remaining: <Text style={styles.timerBold}>{formatTime(timeLeft)}</Text>
            </Text>

            {/* Resend Link */}
            <TouchableOpacity onPress={handleResend} disabled={timeLeft > 0}>
              <Text style={[styles.resend, timeLeft === 0 && styles.resendActive]}>
                Didn’t receive the code?{' '}
                <Text style={styles.resendLink}>You can resend in {formatTime(timeLeft)}</Text>
              </Text>
            </TouchableOpacity>

            {/* Verify Button */}
            <TouchableOpacity style={styles.verifyBtn} onPress={handleVerify}>
              <Text style={styles.verifyBtnText}>Verify Code</Text>
            </TouchableOpacity>

            {/* Back Link */}
            <TouchableOpacity style={styles.backLink} onPress={goBack}>
              <Text style={styles.backText}>Back to Forgot Password</Text>
            </TouchableOpacity>

          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default VerifyOTPScreen;

/* ────────────────────────────── */
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F5F8FF' },
  container: { flex: 1 },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 32,
    width: '100%',
    maxWidth: 360,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 10,
  },

  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A1A1A',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    marginBottom: 4,
  },
  email: {
    fontSize: 15,
    color: '#007AFF',
    fontWeight: '600',
    marginBottom: 24,
  },

  inputLabel: {
    fontSize: 15,
    color: '#333',
    alignSelf: 'flex-start',
    marginBottom: 12,
    fontWeight: '500',
  },

  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  otpBox: {
    width: 44,
    height: 52,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#DDD',
    backgroundColor: '#FAFAFA',
    fontSize: 20,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  otpBoxFilled: {
    borderColor: '#007AFF',
    backgroundColor: '#F0F8FF',
  },

  timer: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  timerBold: {
    fontWeight: '600',
    color: '#1A1A1A',
  },

  resend: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginBottom: 24,
  },
  resendActive: {
    color: '#007AFF',
  },
  resendLink: {
    color: '#007AFF',
    fontWeight: '600',
  },

  verifyBtn: {
    backgroundColor: '#E5E5E5',
    borderRadius: 12,
    paddingVertical: 16,
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
  },
  verifyBtnText: {
    color: '#666',
    fontSize: 16,
    fontWeight: '600',
  },

  backLink: {
    marginTop: 8,
  },
  backText: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '600',
  },
});