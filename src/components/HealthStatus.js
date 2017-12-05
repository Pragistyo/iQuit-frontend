import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import {
  Card,
  Icon,
} from 'react-native-elements';
import { connect } from 'react-redux';

import healthStatsAction from '../redux/actions/healthStatus';

class HealthStatus extends Component {
  constructor(props) {
    super(props);
    this.props.fetchData(12);
  }

  render() {
    return (
      <Card
        containerStyle={{ width: Dimensions.get('window').width }}
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
            {this.props.ageReduction} min
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
            {this.props.nicotineAmount} mg
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
            {this.props.tarAmount} mg
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
            {this.props.increasedCancerChance.toString()}
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

export default connect(mapStateToProps, mapDispatchToProps)(HealthStatus);
