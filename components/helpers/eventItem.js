import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function EventItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.eventKey)}>
      <Text style={styles.item}>{item.eventName}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10
  }
});
