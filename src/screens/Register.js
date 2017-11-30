import React, { Component } from 'react'
import {
  View
} from 'react-native';

import PersonalInfo from '../components/PersonalInfo';
import AddictionLevel from '../components/AddictionLevel';

class Register extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <PersonalInfo/>
        <AddictionLevel/>
      </View>
    )
  }
}

export default Register;
