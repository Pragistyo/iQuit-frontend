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
    // console.log('bababbabab ====== ahhahahahah ======= 3')
    return (
      <View style={styles.grouping}>
        <Icon
        type="MaterialIcons"
        name="forum"
        color="#fe7013"
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
    color: '#fe7013',
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
