import React, { Component } from 'react';
import {
  FlatList,
  Text,
} from 'react-native';
import {
  Card
} from 'react-native-elements';


class Messages extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const dummyMessage = [
        {userName: 'nncrawler', message: 'Saya dulu perokok berat, sejak ada klinik tong fang hidup saya tertolong'},
        {userName: 'Setya Novanto', message: 'Saya nabrak tiang listrik karena ngira ngisep rokok, ngga taunya ganja'}
        ]
    return (
      <FlatList
      data={dummyMessage}
      renderItem={ ({ item }) => {
          return (<Text key={ item.userName }>
            {item.message}
            asdas
          </Text>)
        }
      }
      />
    );
  }
}

export default Messages;
