import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ViewPost extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Viewing post ID {this.props.navigation.getParam('postId')}</Text>
      </View>
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
