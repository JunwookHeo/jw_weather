import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


export default function CityView(props) {
  const city = props.city
  console.log('city view', props)
  return (
    <TouchableOpacity style={styles.container} onPress={() => props.onPress('City', { city })} >
      <Text style={styles.city}>{city}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  },
  city: {
    fontSize: 50,
    marginBottom:10,
    fontWeight: '600',
  },
});