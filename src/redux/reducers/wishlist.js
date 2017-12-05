import actions from '../actions/wishlist';

const wishlist = (state=[], action) => {
  switch (action.type) {
    case 'FETCH_WISLIST':
      return state;
    case 'SET_WISHLIST':
      return action.state;
    case 'PUSH_WISHLIST':
      return state.slice(0, state.length) + action.state;
    case 'ADD_WISHLIST':
      return state;
    case 'INIT_WISHLIST':
      return action.state;
    default:
      return state;
  }
}

export default wishlist;
