import { combineReducers } from 'redux';

import healthStatusReducer from './healthStatus';
import wislistReducer from './wishlist';

export default combineReducers({
  healthStatus: healthStatusReducer,
  wishlist: wislistReducer,
  }
)
