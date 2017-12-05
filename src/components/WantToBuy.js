import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Image,
  Text,
  StyleSheet,
  View,
  AsyncStorage,
} from 'react-native';
import {
  Card
} from 'react-native-elements';

import wishlistActions from '../redux/actions/wishlist';
import thousandSeparator from '../helpers/thousandSeparator';

class WantToBuy extends Component {
  constructor(props) {
    super(props)
    this.props.initWishlist();
    this.props.fetchData();
  }

  render() {
    // alert(this.props.wishlists.length)
    return (
      <Card
        title="I want to spend my money to buy this instead."
        wrapperStyle={{ flex: 1 }}
      >
        {this.props.wishlists.length > 0 &&
          this.props.wishlists.map((item) => {
            console.log(item);
            return (<View style={styles.imageTitlePriceGrouping}>
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
                  Rp. {thousandSeparator(this.props.wishlists[0].price)}
                </Text>
                <Text style={styles.detailStyling}>
                  Could buy at:  {this.props.wishlists[0].could_buy.slice(0, 10)}
                </Text>
                <Text style={styles.detailStyling}>
                Tap for details..
                </Text>
              </View>
            </View>)
          })
        // (<View style={styles.imageTitlePriceGrouping}>
        //   <Image
        //     style={ styles.imageInCard }
        //     source={{ uri: this.props.wishlists[0].thumbnail }}
        //     resizeMode="contain"
        //   />
        //   <View
        //     style={ styles.containerDetail }
        //   >
        //     <Text style={styles.detailStyling}>
        //       {this.props.wishlists[0].name}
        //     </Text>
        //     <Text style={styles.detailStyling}>
        //       Rp. {thousandSeparator(this.props.wishlists[0].price)}
        //     </Text>
        //     <Text style={styles.detailStyling}>
        //     Tap for details..
        //     </Text>
        //   </View>
        // </View>)
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
    fontFamily: 'sans-serif-thin',
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
    fetchData: async () => {
      const userId = await AsyncStorage.getItem('userId');
      dispatch(wishlistActions.fetchWishlist(userId));
    },
    initWishlist: () => {
      dispatch(wishlistActions.initWishlist());
    },
  };
}

// export default WantToBuy;
export default connect(mapStateToProps, mapDispatchToProps)(WantToBuy);
