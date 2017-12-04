import { combineReducers } from 'redux';

import healthStatusReducer from './healthStatus';
import wislistReducer from './wishlist';
import recommendationItemsReducer from './recommendationItems';
import registerReducer from './register';
import userReducer from './user';

export default combineReducers({
  healthStatus: healthStatusReducer,
  wishlist: wislistReducer,
  recommendationItems: recommendationItemsReducer,
  register: registerReducer,
  user: userReducer,
  }
)
