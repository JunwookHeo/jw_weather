# Weather Application with React-Native

<p>
  <!-- iOS -->
  <a href="https://itunes.apple.com/app/apple-store/id982107779">
    <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  </a>
  <!-- Android -->
  <a href="https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=blankexample">
    <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  </a>
  <!-- Web -->
  <a href="https://docs.expo.io/workflow/web/">
    <img alt="Supports Expo Web" longdesc="Supports Expo Web" src="https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff" />
  </a>
</p>

## 🚀 How to use

- Install packages with `npm install`.
  - If you have native iOS code run `npx pod-install`
- Run `expo start` to start the bundler.
- Open the project in a React runtime to try it:
  - iOS: [Client iOS](https://itunes.apple.com/app/apple-store/id982107779)
  - Android: [Client Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=blankexample)
  - Web: Any web browser

## Home Screen
Flex is used to implement the HomeScreen which has 4 areas showing city, weather, wind and temperature information. 

<img alt="Home Screen" longdesc="Home Screen as a main screen" width=400 src="https://github.com/JunwookHeo/jw_weather/blob/master/Doc/HomeScreen.png" />

## City Screen
This ui utilized the WebView component to display the searching result of a city name from the HomeScreen.

<img alt="City Screen" longdesc="City screen with WebView" width=400 src="https://github.com/JunwookHeo/jw_weather/blob/master/Doc/CityScreen.png" />

## Temperature Screen
Temperature shows min, max, feel like and current temperatures with chart components.

<img alt="Temperature Screen" longdesc="Temperature Screen with Chart" width=400 src="https://github.com/JunwookHeo/jw_weather/blob/master/Doc/TempScreen.png" />

## Wind Screen
The WindScreen shows a degree of wind direction rotating an arrow image.  

<img alt="Wind Screen" longdesc="Wind Screen with image rotation" width=400 src="https://github.com/JunwookHeo/jw_weather/blob/master/Doc/WindScreen.png" />

## Run

<img alt="QR Code" longdesc="QR Code for jw_weather" width=300 src="https://github.com/JunwookHeo/jw_weather/blob/master/Doc/jw_weather_qr.png" />

## References

- https://steemit.com/kr/@anpigon/react-native-5-4-1543113530194
