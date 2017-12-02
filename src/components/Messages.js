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
import fireapp from '@firebase/app';
import '@firebase/firestore';
// import '@firebase/app/dist/esm/src/firebaseApp';
// import firestore from '@firebase/firestore';
// import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBCs2gd1l2vlZR0KBnUNVZ6SZRGam-J7S8",
  authDomain: "i-quit-e703a.firebaseapp.com",
  databaseURL: "https://i-quit-e703a.firebaseio.com",
  projectId: "i-quit-e703a",
  storageBucket: "i-quit-e703a.appspot.com",
  messagingSenderId: "1018168285781"
};
fireapp.initializeApp(firebaseConfig);
const db = fireapp.firestore();
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.initializeApp(firebaseConfig);

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    }
  }

  componentDidMount() {
    this.setState({
      messages: 'lll',
    })

    db.collection('messages').get().then((data) => {
      alskjdpojw
      this.setState({
        messages: 'then',
      })
      alert('then')
    })
    .catch((err) => {
      al;skjdl
      this.setState({
        messages: 'catch',
      })
      alert('catch')
    })
    console.log(db.collection('messages').get());
    // alert('aasoy')
  }

  // ‎componentDidMount() {
  //   // db.collection('messages').get().then((querySnapshot) => {
  //   //   this.setState({
  //   //     messages: 'asd',
  //   //   })
  //   // })
  //   // .catch((err) => {
  //   //   this.setState({
  //   //     messages: 'asd'
  //   //   })
  //   // });
  //   //
  //   // this.setState({
  //   //   messages: 'tes'
  //   // })
  // }

  render() {
    return (
      <FlatList
      data={[
        {key: 'id1', userName: 'aku anak gembala', m:'Gua udah dari tahun 90 an ngerokok, sekarang udah setop'},
        {key: 'id2', userName: 'b-for-bastard', m:'Wah gimana tuh caranya bro?'},
        {key: 'id2', userName: 'b-for-bastard', m:'Wah gimana tuh caranya bro?'},
        {key: 'id2', userName: 'b-for-bastard', m:'Wah gimana tuh caranya bro?'},
        {key: 'id2', userName: 'b-for-bastard', m:'Wah gimana tuh caranya bro?'},
        {key: 'id2', userName: 'b-for-bastard', m:'Wah gimana tuh caranya bro?'},
        {key: 'id2', userName: 'b-for-bastard', m:'Wah gimana tuh caranya bro?'},
        {key: 'id2', userName: 'b-for-bastard', m:'Wah gimana tuh caranya bro?'},
        {key: 'id2', userName: 'b-for-bastard', m:'Wah gimana tuh caranya bro?'},
        {key: 'id2', userName: 'b-for-bastard', m:'Wah gimana tuh caranya bro?'},
        {key: 'id2', userName: 'b-for-bastard', m:'Wah gimana tuh caranya bro?'},
        {key: 'id2', userName: 'b-for-bastard', m:'Wah gimana tuh caranya bro?'},
        {key: 'id2', userName: 'b-for-bastard', m:'Wah gimana tuh caranya bro?'},
        {key: 'id2', userName: 'b-for-bastard', m:'Wah gimana tuh caranya bro?'},
        {key: 'id2', userName: 'b-for-bastard', m:'Wah gimana tuh caranya bro?'},
      ]}
      renderItem={({ item }) => (
        <View style={styles.margins}>
          <Text style={styles.userName}>
            {`${item.userName}`}
          </Text>
          <Text style={styles.content}>
            {`${item.m}`}
          </Text>
          <Text>
            {JSON.stringify(this.state.messages)}
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
