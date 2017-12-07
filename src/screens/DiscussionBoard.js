import React, { Component } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import {
  Divider,
} from 'react-native-elements';

import Messages from '../components/Messages';
import DiscussionBoardTitle from '../components/DiscussionBoardTitle';
import DiscussionBoardPost from '../components/DiscussionBoardPost';

class DiscussionBoard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <KeyboardAvoidingView
      behavior="padding"
      style={styles.screen}>
        <View style={styles.upperScreenMargin}/>
        <DiscussionBoardTitle/>
        <Messages/>
        {/* <DiscussionBoardPost/> */}
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  upperScreenMargin: {
    marginTop: 30,
  },

  screen: {
    flex: 1,
  },
})


export default DiscussionBoard;
