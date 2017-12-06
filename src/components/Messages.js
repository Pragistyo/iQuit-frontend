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
import { GiftedChat } from 'react-native-gifted-chat'
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
          messages.push(Object.assign({}, snapshot.val()[index], {
            _id: index,
            key: index,
            utcValue: new Date(snapshot.val()[index].created).toUTCString(),
            text: snapshot.val()[index].message,
            createdAt: new Date(snapshot.val()[index].created),
            user: { _id: index, name: snapshot.val().username }
          }));
        }
      }
      // messages.map((item) => {
      //   console.log(new Date(item.created.toUTCString()));
      // })
      messages.sort((a, b) => {
        return a.utcValue - b.utcValue;
      })
      this.setState({
        messages
      })
    })
  }

  componentDidMount() {
    this.firebaseMessagesEventListener();
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        // onSend={(messages) => this.onSend(messages)}
      />
      // <FlatList
      // data={this.state.messages}
      // renderItem={({ item }) => (
      //   <View style={styles.margins}>
        
      //     <View >
      //       <Text style={styles.userName}>
      //         {`${item.username}`}
      //       </Text>
      //       <Text style={styles.postDate}>
      //         {`${item.created.slice(0, 10)}`}
      //       </Text>
      //     </View>
      //     <Text style={styles.content}>
      //       {`${item.message}`}
      //     </Text>
      //     <Divider/>
      //   </View>
      // )}
      // />
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
    color: '#fe7013',
    fontWeight: 'bold'
  },

  postDate: {
    fontSize: 12,
    color: 'darkgrey',
    alignSelf: 'flex-end'
  },

  content: {
    fontSize: 22,
    marginLeft: 3,
    color: 'black',
  }
})

export default Messages;
