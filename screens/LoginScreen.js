import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    // auth nesnesini ilk parametre olarak gönderiyoruz
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Giriş yapıldı:", user.email);
      })
      .catch((error) => {
        console.error("Hata kodu:", error.code);
        alert(error.message);
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Şifre"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.outlineButton]}
        >
          <Text style={styles.outlineButtonText}>Kayıt ol</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  inputContainer: { width: "80%" },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 5,
    borderRadius: 10,
  },
  buttonContainer: {
    width: "50%",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#00aeff",
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
  outlineButton: { backgroundColor: "white", marginTop: 5 },
  outlineButtonText: { color: "#00aeff", fontSize: 16, fontWeight: "bold" },
});
