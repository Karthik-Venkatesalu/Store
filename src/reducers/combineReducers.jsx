import { combineReducers } from 'redux';
import { reducer as sharedReducer } from '../shared/reducer';

export const rootReducer = combineReducers({
    sharedReducer
});