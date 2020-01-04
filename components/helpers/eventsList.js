import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  FlatList
} from "react-native";
import Header from "./header";
import EventItem from "./eventItem";
import AddEvent from "./addEvent";

export default function EventsList({ user }) {
  const [events, setEvents] = useState([
    {
      eventKey: "1",
      eventType: "zi de nastere",
      eventName: "Bianca",
      eventTime: "",
      eventLocation: "la Bianca acasa"
    },
    {
      eventKey: "2",
      eventType: "Meeting",
      eventName: "Codette",
      eventTime: "18:00",
      eventLocation: "Precis"
    },
    {
      eventKey: "3",
      eventType: "Important",
      eventName: "MyNAme",
      eventTime: "",
      eventLocation: ""
    }
  ]);

  const pressHandler = key => {
    setEvents(prevEvents => {
      return prevEvents.filter(event => event.eventKey != key);
    });
  };

  const submitHandle = event => {
    fetch("http://192.168.1.4:3000/events", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: user._id,
        date: "01/01/2020",
        event: {
          eventKey: Math.floor(Math.random() * 100) + 1,
          eventType: event.eventType,
          eventName: event.eventName,
          eventTime: event.eventTime,
          eventLocation: event.eventLocation
        }
      })
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        if (json.msg === "ok") {
          setEvents(prevEvents => {
            return [
              {
                eventKey: Math.floor(Math.random() * 100) + 1,
                eventType: event.eventType,
                eventName: event.eventName,
                eventTime: event.eventTime,
                eventLocation: event.eventLocation
              },
              ...prevEvents
            ];
          });
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <View>
      <Header />
      <View style={styles.content}>
        <AddEvent submitHandle={submitHandle} />
        <View style={styles.list}>
          <FlatList
            data={events}
            keyExtractor={item => item.eventKey}
            renderItem={({ item }) => (
              <EventItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
