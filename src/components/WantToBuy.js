import React, { Component } from 'react';
import {
  Image,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import {
  Card
} from 'react-native-elements';

class WantToBuy extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Card
        title="I want to spend my money to buy this instead."
        wrapperStyle={{ height: 150 }}
      >
        <View style={styles.imageTitlePriceGrouping}>
          <Image
            style={ styles.imageInCard }
            source={{ uri: 'https://pbs.twimg.com/profile_images/725275730267926528/dGPyaQZ6_400x400.jpg' }}
            resizeMode="contain"
          />
          <View
            style={ styles.containerDetail }
          >
            <Text style={styles.detailStyling}>
              Hacktiv8
            </Text>
            <Text style={styles.detailStyling}>
              Rp. 40.000.000
            </Text>
            <Text style={styles.detailStyling}>
            Tap for details..
            </Text>
          </View>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  imageTitlePriceGrouping: {
    flex: 1,
    flexDirection: 'row',
  },

  imageInCard: {
    width: 70,
    height: 70
  },

  detailStyling: {
    fontFamily: 'Roboto',
    fontWeight: '600'
  },

  containerDetail: {
    marginLeft: 15,
  }

})

export default WantToBuy;
