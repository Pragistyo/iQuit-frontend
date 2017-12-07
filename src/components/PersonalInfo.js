import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
} from 'react-native';
import {
  Card,
  FormLabel,
  FormInput,
  Divider,
 } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

import registerActions from '../redux/actions/register';
import Kohana from './TextInput/Kohana';

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
    }
    this.setStateFromForm = this.setStateFromForm.bind(this);
  }

  setStateFromForm(state) {
    return (e) => {
      const changes = {};
      changes[state] = e.target.value
      this.setState(changes)
    }
  }

  render() {
    // console.log('bababbabab ====== ahhahahahah ======= 9')
    return (
      <View style={{padding: 4}}>
          {/* <View style={{ paddingLeft: 20 }}>
            <Text style={styles.headerStyling}>
              Personal Info {this.props.name}
            </Text>
          </View> */}
          <Divider style={{ backgroundColor: '#9E9E9E' }} />
          <View
          style={{ marginBottom: 10 }}
          />
           {/* <KeyboardAvoidingView
          style={{}}
          behavior="position"
          > */}
            <Kohana
            style={{ backgroundColor: 'white', width: 300, marginBottom: 5, borderColor: '#fe7013', borderWidth: 2 }}
            label={'Name'}
            iconClass={FontAwesome}
            iconName={'user'}
            iconColor={'#fe7013'}
          labelStyle={{ color: '#fe7013' }}
            inputStyle={{ color: '#fe7013' }}
            useNativeDriver
            // onChangeText={this.setStateFromForm('name')}
            onChangeText={(e) => { this.props.setName(e) }}
            value={this.props.name}
            />
            <Kohana
            style={{ backgroundColor: 'white', width: 300, marginBottom: 10, borderColor: '#fe7013', borderWidth: 2 }}
            label={'Age'}
            iconClass={FontAwesome}
            iconName={'birthday-cake'}
            iconColor={'#fe7013'}
            labelStyle={{ color: '#fe7013' }}
            inputStyle={{ color: '#fe7013' }}
            useNativeDriver
            onChangeText={(e) => { this.props.setAge(e) }}
            value={this.props.age}
            />
            <View style={{ height: 60 }} />
        {/* </KeyboardAvoidingView> */}
      </View>
    )
  }

  // render() {
  //   return (
  //     <Card
  //       title="Personal Info"
  //     >
  //       <View style={styles.cardContainer}>
  //         <View>
  //           <FormLabel containerStyle={{width: 300}}>Name: {this.state.name}</FormLabel>
  //           <FormInput containerStyle={{width: 300}} onChangeText={this.setStateFromForm('name')}/>
  //         </View>
  //         <View>
  //           <FormLabel containerStyle={{width: 200}}>Age: {this.state.name}</FormLabel>
  //           <FormInput containerStyle={{width: 50}} onChangeText={this.setStateFromForm('name')}/>
  //         </View>
  //       </View>
  //     </Card>)
  // }
}

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

// module.exports = PersonalInfo;

const mapStateToProps = (state, props) => {
  return {
    name: state.register.name,
    age: state.register.age,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    setName: (name) => {
      dispatch(registerActions.setName(name));
    },
    setAge: (age) => {
      dispatch(registerActions.setAge(age));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);
