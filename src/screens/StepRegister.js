import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    ScrollView,
    Button,
    Modal
} from 'react-native';
import ViewPager from 'react-native-viewpager';
import StepIndicator from 'react-native-step-indicator';
const PAGES = ['STEP 1', 'STEP 2', 'STEP 3'];
// const PAGES = [1,2,3]

import PersonalInfo from '../components/PersonalInfo';
import AddictionLevel from '../components/AddictionLevel';
import Interests from '../components/Interests';


const firstIndicatorStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 40,
    separatorStrokeWidth: 3,
    currentStepStrokeWidth: 5,
    separatorFinishedColor: '#4aae4f',
    separatorUnFinishedColor: '#a4d4a5',
    stepIndicatorFinishedColor: '#4aae4f',
    stepIndicatorUnFinishedColor: '#a4d4a5',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 15,
    currentStepIndicatorLabelFontSize: 15,
    stepIndicatorLabelCurrentColor: '#000000',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
    labelColor: '#666666',
    labelSize: 12,
    currentStepLabelColor: '#4aae4f'
}

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

const thirdIndicatorStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#7eaec4',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#7eaec4',
    stepStrokeUnFinishedColor: '#dedede',
    separatorFinishedColor: '#7eaec4',
    separatorUnFinishedColor: '#dedede',
    stepIndicatorFinishedColor: '#7eaec4',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 0,
    currentStepIndicatorLabelFontSize: 0,
    stepIndicatorLabelCurrentColor: 'transparent',
    stepIndicatorLabelFinishedColor: 'transparent',
    stepIndicatorLabelUnFinishedColor: 'transparent',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#7eaec4'
}

export default class StepRegister extends Component {

    constructor(props) {
        super(props);
        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });
        this.state = {
            dataSource: dataSource.cloneWithPages(PAGES),
            currentPage: 0,
            color: 'darkgray'
        }
    }

    submitActions() {
        // const navigate = this.props.navigation.navigate
        // console.log(this.props.navigation.navigate)
        alert('submit Profile')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.judul}>
                    <Text>PLEASE COMPLETE YOUR REGISTRATION</Text>
                </View>
                <View style={styles.stepIndicator}>
                    <StepIndicator
                        stepCount={3}
                        customStyles={secondIndicatorStyles}
                        currentPosition={this.state.currentPage}
                        labels={["Profile Info", "Addiction Level", "Interests"]} />
                </View>

                <ViewPager
                    dataSource={this.state.dataSource}
                    renderPage={this.renderViewPagerPage}
                    onChangePage={(page) => { this.setState({ currentPage: page }) }}
                />
                <Button
                    title='PROFILE SUBMIT'
                    onPress={this.submitActions}
                />

            </View>
        );
    }

    renderViewPagerPage(data) {
        if (data === 'STEP 1') {
            return (<ScrollView style={{ flex: 1 }}>
                <View style={styles.page}>
                    <Text>{data}</Text>
                    <PersonalInfo />
                </View>
            </ScrollView>)
        } else if (data === 'STEP 2') {
            return (<ScrollView style={{ flex: 1 }}>
                <View style={styles.page}>
                    <Text>{data}</Text>
                    <AddictionLevel />
                </View>
            </ScrollView>)
        } else if (data === 'STEP 3') {
            return (<ScrollView style={{ flex: 1 }}>
                <View style={styles.page}>
                    <Text>{data}</Text>
                    <Interests />
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    judul: {
        alignItems: 'center',
        paddingTop: 50
    }
});