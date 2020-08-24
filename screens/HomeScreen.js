import * as React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import CityView from '../components/CityView';
import WindView from '../components/WindView';
import TempView from '../components/TempView';
import WeatherView from '../components/WeatherView';
import LoadingView from '../components/LoadingView';
import ErrorView from '../components/ErrorView';

const API_KEY = '894c0c1d03546d1843b5efd334d6e479';

export default function App({navigation}) {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  console.log('home navigation', navigation)

  useEffect(() => {
    reloadWeather()
  }, []);

  function reloadWeather(){
    setLoading(true)
    setError('')
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(res => {
          if (res.cod === 200) {
            console.log('res == 200', res)
            setWeather(res)
            setError('')
          }
          else {
            console.log(res)
            setError(res)
          }
          console.log('final')
          setLoading(false)
        })
        .catch((err) => {
          console.error(err);
          setLoading(false)
          setError(err)
        });
    }
    ), (
        (err) => {
          console.log(err)
          setLoading(false)
          setError(err)
        }
      )
  }

  function onPress(name, params)
  {
    console.log(params)
    navigation.navigate(name, params)
  }

  return (
  error ? <ErrorView title={error} onPress={reloadWeather}></ErrorView>:
    loading ? <LoadingView title='Getting weather data!'></LoadingView> : 
    <LinearGradient colors={['#2980B9', '#6DD5FA']} style={styles.container}>
      <View style={styles.title}>
        <CityView city={weather.name} onPress={onPress}></CityView>
      </View>
      <View style={styles.body}>
        <WeatherView weather={weather.weather} onPress={reloadWeather}></WeatherView>
      </View>
      <View style={styles.footer}>
        <TempView temp={weather.main} onPress={onPress}></TempView>
        <WindView wind={weather.wind}></WindView>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:28,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title:{
    flex:2,
    // backgroundColor:'red'
  },
  body:{
    flex:3,
    // backgroundColor:'blue'
  },
  footer:{
    flex:2,
    flexDirection: 'row',
    // backgroundColor:'green'
  }

});