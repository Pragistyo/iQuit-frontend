import React, { Component } from 'react'
import {
  View,
  FlatList,
  ScrollView,
  StyleSheet,
  AsyncStorage,
} from 'react-native';
import {
  Button,
  Divider,
} from 'react-native-elements';
import { connect } from 'react-redux';

import registerActions from '../redux/actions/register';

import PersonalInfo from '../components/PersonalInfo';
import AddictionLevel from '../components/AddictionLevel';
import Interests from '../components/Interests';
import ShowLogo from '../components/ShowLogo';

class Register extends Component {
  constructor(props) {
    super(props)
    this.onFinishPress = this.onFinishPress.bind(this);
  }

  onFinishPress() {
    // (async () => {
    //   try {
    //     await AsyncStorage.setItem('TestKey', 'TestValue')
    //   } catch (e) {
    //     alert('err')
    //   }
    // })()
    // alert('raw'+JSON.stringify(this.props.registerData))
    (async () => {
      try {
        this.props.submitData(this.props.registerData);
        await AsyncStorage.setItem('cigarPerDay', (this.props.registerData.cigarPerDay).toString())
        this.props.activateSwitchScreen();
      } catch (e) {
        alert(e)
      }
    })()
  }

  componentDidMount() {
    (async () => {
      try {
        const asd = await AsyncStorage.getItem('userData')
        // alert(asd)
      } catch (e) {
        alert('not found')
      }
    })()
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
          title='Finish'
          onPress={this.onFinishPress}
        />
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

function mapStateToProps(state, props) {
  return {
    registerData: state.register,
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    submitData: (registerData) => {
      const data = {
        name: registerData.name,
        username: registerData.name,
        age: registerData.age,
        pricePerPack: registerData.pricePerPack,
        interests: registerData.interests.map((item) => { return item.name })

      }
      dispatch(registerActions.submitData(data))
    }
  }
}
// export default Register;
export default connect(mapStateToProps, mapDispatchToProps)(Register)
