import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Image,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import {
  Card
} from 'react-native-elements';

import wishlistActions from '../redux/actions/wishlist';

class WantToBuy extends Component {
  constructor(props) {
    super(props)
    this.props.initWishlist();
    this.props.fetchData();
  }

  render() {
    return (
      <Card
        title="I want to spend my money to buy this instead."
        wrapperStyle={{ height: 150 }}
      >
        {this.props.wishlists.length > 0 &&
        (<View style={styles.imageTitlePriceGrouping}>
          <Image
            style={ styles.imageInCard }
            source={{ uri: this.props.wishlists[0].thumbnail }}
            resizeMode="contain"
          />
          <View
            style={ styles.containerDetail }
          >
            <Text style={styles.detailStyling}>
              {this.props.wishlists[0].name}
            </Text>
            <Text style={styles.detailStyling}>
              Rp. {this.props.wishlists[0].price}
            </Text>
            <Text style={styles.detailStyling}>
            Tap for details.. 
            </Text>
          </View>
        </View>)
        }
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

const mapStateToProps = (state, props) => {
  return {
    wishlists: state.wishlist,
    // name: state.wishlist[0].name,
    // price: state.wishlist[0].price,
    // thumbnail: state.wishlist[0].thumbnail,
  };
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchData: () => {
      dispatch(wishlistActions.fetchWishlist('5a226e63f40b25266e72f15e'));
    },
    initWishlist: () => {
      dispatch(wishlistActions.initWishlist());
    },
  };
}

// export default WantToBuy;
export default connect(mapStateToProps, mapDispatchToProps)(WantToBuy);
