import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Image,
  Text,
  StyleSheet,
  View,
  AsyncStorage,
  Button,
  Modal,
  ScrollView
} from 'react-native';
import {
  Card
} from 'react-native-elements';

import wishlistActions from '../redux/actions/wishlist';
import thousandSeparator from '../helpers/thousandSeparator';
import InputWannaBuy from '../components/InputWantToBuy'

class WantToBuy extends Component {
  constructor(props) {
    super(props)
    this.props.initWishlist();
    this.props.fetchData();
    this.state = {
      modalVisible: false,
    }
  }

  onPressInterest(){
    alert()
  }

  toggleModal(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    console.log('bababbabab ====== ahhahahahah ======= 14')
    return (
      <Card
        title="I want to spend my money to buy this instead."
        wrapperStyle={{ flex: 1 }}
      >
        {Array.isArray(this.props.wishlists) && this.props.wishlists.length > 0 &&
          this.props.wishlists.map((item, index) => {
            console.log(item);
            return (<View style={styles.imageTitlePriceGrouping} key={index}>
              <Image
                style={ styles.imageInCard }
                source={{ uri: this.props.wishlists[index].thumbnail }}
                resizeMode="contain"
              />
              <View
                style={ styles.containerDetail }
              >
                <Text style={styles.detailStyling}>
                  {this.props.wishlists[index].name}
                </Text>
                <Text style={styles.detailStyling}>
                  Rp. {thousandSeparator(this.props.wishlists[index].price)}
                </Text>
                <Text style={styles.detailStyling}>
                  {/* Could buy at:  {this.props.wishlists[index].could_buy.slice(index, 10)} */}
                  {/* {this.props.wishlists[index].could_buy} */}
                  Could buy at:  {new Date(this.props.wishlists[index].could_buy).toLocaleDateString()}
                </Text>
                <Text style={styles.detailStyling}>
                Tap for details..
                </Text>
              </View>
            </View>)
          })
        }
        <Modal animationType={"slide"} transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => { console.log("Modal has been closed.") }}>
          <View style={{ flex: 1 }}>
            <ScrollView>
              <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 20, marginBottom: 10 }}>Input Your Wishlist:</Text>
              </View>
              <InputWannaBuy toggleWantToBuy={() => {
                this.toggleModal(!this.state.modalVisible);
              }}/>
            </ScrollView>
            {/* <Button
              color="#fe7013"
              title="SUBMIT"
              style={{ alignItems: 'center' }}
              onPress={() => {
                this.toggleModal(!this.state.modalVisible);
              }}>
            </Button> */}

          </View>
        </Modal >
        <Button
          color="#fe7013"
          title="Add Wishlist"
          onPress={() => { this.toggleModal(true) }}
        />
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
  // alert(JSON.stringify(state.wishlist))
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
