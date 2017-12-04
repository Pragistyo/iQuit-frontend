import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import {
  FormInput,
} from 'react-native-elements';

import db from '../helpers/fire-database';

class DiscussionBoardPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    }
    this.sendMessage = this.sendMessage.bind(this)
  }

  sendMessage() {
    db.ref(`/messages/${Math.floor(Math.random()*100000000)}`).set({
      username: 'cuk',
      message: this.state.message,
      created: Date(),
    })
    this.input.clearText();
  }

  render() {
    return (
      <View>
        <FormInput
        ref={ input => this.input = input }
        onChangeText={(text) => { this.setState({ message: text }) } }
        onSubmitEditing={() => { this.sendMessage() } }
        />
      </View>
    );
  }
}

export default DiscussionBoardPost;
