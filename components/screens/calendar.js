import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import EventsList from "../helpers/eventsList";

import LOCAL_IP from "../../ipconfig";

export default function Calendar({ user, changeScreen }) {
  const [calendarState, setCalendarState] = useState({
    selectedDate: null,
    filteredEvents: []
  });

  const onDateChange = x => {
    setCalendarState({
      selectedDate: null,
      filteredEvents: []
    });

    const date = new Date(x);
    const startDate =
      (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
      "/" +
      (date.getMonth() > 8
        ? date.getMonth() + 1
        : "0" + (date.getMonth() + 1)) +
      "/" +
      date.getFullYear();

    fetch(LOCAL_IP + "/events?userId=" + user._id + "&date=" + startDate, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(json => {
        setCalendarState({
          selectedDate: startDate,
          filteredEvents: json.events
        });
      })
      .catch(err => console.log(err));
  };

  console.log(calendarState.selectedDate);

  return (
    <View /*style={styles.container}*/>
      <CalendarPicker onDateChange={onDateChange} />
      {/* <View>
        <Text>SELECTED DATE: {startDate}</Text>
      </View> */}
      {calendarState.selectedDate != null && (
        <EventsList
          user={user}
          selectedDate={calendarState.selectedDate}
          filteredEvents={calendarState.filteredEvents}
        />
      )}
      {/* <Button title="Back" onPress={() => changeScreen("menu")}></Button> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginTop: 100
  }
});
