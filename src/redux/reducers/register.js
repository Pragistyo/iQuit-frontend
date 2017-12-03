import actions from '../actions/register';

const defaultState = {
  name: '',
  age: 0,
  pricePerPack: 0,
  cigarPerDay: 0,
  interests: [],
}

function reducer(state=defaultState, action) {
  switch (action.type) {
    case actions.setName().type:
      return Object.assign({}, state, action.state);

    case actions.setAge().type:
      return Object.assign({}, state, action.state);

    case actions.setPricePerPack().type:
      return Object.assign({}, state, action.state);

    case actions.setCigarPerDay().type:
      return Object.assign({}, state, action.state);

    case actions.setInterests().type:
      return Object.assign({}, state, action.state);

    default:
      return state;
  }
}

export default reducer;
