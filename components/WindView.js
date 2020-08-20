import * as React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function WindView({wind}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wind Speed</Text>
      <Text style={styles.wind}>{wind.speed}m/s</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignContent:'center', 
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