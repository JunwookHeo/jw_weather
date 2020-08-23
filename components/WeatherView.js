import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weather_group = {
  0: {
    icon: 'weather-sunny'
  },
  2: {
    icon: 'weather-lightning-rainy'
  },
  3: {
    icon: 'weather-rainy'
  },
  5: {
    icon: 'weather-pouring'
  },
  6: {
    icon: 'weather-snowy'
  },
  7: {
    icon: 'weather-fog'
  },
  8: {
    icon: 'weather-cloudy'
  }
}

export default function WeatherView(props) {
  const weather = props.weather;
  const id = weather[0].id;
  const wg = id === 800 ? weather_group[0] : weather_group[parseInt(id / 100)];

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <MaterialCommunityIcons size={150} name={wg.icon} onPress={() => props.onPress()}/>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.weather}>{weather[0].description.toUpperCase()}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  weather: {
    fontSize: 28,
    fontWeight: '600'
  },
});