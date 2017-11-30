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
                <Text>Item: </Text>
                <TextInput
                    name="itemInput"
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(e) => this.setState({textItem:e}) }
                />
                <Text>Price: </Text>
                <TextInput
                    name="priceInput"
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(e) => this.setState({textPrice:Number(e)})}
                />
                <Button
                    color="#841584"
                    title="Submit"
                    onPress={() => { this.submitInputWannaBuy()} }
                />
            </View>
        )
    }

    onChange(e) {
        console.log(e)
        alert(JSON.stringify(e))
    }

    submitInputWannaBuy () {
        let objInput = {
            item: this.state.textItem,
            price: this.state.textPrice
        }
        alert(JSON.stringify(objInput))
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        paddingTop: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default InputWantToBuy