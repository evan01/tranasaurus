import { combineReducers } from 'redux';
import list from './login';

const rootReducer = combineReducers({
  list, // shorthand for lists: lists
});

export default rootReducer;
