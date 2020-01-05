import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import LOCAL_IP from "../../ipconfig";

export default function WaterTracker({ user, changeScreen }) {
  const getDate = d => {
    const date = d ? new Date(d) : new Date();
    return (
      (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
      "/" +
      (date.getMonth() > 8
        ? date.getMonth() + 1
        : "0" + (date.getMonth() + 1)) +
      "/" +
      date.getFullYear()
    );
  };

  const fetchTotalAmount = () => {
    fetch(LOCAL_IP + "/water?userId=" + user._id + "&date=" + getDate())
      .then(res => res.json())
      .then(json => {
        setTotalAmount(json.totalAmount);
      })
      .catch(err => console.log(err));

    return 0;
  };

  const [totalAmount, setTotalAmount] = useState(fetchTotalAmount());

  const addAmount = (amount, date = null) => {
    fetch(LOCAL_IP + "/water", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: user._id,
        date: getDate(date),
        amount: amount
      })
    })
      .then(res => res.json())
      .then(json => {
        setTotalAmount(prevTotalAmount => prevTotalAmount + json.amount);
      })
      .catch(err => console.log(err));
  };

  function Separator() {
    return <View style={styles.separator} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.banner}>WaterTracker</Text>
      <Text style={styles.totalAmount}>{totalAmount}/2000</Text>
      <View style={styles.quickAddGroup}>
        <Button title="200ml" onPress={() => addAmount(200)}></Button>
        <Button title="330ml" onPress={() => addAmount(330)}></Button>
        <Button title="500ml" onPress={() => addAmount(500)}></Button>
      </View>
      <Separator />
      <Button title="Custom add" onPress={() => changeScreen("menu")}></Button>
      <Separator />
      <Button title="Back" onPress={() => changeScreen("menu")}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 100
  },
  banner: {
    fontSize: 24
  },
  totalAmount: {
    fontSize: 36,
    marginTop: 100,
    marginBottom: 100
  },
  quickAddGroup: {
    marginVertical: 0
  },
  separator: {
    marginVertical: 20
  }
});
