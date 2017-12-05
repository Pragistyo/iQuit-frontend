import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
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
    // alert(JSON.stringify(this.props.userData))
  }

  render() {
    return (
      <View>
      <View style={{ alignItems: 'center', top:'80%', position:'absolute', zIndex: 1, marginLeft:'30%' }}>
        <Smoking/>
      </View>
      <ScrollView style={{ zIndex: 0 }}>
        <View style={ styles.upperComponentGrouping }>
          <HealthStatus style={{ height: 100 }}/>
        </View>
        <MoneySaved style={{ height: 100 }}/>
        <WantToBuy style={{ height: 100 }}/>
        <TopRecommendations style={{ height: 100 }}/>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  upperComponentGrouping: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-around',
  },
  upperScreenMargin: {
    marginTop: 30,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
  }
})

export default Home;
