import axios from 'axios';

const defaultState = {
  ageReduction: 0,
  nicotineAmount: 0,
  tarAmount: 0,
  increasedCancerChance: false,
}

function fetchHealthStat(cigareteConsumption) {
  return async (dispatch) => {
    const response = await axios.get(`http://35.198.215.58/health-stat/${cigareteConsumption}`);
    dispatch(setHealthState(response.data));
  }
}

function setHealthState(state=defaultState) {
  // console.log(state);
  return {
    type: 'SET_HEALTH_STAT',
    state: state
  }
}

export default {
  fetchHealthStat,
  setHealthState,
};
