import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PostsNavigator from './Posts';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Profile from './Profile';

export default createBottomTabNavigator({
  Profile: {
    path: 'user/:userId',
    screen: Profile
  },
  Posts: {
    path: '',
    screen: PostsNavigator
  }
});
