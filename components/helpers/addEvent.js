import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  Modal,
  TouchableOpacity,
  Alert
} from "react-native";

export default function AddEvent({ submitHandle }) {
  const [event, setEvent] = useState({
    eventType: "",
    eventName: "",
    eventTime: "",
    eventLocation: ""
  });

  const [state, setState] = useState(false);

  const changeTypeHandler = val => {
    setEvent(prevEvent => {
      return {
        ...prevEvent,
        eventType: val
      };
    });
  };

  const changeNameHandler = val => {
    setEvent(prevEvent => {
      return {
        ...prevEvent,
        eventName: val
      };
    });
  };

  const changeTimeHandler = val => {
    setEvent(prevEvent => {
      return {
        ...prevEvent,
        eventTime: val
      };
    });
  };

  const changeLocationHandler = val => {
    setEvent(prevEvent => {
      return {
        ...prevEvent,
        eventLocation: val
      };
    });
  };

  return (
    <View style={{ marginTop: 22 }}>
      <Modal animationType="slide" transparent={false} visible={state}>
        <View style={{ marginTop: 22 }}>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Add type of event..."
              onChangeText={changeTypeHandler}
            />

            <TextInput
              style={styles.input}
              placeholder="Add name of event..."
              onChangeText={changeNameHandler}
            />
            <TextInput
              style={styles.input}
              placeholder="Add time..."
              onChangeText={changeTimeHandler}
            />

            <TextInput
              style={styles.input}
              placeholder="Add location..."
              onChangeText={changeLocationHandler}
            />

            <Button
              onPress={() => {
                submitHandle(event);
                setState(prevState => !prevState);
              }}
              title="Add"
              color="coral"
            ></Button>
          </View>
        </View>
      </Modal>

      <Button
        onPress={() => {
          setState(() => true);
        }}
        title="add event"
        color="coral"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginRight: 20,
    marginLeft: 20
  },
  button: {
    marginRight: 20,
    marginLeft: 20
  }
});
