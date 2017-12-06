import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';
import {
  Card,
  FormLabel,
  FormInput,
  Button,
  Divider,
 } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

import registerActions from '../redux/actions/register';
import Kohana from './TextInput/Kohana';

class AddictionLevel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pricePerPack: 0,
      cigaretePerDay: 0,
    };
    this.setStateFromForm = this.setStateFromForm.bind(this)
  }

  setStateFromForm(state) {
    return (e) => {
      const changes = {};
      changes[state] = e.target.value
      this.setState(changes)
      // alert(JSON.stringify(this.state))
    }
  }

  render() {
    console.log('bababbabab ====== ahhahahahah ======= 1')
    return (
      <View
      style={{padding: 4}}
      >
        <Divider style={{ backgroundColor: '#9E9E9E' }} />
        <View
        style={{ marginBottom: 10 }}
        />
        <Kohana
          style={{ backgroundColor: 'white', width: 300, marginBottom: 5, borderColor: '#fe7013', borderWidth: 2 }}
          label={'Cigar per day'}
          iconClass={FontAwesome}
          iconName={'minus'}
          iconColor={'#fe7013'}
          labelStyle={{ color: '#fe7013' }}
          inputStyle={{ color: '#fe7013' }}
          useNativeDriver
          onChangeText={(text) => { this.props.setCigarPerDay(parseInt(text)) }}
          value={this.props.cigarPerDay}
        />
        <Kohana
          style={{ backgroundColor: 'white', width: 300, marginBottom: 10, borderColor: '#fe7013', borderWidth: 2 }}
          label={'Cigarete price per pack'}
          iconClass={FontAwesome}
          iconName={'money'}
          iconColor={'#fe7013'}
          labelStyle={{ color: '#fe7013' }}
          inputStyle={{ color: '#fe7013' }}
         useNativeDriver
         onChangeText={ (text) => { this.props.setPricePerPack(parseInt(text)) } }
         value={this.props.pricePerPack}
        />
        <View style={{ height: 60 }} />
      </View>
    )
  }
  // render() {
  //   return(
  //     <Card>
  //     <KeyboardAvoidingView
  //       behavior="position"
  //       keyboardVerticalOffset= {60}
  //     >
  //         <FormLabel>Average Pack Per day: </FormLabel>
  //         <FormInput
  //           onKeyBoardChange={(e) => { console.log(e) }} />
  //         <FormLabel>Price Per Pack: </FormLabel>
  //         <FormInput
  //           onKeyBoardChange={(e) => { console.log(e) }} />
  //
  //       <View style={{ height: 10 }} />
  //     </KeyboardAvoidingView>
  //     </Card>
  //   )
  // }
}



// REACT - REDUX

// const mapState = (state) => {
//   return {
//     bla: state.something.bla
//   }
// }

// const mapActions = (dispatch) => {
//   return {
//     bla: (params) => dispatch(bla(params))
//   }
// }

// const connectedComponent = connect(
//   mapActions,
//   mapState
// )(AddictionLevel)

// export default connectedComponent

const styles = StyleSheet.create({
  upperPersonalInfoContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  headerStyling: {
    fontFamily: "sans-serif-light",
    fontSize: 40,
  }
})

// export default AddictionLevel;
function mapStateToProps(state, props) {
  return {
    pricePerPack: state.register.pricePerPack,
    cigarPerDay: state.register.cigarPerDay,
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    setPricePerPack: (pricePerPack) => {
      dispatch(registerActions.setPricePerPack(pricePerPack));
    },
    setCigarPerDay: (cigarPerDay) => {
      dispatch(registerActions.setCigarPerDay(cigarPerDay));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddictionLevel)
