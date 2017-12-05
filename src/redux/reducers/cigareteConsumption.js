import cigareteConsumptionActions from '../actions/cigareteConsumption';

function reducer(state=0, action) {
  switch (action.type) {
    case cigareteConsumptionActions.consumeOne().type:
      return state + 1;
    default:
      return state;
  }
  return state;
}

export default reducer;
