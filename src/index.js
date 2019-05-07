// vendors
import './config/reactotron';
import React, { Component } from 'react';
import {
  View,
} from 'react-native';

// locals
import Post from '~/components/post';

export default class App extends Component {
  render() {
    return (
      <View>
        <Post />
      </View>
    );
  }
}
