import { combineReducers } from 'redux';

import auth                from './authReducers';
import profile             from './profileReducer';
import news                from './newsReducers';

const reducers = combineReducers({
    auth,
    profile,
    news
}); 

export default reducers;