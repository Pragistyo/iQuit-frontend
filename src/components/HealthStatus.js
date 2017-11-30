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
      <Card
        containerStyle={{ width: 210 }}
      >
        <View style={styles.oneLiner}>
          <Icon
          name="favorite"
          color="#a00037"
          />
          <Text style={styles.strong}>
            {'Age Reduction: '}
          </Text>
          <Text>
            112 min
          </Text>
        </View>

        <View style={styles.oneLiner}>
          <Icon
          name="smoking-rooms"
          color="#4e342e"
          />
          <Text style={styles.strong}>
            {'Nicotine Amount: '}
          </Text>
          <Text>
            15 kg
          </Text>
        </View>

        <View style={styles.oneLiner}>
          <Icon
          name="bubble-chart"
          color="#6a1b9a"
          />
          <Text style={styles.strong}>
            {'Tar Amount: '}
          </Text>
          <Text>
            10 kg
          </Text>
        </View>

        <View style={styles.oneLiner}>
          <Icon
          name="airline-seat-individual-suite"
          color="#ef6c00"
          />
          <Text style={styles.strong}>
            {'Cancer Chance: '}
          </Text>
          <Text>
            Yes
          </Text>
        </View>

      </Card>
    );
  }
}

const styles = StyleSheet.create({
  oneLiner: {
    flexDirection: 'row',
  },

  strong: {
    fontWeight: 'bold',
  }
})

export default HealthStatus;
