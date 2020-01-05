import React, { useState } from "react";
import { StyleSheet, View, Text, Button, StatusBar, FlatList, SafeAreaView } from "react-native";
import TodoTask from '../helpers/todoTask';

export default function Todos({ user, changeScreen }) {

  const [checked, setChecked] = useState(false);
  const [todos, setTodos] = useState([]);

  const [errMsg, setErrMsg] = useState({
    show: false,
    msg: ""
  });

  fetch(`http://192.168.1.5:3000/todos?email=${user['email']}`)
    .then(res => res.json())
    .then(data => setTodos(data['todos']))
    .catch(err => {
      setErrMsg(prevErrMsg => {
        return { show: true, msg: err };
      });
    }
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#2f95dc'} barStyle="light-content" />
      <Text style={styles.bannerSmall}></Text>

      <Text style={styles.bannerSmall}>                      Tasks                               </Text>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={todos}
          keyExtractor={todo => todo['_id']}
          renderItem={({ item: todo }) => (
            <TodoTask todo={todo}></TodoTask>
          )}
        />
      </SafeAreaView>

      <View style={styles.row}>
        <View style={styles.buttonView}>
          <Button title="Back" onPress={() => changeScreen("menu")}></Button>
        </View>
        <View style={styles.buttonView}>
          <Button title="Add Task" onPress={() => changeScreen("addTask")}></Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  addButton: {
    backgroundColor: '#2f95dc'
  },
  bannerSmall: {
    fontSize: 24,
    marginBottom: 50
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
