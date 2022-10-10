import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LogInScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = () => {
    console.warn("Logging in")
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{
          fontSize: 18,
          width: "100%",
          marginVertical: 25,
        }}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          fontSize: 18,
          width: "100%",
          marginVertical: 25,
        }}
      />
      <Pressable
        onPress={onSubmit}
        style={{
          backgroundColor: "#e33062",
          height: 50,
          borderRadius: 5,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 13,
        }}
      >
        <Text
          style={{
            color: "#eee",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Log In
        </Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("SignUp")}
        style={{
          borderRadius: 5,
          alignItems: "flex-end",
          justifyContent: "center",
          marginTop: 13,
        }}
      >
        <Text
          style={{
            color: "#e33062",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Need an account? Sign Up
        </Text>
      </Pressable>
    </View>
  );
}
