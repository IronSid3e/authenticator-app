import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";

export default function HomeScreen() {
  const navigation = useNavigation();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity onPress={handleSignOut} style={[styles.button]}>
        <Text style={styles.buttonText}>Çıkış yap</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 50,
    backgroundColor: "#00aeff",
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
    width: "60%",
  },
  buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
});
