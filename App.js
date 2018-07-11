import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Welcome from './Welcome';
import UserNavigator from './User';


const AppNavigator = createStackNavigator({
  Welcome: {
    path: 'welcome',
    screen: Welcome
  },
  User: {
    path: '',
    screen: UserNavigator
  }
},
{
  initialRouteName: 'Welcome',
  headerMode: 'screen',
  navigationOptions: {
    header: null,
    gesturesEnabled: false
  }
});

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator uriPrefix="navtest://" />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
