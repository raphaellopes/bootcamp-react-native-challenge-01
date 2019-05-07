// vendors
import React from 'react';
import { string } from 'prop-types';
import { View, Text } from 'react-native';

// locals
import styles from './styles';

const Post = ({ title, author, text }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{author}</Text>
    </View>
    <Text>{text}</Text>
  </View>
);

Post.propTypes = {
  title: string.isRequired,
  author: string.isRequired,
  text: string.isRequired,
};

export default Post;
