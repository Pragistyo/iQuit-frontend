import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import Messages from '../components/Messages';

class MessageBoard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>TEsTESAn</Text>
        <Messages/>
      </View>
    );
  }
}

export default MessageBoard;
