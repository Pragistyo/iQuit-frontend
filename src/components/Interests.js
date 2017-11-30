import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {
  Card,
  FormLabel,
  FormInput,
  Button
 } from 'react-native-elements';

import DropdownMenu from 'react-native-dropdown-menu';

class Interests extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var data = [["C", "Java", "JavaScript"], ["Python", "Ruby"], ["Swift", "Objective-C"]];

    return(
      <Card>
        <DropdownMenu
        data={data}
        handler={(selection, row) => alert(data[selection][row])} >
          <View
          style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
          >
           <Text>
             Your own view Here
           </Text>
          </View>
        </DropdownMenu>
      </Card>
    )
  }
}

export default Interests;
