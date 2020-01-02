import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function Menu({ changeScreen }) {
  return (
    <View style={styles.container}>
      <Text>Menu Screen</Text>
      <Button title="Todos" onPress={() => changeScreen("todos")}></Button>
      <Button title="Notes" onPress={() => changeScreen("notes")}></Button>
      <Button
        title="Calendar"
        onPress={() => changeScreen("calendar")}
      ></Button>
      <Button
        title="Water Tracker"
        onPress={() => changeScreen("waterTracker")}
      ></Button>
      <Button
        title="Sleep Tracker"
        onPress={() => changeScreen("sleepTracker")}
      ></Button>
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
