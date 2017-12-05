import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  Card,
  Icon,
} from 'react-native-elements';
import { connect } from 'react-redux';

import healthStatsAction from '../redux/actions/healthStatus';
import cigareteConsumptionActions from '../redux/actions/cigareteConsumption';

class HealthStatus extends Component {
  constructor(props) {
    super(props);
    this.props.fetchData(this.props.cigareteConsumption);
    // alert(this.props.cigareteConsumption)
  }

  render() {
    return (
      <Card
        containerStyle={{ width: 210 }}
      >
        <View style={styles.oneLiner}>
          <Icon
          name="favorite"
          color="#a00037"
          />
          <Text style={styles.strong}>
            {'Age Reduction: '}
          </Text>
          <Text>
            {this.props.newState.ageReduction} min
          </Text>
        </View>

        <View style={styles.oneLiner}>
          <Icon
          name="smoking-rooms"
          color="#4e342e"
          />
          <Text style={styles.strong}>
            {'Nicotine Amount: '}
          </Text>
          <Text>
            {this.props.newState.nicotineAmount} mg
          </Text>
        </View>

        <View style={styles.oneLiner}>
          <Icon
          name="bubble-chart"
          color="#6a1b9a"
          />
          <Text style={styles.strong}>
            {'Tar Amount: '}
          </Text>
          <Text>
            {this.props.newState.tarAmount} mg
          </Text>
        </View>

        <View style={styles.oneLiner}>
          <Icon
          name="airline-seat-individual-suite"
          color="#ef6c00"
          />
          <Text style={styles.strong}>
            {'Cancer Chance Increased: '}
          </Text>
          <Text>
            {this.props.newState.increasedCancerChance}
          </Text>
        </View>

      </Card>
    );
  }
}

const styles = StyleSheet.create({
  oneLiner: {
    flexDirection: 'row',
  },

  strong: {
    fontWeight: 'bold',
  }
})

const mapStateToProps = (state, props) => {
  return {
    ageReduction: state.healthStatus.ageReduction,
    nicotineAmount: state.healthStatus.nicotineAmount,
    tarAmount: state.healthStatus.tarAmount,
    increasedCancerChance: state.healthStatus.increasedCancerChance,
    cigarPerDay: state.cigarPerDay,
    allState: state,
    cigareteConsumption: state.cigareteConsumption,
    newState: state.healthStatNew,
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
    },
    smokeOne: () => {
      dispatch(cigareteConsumptionActions.consumeOne());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HealthStatus);
