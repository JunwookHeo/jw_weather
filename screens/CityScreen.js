import * as React from "react";
import { useState, useEffect } from 'react';
import { View, Text, Button,StyleSheet } from "react-native";

import { WebView } from 'react-native-webview';

export default function CityScreen({ route, navigation }) {
  const city = route.params.city

  return (
    <WebView
      source={{ uri: `https://www.bing.com/search?q=${city}` }}
      style={{ marginTop: 10 }}
    />
  );
}