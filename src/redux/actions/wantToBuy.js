import axios from 'axios';

const fetchWantToBuy = (userId) => {
  return async (dispatch) => {
    const fetchResult = await axios.get(`http://35.198.215.58/wishlist/user/${userId}`);
    dispatch(setWantToBuy(fetchResult.data));
  };
}

const setWantToBuy = (payload=[]) => {
  const state = []
  payload.map( (item) => {
    const tempState = {}
    item.hasOwnProperty(_id) && (tempState.itemId= item._id)
    item.hasOwnProperty(name) && (tempState.name= item.name)
    item.hasOwnProperty(user_id) && (tempState.userId= item.user_id)
    item.hasOwnProperty(price) && (tempState.price= item.price)
    item.hasOwnProperty(thumbnail) && (tempState.thumbnail= item.thumbnail)
    item.hasOwnProperty(could_buy) && (tempState.couldBuy= item.could_buy)
    item.hasOwnProperty(created_at) && (tempState.createdAt= item.created_at)
    state.push(tempState);
  } )

return {
    type: 'SET_WANT_TO_BUY',
    state,
  };
}

export default {
  setWantToBuy,
  fetchWantToBuy,
}
