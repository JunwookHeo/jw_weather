import * as React from "react";
import { useState, useEffect } from 'react';
import { View, Text, Button,StyleSheet, Image } from "react-native";

export default function WindScreen({ route, navigation }) {
  const wind = route.params.wind
  const rotate = `${wind.deg}deg`

  return (
    <View style={styles.container}>
      <Text style={styles.wind}>{wind.speed}[m/s], {wind.deg}[Degrees]</Text>
      <Image style={{...styles.image, transform: [{ rotate: rotate}]}} 
          source={require('../resource/jon-tyson-1E1J2qGB0G8-unsplash.jpg')}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
  wind: {
    fontSize: 20,
    marginTop: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 300 / 2,
    marginTop: 20,
  },
});