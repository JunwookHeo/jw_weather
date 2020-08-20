import * as React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function TempView({temp}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Temperature</Text>
      <Text style={styles.temp}>{Math.ceil(temp.temp - 273.15)}℃</Text>
    </View>
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