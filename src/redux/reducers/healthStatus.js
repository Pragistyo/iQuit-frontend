import actions from '../actions/healthStatus';

const defaultState = {
    ageReduction: 0,
    nicotineAmount: 0,
    tarAmount: 0,
    increasedCancerChance: false,
  }

function reducers(state=defaultState, action) {
  switch (action.type) {
    case "SET_DATA":
      // return {ini: 'ini'}
      return Object.assign({}, state, action.state) 
    default:
      return state;
  }
}

export default reducers;
