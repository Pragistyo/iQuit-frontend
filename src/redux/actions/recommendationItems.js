import axios from 'axios';

const getRecommendationsByCategory = (payload) => {
  return async (dispatch) => {
    let recommendations = []
    try {
      const response = await axios.get(`http://35.198.215.58/recommendations?category=${payload.category_id}&price=${payload.price}`);
      recommendations = response.data;
    } catch (e) {
      recommendations = [];
    }
    dispatch(setRecommendationsState(recommendations));
  }
}

const setRecommendationsState = (recommendations=[]) => {
  return {
    type: 'SET_RECOMMENDATION',
    state: recommendations,
  };
}

export default {
  getRecommendationsByCategory,
  setRecommendationsState,
}
