import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ViewPost from './ViewPost';
import EditPost from './EditPost';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

export default createMaterialTopTabNavigator({
  View: {
    path: 'user/:userId/posts/:postId/view',
    screen: ViewPost
  },
  Edit: {
    path: 'user/:userId/posts/:postId/edit',
    screen: EditPost
  }
}, {
  initialRouteName: 'View'
});
