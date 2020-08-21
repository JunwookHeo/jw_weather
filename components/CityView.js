import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


export default function CityView(props) {
  const city = props.city
  console.log('city view', props)
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.onPress('City')}
      >
        <Text style={styles.city}>{city}</Text>
      </TouchableOpacity>
    </View>
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