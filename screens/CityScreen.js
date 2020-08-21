import * as React from "react";
import { View, Text, Button,StyleSheet } from "react-native";

export default function CityScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to City... again"
        onPress={() => navigation.navigate('City')}
      />
    </View>
  );
}