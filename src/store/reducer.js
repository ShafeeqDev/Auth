import authReducer from '../store/Reducer/authReducer';
import { combineReducers } from 'redux';
export default combineReducers({
    // ## Generator Reducers
    auth: authReducer,

  });
  