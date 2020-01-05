import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput, DatePickerAndroid, TouchableOpacity } from "react-native";

export default function AddTask({ user, changeScreen }) {

  const [errMsg, setErrMsg] = useState({
    show: false,
    msg: ""
  });

  const addTodo = () => {
    fetch("http://192.168.1.5:3000/todos", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: user['email'],
        taskName: taskName,
        date: date,
        checked: false
      })
    })
      .then(res => res.json())
      .then(json => {
        if (json["_id"]) {
          setErrMsg(prevErrMsg => {
            return { show: false, msg: "" };
          });

          getUser(json);
        } else if (json["msg"]) {
          setErrMsg(prevErrMsg => {
            return { show: true, msg: json["msg"] };
          });
        }
      })
      .catch(err =>
        setErrMsg(prevErrMsg => {
          return { show: true, msg: err };
        })
      );

    changeScreen("todos")
  };

  const [date, setDate] = useState(new Date());
  const [taskName, setTaskName] = useState("");

  const openUpPicker = async () => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: new Date()
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        setDate(new Date(year, month, day));
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message);
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.bannerSmall}>Create a new task</Text>
      <Text style={styles.inputLabel}>Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setTaskName(text)}
        value={taskName}
      />

      <TouchableOpacity onPress={() => openUpPicker()}>
        <Text style={styles.inputLabel}>
          {'Select date: ' +
            date.getDate() + "-" + parseInt(date.getMonth() + 1) + "-" + parseInt(date.getFullYear())}
        </Text>
      </TouchableOpacity>
      <Text style={styles.bannerSmall}></Text>

      <View style={styles.row}>
        <View style={styles.buttonView}>
          <Button title="Cancel" onPress={() => changeScreen("todos")}></Button>
        </View>
        <View style={styles.buttonView}>
          <Button title="Add Task" onPress={() => addTodo()}></Button>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  bannerSmall: {
    fontSize: 24,
    marginBottom: 70
  },
  inputLabel: {
    width: 300,
    fontSize: 18,
    textAlign: "left"
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    width: 300,
    padding: 10,
    margin: 10,
    marginBottom: 30
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonView: {
    flex: 1,
    padding: 10
  }
});

