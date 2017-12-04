import React, { Component } from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
} from 'react-native';
import {
  Divider,
} from 'react-native-elements';
import axios from 'axios';

import db from '../helpers/fire-database';

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    }

    this.firebaseMessagesEventListener = this.firebaseMessagesEventListener.bind(this);
  }

  firebaseMessagesEventListener() {
    db.ref('messages/').on('value', (snapshot) => {
      const messages = [];
      for (var index in snapshot.val()) {
        if (snapshot.val().hasOwnProperty(index)) {
          // messages.push(snapshot.val()[index])
          messages.push(Object.assign({}, snapshot.val()[index], { key: index }));
        }
      }
      this.setState({
        messages
      })
    })
  }

  componentDidMount() {
    this.firebaseMessagesEventListener();
  }

  render() {
    return (
      <FlatList
      data={this.state.messages}
      renderItem={({ item }) => (
        <View style={styles.margins}>
          <Text style={styles.userName}>
            {`${item.username}`}
          </Text>
          <Text style={styles.content}>
            {`${item.message}`}
          </Text>
          <Divider/>
        </View>
      )}
      />
    )
  }
}

const styles = StyleSheet.create({
  margins: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 3,
    marginRight: 2,
  },

  userName: {
    fontSize: 20,
    color: '#00897b',
  },

  content: {
    fontFamily: 'sans-serif-thin',
    fontSize: 23,
    marginLeft: 3,
    color: '#212121',
  }
})

export default Messages;
