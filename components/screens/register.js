import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function Register({ changeScreen }) {
  return (
    <View style={styles.container}>
      <Text>Register Screen</Text>
      <Button title="Register" onPress={() => changeScreen("menu")}></Button>
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
