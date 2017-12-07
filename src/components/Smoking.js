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
  Alert
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
    // console.log('bababbabab ====== ahhahahahah ======= 12')
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

var arrWords = [
  'Whenever you think about smoking you must see it as a lifetime’s chain of filth, disease, fear, misery and slavery.',
  'I would like you to pause for a moment, and to record your own feelings about smoking: what you think it does for you, why you smoke and why you want to',
  'To me this is the most tragic part of this whole business. How hard we worked to become hooked, and this is why it is difficult to stop teenagers. Because they are still learning to smoke, because they still find cigarettes distasteful, they believe they can stop whenever they want to. Why do they not learn from us?',
  'Smokers do not smoke because they enjoy it. They do it because they are miserable without it.',
  'However, you cannot force smokers to stop, and although all smokers secretly want to, until they are ready to do so a pact just creates additional pressure, which increases their desire to smoke. This turns them into secret smokers, which further increases the feeling of dependency.',
  'The moment you stop smoking, everything that goes wrong in your life is blamed on the fact that you’ve stopped smoking.',
  'The cigarette gets the credit for everything and the blame for nothing.',
  'The main reason that smokers find it difficult to quit is that they believe that they are giving up a genuine pleasure or crutch. It is absolutely essential to understand that there is nothing to ‘give up’.',
  'The whole business of smoking is like forcing yourself to wear tight shoes just to get the pleasure of taking them off.'
]

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
      var indexRandom = Math.floor(Math.random() * arrWords.length)
      Alert.alert('Reminder: ', `${arrWords[indexRandom]} - Allen Carr `)
      dispatch(cigareteConsumptionActions.consumeOne());
      dispatch(healthStatNewActions.fetchHealthStat(cigareteConsumption+1));
      dispatch(userActions.reduceMoney())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Smoking)
