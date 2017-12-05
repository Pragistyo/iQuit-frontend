import axios from 'axios';
import { AsyncStorage } from 'react-native';

function fetchUserData() {
  return async (dispatch) => {
    const id = await AsyncStorage.getItem('userId');
    const response = await axios.get(`http://35.198.215.58/users/${id}`)
    dispatch(setUserData(response.data))
  }
}

function setUserData(userData={}) {
  const resState = {};
  userData.hasOwnProperty('name') && (resState.name = userData.name);
  userData.hasOwnProperty('userId') && (resState.userId = userData._id);
  userData.hasOwnProperty('age') && (resState.age = userData.age);
  userData.hasOwnProperty('pricePerCig') && (resState.pricePerCig = userData.price_per_cigarette);
  userData.hasOwnProperty('moneySaved') && (resState.moneySaved = userData.money_saved);
  userData.hasOwnProperty('interests') && (resState.interests = userData.interests)

  return {
    type: "SET_USER_DATA",
    state: resState,
  };
}

export default {
  setUserData,
  fetchUserData,
}
