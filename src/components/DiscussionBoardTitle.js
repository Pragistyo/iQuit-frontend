import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  Icon,
} from 'react-native-elements';

class DiscussionBoard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.grouping}>
        <Icon
        type="MaterialIcons"
        name="forum"
        color="#00897b"
        />
        <Text style={styles.title}>
          Discussion Board
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    color: '#00897b',
  },

  grouping: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  }
})

export default DiscussionBoard;
