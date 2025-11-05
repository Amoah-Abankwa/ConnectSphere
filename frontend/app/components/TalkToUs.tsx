// app/(support)/talk-to-us.tsx
import React, { useState } from 'react';
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
import { useRouter } from 'expo-router';

type MessageType = 'text' | 'voice';

const TalkToUsScreen = () => {
  const router = useRouter();
  const [message, setMessage] = useState('');
  const [mode, setMode] = useState<MessageType>('text');

  const handleSend = () => {
    if (!message.trim()) {
      Alert.alert('Empty message', 'Please type something first.');
      return;
    }
    Alert.alert('Message Sent', `"${message}"`);
    setMessage('');
  };

  const toggleMode = () => {
    setMode((prev) => (prev === 'text' ? 'voice' : 'text'));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.iconCircle}>
              <Ionicons name="headset-outline" size={28} color="#34C759" />
            </View>
            <View>
              <Text style={styles.headerTitle}>Talk with Us</Text>
              <Text style={styles.headerSubtitle}>Choose voice or text</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="close" size={24} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Chat Area */}
        <View style={styles.chatArea}>
          <View style={styles.botMessage}>
            <View style={styles.botAvatar}>
              <Ionicons name="chatbubble-ellipses-outline" size={20} color="#999" />
            </View>
            <View style={styles.botBubble}>
              <Text style={styles.botText}>
                Use voice or text to communicate
              </Text>
            </View>
          </View>
        </View>

        {/* Input Area */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Type your message..."
            placeholderTextColor="#999"
            value={message}
            onChangeText={setMessage}
            editable={mode === 'text'}
            autoFocus
          />
          <TouchableOpacity style={styles.micBtn} onPress={toggleMode}>
            <Ionicons
              name={mode === 'text' ? 'mic-outline' : 'chatbubble-outline'}
              size={22}
              color="#34C759"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sendBtn} onPress={handleSend}>
            <Ionicons name="send" size={22} color="#fff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default TalkToUsScreen;

/* ────────────────────────────── */
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F8F9FA' },
  container: { flex: 1 },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#666',
  },

  // Chat Area
  chatArea: {
    flex: 1,
    padding: 16,
  },
  botMessage: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    maxWidth: '80%',
  },
  botAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#EEE',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  botBubble: {
    backgroundColor: '#F1F3F5',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 18,
    borderTopLeftRadius: 4,
  },
  botText: {
    fontSize: 15,
    color: '#444',
    lineHeight: 20,
  },

  // Input
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  textInput: {
    flex: 1,
    backgroundColor: '#F1F3F5',
    borderRadius: 22,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    marginRight: 8,
    maxHeight: 100,
  },
  micBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  sendBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#34C759',
    justifyContent: 'center',
    alignItems: 'center',
  },
});