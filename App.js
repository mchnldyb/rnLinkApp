import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

import { withAuthenticator } from 'aws-amplify-react-native';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';

import NewPartyscreen from './src/screens/NewPartyscreen';
import Searchscreen from './src/screens/Searchscreen';
import PartyListscreen from './src/screens/PartyListscreen';
import MapScreen from './src/screens/Mapscreen';
import PartyDetails from './src/screens/PartyDetailsscreen';



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
    ViewMap:  MapScreen,
    ViewPartyDetails : PartyDetails,
    NewParty: NewPartyscreen,
    SearchParty: Searchscreen,
});


const NewPartyStack = createStackNavigator({
  NewParty: NewPartyscreen,
  ViewMap:  MapScreen,
  ViewPartyDetails : PartyDetails,
  PartyList: PartyListscreen,
  SearchParty: Searchscreen,
});

const MapScreenStack = createStackNavigator({
  ViewMap:  MapScreen,
  SearchParty: Searchscreen,
  ViewPartyDetails : PartyDetails,
  PartyList: PartyListscreen,
  NewParty: NewPartyscreen,
});

const SearchPartyStack = createStackNavigator({
  SearchParty: Searchscreen,
  ViewMap:  MapScreen,
  ViewPartyDetails : PartyDetails,
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
    MapViewMenu : {
      screen: MapScreenStack,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (<Ionicons name="ios-pin" size={32} color={tintColor} />)
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

//export default createAppContainer(TabNavigator);
export default withAuthenticator(createAppContainer(TabNavigator), { includeGreetings: false });
//createAppContainer(TabNavigator);

