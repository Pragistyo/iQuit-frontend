import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button
} from 'react-native';
import {
    Card,
    FormLabel,
    // FormInput,
    // // Button
} from 'react-native-elements';
import { connect } from 'react-redux';

import wishlistActions from '../redux/actions/wishlist';

class InputWantToBuy extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textItem : null,
            textPrice: 0,
            thumbnail: ''
        }
        this.submitInputWannaBuy = this.submitInputWannaBuy.bind(this);
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={{ alignItems: 'center'}}>
                    <FormLabel>  Item: </FormLabel>
                    <TextInput
                        name="itemInput"
                        placeholder="  Please Input Your Desired Item"
                        style={{ width:300,height: 40, borderColor: 'orange', borderWidth: 1}}
                        onChangeText={(e) => this.setState({textItem:e}) }
                    />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <FormLabel>  Price: </FormLabel>
                    <TextInput
                        name="priceInput"
                        placeholder="  Please Input The price of the Item"
                        style={{ width: 300, height: 40, borderColor: 'orange', borderWidth: 1 }}
                        onChangeText={(e) => this.setState({textPrice:Number(e)})}
                    />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <FormLabel>  Image URL: </FormLabel>
                    <TextInput
                        name="linkInput"
                        placeholder="  Input picture url of your wished item"
                        style={{ width: 300, height: 40, borderColor: 'orange', borderWidth: 1 }}
                        onChangeText={(e) => this.setState({thumbnail:e})}
                    />
                </View>
                <View style={{ alignItems: 'center', paddingTop:20}}>
                    <Button
                        style={{ paddingLeft: 50, alignItems: 'center', width: 20 }}
                        color="darkgray"
                        title="Cancel"
                        onPress={this.props.toggleWantToBuy}
                    />
                    <Button
                        style={{ paddingLeft:50,alignItems: 'center', width: 20}}
                        color="#fe7013"
                        title="Add Own WishList"
                        onPress={() => { 
                            this.submitInputWannaBuy();
                            this.props.toggleWantToBuy();
                        } }
                    />
                </View>
            </View>
        )
    }

    // onChange(e) {
    //     console.log(e)
    //     alert(JSON.stringify(e))
    // }

    submitInputWannaBuy () {
        // alert(this.props.userId)
        let objInput = {
            item: this.state.textItem,
            price: this.state.textPrice
        }
        if (!objInput.price){
            alert('Please input "PRICE" with number')
            // alert(JSON.stringify(objInput))
        } else if (!objInput.item) {
            alert('Please input your Desired Item')
        }else{
            this.props.submitWishlist(this.props.userId, this.state.textItem, parseInt(this.state.textPrice), this.state.thumbnail)
            // alert(this.props.userId)
        }
        //
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: '#fff',
    },
});

function mapStateToProps(state) {
  return {
    userId: state.user.userId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    submitWishlist: (userId, name, price, thumbnail) => {
      const dataSent = {
        name: name,
        user_id: userId,
        price: price,
        thumbnail: thumbnail,
      }
      dispatch(wishlistActions.addWishlist(dataSent))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InputWantToBuy)
