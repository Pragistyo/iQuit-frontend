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
  Button
 } from 'react-native-elements';

class AddictionLevel extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Card>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset= {60}
      >
          <FormLabel>Average Pack Per day: </FormLabel>
          <FormInput
            onKeyBoardChange={(e) => { console.log(e) }} />
          <FormLabel>Price Per Pack: </FormLabel>
          <FormInput
            onKeyBoardChange={(e) => { console.log(e) }} />

        <View style={{ height: 10 }} />
      </KeyboardAvoidingView>
      </Card>
    )
  }
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


export default AddictionLevel;