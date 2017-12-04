import React, { Component } from 'react';
import {
  Badge
} from 'react-native-elements';
import { connect } from 'react-redux';

class MoneySaved extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Badge
        value={`Money saved so far: Rp. ${this.props.moneySaved}`}
      />
    );
  }
}

function mapStateToProps(state, props) {
  return {
    moneySaved: state.user.moneySaved
  };
}

export default connect(mapStateToProps, null)(MoneySaved);
