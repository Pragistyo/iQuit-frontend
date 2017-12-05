import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    ScrollView,
    Button,
    Modal,
    KeyboardAvoidingView,
    AsyncStorage,
} from 'react-native';
import ViewPager from 'react-native-viewpager';
import StepIndicator from 'react-native-step-indicator';
const PAGES = ['STEP 1', 'STEP 2', 'STEP 3', 'STEP 4', 'STEP 5'];
import { connect } from 'react-redux';

// components
import PersonalInfo from '../components/PersonalInfo';
import AddictionLevel from '../components/AddictionLevel';
import Interests from '../components/Interests';

// actions
import registerActions from '../redux/actions/register';

const secondIndicatorStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 5,
    stepStrokeCurrentColor: '#fe7013',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#fe7013'
}

class StepRegister extends Component {

    constructor(props) {
        super(props);
        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });
        this.state = {
            dataSource: dataSource.cloneWithPages(PAGES),
            currentPage: 0,
            buttonProfileFlag: false
        }
        this.buttonRender = this.buttonRender.bind(this);
        this.onFinishPress = this.onFinishPress.bind(this);
    }

    onFinishPress () {
        // const navigate = this.props.navigation.navigate
        // console.log(this.props.navigation.navigate)
        // alert('submit Profile')
        (async () => {
          try {
            await this.props.submitData(this.props.registerData);
            await AsyncStorage.setItem('averagePerDay', (this.props.registerData.cigarPerDay).toString())
            await AsyncStorage.setItem('cigarPerDay', '0')
            console.log(this.props.allState);
            this.props.activateSwitchScreen();
          } catch (e) {
            alert(e)
          }
        })()
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.stepIndicator}>
                    <StepIndicator
                        stepCount={5}
                        customStyles={secondIndicatorStyles}
                        currentPosition={this.state.currentPage}
                        labels={["Welcome !", "Profile Info", "Addiction Level", "Interests", "Complete Registration"]} />
                </View>

                <ViewPager
                    dataSource={this.state.dataSource}
                    renderPage={this.renderViewPagerPage}
                    onChangePage={(page) => { this.setState({ currentPage: page }) }}
                />
                {this.buttonRender.call(this)}

            </View>
        );
    }

    buttonRender() {
        if (!this.state.buttonProfileFlag){
            return (
                <Button
                    title='PROFILE SUBMIT'
                    color='#fe7013'

                    onPress={this.onFinishPress}
                />
            )
        } else {
            return(
                <Button
                    title='PROFILE SUBMIT'
                    color='#fe7013'
                    onPress={this.onFinishPress}
                />
            )
        }
    }

    renderViewPagerPage(data) {
        if (data === 'STEP 1') {
            return (<ScrollView style={{ flex: 1 }}>
                <View style={styles.page}>
                    <View style={{paddingTop:50, alignItems:'center'}}>
                        <Text style={{fontSize:28}}>Hi, Welcome To iQuit !</Text>
                        <Text syle={{fontSize:28}}> We're gonna help you decrease your smoke addition ! </Text>
                        {/* <Text syle={{fontSize:42}}> Please Swipe, and Complete REGISTRATION</Text> */}
                    </View>
                </View>
            </ScrollView>)
        } else if (data === 'STEP 2') {
            return (<ScrollView style={{ flex: 1 }}>
                <View style={{paddingTop:50, flex:1, justifyContent:'center', alignItems:'center'}}>
                    <KeyboardAvoidingView
                        style={{}}
                        behavior="position"
                    >
                        <View style={{}}>
                            <Text style={styles.headerStyling}>
                                We need Your Personal Information
                            </Text>
                        </View>
                        <PersonalInfo />
                        <View style={{ height: 30 }} />
                    </KeyboardAvoidingView>
                </View>
            </ScrollView>)
        } else if (data === 'STEP 3') {
            return (<ScrollView style={{ flex: 1 }}>
                <View style={styles.page}>
                    <KeyboardAvoidingView
                        style={{}}
                        behavior="position"
                    >
                        <View style={{}}>
                            <Text style={styles.headerStyling}>
                                Tell us about your smoke addiciton:
                            </Text>
                        </View>
                        <AddictionLevel/>
                        <View style={{ height: 30 }} />
                    </KeyboardAvoidingView>
                </View>
            </ScrollView>)
        } else if (data === 'STEP 4') {
            return (<ScrollView style={{ flex: 1 }}>
                <View style={styles.page}>
                    {/* <Text>{data}</Text> */}
                    <Text>Pick Your Kind Of Interest: </Text>
                    <View style={{ paddingTop: 70, alignItems: 'center' }}>
                        <Interests />
                    </View>
                </View>
            </ScrollView>)
        } else if (data === 'STEP 5') {
            return (<ScrollView style={{ flex: 1 }}>
                <View style={{paddingTop:2, flex:1, justifyContent: 'center', alignItems:'center'}}>
                <Text>{data}</Text>
                </View>
            </ScrollView>)
        }
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    stepIndicator: {
        marginVertical: 50,
    },
    page: {
        paddingTop: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    judul: {
        alignItems: 'center',
        paddingTop: 50
    },
    headerStyling: {
        fontFamily: "sans-serif-light",
        fontSize: 20,
    }
});

function mapStateToProps(state, props) {
  return {
    registerData: state.register,
    allState: state,
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    submitData: (registerData) => {
      const data = {
        name: registerData.name,
        username: registerData.name,
        age: registerData.age,
        pricePerPack: registerData.pricePerPack,
        interests: registerData.interests.map((item) => { return item.name })

      }
      dispatch(registerActions.submitData(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StepRegister)
