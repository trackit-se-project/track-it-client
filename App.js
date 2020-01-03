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
  const [user, setUser] = useState({
    _id: "",
    email: ""
  });

  const changeScreen = newScreen => {
    setScreen(prevScreen => {
      return newScreen;
    });
  };

  const getUser = user => {
    setUser(prevUser => {
      return {
        _id: user["_id"],
        email: user["email"]
      };
    });

    changeScreen("menu");
  };

  return (
    <View style={styles.container}>
      {screen == "login" && (
        <Login getUser={getUser} changeScreen={changeScreen} />
      )}
      {screen == "register" && (
        <Register getUser={getUser} changeScreen={changeScreen} />
      )}
      {screen == "menu" && <Menu user={user} changeScreen={changeScreen} />}
      {screen == "todos" && <Todos user={user} changeScreen={changeScreen} />}
      {screen == "notes" && <Notes user={user} changeScreen={changeScreen} />}
      {screen == "calendar" && (
        <Calendar user={user} changeScreen={changeScreen} />
      )}
      {screen == "waterTracker" && (
        <WaterTracker user={user} changeScreen={changeScreen} />
      )}
      {screen == "sleepTracker" && (
        <SleepTracker user={user} changeScreen={changeScreen} />
      )}
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
