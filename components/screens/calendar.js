import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import EventsList from "../helpers/eventsList";

export default function Calendar({ user, changeScreen }) {
  const [events, setEvents] = useState([]);

  const onDatePressed = dateTime => {
    setEvents(prevEvents => {
      return prevEvents.filter();
    });
  };
  return (
    <View>
      <EventsList user={user}/>
    </View>
  );
}
