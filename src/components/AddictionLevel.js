import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
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
        <Text>
          Price per 
        </Text>
      </Card>
    )
  }
}

export default AddictionLevel;
