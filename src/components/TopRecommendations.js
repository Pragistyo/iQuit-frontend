import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import {
  List,
  ListItem,
} from 'react-native-elements';


class TopRecommendations extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <List containerStyle={{ marginBottom: 20 }}>
          <ListItem
            avatar={{ uri: 'https://static1.squarespace.com/static/5678e71ec647ad2a4bc8f1fb/t/58d0e2fb9f745633ea2d79ee/1490084607878/' }}
            title="Kawaskieu Ninja"
            subtitle="Rp. 19.000.000"
          />

          <ListItem
            avatar={{ uri: 'http://downloadpony.com/wp-content/uploads/2016/07/WinRAR-Free-Download.png' }}
            title="Winrar Premium"
            subtitle="Rp. 200.000"
          />
        </List>
      </View>
    );
  }
}

export default TopRecommendations;
