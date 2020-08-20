import * as React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function CityView({city}) {
  return (
    <View style={styles.container}>
      <Text style={styles.city}>{city}</Text>
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