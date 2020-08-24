import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


export default function TempView(props) {
  const temp = props.temp
  return (
    <TouchableOpacity style={styles.container} onPress={() => props.onPress('Temperature', temp)} >
      <Text style={styles.title}>Temperature</Text>
      <Text style={styles.temp}>{Math.ceil(temp.temp - 273.15)}℃</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: '600'
  },
  temp: {
    fontSize: 30,
  },
});