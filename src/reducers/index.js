import { combineReducers } from 'redux';
import usersReducer from '../actions/type';

const rootReducer = combineReducers({
  users: usersReducer
});

export default rootReducer;
