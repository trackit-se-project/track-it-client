import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Login from "./components/screens/login";
import Register from "./components/screens/register";
import Menu from "./components/screens/menu";

export default function App() {
  const [screen, setScreen] = useState("login");
  const [user, setUser] = useState({
    id: "",
    email: "",
    token: "",
  });

  const changeScreen = (newScreen) => {
    setScreen((prevScreen) => {
      return newScreen;
    });
  };

  const getUser = (user) => {
    setUser((prevUser) => {
      return {
        id: user["user_id"],
        email: user["email"],
        token: user["token"],
      };
    });

    changeScreen("menu");
  };

  const logout = () => {
    setUser((prevUser) => {
      return {
        id: "",
        email: "",
        token: "",
      };
    });

    changeScreen("login");
  };

  return (
    <View>
      {screen == "login" && (
        <Login getUser={getUser} changeScreen={changeScreen} />
      )}
      {screen == "register" && (
        <Register getUser={getUser} changeScreen={changeScreen} />
      )}
      {screen == "menu" && <Menu changeScreen={changeScreen} logout={logout} />}
    </View>
  );
}
