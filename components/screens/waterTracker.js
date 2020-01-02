import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function WaterTracker({ changeScreen }) {
  return (
    <View style={styles.container}>
      <Text>WaterTracker Screen</Text>
      <Button title="Back" onPress={() => changeScreen("menu")}></Button>
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
