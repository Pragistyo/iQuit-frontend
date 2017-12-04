import axios from 'axios';
import { AsyncStorage } from 'react-native';


const setName = (name) => {
  return {
    type: 'SET_NAME_REGISTER',
    state: {
      name,
    }
  }
}

const setAge = (age) => {
  return {
    type: 'SET_AGE_REGISTER',
    state: {
      age,
    }
  }
}

const setPricePerPack = (pricePerPack) => {
  return {
    type: 'SET_PRICE_PER_PACK',
    state: {
      pricePerPack,
    }
  }
}

const setCigarPerDay = (cigarPerDay) => {
  return {
    type: 'SET_CIGAR_PER_DAY',
    state: {
      cigarPerDay,
    }
  }
}

const setInterests = (interests) => {
  return {
    type: 'SET_INTERESTS',
    state: {
      interests,
    }
  }
}

const userData = (data={}) => {
  return {
    type: 'userData',
    state: data,
  }
}

const submitData = (registerData) => {
  return async (dispatch) => {
    const dataToBeSend = {
      name: registerData.name,
      username: registerData.name,
      password: 'nncrawler',
      age: registerData.age,
      price_per_pack: registerData.pricePerPack,
      interests: registerData.interests,
      price_per_cigarette: 300,
    }
    try {
      // alert('registerData raw'+ JSON.stringify(registerData))
      // alert('sent data to post' + JSON.stringify(dataToBeSend))
      const { data } = await axios.post('http://35.198.215.58/auth/register', dataToBeSend);
      dispatch(userData(data));
      // alert(JSON.stringify(data))
      await AsyncStorage.setItem('userId', data._id)
    } catch (e) {
      console.log('---------------000000000000000================-----------');
      console.log(e);
    }
  }
}

export default {
  setName,
  setAge,
  setPricePerPack,
  setCigarPerDay,
  setInterests,
  submitData,
  userData,
}