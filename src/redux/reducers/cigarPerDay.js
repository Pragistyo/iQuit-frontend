import actions from '../actions/cigarPerDay';

function reducer(state=0, action) {
  switch (action.type) {
    case actions.setCigarConsumed().type:
      return action.state;
    default:
      return state;
  }
  return state;
}

export default reducer
