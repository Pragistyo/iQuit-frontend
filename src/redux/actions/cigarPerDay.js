import { AsyncStorage } from 'react-native';

function getCigarFromStorage() {
  return async (dispatch) => {
    // await AsyncStorage.setItem('cigarConsumed', '0');
    const cigarConsumed = await AsyncStorage.getItem('cigarConsumed');
    dispatch(setCigarConsumed(cigarConsumed));
  };
}

function consumeOneCigar(currentCigar) {
  return async (dispatch) => {
    try {
      await AsyncStorage.setItem('cigarConsumed', (currentCigar+1).toString());
      dispatch(setCigarConsumed(currentCigar+1));
    } catch (e) {
      alert(e)
    } finally {

    }
  };
}

function setCigarConsumed(cigarConsumed) {
  return {
    type: 'SET_CIGAR_CONSUMED',
    state: cigarConsumed,
  };
}

export default {
  getCigarFromStorage,
  setCigarConsumed,
  consumeOneCigar,
};
