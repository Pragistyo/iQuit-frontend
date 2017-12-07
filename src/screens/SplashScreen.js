import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import Logo from '../components/ShowLogo';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Logo/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SplashScreen;
