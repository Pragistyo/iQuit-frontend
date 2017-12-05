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

class Smoking extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Button
        title={`${this.props.currentCigar} + 1`}
        backgroundColor='#e3871fff'
        containerViewStyle={styles.styling}
        onPress={async () => {
          this.props.consumeOneCigar(this.props.currentCigar)
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
  return {
    currentCigar: state.cigarPerDay,
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    consumeOneCigar: (curr) => {
      dispatch(cigarPerDayAction.consumeOneCigar(parseInt(curr)))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Smoking)
