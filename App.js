import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Splashscreen from './src/screens/Splashscreen';
import Homepage from './src/screens/Homescreen';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const TabNavigator = createBottomTabNavigator(
  {
    Splash : {
      screen: Splashscreen,
      navigationOptions: {
        header: null,
        tabBarVisible: false,

      }
    },
    Home : {
      screen: Homepage,
    }
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(TabNavigator);

