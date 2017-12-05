import healthStatNewActions from '../actions/healthStatNew';

const defaultState = {
  ageReduction: 0,
  nicotineAmount: 0,
  tarAmount: 0,
  cancerAmountChance: false,
}

function reducer(state=defaultState, action) {
  switch (action.type) {
    case healthStatNewActions.setHealthState().type:
      return action.state;
  }
  return state;
}

export default reducer;
