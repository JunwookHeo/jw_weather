import * as React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import CityView from './components/CityView';
import WindView from './components/WindView';
import TempView from './components/TempView';
import WeatherView from './components/WeatherView';

const API_KEY = '894c0c1d03546d1843b5efd334d6e479';
const { width, height } = Dimensions.get('window');

const DW = {
  main: {
    humidity: 35,
    pressure: 1025,
    temp: 279.92,
    temp_max: 280.85,
    temp_min: 279.15,
  },
  weather: [
    {
      description: "haze",
      icon: "50d",
      id: 721,
      main: "Haze",
    },  
  ],
  wind: {
    speed: 0,
  }
}

export default function App() {
  const [weather, setWeather] = useState(DW);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(res => {
          if (res.cod === 200) {
            console.log(res)
            setWeather(res)
          }
          else {
            console.log(res)

          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
    ), (
        (err) => console.log(err)
      )
  }, []);


  return (
    <LinearGradient colors={['#108dc7', '#ef8e38']} style={styles.container}>
      <View style={styles.title}>
        <CityView city={weather.name}></CityView>
      </View>
      <View style={styles.body}>
        <WeatherView weather={weather.weather}></WeatherView>
      </View>
      <View style={styles.footer}>
        <TempView temp={weather.main}></TempView>
        <WindView wind={weather.wind}></WindView>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height
  },
  title:{
    flex:2,
  },
  body:{
    flex:4,
  },
  footer:{
    flex:3,
    flexDirection: 'row',
  }

});