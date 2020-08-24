import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


export default function WindView(props) {
  const wind = props.wind

  return (
    <TouchableOpacity style={styles.container} onPress={() => props.onPress('Wind', { wind })} >
      <Text style={styles.title}>Wind Speed</Text>
      <Text style={styles.wind} >{wind.speed}m/s</Text>
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
  wind: {
    fontSize: 30,
  },
});