import actions from '../actions/wantToBuy';

const defaultState = {
  itemId: '',
  name: '',
  userId: '',
  price: 0,
  thumbnail: '',
  couldBuy: Date(),
  createdAt: Date(),
}

function reducer(state=defaultState, action) {
  switch (action.type) {
    case actions.setWantToBuy().type:
      return Object.assign({}, state, action.state);
    default:
      return  state;
    return state;
  }
}

export default reducer;
