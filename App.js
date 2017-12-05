import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View, AsyncStorage} from 'react-native';
import { TabNavigator } from 'react-navigation';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';
import axios from 'axios';

import store from './src/redux/store';
import userActions from './src/redux/actions/user';
import cigarPerDayActions from './src/redux/actions/cigarPerDay';

import Home from './src/screens/Home';
import DiscussionBoard from './src/screens/DiscussionBoard';
import Register from './src/screens/Register';
import SplashScreen from './src/screens/SplashScreen';
// import DiscussionBoard from './src/screens/DiscussionBoard';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      regCheck: 'loading',
      userData: {},
    }
  }

  componentDidMount() {
    (async () => {
      AsyncStorage.removeItem('userId')
      const userId = await AsyncStorage.getItem('userId');
      store.dispatch(cigarPerDayActions.getCigarFromStorage())
      if(userId) {
        const userData = await axios.get(`http://35.198.215.58/users/${userId}`);
        store.dispatch(userActions.setUserData(userData.data))
        this.setState({
          regCheck: 'registered',
          userData: userData.data,
        })
      } else {
        this.setState({
          regCheck: 'notRegistered'
        })
      }
    })()
  }

  render() {
    if(this.state.regCheck === 'loading') {
      return (
        <SplashScreen/>
      )
    } else if (this.state.regCheck === 'registered') {
      return (
        <Provider store={store}>

          <ScrollableTabView
          tabBarPosition= 'bottom'
          tabBarActiveTextColor= '#fe7013'>
            <Home userData={this.state.userData} tabLabel="Dashboard"/>
            <DiscussionBoard tabLabel="Discussion Board"/>
          </ScrollableTabView>

        </Provider>
      );
    } else if (this.state.regCheck === 'notRegistered') {
      return (
        <Provider store={store}>
          <Register activateSwitchScreen={() => {this.setState({activated: true})}}/>
        </Provider>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
