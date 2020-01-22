import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';

import NewPartyscreen from './src/screens/NewPartyscreen';
import Searchscreen from './src/screens/Searchscreen';
import PartyListscreen from './src/screens/PartyListscreen';

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
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const PartyListStack = createStackNavigator({
    PartyList: PartyListscreen,
    NewParty: NewPartyscreen,
    SearchParty: Searchscreen,
});


const NewPartyStack = createStackNavigator({
  NewParty: NewPartyscreen,
  PartyList: PartyListscreen,
  SearchParty: Searchscreen,
});

const SearchPartyStack = createStackNavigator({
  SearchParty: Searchscreen,
  PartyList: PartyListscreen,
  NewParty: NewPartyscreen,
});




const TabNavigator = createBottomTabNavigator(
  {
    PartyList : {
      screen: PartyListStack,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (<Ionicons name="ios-list-box" size={32} color={tintColor} />)
      }),
    },
    NewParty : {
      screen: NewPartyStack,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (<Ionicons name="md-add-circle-outline" size={32} color={tintColor} />)
      }),
    },
    SearchParty: {
      screen: SearchPartyStack,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (<Ionicons name="md-search" size={32} color={tintColor} />)
      }),
    }
  },
  {
    initialRouteName: 'PartyList',
    tabBarOptions: { 
      showLabel: false,
      activeTintColor: '#695E50',
      inactiveTintColor: '#FFAF4F',
      style: {
        backgroundColor: '#000000' 
    },
    },
  }
);

export default createAppContainer(TabNavigator);;
//createAppContainer(TabNavigator);

