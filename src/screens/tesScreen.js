import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';

import healthStatsAction from '../redux/actions/healthStatus';

class tesScreen extends Component {
  constructor(props) {
    super(props);
    // this.props.setData()
    this.props.fetchData(12)
    healthStatsAction.fetchData(12);
  }

  render() {
    return (
      <View>
        <Text>
          asdasd
          {JSON.stringify(this.props)}
        </Text>
      </View>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    ageReduction: state.healthStatus.ageReduction,
    nicotineAmount: state.healthStatus.nicotineAmount,
    tarAmount: state.healthStatus.tarAmount,
    increasedCancerChance: state.healthStatus.increasedCancerChance,
    allState: state,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchData: () => {
      dispatch(healthStatsAction.fetchData(20));
    },
    setData: () => {
      dispatch(healthStatsAction.setData({
          ageReduction: 1,
          nicotineAmount: 1,
          tarAmount: 1,
          increasedCancerChance: false,
        }))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(tesScreen);
