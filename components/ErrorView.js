import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from "@expo/vector-icons";

export default function ErrorView(props) {
  console.log('Error view')
  return (
    <LinearGradient colors={['#B98029', '#FAD56D']} style={styles.container}>
      <Text style={styles.error}>{props.title}</Text>
      <AntDesign size={100} color='#22cccc' name='reload1' onPress={() => props.onPress()}/>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  },
  error: {
    fontSize: 30,
    margin:5,
    fontWeight: '600',
  },
});