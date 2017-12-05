import React, { Component } from 'react';
import {
  Button,
} from 'react-native-elements';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  AsyncStorage,
} from 'react-native';
import { connect } from 'react-redux';

import store from '../redux/store';
import cigarPerDayAction from '../redux/actions/cigarPerDay';
import userActions from '../redux/actions/user';

import cigareteConsumptionActions from '../redux/actions/cigareteConsumption';
import healthStatNewActions from '../redux/actions/healthStatNew';

class Smoking extends Component {
  constructor(props) {
    super(props);
    this.props.fetchUserData()
  }

  render() {
    return (
      <Button
        title={`Press when you smoke.`}
        backgroundColor='#e3871fff'
        containerViewStyle={styles.styling}
        onPress={async () => {
          this.props.addConsumption(this.props.cigareteConsumption)
          // this.props.consumeOneCigar(this.props.currentCigar, this.props.user)
        }}
      />
    )
  }
}

const styles = StyleSheet.create({
  styling: {
    width: 100,
    marginTop: 15,
  }
})

function mapStateToProps(state, props) {
  // console.log(JSON.stringify(state))
  return {
    currentCigar: state.cigarPerDay,
    user: state.user,
    cigareteConsumption: state.cigareteConsumption,
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    consumeOneCigar: (curr, user) => {
      dispatch(cigarPerDayAction.consumeOneCigar(parseInt(curr), user))
    },
    fetchUserData: () => {
      dispatch(userActions.fetchUserData())
    },
    addConsumption: (cigareteConsumption) => {
      dispatch(cigareteConsumptionActions.consumeOne());
      dispatch(healthStatNewActions.fetchHealthStat(cigareteConsumption+1));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Smoking)
