import React, { Component } from 'react'
import {
  View,
  FlatList,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  Button,
  Divider,
} from 'react-native-elements';

import PersonalInfo from '../components/PersonalInfo';
import AddictionLevel from '../components/AddictionLevel';
import Interests from '../components/Interests';
import ShowLogo from '../components/ShowLogo';

class Register extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      // <View>
      <ScrollView>
        <View style={styles.logoWrapper}>
          <ShowLogo/>
        </View>
        <PersonalInfo/>
        <AddictionLevel/>
        <Divider style={{ backgroundColor: '#9E9E9E', marginBottom: 5 }} />
        <Interests/>
        <Divider style={{ backgroundColor: '#9E9E9E', marginBottom: 40, marginTop: 5 }} />
        <Button
        backgroundColor="#e3871fff"
        title='Finish' />
        <View
        style={ { marginBottom: 16 } }
        />
      </ScrollView>
      // </View>
    )
  }
}

const styles = StyleSheet.create({
  logoWrapper: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 50,
  }
})

export default Register;
