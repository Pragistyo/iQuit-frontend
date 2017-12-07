import React, { Component } from 'react';
import {
  Image,
  Text,
  StyleSheet,
  View,
  Dimensions
} from 'react-native';
import {
  Card
} from 'react-native-elements';

class WantToBuy extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('bababbabab ====== ahhahahahah ======= 15')
    return (
      <Card
        containerStyle={{width: Dimensions.get('window').width - 20}}
      >
        <View style={styles.imageTitlePriceGrouping}>
          <Image
            style={ styles.imageInCard }
            source={{ uri: this.props.item.thumbnail }}
            resizeMode="contain"
          />
          <View
            style={ styles.containerDetail }
          >
            <Text style={styles.detailStyling}>
              {this.props.item.name}
            </Text>
            <Text style={styles.detailStyling}>
              {this.props.item.price}
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
