import React, { Component } from 'react';
import {
  Badge
} from 'react-native-elements';

class MoneySaved extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Badge
        value={'Money saved so far: Rp. 0'}
      />
    );
  }
}

export default MoneySaved;
