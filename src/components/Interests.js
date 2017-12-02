import React, { Component } from 'react';

// REACT-REDUX
// import {connect} from 'react-redux';
// import {} from '.../actions'

import {
  StyleSheet,
  View,
  Text,
  Picker,
  Modal,
  Button,
  TouchableHighlight
} from 'react-native';
import {
  Card,
  FormLabel,
  FormInput,
  // Button,
  CheckBox
 } from 'react-native-elements';



class Interests extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category :[
        {name:"Personal",status:false}, 
        {name:"Family",status:false}, 
        {name:"Hobby",status:false}, 
        {name:"Charity",status:false}
      ],
      modalVisible: false,
      checked:false
    }
  }
  toggleModal(visible) {
    this.setState({ modalVisible: visible });
  }

  CheckBox(index){
    item = Object.assign({}, this.state.category[index], { status: !this.state.category[index].status });    
    this.state.category[index] = item
    this.setState({
      category: this.state.category
    })
  }

  render() {
    // var data = [["C", "Java", "JavaScript"], ["Python", "Ruby"], ["Swift", "Objective-C"]];
    // var langeuageData = ["Personal", "Family", "Hobby", "Charity"]

    return(
      <Card>
        {/* <Text>
          Choose several category that pick your interest
        </Text> */}
        {/* <View>
          {this.state.category.map((dataItem, index) => {
            return (
              <CheckBox 
              center
              key={index} 
              onPress={this.CheckBox.bind(this, index)}
              title={dataItem.name}
              checked={dataItem.status}
              value={dataItem.name} />
            )
          })}
        </View> */}
        <Modal animationType={"slide"} transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => { console.log("Modal has been closed.") }}>
          <View>
            <View style={{ alignItems: 'center' }}>
              <Text >SELECT YOUR INTEREST : </Text>
            </View>
            {this.state.category.map((dataItem, index) => {
              return (
                <CheckBox
                  center
                  key={index}
                  onPress={this.CheckBox.bind(this, index)}
                  title={dataItem.name}
                  checked={dataItem.status}
                  value={dataItem.name} />
              )
            })}
            <TouchableHighlight 
              style={{ alignItems: 'center' }}
            onPress={() => {
              this.toggleModal(!this.state.modalVisible)
            }}>
              <Text>
              SUBMIT
              </Text>
            </TouchableHighlight>

          </View>
        </Modal >

        <Button 
          title='Choose several category that pick your interest'
        onPress={() => { this.toggleModal(true) }}/>
        
        {/* <Picker
          selectedValue={this.state.language}
          onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
          {langeuageData.map((dataItem,index) => {
            return(
              <Picker.Item key={index} label={dataItem} value={dataItem} />
            )
          })}
        </Picker> */}

      </Card>
    )
  }
}

// const mapState = (state) => {
//   return {
//     bla: state.bla
//   }
// }

// const mapActions = (dispatch) => {
//   return {
//     bla: (params) => dispatch(bla(params))
//   }
// }

// const connectedComponent = connect(
//   mapState,
//   mapActions
// )(Interests)


// export default connectedComponent

export default Interests;

{/* <Modal animationType={"slide"} transparent={false}
  visible={this.state.modalVisible}
  onRequestClose={() => { console.log("Modal has been closed.") }}>
  <View>
    {this.state.category.map((dataItem, index) => {
      return (
        <CheckBox
          center
          key={index}
          onPress={this.CheckBox.bind(this, index)}
          title={dataItem.name}
          checked={dataItem.status}
          value={dataItem.name} />
      )
    })}
    <TouchableHighlight onPress={() => {
      this.toggleModal(!this.state.modalVisible)
    }}>
      <Text >Close Modal</Text>
    </TouchableHighlight>

  </View>
</Modal >

  <TouchableHighlight onPress={() => { this.toggleModal(true) }}>
    <Text>Open Modal</Text>
  </TouchableHighlight > */}