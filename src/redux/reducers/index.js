import { combineReducers } from 'redux';

import healthStatusReducer from './healthStatus';
import wislistReducer from './wishlist';
import recommendationItemsReducer from './recommendationItems';

export default combineReducers({
  healthStatus: healthStatusReducer,
  wishlist: wislistReducer,
  recommendationItems: recommendationItemsReducer,
  }
)
