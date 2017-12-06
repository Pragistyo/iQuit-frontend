import React, { Component } from 'react';
import {
  Image
} from 'react-native';

class ShowLogo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('bababbabab ====== ahhahahahah ======= 11')
    return (
      <Image
        style={{ resizeMode: 'contain', width: 200, height:100 }}
        source={require('../assets/logo.png')}
      />
    );
  }
}

export default ShowLogo;
