import { combineReducers } from 'redux';

import healthStatusReducer from './healthStatus';
import wislistReducer from './wishlist';
import recommendationItemsReducer from './recommendationItems';
import registerReducer from './register';
import userReducer from './user';
import wantToBuyReducer from './wantToBuy';
import cigarPerDayReducer from './cigarPerDay';

import cigareteConsumptionReducer from './cigareteConsumption';
import healthStatNewReducer from './healthStatNew';

export default combineReducers({
  healthStatus: healthStatusReducer,
  wishlist: wislistReducer,
  recommendationItems: recommendationItemsReducer,
  register: registerReducer,
  user: userReducer,
  wantToBuy: wantToBuyReducer,
  cigarPerDay: cigarPerDayReducer,
  cigareteConsumption: cigareteConsumptionReducer,
  healthStatNew: healthStatNewReducer,
  }
)
