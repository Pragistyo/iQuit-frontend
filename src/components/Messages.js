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

class Messages extends Component {
  constructor(props) {
    super(props);
  }

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
