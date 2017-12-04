import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {
  Card,
  FormLabel,
  FormInput,
 } from 'react-native-elements';

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    }
    this.setStateFromForm = this.setStateFromForm.bind(this);
  }

  setStateFromForm(state) {
    return (input) => {
      const changes = {};
      changes[state] = input
      this.setState(changes)
    }
  }

  render() {
    return (
      <Card
        title="Personal Info"
      >
        <View style={styles.cardContainer}>
          <View>
            <FormLabel containerStyle={{width: 300}}>Name: {this.state.name}</FormLabel>
            <FormInput containerStyle={{width: 300}} onChangeText={this.setStateFromForm('name')}/>
          </View>
          <View>
            <FormLabel containerStyle={{width: 200}}>Age: {this.state.name}</FormLabel>
            <FormInput containerStyle={{width: 50}} onChangeText={this.setStateFromForm('name')}/>
          </View>
        </View>
      </Card>)
  }
}

const styles = StyleSheet.create({
  upperPersonalInfoContainer: {
    flex: 1,
    flexDirection: 'row'
  }
})

module.exports = PersonalInfo;
