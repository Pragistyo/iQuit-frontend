import React, { Component } from 'react';

// REACT-REDUX
// import { connect } from react-redux
// import {} from '.../actions/index'

// REACT NATIVE STYLE
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
    return (
      <View
      style={{padding: 4}}
      >
        <View
        style={{ paddingLeft: 20 }}
        >
          <Text
          style={styles.headerStyling}
          >
            Addiction Info
          </Text>
        </View>
        <Divider style={{ backgroundColor: '#9E9E9E' }} />
        <View
        style={{ marginBottom: 10 }}
        />
        <Kohana
         style={{ backgroundColor: '#e3871fff', width: 230, marginBottom: 10 }}
         label={'Cigarete price per pack'}
         iconClass={FontAwesome}
         iconName={'money'}
         iconColor={'white'}
         labelStyle={{ color: 'white' }}
         inputStyle={{ color: 'white' }}
         useNativeDriver
         onChangeText={(text) => { this.props.setPricePerPack(parseInt(text)) }}
        />
        <Kohana
         style={{ backgroundColor: '#e3871fff', width: 140, marginBottom: 5 }}
         label={'Cigar per day'}
         iconClass={FontAwesome}
         iconName={'minus'}
         iconColor={'white'}
         labelStyle={{ color: 'white' }}
         inputStyle={{ color: 'white' }}
         useNativeDriver
         onChangeText={ (text) => { this.props.setCigarPerDay(parseInt(text)) } }
        />
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
