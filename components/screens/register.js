import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

import LOCAL_IP from "../../ipconfig";

export default function Register({ getUser, changeScreen }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [errMsg, setErrMsg] = useState({
    show: false,
    msg: "",
  });

  const setEmail = (text) => {
    setCredentials((prevCredentials) => {
      return {
        email: text,
        password: prevCredentials["password"],
      };
    });
  };

  const setPassword = (text) => {
    setCredentials((prevCredentials) => {
      return {
        email: prevCredentials["email"],
        password: text,
      };
    });
  };

  const register = () => {
    fetch(LOCAL_IP + "/users/sign_up", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials["email"],
        password: credentials["password"],
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json["user_id"]) {
          setErrMsg((prevErrMsg) => {
            return { show: false, msg: "" };
          });

          getUser(json);
        } else {
          if (typeof json["sqlMessage"] != undefined) {
            setErrMsg((prevErrMsg) => {
              return { show: true, msg: json["sqlMessage"] };
            });
          } else {
            setErrMsg((prevErrMsg) => {
              return { show: true, msg: "Ooops! Something happened..." };
            });
          }
        }
      })
      .catch((err) => {
        setErrMsg((prevErrMsg) => {
          return { show: true, msg: err };
        });
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.banner}>Track it!</Text>
      <Text style={styles.bannerSmall}>Create new account</Text>
      {errMsg["show"] && <Text style={styles.errMsg}>{errMsg["msg"]}</Text>}
      <Text style={styles.inputLabel}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        value={credentials["email"]}
      />
      <Text style={styles.inputLabel}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        value={credentials["pass"]}
      />
      <Button title="Register" onPress={() => register()}></Button>
      <Text style={styles.loginText}>Already a member?</Text>
      <Button title="Login" onPress={() => changeScreen("login")}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 100,
  },
  banner: {
    fontSize: 36,
  },
  bannerSmall: {
    fontSize: 24,
    marginBottom: 100,
  },
  errMsg: {
    width: 300,
    color: "red",
    fontSize: 18,
    textAlign: "left",
    marginBottom: 30,
  },
  inputLabel: {
    width: 300,
    fontSize: 18,
    textAlign: "left",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    width: 300,
    padding: 10,
    margin: 10,
    marginBottom: 30,
  },
  loginText: {
    fontSize: 18,
    marginTop: 50,
    marginBottom: 10,
  },
});
