// vendors
import './config/reactotron';
import React, { Component } from 'react';
import {
  View, ScrollView,
} from 'react-native';

// locals
import Post from '~/components/post';
import styles from './styles';

export default class App extends Component {
  state = {
    posts: [{
      id: Math.random(),
      title: 'My title post',
      author: 'Raphael Lopes',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis rutrum arcu. Nam elementum libero molestie justo vestibulum sagittis. Cras fringilla eget nunc id tristique',
    }, {
      id: Math.random(),
      title: 'My title post',
      author: 'Raphael Lopes',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis rutrum arcu. Nam elementum libero molestie justo vestibulum sagittis. Cras fringilla eget nunc id tristique',
    }, {
      id: Math.random(),
      title: 'My title post',
      author: 'Raphael Lopes',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis rutrum arcu. Nam elementum libero molestie justo vestibulum sagittis. Cras fringilla eget nunc id tristique',
    }, {
      id: Math.random(),
      title: 'My title post',
      author: 'Raphael Lopes',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis rutrum arcu. Nam elementum libero molestie justo vestibulum sagittis. Cras fringilla eget nunc id tristique',
    }, {
      id: Math.random(),
      title: 'My title post',
      author: 'Raphael Lopes',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis rutrum arcu. Nam elementum libero molestie justo vestibulum sagittis. Cras fringilla eget nunc id tristique',
    }],
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.state.posts.map(({
            id, title, author, text,
          }) => (
            <Post
              key={id}
              title={title}
              author={author}
              text={text}
            />
          ))}
        </View>
      </ScrollView>
    );
  }
}
