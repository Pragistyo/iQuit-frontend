import React, { Component } from 'react';
import {
  Button,
} from 'react-native-elements';
import {
  TouchableHighlight,
  Image,
  StyleSheet,
  AsyncStorage,
  Text
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
      <TouchableHighlight
      style={styles.circle}
      onPress={async () => {
          this.props.consumeOneCigar(this.props.currentCigar)
      }}
      >
      <Text style={styles.touchableText}>
      {`${this.props.currentCigar} + 1`}
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
