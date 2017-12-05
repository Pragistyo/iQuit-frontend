import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,

  AsyncStorage,
  Button,
} from 'react-native';

import Smoking from '../components/Smoking';
import ShowLogo from '../components/ShowLogo';
import MoneySaved from '../components/MoneySaved';
import WantToBuy from '../components/WantToBuy';
import HealthStatus from '../components/HealthStatus';
import TopRecommendations from '../components/TopRecommendations';
import InputWantToBuy from '../components/InputWantToBuy';

class Home extends Component {
  constructor(props) {
    super(props);
    // alert(JSON.stringify(this.props.userData))
  }

  render() {
    return (
      <ScrollView>
        <Button
        title="reset"
        onPress={async () => {
          await AsyncStorage.removeItem('userId');
          await AsyncStorage.removeItem('cigarConsumed');

        }}
        />
        <View style={styles.upperScreenMargin}/>
        <ShowLogo style={{ height: 100 }}/>
        <View style={ styles.upperComponentGrouping }>
          <HealthStatus style={{ height: 100 }}/>
          <Smoking style={{ height: 100 }}/>
        </View>
        <MoneySaved style={{ height: 100 }}/>
        <WantToBuy style={{ height: 100 }}/>
        <InputWantToBuy/>
        <TopRecommendations style={{ height: 100 }}/>
      </ScrollView>
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
})

export default Home;
