import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function LoginScreen() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Şifre" />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.outlineButton]}>
          <Text style={styles.outlineButtonText}>Kayıt ol</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {},
  inputContainer: {},
  input: {},
  buttonContainer: {},
  button: {},
  buttonText: {},
  outlineButton: {},
  outlineButtonText: {},
});
