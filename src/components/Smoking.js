import React, { Component } from 'react';
import {
  Button,
} from 'react-native-elements';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  AsyncStorage,
  TouchableHighlight,
  Text,
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

  // render() {
  //   return (
  //     <Button
  //       title={`Press when you smoke.`}
  //       backgroundColor='#e3871fff'
  //       containerViewStyle={styles.styling}
  //       onPress={async () => {
  //         this.props.addConsumption(this.props.cigareteConsumption)
  //         // this.props.consumeOneCigar(this.props.currentCigar, this.props.user)
  //       }}
  //     />
  //   )
  // }
  render() {
    console.log('bababbabab ====== ahhahahahah ======= 12')
    return (
      <TouchableHighlight
      style={styles.circle}
      onPress={async () => {
        this.props.addConsumption(this.props.cigareteConsumption)
        // this.props.consumeOneCigar(this.props.currentCigar, this.props.user)
      }}
      >
      <Text style={styles.touchableText}>
      Press When Smoke
      {` ${this.props.cigareteConsumption}`}
      </Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  styling: {
    width: 100,
    marginTop: 15,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
    backgroundColor: '#fe7013'
  },
  touchableText: {
    marginTop: 40,
    color:'#fff',
    textAlign:'center'
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
      dispatch(userActions.reduceMoney())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Smoking)
