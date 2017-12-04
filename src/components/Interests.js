import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  Picker,
  Modal,
  Button,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import {
  Card,
  FormLabel,
  FormInput,
  // Button,
  CheckBox
 } from 'react-native-elements';

import registerActions from '../redux/actions/register';

class Interests extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category :[
        { id: '1334134',
          status: false,
          name: 'Arts, Crafts & Sewing' },
        { id: '91083',
          status: false,
          name: 'Auto & Tires' },
        { id: '5427',
          status: false,
          name: 'Baby' },
        { id: '1085666',
          status: false,
          name: 'Beauty' },
        { id: '3920',
          status: false,
          name: 'Books' },
        { id: '1105910',
          status: false,
          name: 'Cell Phones' },
        { id: '5438',
          status: false,
          name: 'Clothing' },
        { id: '3944',
          status: false,
          name: 'Electronics' },
        { id: '976759',
          status: false,
          name: 'Food' },
        { id: '1094765',
          status: false,
          name: 'Gifts & Registry' },
        { id: '976760',
          status: false,
          name: 'Health' },
        { id: '4044',
          status: false,
          name: 'Home' },
        { id: '1072864',
          status: false,
          name: 'Home Improvement' },
        { id: '1115193',
          status: false,
          name: 'Household Essentials' },
        { id: '6197502',
          status: false,
          name: 'Industrial & Scientific' },
        { id: '3891',
          status: false,
          name: 'Jewelry' },
        { id: '4096',
          status: false,
          name: 'Movies & TV' },
        { id: '4104',
          status: false,
          name: 'Music on CD or Vinyl' },
        { id: '7796869',
          status: false,
          name: 'Musical Instruments' },
        { id: '1229749',
          status: false,
          name: 'Office' },
        { id: '2637',
          status: false,
          name: 'Party & Occasions' },
        { id: '5428',
          status: false,
          name: 'Patio & Garden' },
        { id: '1005862',
          status: false,
          name: 'Personal Care' },
        { id: '5440',
          status: false,
          name: 'Pets' },
        { id: '5426',
          status: false,
          name: 'Photo Center' },
        { id: '1085632',
          status: false,
          name: 'Seasonal' },
        { id: '6163033',
          status: false,
          name: 'Services' },
        { id: '4125',
          status: false,
          name: 'Sports & Outdoors' },
        { id: '4171',
          status: false,
          name: 'Toys' },
        { id: '2636',
          status: false,
          name: 'Video Games' },
        // {name:"Arts, Crafts & Sewing",status:false},
        // {name:"Family",status:false},
        // {name:"Hobby",status:false},
        // {name:"Charity",status:false}
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
      <View
      style={{ padding: 4 }}
      >
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
          <View style={{ flex: 1 }}>
            <View style={{ alignItems: 'center' }}>
              <Text >SELECT YOUR INTEREST :</Text>
            </View>
            <ScrollView>
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
            </ScrollView>
            <TouchableHighlight
              style={{ alignItems: 'center' }}
            onPress={() => {
              this.toggleModal(!this.state.modalVisible);
              // alert(JSON.stringify(this.state.category))
              this.props.setInterests(this.state.category.filter((cat) => {
                if(cat.status) return cat
              }))
            }}>
              <Text>
              SUBMIT
              </Text>
            </TouchableHighlight>

          </View>
        </Modal >

        <Button
          color="#e3871fff"
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
      </View>
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

function mapStateToProps(state, props) {
  return {
    interests: state.register.interests,
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    setInterests: (interests) => {
      dispatch(registerActions.setInterests(interests))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Interests);
