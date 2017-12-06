import React, { Component } from 'react';
import { Dimensions, View, Text } from 'react-native'
import {
  Badge,
  Card
} from 'react-native-elements';
import { connect } from 'react-redux';

class MoneySaved extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('bababbabab ====== ahhahahahah ======= 8')
    return (
      <Card
        containerStyle={{ width: Dimensions.get('window').width-30 }}
      >
        <View>
          <Text style={{ fontWeight: 'bold' }}>
            Today, You've saved Rp. {this.props.moneySaved.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
          </Text>
        </View>
      </Card>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    moneySaved: state.user.moneySaved
  };
}

export default connect(mapStateToProps, null)(MoneySaved);