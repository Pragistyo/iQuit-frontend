import axios from 'axios';

function fetchData(cigarAmount) {
  return async (dispatch) => {
    // dispatch(setData({
    //     ageReduction: 123,
    //     nicotineAmount: 123,
    //     tarAmount: 123,
    //     increasedCancerChance: false,
    //   }))
    try {
      // const response = await axios.get(`http://35.198.215.58/health-stat/12`)
      const { data } = await axios.get(`http://35.198.215.58/health-stat/${cigarAmount}`);

      dispatch(setData(data));

    } catch (e) {
      dispatch({type: 'SET_DATA', state:{asdasdasd: JSON.stringify(e), err: true}});
    }

  };
}

function setData(healthStats){
  const result = {
    // state: {
    //   ageReduction: healthStats.ageReduction,
    //   nicotineAmount: healthStats.nicotineAmount,
    //   tarAmount: healthStats.tarAmount,
    //   increasedCancerChance: healthStats.increasedCancerChance},
    state: healthStats,
    type: 'SET_DATA',
  }
  return result;
}

export default {
  setData,
  fetchData
}
