import actions from '../actions/user';

const defaultState = {
  name: '',
  userId: '',
  age: 0,
  pricePerCig: 0,
  moneySaved: 0
}

function reducer(state=defaultState, action) {
  switch (action.type) {
    case actions.setUserData().type:
      return Object.assign({}, state, action.state);
    default:
      return state;
  }
}

export default reducer;
