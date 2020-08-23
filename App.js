import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen'
import CityScreen from './screens/CityScreen'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="City" component={CityScreen} options={({ route }) => ({ title: route.params.city })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;