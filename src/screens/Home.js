import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import Smoking from '../components/Smoking';
import ShowLogo from '../components/ShowLogo';
import MoneySaved from '../components/MoneySaved';
import WantToBuy from '../components/WantToBuy';
import HealthStatus from '../components/HealthStatus';
import TopRecommendations from '../components/TopRecommendations';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <ShowLogo/>
        <HealthStatus/>
        <MoneySaved/>
        <Smoking/>
        <WantToBuy/>
        <TopRecommendations/>
      </View>
    );
  }
}

export default Home;
