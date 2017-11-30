import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  Card,
  Icon,
} from 'react-native-elements';

class HealthStatus extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Card>
        <View style={styles.oneLiner}>
          <Icon
          name="favorite"
          color="grey"
          />
          <Text>
            Age Reduction
          </Text>
        </View>

        <View style={styles.oneLiner}>
          <Icon
          name="asterisk"/>
          <Text>
            Nicotine Amount
          </Text>
        </View>

        <View style={styles.oneLiner}>
          <Icon
          name="bubble-chart"/>
          <Text>
            Tar Amount
          </Text>
        </View>

        <View style={styles.oneLiner}>
          <Icon
          name="airline-seat-individual-suite"/>
          <Text>
            Cancer Chance
          </Text>
        </View>

      </Card>
    );
  }
}

const styles = StyleSheet.create({
  oneLiner: {
    flexDirection: 'row',
  }
})

export default HealthStatus;
