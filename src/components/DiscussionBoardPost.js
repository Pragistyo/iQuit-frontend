import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import {
  FormInput,
} from 'react-native-elements';
import { connect } from 'react-redux';

import db from '../helpers/fire-database';

class DiscussionBoardPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    }
    this.sendMessage = this.sendMessage.bind(this)
  }

  sendMessage() {
    db.ref(`/messages/${Math.floor(Math.random()*100000000)}`).set({
      username: this.props.username,
      message: this.state.message,
      created: Date(),
    })
    this.input.clearText();
  }

  render() {
    return (
      <View>
        <FormInput
        ref={ input => this.input = input }
        onChangeText={(text) => { this.setState({ message: text }) } }
        onSubmitEditing={() => { this.sendMessage() } }
        />
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    username: state.user.name,
  }
}

// export default DiscussionBoardPost;
export default connect(mapStateToProps, null)(DiscussionBoardPost)
