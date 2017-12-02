import { combineReducers } from 'redux';
import healthStatusReducer from './healthStatus';

export default combineReducers({
  healthStatus: healthStatusReducer,
  }
)
