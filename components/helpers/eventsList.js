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

import LOCAL_IP from "../../ipconfig";

export default function EventsList({ user, selectedDate, filteredEvents }) {
  const [events, setEvents] = useState(filteredEvents);

  const pressHandler = key => {
    fetch(LOCAL_IP + "/events/" + key, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(() => {
        setEvents(prevEvents => {
          return prevEvents.filter(event => event._id != key);
        });
      })
      .catch(err => console.log(err));
  };

  const submitHandle = event => {
    fetch(LOCAL_IP + "/events", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: user._id,
        date: selectedDate,
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
        setEvents(prevEvents => {
          return [json.event, ...prevEvents];
        });
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
            keyExtractor={item => item._id}
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
