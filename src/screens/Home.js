import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import Smoking from '../components/Smoking';
import ShowLogo from '../components/ShowLogo';
import MoneySaved from '../components/MoneySaved';
import WantToBuy from '../components/WantToBuy';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <ShowLogo/>
        <MoneySaved/>
        <Smoking/>
        <WantToBuy/>
      </View>
    );
  }
}

export default Home;
