import * as React from "react";
import { useState, useEffect } from 'react';
import { View, Text, Button,StyleSheet, Image } from "react-native";

import { WebView } from 'react-native-webview';

export default function WindScreen({ route, navigation }) {
  const wind = route.params.wind
  const rotate = `${wind.deg}deg`

  return (
    <View style={styles.container}>
      <Text style={styles.wind}>{wind.speed}[m/s], {wind.deg}[Degrees]</Text>
      <Image style={{...styles.image, transform: [{ rotate: rotate}]}} source={require('../resource/jon-tyson-1E1J2qGB0G8-unsplash.jpg')}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  },
  wind: {
    fontSize: 20,
  },
  image: {
    flex: 1,
    // width: null,
    // height: null,
    resizeMode: 'contain',
}
});