import actions from '../actions/wishlist';

const wishlist = (state=[], action) => {
  switch (action.type) {
    case 'FETCH_WISLIST':
      return state;
    case 'SET_WISHLIST':
      return action.state;
    case 'PUSH_WISHLIST':
      // alert(JSON.stringify(action.state) + ' ======== REDUCER')
      // alert(JSON.stringify([...state, action.state]) + ' ======== REDUCER AWAL')
      // return (state.slice(0, state.length) + action.state);
      let newState = state.concat(action.state)
      // alert(JSON.stringify(newState))
      return newState
      // return state
    case 'ADD_WISHLIST':
      return state;
    case 'INIT_WISHLIST':
      return action.state;
    default:
      return state;
  }
}

export default wishlist;
