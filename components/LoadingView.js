import * as React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function LoadingView(props) {
  console.log('Loading view')
  return (
    <LinearGradient colors={['#2980B9', '#6DD5FA']} style={styles.container}>
        <ActivityIndicator animating='true' size='large' color='#ffff00'></ActivityIndicator>
        <Text style={styles.loading}>{props.title}</Text>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  },
  loading: {
    fontSize: 30,
    marginBottom:10,
    fontWeight: '600',
  },
});