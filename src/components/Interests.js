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



class Interests extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var data = [["C", "Java", "JavaScript"], ["Python", "Ruby"], ["Swift", "Objective-C"]];

    return(
      <Card>
        <Text>
          Choose several category that pick your interest
        </Text>

      </Card>
    )
  }
}

export default Interests;
