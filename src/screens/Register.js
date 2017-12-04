import React, { Component } from 'react'
import {
  View,
  FlatList,
  ScrollView
} from 'react-native';
import {
  Button
} from 'react-native-elements';

import PersonalInfo from '../components/PersonalInfo';
import AddictionLevel from '../components/AddictionLevel';
import Interests from '../components/Interests';

class Register extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      // <View>
      <ScrollView>
          <PersonalInfo/>
          <AddictionLevel/>
          <Interests/>
          <Button
          title='Submit' />
      </ScrollView>
      // </View>
    )
  }
}

export default Register;
