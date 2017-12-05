import { AsyncStorage } from 'react-native';

import healthStatusActions from './healthStatus';
import userActions from './user';

function getCigarFromStorage() {
  return async (dispatch) => {
    // await AsyncStorage.setItem('cigarConsumed', '0');
    const cigarConsumed = await AsyncStorage.getItem('cigarConsumed');
    dispatch(setCigarConsumed(cigarConsumed));
  };
}

function consumeOneCigar(currentCigar, user) {
  return async (dispatch) => {
    try {
      const sumCigar = currentCigar+1;
      await AsyncStorage.setItem('cigarConsumed', (sumCigar).toString());
      dispatch(setCigarConsumed(sumCigar));
      dispatch(healthStatusActions.fetchData(sumCigar))

      const dataSent = {
        name: user.name,
        _id: user.userId,
        age: user.age,
        price_per_cigarette: user.pricePerCig,
        money_saved: user.moneySaved,
        interests: user.interests
      }

      dispatch(userActions.updateUserData(Object.assign({}, dataSent, {money_saved: user.moneySaved - sumCigar * user.pricePerCig})))
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
