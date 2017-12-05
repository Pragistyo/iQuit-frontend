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
    return (
      // <Badge
      //   value={`Money saved so far: Rp. ${this.props.moneySaved}`}
      // />
      <Card
      containerStyle={{ width: Dimensions.get('window').width }}
      >
        <View>
          <Text>
            You've saved Rp. {this.props.moneySaved}
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
