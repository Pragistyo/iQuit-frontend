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
import {
  connect
} from 'react-redux';
import { GiftedChat } from 'react-native-gifted-chat'
import axios from 'axios';

import db from '../helpers/fire-database';

export class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    }

    this.firebaseMessagesEventListener = this.firebaseMessagesEventListener.bind(this);
  }

  firebaseMessagesEventListener() {
    db.ref('/messages').on('value', (snapshot) => {
      const messages = [];
      for (var index in snapshot.val()) {
        if (snapshot.val().hasOwnProperty(index)) {
          const _id = this.props.username === snapshot.val()[index].username ? 1 : 2;
          // messages.push(snapshot.val()[index])
          messages.push(Object.assign({}, snapshot.val()[index], {
            _id: index,
            key: index,
            utcValue: new Date(snapshot.val()[index].created).toUTCString(),
            text: snapshot.val()[index].message,
            createdAt: new Date(snapshot.val()[index].created),
            user: {
              _id: _id,
              name: snapshot.val()[index].username
            },
            order: snapshot.val()[index].order,
          }));
        }
      }
      messages.sort((a, b) => {
        return b.order - a.order;
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
    db.ref(`/messages/${Math.floor(Math.random() * 100000000)}`).set({
      username: this.props.username,
      message: messages[0].text,
      created: Date(),
      order: Date.now(),
    });
  }

  render() {
    console.log('bababbabab ====== ahhahahahah ======= 7')
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{ _id: 1 }}
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

function mapStateToProps(state, props) {
  return {
    username: state.user.name,
  }
}

export default connect(mapStateToProps, null)(Messages);