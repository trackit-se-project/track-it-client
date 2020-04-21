import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function Menu({ changeScreen, logout }) {
  function Separator() {
    return <View style={styles.separator} />;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 36 }}>Menu</Text>
      <Separator />
      <Button title="Todos" onPress={() => changeScreen("todos")}></Button>
      <Separator />
      <Button title="Notes" onPress={() => changeScreen("notes")}></Button>
      <Separator />
      <Button
        title="Calendar"
        onPress={() => changeScreen("calendar")}
      ></Button>
      <Separator />
      <Button
        title="Water Tracker"
        onPress={() => changeScreen("waterTracker")}
      ></Button>
      <Separator />
      <Button
        title="Sleep Tracker"
        onPress={() => changeScreen("sleepTracker")}
      ></Button>
      <Separator />
      <Button title="Logout" onPress={() => logout()}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 100,
  },
  separator: {
    marginVertical: 20,
  },
});
