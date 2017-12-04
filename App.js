import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View, AsyncStorage} from 'react-native';
import { TabNavigator } from 'react-navigation';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';

import store from './src/redux/store';
import Home from './src/screens/Home';
import DiscussionBoard from './src/screens/MessageBoard';
import Register from './src/screens/Register';
// import DiscussionBoard from './src/screens/DiscussionBoard';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      regCheck: 'loading'
    }
  }

  componentDidMount() {
    (async () => {
      const userData = await AsyncStorage.getItem('userData');
      if(userData) {
        this.setState({
          regCheck: 'registered'
        })
      } else {
        this.setState({
          regCheck: 'notRegistered'
        })
      }
    })()
  }

  render() {
    const route = TabNavigator({
      Home: {
        screen: Home
      }
    })
    if(this.state.regCheck === 'loading') {
      return (<View/>)
    } else if (this.state.regCheck === 'registered') {
      return (
        <Provider store={store}>

          <ScrollableTabView>
            <Home tabLabel="Dashboard"/>
            <DiscussionBoard tabLabel="Discussion Board"/>
          </ScrollableTabView>

        </Provider>
      );
    } else if (this.state.regCheck === 'notRegistered') {
      return (
        <Provider store={store}>
          <Register/>
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
