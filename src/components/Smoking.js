import React, { Component } from 'react';
import {
  Button,
} from 'react-native-elements';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

class Smoking extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Button
        title="Press when you smoke."
        backgroundColor='#e3871fff'
        containerViewStyle={styles.styling}
      />
    )
  }
}

const styles = StyleSheet.create({
  styling: {
    width: 100,
    marginTop: 15,
  }
})

export default Smoking
