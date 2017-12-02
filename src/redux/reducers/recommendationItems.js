import actions from '../actions/recommendationItems';

const recommendationItems = (state=[], action) => {
  switch (action.type) {
    case 'SET_RECOMMENDATION':
      return action.state;
    default:
      return state;
  }
}

export default recommendationItems;
