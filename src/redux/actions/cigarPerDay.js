import { AsyncStorage } from 'react-native';

import healthStatusActions from './healthStatus';

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
      const sumCigar = currentCigar+1;
      await AsyncStorage.setItem('cigarConsumed', (sumCigar).toString());
      dispatch(setCigarConsumed(sumCigar));
      dispatch(healthStatusActions.fetchData(sum))
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
