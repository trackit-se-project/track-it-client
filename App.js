import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Login from "./components/screens/login";
import Register from "./components/screens/register";
import Menu from "./components/screens/menu";
import Todos from "./components/screens/todos";
import Notes from "./components/screens/notes";
import Calendar from "./components/screens/calendar";
import WaterTracker from "./components/screens/waterTracker";
import SleepTracker from "./components/screens/sleepTracker";

export default function App() {
  const [screen, setScreen] = useState("login");

  const changeScreen = newScreen => {
    setScreen(prevScreen => {
      return newScreen;
    });
  };

  return (
    <View style={styles.container}>
      {screen == "login" && <Login changeScreen={changeScreen} />}
      {screen == "register" && <Register changeScreen={changeScreen} />}
      {screen == "menu" && <Menu changeScreen={changeScreen} />}
      {screen == "todos" && <Todos changeScreen={changeScreen} />}
      {screen == "notes" && <Notes changeScreen={changeScreen} />}
      {screen == "calendar" && <Calendar changeScreen={changeScreen} />}
      {screen == "waterTracker" && <WaterTracker changeScreen={changeScreen} />}
      {screen == "sleepTracker" && <SleepTracker changeScreen={changeScreen} />}
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
