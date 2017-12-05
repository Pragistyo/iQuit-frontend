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
} from 'react-native-elements';

class InputWantToBuy extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textItem : null,
            textPrice: null,
            numericPrice: 0
        }
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={{ alignItems: 'center'}}>
                    <FormLabel style={{color:'black'}}>  Your WishList Item: </FormLabel>
                    <TextInput
                        name="itemInput"
                        style={{ width:300,height: 40, borderColor: 'orange', borderWidth: 1}}
                        placeholder=' Things that you want to buy miserely'
                        onChangeText={(e) => this.setState({textItem:e}) }
                    />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <FormLabel style={{ color: 'black' }}>  Price: </FormLabel>
                    <TextInput
                        name="priceInput"
                        style={{ width: 300, height: 40, borderColor: 'orange', borderWidth: 1 }}
                        placeholder=' Your Item Price'
                        value={this.state.textPrice}
                        // onChangeText={(e) => this.setState({textPrice:Number(e)})}
                        onChangeText={this.onChangePrice.bind(this)}
                    />
                </View>
                <View style={{ alignItems: 'center', paddingTop:20}}>
                    <Button
                        style={{ paddingLeft:50,alignItems: 'center', width: 20}}
                        color="#fe7013"
                        title="Add To Whishlist"
                        onPress={(e)=>{this.submitInputWannaBuy(e)}}
                    />
                </View>
                <View style={{ height: 100 }} />
            </View>
        )
    }

    onChangePrice(e) {
        // var textPrice = e.split(/(?=(?:\d{3})+(?:\.|$))/g).join(",")
        var textPrice = e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "/");
        this.setState({
            textPrice:textPrice
        })
        // alert(JSON.stringify(e))
        // alert(textPrice)
    }

    submitInputWannaBuy () {
        let objInput = {
            item: this.state.textItem,
            price: this.state.textPrice
        }
        if (!objInput.item) {
            alert('Please input your wishlist "ITEM"')
        }else if (!objInput.price){
            alert('Please input "PRICE" with number')
        }else{
            alert(JSON.stringify(objInput))
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: '#fff',
    },
});

export default InputWantToBuy