import { combineReducers } from 'redux';

import { login } from './authReducers';

const reducers = combineReducers({
    login
}); 

export default reducers;