import React, { Component } from 'react';
import {
  Button,
} from 'react-native-elements';
import {
  TouchableOpacity,
  Image
} from 'react-native';

class Smoking extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Button
        title="Take one in case you couldn't make it"
        icon={{name: 'warning'}}
        backgroundColor='#e3871fff'
      />
    )
  }
}

export default Smoking
