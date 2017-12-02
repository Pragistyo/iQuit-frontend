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
    // FormLabel,
    // FormInput,
    // // Button
} from 'react-native-elements';

class InputWantToBuy extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textItem : 'things that you want to buy miserely',
            textPrice: 0
        }
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={{ alignItems: 'center'}}>
                    <Text>  Item: </Text>
                    <TextInput
                        name="itemInput"
                        style={{ width:300,height: 40, borderColor: 'orange', borderWidth: 1}}
                        onChangeText={(e) => this.setState({textItem:e}) }
                    />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text>  Price: </Text>
                    <TextInput
                        name="priceInput"
                        style={{ width: 300, height: 40, borderColor: 'orange', borderWidth: 1 }}
                        onChangeText={(e) => this.setState({textPrice:Number(e)})}
                    />
                </View>
                <View style={{ alignItems: 'center', paddingTop:20}}>
                    <Button
                        style={{ paddingLeft:50,alignItems: 'center', width: 20}}
                        color="#841584"
                        title="Submit"
                        onPress={() => { this.submitInputWannaBuy()} }
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
        let objInput = {
            item: this.state.textItem,
            price: this.state.textPrice
        }
        if (!objInput.price){
            alert('Please input "PRICE" with number')
        }else{
            alert(JSON.stringify(objInput))
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: '#fff',
    },
});

export default InputWantToBuy