import * as React from "react";
import { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width*0.9
const screenHeight = Dimensions.get("window").height*0.4

const chartConfig = {
  backgroundGradientFrom: "#0000FF",
  backgroundGradientFromOpacity: "#0000FF",
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.8,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.9,
  useShadowColorFromDataset: false // optional
};

export default function TempScreen({ route, navigation }) {
  const temp = route.params
  console.log('temp', temp)

  const temp_data = {
    labels: ["Current", "Feel", "Min", "Max"],
    datasets: [
      {
        data: [temp.temp - 273.15, temp.feels_like - 273.15, temp.temp_min - 273.15, temp.temp_max - 273.15]
      }
    ]
  };

  const humidity_data = [
    {
      name: "Humidity",
      value: temp.humidity,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 10
    },
    {
      name: " ",
      value: 100 - temp.humidity,
      color: "#a0a0a0",
      legendFontColor: "#7F7F7F",
      legendFontSize: 10
    },
  ]

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <BarChart
        style={styles.graphStyle}
        data={temp_data}
        width={screenWidth}
        height={screenHeight}
        yAxisSuffix=" ℃"
        chartConfig={chartConfig}
        verticalLabelRotation={30}
      />
      <PieChart
        data={humidity_data}
        width={screenWidth}
        height={screenHeight*0.9}
        chartConfig={chartConfig}
        accessor="value"
        backgroundColor="transparent"
        paddingLeft="30"
        absolute
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'

  },
  graphStyle: {
    marginVertical: 5,
    borderRadius: 16
  },
});