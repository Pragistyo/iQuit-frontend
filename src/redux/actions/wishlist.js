import axios from 'axios';

const addWishlist = (payload) => {
  const dataSent = {
    name: payload.name,
    user_id: payload.user_id,
    price: payload.price,
    thumbnail: payload.thumbnail,
  }
  alert(JSON.stringify(dataSent))
  // return async (dispatch) => {
    // const { data } = await axios.post('http://35.198.215.58/wishlist', dataSent);
    // const wishlistAdded = data;
    // console.log('payload');
    // dispatch(pushWishlistState(wishlistAdded));
  // }
}

const pushWishlistState = (payload) => {
  return {
    type: 'PUSH_WISHLIST',
    state: [{
      name: payload.name,
      user_id: payload.user_id,
      price: payload.price,
      thumbnail: payload.thumbnail,
    }]
  };
}

const setWishlistState = (payload) => {
  return {
    type: 'SET_WISHLIST',
    state: payload,
  };
}

const fetchWishlist = (user_id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`http://35.198.215.58/wishlist/user/${user_id}`);
    const wishlists = data;
    dispatch(setWishlistState(wishlists));
  };
}

const initWishlist = () => {
  return {
    type: 'INIT_WISHLIST',
    state: [],
  };
}

export default {
  addWishlist,
  pushWishlistState,
  setWishlistState,
  fetchWishlist,
  initWishlist,
}
