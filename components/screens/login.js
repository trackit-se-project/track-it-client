import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function Login({ changeScreen }) {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={() => changeScreen("menu")}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
});
