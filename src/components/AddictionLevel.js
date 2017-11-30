import React, { Component } from 'react';
import {
  StyleSheet,
  View,
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
        <FormInput/>
        <FormInput/>
        <Button
        title='BUTTON' />
      </Card>
    )
  }
}

export default AddictionLevel;
