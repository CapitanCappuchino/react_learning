import { combineReducers } from 'redux';

import auth                from './authReducers';
import profile             from './profileReducer';

const reducers = combineReducers({
    auth,
    profile
}); 

export default reducers;