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

class Smoking extends Component {
  constructor(props) {
    super(props);
    this.props.fetchUserData()
  }

  render() {
    return (
      <Button
        title={`Press when you smoke. ${this.props.currentCigar}`}
        backgroundColor='#e3871fff'
        containerViewStyle={styles.styling}
        onPress={async () => {
          this.props.consumeOneCigar(this.props.currentCigar, this.props.user)
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
  console.log(JSON.stringify(state))
  return {
    currentCigar: state.cigarPerDay,
    user: state.user,
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    consumeOneCigar: (curr, user) => {
      dispatch(cigarPerDayAction.consumeOneCigar(parseInt(curr), user))
    },
    fetchUserData: () => {
      dispatch(userActions.fetchUserData())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Smoking)
