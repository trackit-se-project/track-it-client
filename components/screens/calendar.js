import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import CalendarPicker from 'react-native-calendar-picker';

export default function Calendar ({ changeScreen }) {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
    
  const onDateChange = (date) => {
    setSelectedStartDate(date)
  }

  const startDate = selectedStartDate ? selectedStartDate.toString().split(' ').slice(1, 4).join(' ') : '';

  return (
    <View style={styles.container}>
      <CalendarPicker
       onDateChange={onDateChange}
      />
   
      <View>
        <Text>SELECTED DATE: { startDate }</Text>
      </View>
          
      <Button title="Back" onPress={() => changeScreen("menu")}></Button>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100,
  },
});

