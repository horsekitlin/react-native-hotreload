'use strict';

import React from 'react-native';

const {
  Navigator,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} = React;

export default class App extends React.Component {

  render() {
    return (
        <View>
           <Text>hello world</Text>
           <Text>hello world</Text>
        </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navBarButtonText: {
    color: '#5890ff',
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  scene: {
    paddingTop: 64,
    flex: 1,
  },
  titleText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: 32,
  },
});
