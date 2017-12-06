import axios from 'axios';
import { AsyncStorage } from 'react-native';

function fetchUserData() {
  return async (dispatch) => {
    const id = await AsyncStorage.getItem('userId');
    // alert(id)
    const response = await axios.get(`http://35.198.215.58/users/${id}`)
    // alert(JSON.stringify(response.data))
    dispatch(setUserData(response.data))
  }
}

function updateUserData(userData = {}) {
  return async (dispatch) => {
    try {
      const response = await axios.put(`http://35.198.215.58/users/${userData._id}`, userData);
      // alert(JSON.stringify(response.data))
      dispatch(setUserData(response.data))
    } catch (e) {
      alert(e)
    }

  };
}

function setUserData(userData = {}) {
  const resState = {};
  userData.hasOwnProperty('name') && (resState.name = userData.name);
  userData.hasOwnProperty('_id') && (resState.userId = userData._id);
  userData.hasOwnProperty('age') && (resState.age = userData.age);
  userData.hasOwnProperty('price_per_cigarette') && (resState.pricePerCig = userData.price_per_cigarette);
  userData.hasOwnProperty('price_per_pack') && (resState.pricePerPack = userData.price_per_pack);
  userData.hasOwnProperty('money_saved') && (resState.moneySaved = userData.money_saved);
  userData.hasOwnProperty('interests') && (resState.interests = userData.interests)

  return {
    type: "SET_USER_DATA",
    state: resState,
  };
}

function reduceMoney() {
  return {
    type: "REDUCE_MONEY"
  }
}

export default {
  setUserData,
  fetchUserData,
  updateUserData,
  reduceMoney
}